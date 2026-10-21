import { useEffect, useRef } from 'react';

const TargetCursor = ({ cursorColor = '#1E293B', cursorColorOnTarget = '#8B5CF6', targetSelector = 'a, button' }) => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }

      if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(targetSelector)) {
        if (cursor) cursor.style.borderColor = cursorColorOnTarget;
        if (cursorDot) cursorDot.style.backgroundColor = cursorColorOnTarget;
      }
    };

    const handleMouseOut = () => {
      if (cursor) cursor.style.borderColor = cursorColor;
      if (cursorDot) cursorDot.style.backgroundColor = cursorColor;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorColor, cursorColorOnTarget, targetSelector]);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden lg:block fixed pointer-events-none w-8 h-8 border-2 rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-multiply"
        style={{ borderColor: cursorColor }}
      />
      <div
        ref={cursorDotRef}
        className="hidden lg:block fixed pointer-events-none w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999]"
        style={{ backgroundColor: cursorColor }}
      />
    </>
  );
};

export default TargetCursor;
