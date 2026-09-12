> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/magnification](https://developer.apple.com/documentation/appkit/nsscrollview/magnification)

# magnification (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The amount by which the content is currently scaled.

## Declaration

```swift
var magnification: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

To animate the magnification, use the object’s animator. The default value is `1.0`.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnify(toFit:)](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

# magnification (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The amount by which the content is currently scaled.

## Declaration

```objectivec
@property CGFloat magnification;
```

<a id="Discussion"></a>

## Discussion

To animate the magnification, use the object’s animator. The default value is `1.0`.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnifyToFitRect:](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.
