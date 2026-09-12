> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentcancellationreason](https://developer.apple.com/documentation/appintents/intentcancellationreason)

# IntentCancellationReason

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Reasons for the cancellation of an app intent’s operation.

## Declaration

```swift
struct IntentCancellationReason
```

<a id="overview"></a>

## Overview

This type contains the possible reasons for the cancellation of an app intent. You don’t create instances of this type yourself. Instead, you receive a value in the cancellation handler you pass to the [withIntentCancellationHandler(operation:onCancel:isolation:)](cancellableintent/withintentcancellationhandler%28operation_oncancel_isolation_%29.md) method when running your app intent’s code. Use the reason to make decisions about how to respond to the cancellation.

## Topics

### Type Properties

- [timeout](intentcancellationreason/timeout.md): An option that indicates the app intent exceeded the allowed time limit without reporting progress.
- [userCancelled](intentcancellationreason/usercancelled.md): An option that indicates someone explicitly canceled the intent.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cancelling the intent

- [withIntentCancellationHandler(operation:onCancel:isolation:)](cancellableintent/withintentcancellationhandler%28operation_oncancel_isolation_%29.md): Runs an operation with a cancellation handler that receives a cancellation reason.
