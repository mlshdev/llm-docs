> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/tagnames](https://developer.apple.com/documentation/appkit/nssavepanel/tagnames)

# tagNames (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The tag names that you want to include on a saved file.

## Declaration

```swift
var tagNames: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of [showsTagField](showstagfield.md) is [true](https://developer.apple.com/documentation/swift/true), use this property to provide an array of strings that represent the initial tag names to display in the panel. If you set the property to `nil` or an empty array, the panel displays no initial tag names.

> **Note**

>  The Tags field is appropriate only in a Save panel.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.

# tagNames (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The tag names that you want to include on a saved file.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * tagNames;
```

<a id="Discussion"></a>

## Discussion

When the value of [showsTagField](showstagfield.md) is [true](https://developer.apple.com/documentation/swift/true), use this property to provide an array of strings that represent the initial tag names to display in the panel. If you set the property to `nil` or an empty array, the panel displays no initial tag names.

> **Note**

>  The Tags field is appropriate only in a Save panel.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [accessoryView](accessoryview.md): The custom accessory view for the current app.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
