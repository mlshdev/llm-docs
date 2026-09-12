> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/drawsbackground](https://developer.apple.com/documentation/appkit/nstextfield/drawsbackground)

# drawsBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text field’s cell draws a background color behind the text.

## Declaration

```swift
var drawsBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field’s cell draws a background; if [false](https://developer.apple.com/documentation/swift/false), it draws nothing behind the text.

To prevent inconsistent rendering, `NSTextField` disables background color rendering for text fields with rounded bezels.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [isBezeled](isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [bezelStyle](bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
- [NSTextField.BezelStyle](bezelstyle-swift.enum.md): The style of bezel the text field displays.

# drawsBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text field’s cell draws a background color behind the text.

## Declaration

```objectivec
@property BOOL drawsBackground;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field’s cell draws a background; if [false](https://developer.apple.com/documentation/swift/false), it draws nothing behind the text.

To prevent inconsistent rendering, `NSTextField` disables background color rendering for text fields with rounded bezels.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [bezeled](isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [bezelStyle](bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
- [NSTextFieldBezelStyle](bezelstyle-swift.enum.md): The style of bezel the text field displays.
