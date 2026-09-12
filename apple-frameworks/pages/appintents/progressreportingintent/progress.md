> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/progressreportingintent/progress](https://developer.apple.com/documentation/appintents/progressreportingintent/progress)

# progress

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An object representing the progress of the intent’s action.

## Declaration

```swift
var progress: Progress { get }
```

<a id="discussion"></a>

## Discussion

You can update  the progress as your action moves forward. Note that the system receives an update of the progress.

> **Warning**

> This progress is available only in the app intent’s [perform()](../appintent/perform%28%29.md) method. Trying to access the progress object outside of the `perform()` method results in a crash.
