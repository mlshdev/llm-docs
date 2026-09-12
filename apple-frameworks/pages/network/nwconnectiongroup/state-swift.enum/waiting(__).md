> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/state-swift.enum/waiting(_:)](https://developer.apple.com/documentation/network/nwconnectiongroup/state-swift.enum/waiting(_:))

# NWConnectionGroup.State.waiting(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The connection group is waiting for a network path change.

## Declaration

```swift
case waiting(NWError)
```

## See Also

### States

- [NWConnectionGroup.State.setup](setup.md): You have not yet started the connection group.
- [NWConnectionGroup.State.ready](ready.md): The connection group is joined, and ready to send and receive data.
- [NWConnectionGroup.State.failed(\_:)](failed%28__%29.md): The connection group encountered a fatal error.
- [NWConnectionGroup.State.cancelled](cancelled.md): The connection group has been canceled.
