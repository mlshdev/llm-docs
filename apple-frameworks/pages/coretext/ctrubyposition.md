> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrubyposition](https://developer.apple.com/documentation/coretext/ctrubyposition)

# CTRubyPosition (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify the position of the ruby text relative to to the base text.

## Declaration

```swift
enum CTRubyPosition
```

## Topics

### Constants

- [CTRubyPosition.before](ctrubyposition/before.md): The ruby text is positioned before the base text, appearing above horizontal text and to the right of vertical text.
- [CTRubyPosition.after](ctrubyposition/after.md): The ruby text is positioned after the base text, appearing below horizontal text and to the left of vertical text.
- [CTRubyPosition.interCharacter](ctrubyposition/intercharacter.md): The ruby text is positioned to the right of the base text, regardless of whether it’s horizontal or vertical.
- [CTRubyPosition.inline](ctrubyposition/inline.md): The ruby text follows the base text with no special styling.
- [CTRubyPosition.count](ctrubyposition/count.md): A constant that accounts for all ruby positions during ruby annotation creation.

### Initializers

- [init(rawValue:)](ctrubyposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.

# CTRubyPosition (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify the position of the ruby text relative to to the base text.

## Declaration

```objectivec
enum CTRubyPosition : uint8_t;
```

## Topics

### Constants

- [kCTRubyPositionBefore](ctrubyposition/before.md): The ruby text is positioned before the base text, appearing above horizontal text and to the right of vertical text.
- [kCTRubyPositionAfter](ctrubyposition/after.md): The ruby text is positioned after the base text, appearing below horizontal text and to the left of vertical text.
- [kCTRubyPositionInterCharacter](ctrubyposition/intercharacter.md): The ruby text is positioned to the right of the base text, regardless of whether it’s horizontal or vertical.
- [kCTRubyPositionInline](ctrubyposition/inline.md): The ruby text follows the base text with no special styling.
- [kCTRubyPositionCount](ctrubyposition/count.md): A constant that accounts for all ruby positions during ruby annotation creation.

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
