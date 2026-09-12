> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentchoiceoption/cancel](https://developer.apple.com/documentation/appintents/intentchoiceoption/cancel)

# cancel

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A system-provided option that cancel the app intent.

## Declaration

```swift
static var cancel: IntentChoiceOption { get }
```

<a id="discussion"></a>

## Discussion

Selecting this option causes the `requestChoice(between:dialog:)` method to throw a cancellation error.
