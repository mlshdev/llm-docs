> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/error](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/error)

# LanguageModelSession.Error

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A failure caused by incorrect use of a language model session.

## Declaration

```swift
enum Error
```

## Topics

### Getting the session errors

- [LanguageModelSession.Error.concurrentRequests](error/concurrentrequests.md): The session received multiple concurrent requests.
- [LanguageModelSession.Error.transcriptMutationWhileResponding](error/transcriptmutationwhileresponding.md): A request mutated the session’s transcript while it was in progress.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [LanguageModelSession.ToolCallError](toolcallerror.md): An error that occurs while a language model is calling a tool.
- [LanguageModelSession.GenerationError](generationerror.md): Deprecated. An error that may occur while generating a response.
