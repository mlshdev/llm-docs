> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentmodes/current/cancontinueinforeground](https://developer.apple.com/documentation/appintents/intentmodes/current/cancontinueinforeground)

# canContinueInForeground

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether running the app intent in the foreground is possible.

## Declaration

```swift
var canContinueInForeground: Bool { get }
```

<a id="discussion"></a>

## Discussion

Check the value of this property to determine if running the app intent in the foreground is supported in the current context. Typically, you check this value if your app intent supports both foreground and background runtime modes, and need to switch from background to foreground.
