> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbutton/init(image:handler:)](https://developer.apple.com/documentation/carplay/cpbarbutton/init(image:handler:))

# init(image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a bar button that displays an image.

## Declaration

```swift
init(image: UIImage, handler: CPBarButtonHandler? = nil)
```

## Parameters

- `image`: The image to display on the button.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A bar button that displays the provided image.

## See Also

### Creating a CarPlay Bar Button

- [init(coder:)](init%28coder_%29.md): Creates a button initialized from data in the specified coder object.
- [init(type:handler:)](init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [init(title:handler:)](init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButton.Type](type.md): Types of bar buttons.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

# initWithImage:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a bar button that displays an image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image handler:(CPBarButtonHandler) handler;
```

## Parameters

- `image`: The image to display on the button.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A bar button that displays the provided image.

## See Also

### Creating a CarPlay Bar Button

- [initWithType:handler:](init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [initWithTitle:handler:](init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButtonType](type.md): Types of bar buttons.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
