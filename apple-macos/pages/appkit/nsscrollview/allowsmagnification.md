> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/allowsmagnification](https://developer.apple.com/documentation/appkit/nsscrollview/allowsmagnification)

# allowsMagnification (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Allows the user to magnify the scroll view.

## Declaration

```swift
var allowsMagnification: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property does not prevent the developer from manually adjusting the magnification value. If magnification exceeds either the maximum or minimum limits for magnification, and [allowsMagnification](allowsmagnification.md) is [true](https://developer.apple.com/documentation/swift/true), the scroll view temporarily animates the content magnification just past those limits before returning to them. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Zooming the Scroll View

- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnify(toFit:)](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

# allowsMagnification (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Allows the user to magnify the scroll view.

## Declaration

```objectivec
@property BOOL allowsMagnification;
```

<a id="Discussion"></a>

## Discussion

This property does not prevent the developer from manually adjusting the magnification value. If magnification exceeds either the maximum or minimum limits for magnification, and [allowsMagnification](allowsmagnification.md) is [true](https://developer.apple.com/documentation/swift/true), the scroll view temporarily animates the content magnification just past those limits before returning to them. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Zooming the Scroll View

- [magnification](magnification.md): The amount by which the content is currently scaled.
- [magnifyToFitRect:](magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.
