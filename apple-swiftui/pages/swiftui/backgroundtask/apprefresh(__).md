> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/backgroundtask/apprefresh(_:)

# appRefresh(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A task that updates your app’s state in the background for a matching identifier.

## Declaration

```swift
static func appRefresh(_ identifier: String) -> BackgroundTask<Void, Void>
```

## Parameters

- `identifier`: The identifier to match.

<a id="return-value"></a>

## Return Value

A background task that you can handle with your app or extension.
