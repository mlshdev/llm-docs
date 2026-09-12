> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/minmagnification](https://developer.apple.com/documentation/appkit/nsscrollview/minmagnification)

# minMagnification (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The minimum value to which the content can be magnified.

## Declaration

```swift
var minMagnification: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.25`.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnify(toFit:)](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

# minMagnification (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The minimum value to which the content can be magnified.

## Declaration

```objectivec
@property CGFloat minMagnification;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.25`.

## See Also

### Zooming the Scroll View

- [allowsMagnification](allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnifyToFitRect:](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.
