> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextualaction/backgroundcolor](https://developer.apple.com/documentation/uikit/uicontextualaction/backgroundcolor)

# backgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The background color of the action button.

## Declaration

```swift
@NSCopying var backgroundColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is determined by the value of the [style](style-swift.property.md) property, which determines the default appearance of the button. Assigning a new color to this property changes the background to the color that you specify.

## See Also

### Configuring the appearance

- [title](title.md): The title displayed on the action button.
- [image](image.md): The image to display in the action button.

# backgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The background color of the action button.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is determined by the value of the [style](style-swift.property.md) property, which determines the default appearance of the button. Assigning a new color to this property changes the background to the color that you specify.

## See Also

### Configuring the appearance

- [title](title.md): The title displayed on the action button.
- [image](image.md): The image to display in the action button.
