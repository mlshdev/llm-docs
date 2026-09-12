> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/namefieldstringvalue](https://developer.apple.com/documentation/appkit/nssavepanel/namefieldstringvalue)

# nameFieldStringValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The user-editable filename currently shown in the name field.

## Declaration

```swift
var nameFieldStringValue: String { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must not be `nil`. Note that the filename may not display an extension if the value of [isExtensionHidden](isextensionhidden.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.

# nameFieldStringValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The user-editable filename currently shown in the name field.

## Declaration

```objectivec
@property (copy) NSString * nameFieldStringValue;
```

<a id="Discussion"></a>

## Discussion

The value of this property must not be `nil`. Note that the filename may not display an extension if the value of [extensionHidden](isextensionhidden.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.
