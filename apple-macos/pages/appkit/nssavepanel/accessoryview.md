> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/accessoryview](https://developer.apple.com/documentation/appkit/nssavepanel/accessoryview)

# accessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The custom accessory view for the current app.

## Declaration

```swift
var accessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

You can customize the panel by adding a custom view. The custom object you add appears just above the OK and Cancel buttons at the bottom of the panel. The `NSSavePanel` object automatically resizes itself to accommodate `accessoryView`. Use this property to change the accessory view as needed. If `accessoryView` is `nil`, the Save panel removes the current accessory view.

The panel relinquishes ownership of the accessory view after the panel is closed. If you want to reuse the accessory view, don’t rely on the panel to hold onto the accessory view until the next time you use it; instead, maintain your own strong reference to the view.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.

# accessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The custom accessory view for the current app.

## Declaration

```objectivec
@property (strong, nullable) NSView * accessoryView;
```

<a id="Discussion"></a>

## Discussion

You can customize the panel by adding a custom view. The custom object you add appears just above the OK and Cancel buttons at the bottom of the panel. The `NSSavePanel` object automatically resizes itself to accommodate `accessoryView`. Use this property to change the accessory view as needed. If `accessoryView` is `nil`, the Save panel removes the current accessory view.

The panel relinquishes ownership of the accessory view after the panel is closed. If you want to reuse the accessory view, don’t rely on the panel to hold onto the accessory view until the next time you use it; instead, maintain your own strong reference to the view.

## See Also

### Configuring the Panel’s Appearance

- [title](title.md): The title of the panel.
- [prompt](prompt.md): The text to display in the default button.
- [message](message.md): The message text displayed in the panel.
- [nameFieldLabel](namefieldlabel.md): The label text displayed in front of the filename text field.
- [nameFieldStringValue](namefieldstringvalue.md): The user-editable filename currently shown in the name field.
- [directoryURL](directoryurl.md): The current directory shown in the panel.
- [showsTagField](showstagfield.md): A Boolean value that indicates whether the panel displays the Tags field.
- [tagNames](tagnames.md): The tag names that you want to include on a saved file.
