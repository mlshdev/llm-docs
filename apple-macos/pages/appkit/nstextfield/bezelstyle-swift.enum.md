> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/bezelstyle-swift.enum](https://developer.apple.com/documentation/appkit/nstextfield/bezelstyle-swift.enum)

# NSTextField.BezelStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The style of bezel the text field displays.

## Declaration

```swift
enum BezelStyle
```

<a id="overview"></a>

## Overview

Use [bezelStyle](../nstextfieldcell/bezelstyle.md) to set a text field’s bezel style.

## Topics

### Constants

- [NSTextField.BezelStyle.squareBezel](bezelstyle-swift.enum/squarebezel.md): A style that draws a bezel with square corners around a text field.
- [NSTextField.BezelStyle.roundedBezel](bezelstyle-swift.enum/roundedbezel.md): A style that draws a bezel with rounded corners around a single-line text field.

### Initializers

- [init(rawValue:)](bezelstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [isBezeled](isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [bezelStyle](bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.

# NSTextFieldBezelStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The style of bezel the text field displays.

## Declaration

```objectivec
enum NSTextFieldBezelStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

Use [bezelStyle](../nstextfieldcell/bezelstyle.md) to set a text field’s bezel style.

## Topics

### Constants

- [NSTextFieldSquareBezel](bezelstyle-swift.enum/squarebezel.md): A style that draws a bezel with square corners around a text field.
- [NSTextFieldRoundedBezel](bezelstyle-swift.enum/roundedbezel.md): A style that draws a bezel with rounded corners around a single-line text field.

## See Also

### Controlling the background

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [bezeled](isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [bezelStyle](bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
