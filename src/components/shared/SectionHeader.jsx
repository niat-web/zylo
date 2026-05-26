import React from 'react';
import clsx from 'clsx';

/**
 * Reusable premium section header matching the layout structure of ZYLO.
 */
export default function SectionHeader({
  tag,
  title,
  subtitle,
  white = false,
  alignLeft = false,
  className
}) {
  return (
    <div
      className={clsx(
        'section-header reveal',
        {
          'text-left': alignLeft,
          'text-center': !alignLeft
        },
        className
      )}
      style={alignLeft ? { textAlign: 'left', margin: '0 0 44px', maxWidth: 'none' } : undefined}
    >
      {tag && (
        <span className={clsx('section-tag', { 'section-tag-gold': white })}>
          {tag}
        </span>
      )}
      {title && (
        <h2 className={clsx('section-title', { white: white })}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={clsx('section-subtitle', { 'white-60': white })}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
