> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/background](https://developer.apple.com/documentation/uikit/uitextfield/background)

# background (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image that represents the background appearance of the text field when it is in an enabled state.

## Declaration

```swift
var background: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

When set, the image referred to by this property replaces the standard appearance controlled by the [borderStyle](borderstyle-swift.property.md) property. Background images are drawn in the border rectangle portion of the text field. Images you use for the text field’s background should be able to stretch to fit.

This property is set to `nil` by default.

## See Also

### Setting the view’s background appearance

- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [disabledBackground](disabledbackground.md): The image that represents the background appearance of the text field when it is in a disabled state.

# background (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image that represents the background appearance of the text field when it is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * background;
```

<a id="Discussion"></a>

## Discussion

When set, the image referred to by this property replaces the standard appearance controlled by the [borderStyle](borderstyle-swift.property.md) property. Background images are drawn in the border rectangle portion of the text field. Images you use for the text field’s background should be able to stretch to fit.

This property is set to `nil` by default.

## See Also

### Setting the view’s background appearance

- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [disabledBackground](disabledbackground.md): The image that represents the background appearance of the text field when it is in a disabled state.
