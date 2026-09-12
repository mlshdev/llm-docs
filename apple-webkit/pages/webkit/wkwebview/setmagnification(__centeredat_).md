> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/setmagnification(_:centeredat:)](https://developer.apple.com/documentation/webkit/wkwebview/setmagnification(_:centeredat:))

# setMagnification(\_:centeredAt:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Scales the page content and centers the result on the specified point.

## Declaration

```swift
func setMagnification(_ magnification: CGFloat, centeredAt point: CGPoint)
```

## Parameters

- `magnification`: The factor by which to scale the content.
- `point`: The point (in the web view’s bounds) at which to center magnification.

## See Also

### Scaling content

- [pageZoom](pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [magnification](magnification.md): The factor by which the page content is currently scaled.

# setMagnification:centeredAtPoint: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Scales the page content and centers the result on the specified point.

## Declaration

```objectivec
- (void) setMagnification:(CGFloat) magnification centeredAtPoint:(CGPoint) point;
```

## Parameters

- `magnification`: The factor by which to scale the content.
- `point`: The point (in the web view’s bounds) at which to center magnification.

## See Also

### Scaling content

- [pageZoom](pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [magnification](magnification.md): The factor by which the page content is currently scaled.
