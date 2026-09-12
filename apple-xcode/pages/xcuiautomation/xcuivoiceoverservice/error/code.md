> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuivoiceoverservice/error/code](https://developer.apple.com/documentation/xcuiautomation/xcuivoiceoverservice/error/code)

# XCUIVoiceOverService.Error.Code (Swift)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Error codes for XCUIVoiceOverService operations.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [XCUIVoiceOverService.Error.Code.failedToStart](code/failedtostart.md): VoiceOver daemon did not start within the timeout.
- [XCUIVoiceOverService.Error.Code.failedToStop](code/failedtostop.md): VoiceOver daemon did not stop within the timeout after @c disable().
- [XCUIVoiceOverService.Error.Code.noSpeech](code/nospeech.md): VoiceOver did not produce any speech within the timeout.
- [XCUIVoiceOverService.Error.Code.notRunning](code/notrunning.md): A navigation or speech method was called without first calling @c enable().

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCUIVoiceOverServiceError (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Error codes for XCUIVoiceOverService operations.

## Declaration

```objectivec
enum XCUIVoiceOverServiceError : NSInteger;
```

## Topics

### Enumeration Cases

- [XCUIVoiceOverServiceErrorFailedToStart](code/failedtostart.md): VoiceOver daemon did not start within the timeout.
- [XCUIVoiceOverServiceErrorFailedToStop](code/failedtostop.md): VoiceOver daemon did not stop within the timeout after @c disable().
- [XCUIVoiceOverServiceErrorNoSpeech](code/nospeech.md): VoiceOver did not produce any speech within the timeout.
- [XCUIVoiceOverServiceErrorNotRunning](code/notrunning.md): A navigation or speech method was called without first calling @c enable().
