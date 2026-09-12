> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationidentifier](https://developer.apple.com/documentation/appintents/intentdonationidentifier)

# IntentDonationIdentifier

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An opaque type that identifies a specific donation to the system.

## Declaration

```swift
struct IntentDonationIdentifier
```

<a id="overview"></a>

## Overview

When you donate an app intent, the system returns a unique `IntentDonationIdentifier` instance so you can refer to that donation later. Use that instance to identify the donation later, and to delete it using an [IntentDonationManager](intentdonationmanager.md) if the action no longer applies.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Donation management

- [IntentDonationManager](intentdonationmanager.md): A type you use to teach the system about the actions people take using your app.
- [IntentDonationMatchingPredicate](intentdonationmatchingpredicate.md): A type you use to specify previously donated app intents.
