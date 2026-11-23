> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton/init(title:handler:)

# init(title:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a bar button that displays a text string.

## Declaration

```swift
init(title: String, handler: CPBarButtonHandler? = nil)
```

## Parameters

- `title`: The text to display in the button. CarPlay sizes the button to fit the entire string, so keep the text short. Buttons with too much text don’t leave enough room for other content in the navigation bar.
- `handler`: The code to run when someone selects the button. You might use this handler to display another template, change the sort order of list items, or perform other app-specific actions.

<a id="return-value"></a>

## Return Value

An initialized button.

## See Also

### Creating a bar button

- [init(image:handler:)](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
- [init(coder:)](init%28coder_%29.md)

# initWithTitle:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a bar button that displays a text string.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title handler:(CPBarButtonHandler) handler;
```

## Parameters

- `title`: The text to display in the button. CarPlay sizes the button to fit the entire string, so keep the text short. Buttons with too much text don’t leave enough room for other content in the navigation bar.
- `handler`: The code to run when someone selects the button. You might use this handler to display another template, change the sort order of list items, or perform other app-specific actions.

<a id="return-value"></a>

## Return Value

An initialized button.

## See Also

### Creating a bar button

- [initWithImage:handler:](init%28image_handler_%29.md): Creates a bar button that displays an image.
- [CPBarButtonHandler](../cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
