> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/title](https://developer.apple.com/documentation/appkit/nssavepanel/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the panel.

## Declaration

```swift
var title: String! { get set }
```

<a id="Discussion"></a>

## Discussion

By default, “Save” is the title string. If you adapt the `NSSavePanel` object for other uses, its title should reflect the user action that brings it to the screen.

## See Also

### Configuring the Panel’s Appearance

- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the panel.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

By default, “Save” is the title string. If you adapt the `NSSavePanel` object for other uses, its title should reflect the user action that brings it to the screen.

## See Also

### Configuring the Panel’s Appearance

- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.
