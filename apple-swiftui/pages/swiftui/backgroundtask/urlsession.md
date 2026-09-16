> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/backgroundtask/urlsession

# urlSession

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A task that responds to background URL sessions.

## Declaration

```swift
static var urlSession: BackgroundTask<String, Void> { get }
```

## See Also

### Responding to URL sessions

- [urlSession(\_:)](urlsession%28__%29.md): A task that responds to background URL sessions matching the given identifier.
- [urlSession(matching:)](urlsession%28matching_%29.md): A task that responds to background URL sessions matching the given predicate.
