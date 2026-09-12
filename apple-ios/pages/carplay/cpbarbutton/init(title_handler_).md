> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbutton/init(title:handler:)](https://developer.apple.com/documentation/carplay/cpbarbutton/init(title:handler:))

# init(title:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a bar button that displays a text label.

## Declaration

```swift
init(title: String, handler: CPBarButtonHandler? = nil)
```

## Parameters

- `title`: The text to display on the button.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A bar button that displays the provided text.

## See Also

### Creating a CarPlay Bar Button

- [init(coder:)](init%28coder_%29.md): Creates a button initialized from data in the specified coder object.
- [init(type:handler:)](init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [init(image:handler:)](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [CPBarButton.Type](type.md): Types of bar buttons.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

# initWithTitle:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a bar button that displays a text label.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title handler:(CPBarButtonHandler) handler;
```

## Parameters

- `title`: The text to display on the button.
- `handler`: The block that CarPlay invokes when the user taps the button.

<a id="return-value"></a>

## Return Value

A bar button that displays the provided text.

## See Also

### Creating a CarPlay Bar Button

- [initWithType:handler:](init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [initWithImage:handler:](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [CPBarButtonType](type.md): Types of bar buttons.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
