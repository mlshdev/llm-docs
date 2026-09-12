> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbutton/init(type:handler:)](https://developer.apple.com/documentation/carplay/cpbarbutton/init(type:handler:))

# init(type:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Creates a bar button with a type and handler.

## Declaration

```swift
init(type: CPBarButton.Type, handler: CPBarButtonHandler? = nil)
```

## Parameters

- `type`: The button type.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A bar button of the specified type.

## See Also

### Creating a CarPlay Bar Button

- [init(coder:)](init%28coder_%29.md): Creates a button initialized from data in the specified coder object.
- [init(image:handler:)](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [init(title:handler:)](init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButton.Type](type.md): Types of bar buttons.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

# initWithType:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Creates a bar button with a type and handler.

## Declaration

```objectivec
- (instancetype) initWithType:(CPBarButtonType) type handler:(CPBarButtonHandler) handler;
```

## Parameters

- `type`: The button type.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A bar button of the specified type.

## See Also

### Creating a CarPlay Bar Button

- [initWithImage:handler:](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [initWithTitle:handler:](init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButtonType](type.md): Types of bar buttons.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
