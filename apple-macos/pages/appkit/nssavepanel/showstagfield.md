> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/showstagfield](https://developer.apple.com/documentation/appkit/nssavepanel/showstagfield)

# showsTagField (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether the panel displays the Tags field.

## Declaration

```swift
var showsTagField: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel displays the Tags field; if [false](https://developer.apple.com/documentation/swift/false), the panel doesn’t display the Tags field. The default value is [true](https://developer.apple.com/documentation/swift/true). (Note that the Tags field is appropriate only in a Save panel.)

If you set this property to [true](https://developer.apple.com/documentation/swift/true), you are responsible for setting tag names on the resulting file after saving is complete. If you don’t set this property, macOS will automatically show the tag field and attempt to apply the tags to the file. To set tags on files, use the [tagNamesKey](https://developer.apple.com/documentation/foundation/urlresourcekey/tagnameskey).

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.

# showsTagField (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether the panel displays the Tags field.

## Declaration

```objectivec
@property BOOL showsTagField;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel displays the Tags field; if [false](https://developer.apple.com/documentation/swift/false), the panel doesn’t display the Tags field. The default value is [true](https://developer.apple.com/documentation/swift/true). (Note that the Tags field is appropriate only in a Save panel.)

If you set this property to [true](https://developer.apple.com/documentation/swift/true), you are responsible for setting tag names on the resulting file after saving is complete. If you don’t set this property, macOS will automatically show the tag field and attempt to apply the tags to the file. To set tags on files, use the [NSURLTagNamesKey](https://developer.apple.com/documentation/foundation/urlresourcekey/tagnameskey).

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.
