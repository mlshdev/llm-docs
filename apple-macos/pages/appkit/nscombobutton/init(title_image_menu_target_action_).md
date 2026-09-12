> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton/init(title:image:menu:target:action:)](https://developer.apple.com/documentation/appkit/nscombobutton/init(title:image:menu:target:action:))

# init(title:image:menu:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a combo button that displays both a title and image.

## Declaration

```swift
convenience init(title: String, image: NSImage, menu: NSMenu?, target: Any?, action: Selector?)
```

## Parameters

- `title`: The localized string to display in the button. Use the inherited [alignment](../nscontrol/alignment.md) property to set the text alignment for the string.
- `image`: The image to display in the button.
- `menu`: The menu to display when someone chooses an alternate action.
- `target`: The object that receives the default action message when someone clicks the button.
- `action`: The action message to send to the `target` object.

<a id="return-value"></a>

## Return Value

A combo button configured with both a title and image.

## See Also

### Creating a Combo Button

- [init(title:menu:target:action:)](init%28title_menu_target_action_%29.md): Creates a combo button that displays a title.
- [init(image:menu:target:action:)](init%28image_menu_target_action_%29.md): Creates a combo button that displays an image.

# comboButtonWithTitle:image:menu:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a combo button that displays both a title and image.

## Declaration

```objectivec
+ (instancetype) comboButtonWithTitle:(NSString *) title image:(NSImage *) image menu:(NSMenu *) menu target:(id) target action:(SEL) action;
```

## Parameters

- `title`: The localized string to display in the button. Use the inherited [alignment](../nscontrol/alignment.md) property to set the text alignment for the string.
- `image`: The image to display in the button.
- `menu`: The menu to display when someone chooses an alternate action.
- `target`: The object that receives the default action message when someone clicks the button.
- `action`: The action message to send to the `target` object.

<a id="return-value"></a>

## Return Value

A combo button configured with both a title and image.

## See Also

### Creating a Combo Button

- [comboButtonWithTitle:menu:target:action:](init%28title_menu_target_action_%29.md): Creates a combo button that displays a title.
- [comboButtonWithImage:menu:target:action:](init%28image_menu_target_action_%29.md): Creates a combo button that displays an image.
