> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/backgroundtask/urlsession(matching:)](https://developer.apple.com/documentation/swiftui/backgroundtask/urlsession(matching:))

# urlSession(matching:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A task that responds to background URL sessions matching the given predicate.

## Declaration

```swift
static func urlSession(matching: @escaping @Sendable (String) -> Bool) -> BackgroundTask<String, Void>
```

## Parameters

- `matching`: The predicate to match.

<a id="return-value"></a>

## Return Value

A background task that you can handle with your app or extension.

## See Also

### Responding to URL sessions

- [urlSession](urlsession.md): A task that responds to background URL sessions.
- [urlSession(\_:)](urlsession%28__%29.md): A task that responds to background URL sessions matching the given identifier.
