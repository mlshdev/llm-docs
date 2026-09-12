> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinsertionindicator/automaticmodeoptions-swift.struct](https://developer.apple.com/documentation/appkit/nstextinsertionindicator/automaticmodeoptions-swift.struct)

# NSTextInsertionIndicator.AutomaticModeOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 14.0+

Options that affect the automatic display mode.

## Declaration

```swift
struct AutomaticModeOptions
```

## Topics

### Configuring automatic mode options

- [showEffectsView](automaticmodeoptions-swift.struct/showeffectsview.md): Specifies whether a trailing glow displays during dictation.
- [showWhileTracking](automaticmodeoptions-swift.struct/showwhiletracking.md): Specifies whether the insertion indicator shows during a tracking loop.

### Initializers

- [init(rawValue:)](automaticmodeoptions-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](../nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](../nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](../nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](../nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](../nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicator.DisplayMode](displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.

# NSTextInsertionIndicatorAutomaticModeOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Options that affect the automatic display mode.

## Declaration

```objectivec
enum NSTextInsertionIndicatorAutomaticModeOptions : NSInteger;
```

## Topics

### Configuring automatic mode options

- [NSTextInsertionIndicatorAutomaticModeOptionsShowEffectsView](automaticmodeoptions-swift.struct/showeffectsview.md): Specifies whether a trailing glow displays during dictation.
- [NSTextInsertionIndicatorAutomaticModeOptionsShowWhileTracking](automaticmodeoptions-swift.struct/showwhiletracking.md): Specifies whether the insertion indicator shows during a tracking loop.

## See Also

### Text input

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](../nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](../nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](../nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](../nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](../nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicatorDisplayMode](displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
