> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/siritipuiview/setintent(intent:)](https://developer.apple.com/documentation/appintents/siritipuiview/setintent(intent:))

# setIntent(intent:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS

Sets an `AppIntent` for this view. This must be called before presenting the view.

## Declaration

```swift
@MainActor @preconcurrency final func setIntent<Intent>(intent: Intent) where Intent : AppIntent
```

<a id="discussion"></a>

## Discussion

The provided `AppIntent` must be a valid App Shortcut for this view to work correctly.
