> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/screenrect(fromview:rect:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/screenrect(fromview:rect:))

# screenRect(fromView:rect:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns the frame in screen coordinates.

## Declaration

```swift
static func screenRect(fromView parentView: NSView, rect frame: NSRect) -> NSRect
```

<a id="Discussion"></a>

## Discussion

Given a frame in the specified view’s coordinates, it returns the same frame in the screen’s coordinates.

## See Also

### Getting Screen Coordinates

- [screenPoint(fromView:point:)](screenpoint%28fromview_point_%29.md): Returns the point in screen coordinates.

# NSAccessibilityFrameInView (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.10+

Returns the frame in screen coordinates.

## Declaration

```objectivec
extern NSRect NSAccessibilityFrameInView(NSView *parentView, NSRect frame);
```

<a id="Discussion"></a>

## Discussion

Given a frame in the specified view’s coordinates, it returns the same frame in the screen’s coordinates.

## See Also

### Getting Screen Coordinates

- [NSAccessibilityPointInView](screenpoint%28fromview_point_%29.md): Returns the point in screen coordinates.
