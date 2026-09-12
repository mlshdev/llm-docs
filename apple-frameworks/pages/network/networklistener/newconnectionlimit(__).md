> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener/newconnectionlimit(_:)](https://developer.apple.com/documentation/network/networklistener/newconnectionlimit(_:))

# newConnectionLimit(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure the listener’s new connection limit.

## Declaration

```swift
final func newConnectionLimit(_ limit: Int) -> Self
```

## Parameters

- `limit`: The new connection limit.

<a id="discussion"></a>

## Discussion

Use the value NWListener.InfiniteConnectionLimit to disable connection limits.

If the value is not NWListener.InfiniteConnectionLimit, the value will be decremented by 1 every time a new connection is received. When the value reaches 0, the new connection handler will no longer be invoked until the the limit is increased.
