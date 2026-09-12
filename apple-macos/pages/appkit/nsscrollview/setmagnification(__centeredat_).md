> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/setmagnification(_:centeredat:)](https://developer.apple.com/documentation/appkit/nsscrollview/setmagnification(_:centeredat:))

# setMagnification(\_:centeredAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Magnify the content by the given amount and center the result on the given point.

## Declaration

```swift
func setMagnification(_ magnification: CGFloat, centeredAt point: NSPoint)
```

## Parameters

- `magnification`: The amount by which to magnify the content.
- `point`: The point (in content view space) on which to center magnification.

<a id="Discussion"></a>

## Discussion

This method scales the content view such that the passed in point (in content view space) remains at the same screen location once the scaling is completed. The resulting magnification value is clipped to the [minMagnification](minmagnification.md) and [maxMagnification](maxmagnification.md) values. To animate the magnification, use the object’s animator.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnify(toFit:)](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.

# setMagnification:centeredAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Magnify the content by the given amount and center the result on the given point.

## Declaration

```objectivec
- (void) setMagnification:(CGFloat) magnification centeredAtPoint:(NSPoint) point;
```

## Parameters

- `magnification`: The amount by which to magnify the content.
- `point`: The point (in content view space) on which to center magnification.

<a id="Discussion"></a>

## Discussion

This method scales the content view such that the passed in point (in content view space) remains at the same screen location once the scaling is completed. The resulting magnification value is clipped to the [minMagnification](minmagnification.md) and [maxMagnification](maxmagnification.md) values. To animate the magnification, use the object’s animator.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnifyToFitRect:](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
