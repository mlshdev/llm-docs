> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/bezelstyle-swift.property](https://developer.apple.com/documentation/appkit/nstextfield/bezelstyle-swift.property)

# bezelStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text field’s bezel style, square or rounded.

## Declaration

```swift
var bezelStyle: NSTextField.BezelStyle { get set }
```

<a id="Discussion"></a>

## Discussion

To enable a bezel for a text field, set [isBezeled](isbezeled.md) to [true](https://developer.apple.com/documentation/swift/true), then set the bezel style. See [NSTextField.BezelStyle](bezelstyle-swift.enum.md) for available bezel styles.

> **Note**

>  When you set this property to [NSTextField.BezelStyle.roundedBezel](bezelstyle-swift.enum/roundedbezel.md), the text field doesn’t wrap the text. It displays using a single line.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [isBezeled](isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [NSTextField.BezelStyle](bezelstyle-swift.enum.md): The style of bezel the text field displays.

# bezelStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text field’s bezel style, square or rounded.

## Declaration

```objectivec
@property NSTextFieldBezelStyle bezelStyle;
```

<a id="Discussion"></a>

## Discussion

To enable a bezel for a text field, set [bezeled](isbezeled.md) to [true](https://developer.apple.com/documentation/swift/true), then set the bezel style. See [NSTextFieldBezelStyle](bezelstyle-swift.enum.md) for available bezel styles.

> **Note**

>  When you set this property to [NSTextFieldRoundedBezel](bezelstyle-swift.enum/roundedbezel.md), the text field doesn’t wrap the text. It displays using a single line.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [bezeled](isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [NSTextFieldBezelStyle](bezelstyle-swift.enum.md): The style of bezel the text field displays.
