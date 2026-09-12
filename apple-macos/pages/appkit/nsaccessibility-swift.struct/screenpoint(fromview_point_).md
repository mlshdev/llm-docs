> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/screenpoint(fromview:point:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/screenpoint(fromview:point:))

# screenPoint(fromView:point:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns the point in screen coordinates.

## Declaration

```swift
static func screenPoint(fromView parentView: NSView, point: NSPoint) -> NSPoint
```

<a id="Discussion"></a>

## Discussion

Given a point in the specified view’s coordinates, it returns the same point in the screen’s coordinates.

## See Also

### Getting Screen Coordinates

- [screenRect(fromView:rect:)](screenrect%28fromview_rect_%29.md): Returns the frame in screen coordinates.

# NSAccessibilityPointInView (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.10+

Returns the point in screen coordinates.

## Declaration

```objectivec
extern NSPoint NSAccessibilityPointInView(NSView *parentView, NSPoint point);
```

<a id="Discussion"></a>

## Discussion

Given a point in the specified view’s coordinates, it returns the same point in the screen’s coordinates.

## See Also

### Getting Screen Coordinates

- [NSAccessibilityFrameInView](screenrect%28fromview_rect_%29.md): Returns the frame in screen coordinates.
