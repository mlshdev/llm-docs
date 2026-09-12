> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/isbezeled](https://developer.apple.com/documentation/appkit/nstextfield/isbezeled)

# isBezeled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text field draws a bezeled background around its contents.

## Declaration

```swift
var isBezeled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field draws a bezel and sets [drawsBackground](drawsbackground.md) to [false](https://developer.apple.com/documentation/swift/false); if [false](https://developer.apple.com/documentation/swift/false), it doesn’t draw a bezeled background.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [bezelStyle](bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
- [NSTextField.BezelStyle](bezelstyle-swift.enum.md): The style of bezel the text field displays.

# bezeled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text field draws a bezeled background around its contents.

## Declaration

```objectivec
@property (getter=isBezeled) BOOL bezeled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field draws a bezel and sets [drawsBackground](drawsbackground.md) to [false](https://developer.apple.com/documentation/swift/false); if [false](https://developer.apple.com/documentation/swift/false), it doesn’t draw a bezeled background.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [bezelStyle](bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
- [NSTextFieldBezelStyle](bezelstyle-swift.enum.md): The style of bezel the text field displays.
