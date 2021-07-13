import * as React from 'react';
import clsx from 'clsx';

import style from './index.module.less';

export interface H5PreviewerProps {
  perspective?: string;
  wrapperClassName?: string;
  phoneClassName?: string;
  children?: React.ReactChild;
  width?: number;
  height?: number;
  mode?: 'normal' | 'table';
  rotate?: boolean;
}

const Previewer: React.FC<H5PreviewerProps> = ({
  perspective = '1300px',
  wrapperClassName = '',
  phoneClassName = '',
  width = 375,
  height = 667,
  children,
  mode = 'normal',
  rotate = false,
}) => {
  // for 3D
  const perspectiveStyle = React.useMemo(() => ({ perspective }), [
    perspective,
  ]);

  // phone size, default is iphone6
  const phoneSizeStyle = React.useMemo(() => ({ width, height }), [
    width,
    height,
  ]);

  return (
    <div
      className={clsx(style.wrapper, wrapperClassName)}
      style={perspectiveStyle}
    >
      <div
        className={clsx(
          style.phone,
          rotate ? style.rotate : null,
          style[mode],
          phoneClassName
        )}
        style={phoneSizeStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(Previewer);
