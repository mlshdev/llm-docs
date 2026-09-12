> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilityaction(named:intent:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityaction(named:intent:))

# accessibilityAction(named:intent:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds an accessibility action labeled `name` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.

## Declaration

```swift
nonisolated func accessibilityAction<I>(named name: Text, intent: I) -> ModifiedContent<Content, Modifier> where I : AppIntent
```
