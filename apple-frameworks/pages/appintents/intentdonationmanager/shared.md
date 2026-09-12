> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmanager/shared](https://developer.apple.com/documentation/appintents/intentdonationmanager/shared)

# shared

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The shared instance of this class.

## Declaration

```swift
nonisolated(unsafe) static let shared: IntentDonationManager
```

<a id="discussion"></a>

## Discussion

Retrieve the shared donation manager and use it to donate app intents or delete existing donations that have become stale.
