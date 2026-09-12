> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/backgroundtask/apprefresh(_:)](https://developer.apple.com/documentation/swiftui/backgroundtask/apprefresh(_:))

# appRefresh(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A task that updates your app’s state in the background for a matching identifier.

## Declaration

```swift
static func appRefresh(_ identifier: String) -> BackgroundTask<Void, Void>
```

<a id="return-value"></a>

## Return Value

A background task that you can handle with your app or extension.
