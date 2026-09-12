> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/magnify(tofit:)](https://developer.apple.com/documentation/appkit/nsscrollview/magnify(tofit:))

# magnify(toFit:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.

## Declaration

```swift
func magnify(toFit rect: NSRect)
```

## Parameters

- `rect`: The rectangle (in content view space) to which the content view is magnified.

<a id="Discussion"></a>

## Discussion

The resulting magnification value is clipped to the [minMagnification](minmagnification.md) and [maxMagnification](maxmagnification.md) values. To animate the magnification, use the object’s animator.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

# magnifyToFitRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.

## Declaration

```objectivec
- (void) magnifyToFitRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle (in content view space) to which the content view is magnified.

<a id="Discussion"></a>

## Discussion

The resulting magnification value is clipped to the [minMagnification](minmagnification.md) and [maxMagnification](maxmagnification.md) values. To animate the magnification, use the object’s animator.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.
