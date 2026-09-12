> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrubyoverhang](https://developer.apple.com/documentation/coretext/ctrubyoverhang)

# CTRubyOverhang (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.

## Declaration

```swift
enum CTRubyOverhang
```

## Topics

### Constants

- [CTRubyOverhang.auto](ctrubyoverhang/auto.md): The ruby text can overhang adjacent text on both sides.
- [CTRubyOverhang.start](ctrubyoverhang/start.md): The ruby text can overhang the text that precedes it.
- [CTRubyOverhang.end](ctrubyoverhang/end.md): The ruby text can overhang the text that follows it.
- [CTRubyOverhang.none](ctrubyoverhang/none.md): The ruby text can’t overhang the preceding or following text.
- [CTRubyOverhang.invalid](ctrubyoverhang/invalid.md): The overhang specification is invalid.

### Initializers

- [init(rawValue:)](ctrubyoverhang/init%28rawvalue_%29.md)

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
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.

# CTRubyOverhang (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.

## Declaration

```objectivec
enum CTRubyOverhang : uint8_t;
```

## Topics

### Constants

- [kCTRubyOverhangAuto](ctrubyoverhang/auto.md): The ruby text can overhang adjacent text on both sides.
- [kCTRubyOverhangStart](ctrubyoverhang/start.md): The ruby text can overhang the text that precedes it.
- [kCTRubyOverhangEnd](ctrubyoverhang/end.md): The ruby text can overhang the text that follows it.
- [kCTRubyOverhangNone](ctrubyoverhang/none.md): The ruby text can’t overhang the preceding or following text.
- [kCTRubyOverhangInvalid](ctrubyoverhang/invalid.md): The overhang specification is invalid.

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.
