> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton/init(title:menu:target:action:)](https://developer.apple.com/documentation/appkit/nscombobutton/init(title:menu:target:action:))

# init(title:menu:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a combo button that displays a title.

## Declaration

```swift
convenience init(title: String, menu: NSMenu?, target: Any?, action: Selector?)
```

## Parameters

- `title`: The localized string to display in the button. Use the inherited [alignment](../nscontrol/alignment.md) property to set the text alignment for the string.
- `menu`: The menu to display when someone chooses an alternate action.
- `target`: The object that receives the default action message when someone clicks the button.
- `action`: The action message to send to the `target` object.

<a id="return-value"></a>

## Return Value

A combo button configured with only a title string.

<a id="Discussion"></a>

## Discussion

This method sets the [image](image.md) property to `nil`.

## See Also

### Creating a Combo Button

- [init(title:image:menu:target:action:)](init%28title_image_menu_target_action_%29.md): Creates a combo button that displays both a title and image.
- [init(image:menu:target:action:)](init%28image_menu_target_action_%29.md): Creates a combo button that displays an image.

# comboButtonWithTitle:menu:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a combo button that displays a title.

## Declaration

```objectivec
+ (instancetype) comboButtonWithTitle:(NSString *) title menu:(NSMenu *) menu target:(id) target action:(SEL) action;
```

## Parameters

- `title`: The localized string to display in the button. Use the inherited [alignment](../nscontrol/alignment.md) property to set the text alignment for the string.
- `menu`: The menu to display when someone chooses an alternate action.
- `target`: The object that receives the default action message when someone clicks the button.
- `action`: The action message to send to the `target` object.

<a id="return-value"></a>

## Return Value

A combo button configured with only a title string.

<a id="Discussion"></a>

## Discussion

This method sets the [image](image.md) property to `nil`.

## See Also

### Creating a Combo Button

- [comboButtonWithTitle:image:menu:target:action:](init%28title_image_menu_target_action_%29.md): Creates a combo button that displays both a title and image.
- [comboButtonWithImage:menu:target:action:](init%28image_menu_target_action_%29.md): Creates a combo button that displays an image.
