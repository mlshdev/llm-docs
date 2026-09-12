> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbuttonhandler](https://developer.apple.com/documentation/carplay/cpbarbuttonhandler)

# CPBarButtonHandler (Swift)

**Framework:** CarPlay  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

A block that CarPlay calls when the user taps a bar button.

## Declaration

```swift
typealias CPBarButtonHandler = (CPBarButton) -> Void
```

## See Also

### Creating a CarPlay Bar Button

- [init(coder:)](cpbarbutton/init%28coder_%29.md): Creates a button initialized from data in the specified coder object.
- [init(type:handler:)](cpbarbutton/init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [init(image:handler:)](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [init(title:handler:)](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButton.Type](cpbarbutton/type.md): Types of bar buttons.

# CPBarButtonHandler (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

A block that CarPlay calls when the user taps a bar button.

## Declaration

```objectivec
typedef void (^)(CPBarButton *) CPBarButtonHandler;
```

## See Also

### Creating a CarPlay Bar Button

- [initWithType:handler:](cpbarbutton/init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [initWithImage:handler:](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [initWithTitle:handler:](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButtonType](cpbarbutton/type.md): Types of bar buttons.
