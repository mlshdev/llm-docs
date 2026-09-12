> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/maxmagnification](https://developer.apple.com/documentation/appkit/nsscrollview/maxmagnification)

# maxMagnification (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The maximum value to which the content can be magnified.

## Declaration

```swift
var maxMagnification: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This value must be greater than or equal to the minimum magnification. The default value is `4.0`.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnify(toFit:)](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

# maxMagnification (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The maximum value to which the content can be magnified.

## Declaration

```objectivec
@property CGFloat maxMagnification;
```

<a id="Discussion"></a>

## Discussion

This value must be greater than or equal to the minimum magnification. The default value is `4.0`.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnifyToFitRect:](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.
