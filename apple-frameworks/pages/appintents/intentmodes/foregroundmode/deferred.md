> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentmodes/foregroundmode/deferred](https://developer.apple.com/documentation/appintents/intentmodes/foregroundmode/deferred)

# deferred

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An option to bring the app to the foreground while running the intent’s action or shortly before the action completes.

## Declaration

```swift
static var deferred: IntentModes.ForegroundMode { get }
```

<a id="discussion"></a>

## Discussion

This option ensures the transition of the app to the foreground. Call the `AppIntent/continueInForeground(_:alwaysConfirm:) ` or [needsToContinueInForegroundError(\_:alwaysConfirm:)](../../appintent/needstocontinueinforegrounderror%28__alwaysconfirm_%29.md) method from your intent’s [perform()](../../appintent/perform%28%29.md) method to transition to the foreground at the time you choose. If you don’t call one of these methods, the system transitions the app to the foreground at the end of your [perform()](../../appintent/perform%28%29.md) method.
