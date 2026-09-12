> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptormatchingstate](https://developer.apple.com/documentation/coretext/ctfontdescriptormatchingstate)

# CTFontDescriptorMatchingState (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that track the progress of font descriptor matching.

## Declaration

```swift
enum CTFontDescriptorMatchingState
```

## Topics

### Constants

- [CTFontDescriptorMatchingState.didBegin](ctfontdescriptormatchingstate/didbegin.md): A state that indicates matching is about to begin.
- [CTFontDescriptorMatchingState.didFinish](ctfontdescriptormatchingstate/didfinish.md): A state that indicates matching is done.
- [CTFontDescriptorMatchingState.willBeginQuerying](ctfontdescriptormatchingstate/willbeginquerying.md): A state that indicates communication with the server is about to begin.
- [CTFontDescriptorMatchingState.stalled](ctfontdescriptormatchingstate/stalled.md): A state that indicates that matching is stalled, such as while waiting for a server response.
- [CTFontDescriptorMatchingState.willBeginDownloading](ctfontdescriptormatchingstate/willbegindownloading.md): A state that indicates downloading is about to begin.
- [CTFontDescriptorMatchingState.downloading](ctfontdescriptormatchingstate/downloading.md): A state that indicates downloading is in progress.
- [CTFontDescriptorMatchingState.didFinishDownloading](ctfontdescriptormatchingstate/didfinishdownloading.md): A state that indicates downloading is done.
- [CTFontDescriptorMatchingState.didMatch](ctfontdescriptormatchingstate/didmatch.md): A state that indicates the font descriptor match is successful.
- [CTFontDescriptorMatchingState.didFailWithError](ctfontdescriptormatchingstate/didfailwitherror.md): A state that indicates an error.

### Initializers

- [init(rawValue:)](ctfontdescriptormatchingstate/init%28rawvalue_%29.md)

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

- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.

# CTFontDescriptorMatchingState (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that track the progress of font descriptor matching.

## Declaration

```objectivec
enum CTFontDescriptorMatchingState : uint32_t;
```

## Topics

### Constants

- [kCTFontDescriptorMatchingDidBegin](ctfontdescriptormatchingstate/didbegin.md): A state that indicates matching is about to begin.
- [kCTFontDescriptorMatchingDidFinish](ctfontdescriptormatchingstate/didfinish.md): A state that indicates matching is done.
- [kCTFontDescriptorMatchingWillBeginQuerying](ctfontdescriptormatchingstate/willbeginquerying.md): A state that indicates communication with the server is about to begin.
- [kCTFontDescriptorMatchingStalled](ctfontdescriptormatchingstate/stalled.md): A state that indicates that matching is stalled, such as while waiting for a server response.
- [kCTFontDescriptorMatchingWillBeginDownloading](ctfontdescriptormatchingstate/willbegindownloading.md): A state that indicates downloading is about to begin.
- [kCTFontDescriptorMatchingDownloading](ctfontdescriptormatchingstate/downloading.md): A state that indicates downloading is in progress.
- [kCTFontDescriptorMatchingDidFinishDownloading](ctfontdescriptormatchingstate/didfinishdownloading.md): A state that indicates downloading is done.
- [kCTFontDescriptorMatchingDidMatch](ctfontdescriptormatchingstate/didmatch.md): A state that indicates the font descriptor match is successful.
- [kCTFontDescriptorMatchingDidFailWithError](ctfontdescriptormatchingstate/didfailwitherror.md): A state that indicates an error.

## See Also

### Enumerations

- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.
