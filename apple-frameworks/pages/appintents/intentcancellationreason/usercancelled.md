> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentcancellationreason/usercancelled](https://developer.apple.com/documentation/appintents/intentcancellationreason/usercancelled)

# userCancelled

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

An option that indicates someone explicitly canceled the intent.

## Declaration

```swift
static var userCancelled: IntentCancellationReason { get }
```

<a id="discussion"></a>

## Discussion

While an app intent’s task runs, system interfaces such as Siri, Live Activities, and Shortcuts can show UI with the current progress. These interfaces also include a way to cancel the task. This option reflects direct cancellation by a person using one of these interfaces.
