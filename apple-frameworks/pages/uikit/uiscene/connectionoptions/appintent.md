> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/appintent](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/appintent)

# appIntent

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The `AppIntent` that triggered scene creation `AppIntentSceneDelegate.scene(_:willPerform:)` will always be called after scene connection

## Declaration

```swift
@MainActor @preconcurrency var appIntent: (any UISceneAppIntent)? { get }
```
