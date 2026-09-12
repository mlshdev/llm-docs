> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/message](https://developer.apple.com/documentation/appkit/nssavepanel/message)

# message (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The message text displayed in the panel.

## Declaration

```swift
var message: String! { get set }
```

<a id="Discussion"></a>

## Discussion

This prompt appears on all [NSSavePanel](../nssavepanel.md) objects (or all [NSOpenPanel](../nsopenpanel.md) objects if this property is on an [NSOpenPanel](../nsopenpanel.md) instance) in your application. The default message text is an empty string.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.

# message (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The message text displayed in the panel.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * message;
```

<a id="Discussion"></a>

## Discussion

This prompt appears on all [NSSavePanel](../nssavepanel.md) objects (or all [NSOpenPanel](../nsopenpanel.md) objects if this property is on an [NSOpenPanel](../nsopenpanel.md) instance) in your application. The default message text is an empty string.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.
