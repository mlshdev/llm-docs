> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/init(radiobuttonwithtitle:target:action:)](https://developer.apple.com/documentation/appkit/nsbutton/init(radiobuttonwithtitle:target:action:))

# init(radioButtonWithTitle:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a standard radio button with the title you specify.

## Declaration

```swift
convenience init(radioButtonWithTitle title: String, target: Any?, action: Selector?)
```

## Parameters

- `title`: The localized title string to display on the button.
- `target`: The target object that receives action messages from the button.
- `action`: The action message the button sends to the target.

## See Also

### Creating standard buttons

- [init(checkboxWithTitle:target:action:)](init%28checkboxwithtitle_target_action_%29.md): Creates a standard checkbox with the title you specify.
- [init(image:target:action:)](init%28image_target_action_%29.md): Creates a standard push button with the image you specify.
- [init(title:image:target:action:)](init%28title_image_target_action_%29.md): Creates a standard push button with a title and image.
- [init(title:target:action:)](init%28title_target_action_%29.md): Creates a standard push button with the title you specify.

# radioButtonWithTitle:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a standard radio button with the title you specify.

## Declaration

```objectivec
+ (instancetype) radioButtonWithTitle:(NSString *) title target:(id) target action:(SEL) action;
```

## Parameters

- `title`: The localized title string to display on the button.
- `target`: The target object that receives action messages from the button.
- `action`: The action message the button sends to the target.

## See Also

### Creating standard buttons

- [checkboxWithTitle:target:action:](init%28checkboxwithtitle_target_action_%29.md): Creates a standard checkbox with the title you specify.
- [buttonWithImage:target:action:](init%28image_target_action_%29.md): Creates a standard push button with the image you specify.
- [buttonWithTitle:image:target:action:](init%28title_image_target_action_%29.md): Creates a standard push button with a title and image.
- [buttonWithTitle:target:action:](init%28title_target_action_%29.md): Creates a standard push button with the title you specify.
