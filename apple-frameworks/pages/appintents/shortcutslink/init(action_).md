> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/shortcutslink/init(action:)

# init(action:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a link that launches Shortcuts and then executes the specified closure.

## Declaration

```swift
@MainActor @preconcurrency init(action: @escaping () -> Void = {})
```
