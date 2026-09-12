> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/bezelstyle](https://developer.apple.com/documentation/appkit/nstextfieldcell/bezelstyle)

# bezelStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bezel style to use when drawing the text field.

## Declaration

```swift
var bezelStyle: NSTextField.BezelStyle { get set }
```

<a id="Discussion"></a>

## Discussion

To set the bezel style, you must have already set the the text field’s [isBezeled](../nstextfield/isbezeled.md) method with an argument of [true](https://developer.apple.com/documentation/swift/true). For a list of bezel styles, see [NSTextField.BezelStyle](../nstextfield/bezelstyle-swift.enum.md).

## See Also

### Setting the Bezel Style

- [NSTextField.BezelStyle](../nstextfield/bezelstyle-swift.enum.md): The style of bezel the text field displays.

# bezelStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bezel style to use when drawing the text field.

## Declaration

```objectivec
@property NSTextFieldBezelStyle bezelStyle;
```

<a id="Discussion"></a>

## Discussion

To set the bezel style, you must have already set the the text field’s [bezeled](../nstextfield/isbezeled.md) method with an argument of [true](https://developer.apple.com/documentation/swift/true). For a list of bezel styles, see [NSTextFieldBezelStyle](../nstextfield/bezelstyle-swift.enum.md).

## See Also

### Setting the Bezel Style

- [NSTextFieldBezelStyle](../nstextfield/bezelstyle-swift.enum.md): The style of bezel the text field displays.
