> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/siritipview/init(intent:isvisible:)

# init(intent:isVisible:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a `SiriTipView` for the associated action that displays when the binding to a Boolean value is true .

## Declaration

```swift
nonisolated init<Intent>(intent: Intent, isVisible: Binding<Bool>? = nil) where Intent : AppIntent
```
