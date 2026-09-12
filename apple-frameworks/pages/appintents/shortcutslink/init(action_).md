> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/shortcutslink/init(action:)](https://developer.apple.com/documentation/appintents/shortcutslink/init(action:))

# init(action:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a link that launches Shortcuts and then executes the specified closure.

## Declaration

```swift
@MainActor @preconcurrency init(action: @escaping () -> Void = {})
```
