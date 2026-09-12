> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorwell/supportsalpha](https://developer.apple.com/documentation/uikit/uicolorwell/supportsalpha)

# supportsAlpha (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that determines whether the color picker supports alpha values.

## Declaration

```swift
var supportsAlpha: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), people can only pick fully opaque colors from the color picker.

## See Also

### Configuring color picker attributes

- [title](title.md): The title for the color picker.
- [maximumLinearExposure](maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color well.
- [supportsEyedropper](supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color well.
- [selectedColor](selectedcolor.md): The selected color in the color picker.

# supportsAlpha (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that determines whether the color picker supports alpha values.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsAlpha;
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), people can only pick fully opaque colors from the color picker.

## See Also

### Configuring color picker attributes

- [title](title.md): The title for the color picker.
- [maximumLinearExposure](maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color well.
- [supportsEyedropper](supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color well.
- [selectedColor](selectedcolor.md): The selected color in the color picker.
