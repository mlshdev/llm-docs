> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbutton/type](https://developer.apple.com/documentation/carplay/cpbarbutton/type)

# CPBarButton.Type (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Types of bar buttons.

## Declaration

```swift
enum `Type`
```

## Topics

### Button Types

- [CPBarButton.Type.text](type/text.md): A text style bar button.
- [CPBarButton.Type.image](type/image.md): An image style bar button.

### Initializers

- [init(rawValue:)](type/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a CarPlay Bar Button

- [init(coder:)](init%28coder_%29.md): Creates a button initialized from data in the specified coder object.
- [init(type:handler:)](init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [init(image:handler:)](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [init(title:handler:)](init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

# CPBarButtonType (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Types of bar buttons.

## Declaration

```objectivec
enum CPBarButtonType : NSUInteger;
```

## Topics

### Button Types

- [CPBarButtonTypeText](type/text.md): A text style bar button.
- [CPBarButtonTypeImage](type/image.md): An image style bar button.

## See Also

### Creating a CarPlay Bar Button

- [initWithType:handler:](init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [initWithImage:handler:](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [initWithTitle:handler:](init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
