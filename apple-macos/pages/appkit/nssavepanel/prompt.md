> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/prompt](https://developer.apple.com/documentation/appkit/nssavepanel/prompt)

# prompt (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text to display in the default button.

## Declaration

```swift
var prompt: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The prompt appears on all [NSSavePanel](../nssavepanel.md) objects (or all [NSOpenPanel](../nsopenpanel.md) objects if this property is on an [NSOpenPanel](../nsopenpanel.md) instance) in your application. By default, the text in the default button is “Open” for an Open panel and “Save” for a Save panel.

Use short words or phrases, such as “Open,” “Save,” “Set,” or “Choose,” on the button. The button is not resized to accommodate long prompts.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.

# prompt (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text to display in the default button.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * prompt;
```

<a id="Discussion"></a>

## Discussion

The prompt appears on all [NSSavePanel](../nssavepanel.md) objects (or all [NSOpenPanel](../nsopenpanel.md) objects if this property is on an [NSOpenPanel](../nsopenpanel.md) instance) in your application. By default, the text in the default button is “Open” for an Open panel and “Save” for a Save panel.

Use short words or phrases, such as “Open,” “Save,” “Set,” or “Choose,” on the button. The button is not resized to accommodate long prompts.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.
