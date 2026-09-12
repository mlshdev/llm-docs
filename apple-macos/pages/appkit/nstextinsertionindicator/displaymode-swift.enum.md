> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinsertionindicator/displaymode-swift.enum](https://developer.apple.com/documentation/appkit/nstextinsertionindicator/displaymode-swift.enum)

# NSTextInsertionIndicator.DisplayMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Constants that determine how to display the system text cursor in a custom text UI.

## Declaration

```swift
enum DisplayMode
```

## Topics

### Defining the display mode

- [NSTextInsertionIndicator.DisplayMode.automatic](displaymode-swift.enum/automatic.md)
- [NSTextInsertionIndicator.DisplayMode.hidden](displaymode-swift.enum/hidden.md)
- [NSTextInsertionIndicator.DisplayMode.visible](displaymode-swift.enum/visible.md)

### Initializers

- [init(rawValue:)](displaymode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](../nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](../nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](../nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](../nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](../nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicator.AutomaticModeOptions](automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.

# NSTextInsertionIndicatorDisplayMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Constants that determine how to display the system text cursor in a custom text UI.

## Declaration

```objectivec
enum NSTextInsertionIndicatorDisplayMode : NSInteger;
```

## Topics

### Defining the display mode

- [NSTextInsertionIndicatorDisplayModeAutomatic](displaymode-swift.enum/automatic.md)
- [NSTextInsertionIndicatorDisplayModeHidden](displaymode-swift.enum/hidden.md)
- [NSTextInsertionIndicatorDisplayModeVisible](displaymode-swift.enum/visible.md)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](../nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](../nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](../nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](../nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](../nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicatorAutomaticModeOptions](automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
