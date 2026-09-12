> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/foregroundcontinuableintent/needstocontinueinforegrounderror(_:continuation:)](https://developer.apple.com/documentation/appintents/foregroundcontinuableintent/needstocontinueinforegrounderror(_:continuation:))

# needsToContinueInForegroundError(\_:continuation:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 26.0) · iPadOS 16.4+ (deprecated in 26.0) · Mac Catalyst 16.4+ (deprecated in 26.0) · macOS 13.3+ (deprecated in 26.0) · tvOS 16.4+ (deprecated in 26.0) · visionOS · watchOS 9.4+ (deprecated in 26.0)

A method you call to ask a person to continue an intent’s action in the foreground after it encounters an error.

> Please include '.foreground(.dynamic)' in the 'supportedModes' of your app intent instead

## Declaration

```swift
func needsToContinueInForegroundError(_ dialog: IntentDialog? = nil, continuation: (@MainActor () async throws -> Void)? = nil) -> AppIntentError
```

<a id="discussion"></a>

## Discussion

Call this method when you need to stop performing the app intent and ask a person to continue execution in the foreground. Provide an optional continuation closure that runs on the main thread to update your app’s state after the person permits the action to continue in the foreground.
