> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/disabledbackground](https://developer.apple.com/documentation/uikit/uitextfield/disabledbackground)

# disabledBackground (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image that represents the background appearance of the text field when it is in a disabled state.

## Declaration

```swift
var disabledBackground: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Background images are drawn in the border rectangle portion of the text field. Images you use for the text field’s background should be able to stretch to fit. This property is ignored if the [background](background.md) property is not also set.

This property is set to `nil` by default.

## See Also

### Setting the view’s background appearance

- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [background](background.md): The image that represents the background appearance of the text field when it is in an enabled state.

# disabledBackground (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The image that represents the background appearance of the text field when it is in a disabled state.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * disabledBackground;
```

<a id="Discussion"></a>

## Discussion

Background images are drawn in the border rectangle portion of the text field. Images you use for the text field’s background should be able to stretch to fit. This property is ignored if the [background](background.md) property is not also set.

This property is set to `nil` by default.

## See Also

### Setting the view’s background appearance

- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [background](background.md): The image that represents the background appearance of the text field when it is in an enabled state.
