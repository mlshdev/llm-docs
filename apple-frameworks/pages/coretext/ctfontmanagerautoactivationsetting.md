> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerautoactivationsetting](https://developer.apple.com/documentation/coretext/ctfontmanagerautoactivationsetting)

# CTFontManagerAutoActivationSetting (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the auto-activation for the specified bundle identifier.

## Declaration

```swift
enum CTFontManagerAutoActivationSetting
```

## Topics

### Constants

- [CTFontManagerAutoActivationSetting.default](ctfontmanagerautoactivationsetting/default.md)
- [CTFontManagerAutoActivationSetting.disabled](ctfontmanagerautoactivationsetting/disabled.md)
- [CTFontManagerAutoActivationSetting.enabled](ctfontmanagerautoactivationsetting/enabled.md)
- [CTFontManagerAutoActivationSetting.promptUser](ctfontmanagerautoactivationsetting/promptuser.md): Deprecated.

### Initializers

- [init(rawValue:)](ctfontmanagerautoactivationsetting/init%28rawvalue_%29.md)

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
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.

# CTFontManagerAutoActivationSetting (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the auto-activation for the specified bundle identifier.

## Declaration

```objectivec
enum CTFontManagerAutoActivationSetting : uint32_t;
```

## Topics

### Constants

- [kCTFontManagerAutoActivationDefault](ctfontmanagerautoactivationsetting/default.md)
- [kCTFontManagerAutoActivationDisabled](ctfontmanagerautoactivationsetting/disabled.md)
- [kCTFontManagerAutoActivationEnabled](ctfontmanagerautoactivationsetting/enabled.md)
- [kCTFontManagerAutoActivationPromptUser](ctfontmanagerautoactivationsetting/promptuser.md): Deprecated.

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.
