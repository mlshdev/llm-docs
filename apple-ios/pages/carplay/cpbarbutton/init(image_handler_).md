> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton/init(image:handler:)

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

- `image`: The image to display in the button. Provide an image that scales readily to different interface sizes. For best results, initialize your image object with an SF Symbol.
- `handler`: The code to run when someone selects the button. You might use this handler to display another template, change the sort order of list items, or perform other app-specific actions.

<a id="return-value"></a>

## Return Value

An initialized button.

## See Also

### Creating a bar button

- [init(title:handler:)](init%28title_handler_%29.md): Creates a bar button that displays a text string.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
- [init(coder:)](init%28coder_%29.md)

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

- `image`: The image to display in the button. Provide an image that scales readily to different interface sizes. For best results, initialize your image object with an SF Symbol.
- `handler`: The code to run when someone selects the button. You might use this handler to display another template, change the sort order of list items, or perform other app-specific actions.

<a id="return-value"></a>

## Return Value

An initialized button.

## See Also

### Creating a bar button

- [initWithTitle:handler:](init%28title_handler_%29.md): Creates a bar button that displays a text string.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
