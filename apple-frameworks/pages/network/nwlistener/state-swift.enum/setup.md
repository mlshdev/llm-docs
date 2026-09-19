> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwlistener/state-swift.enum/setup

# NWListener.State.setup

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The listener has been initialized but not started.

## Declaration

```swift
case setup
```

## See Also

### States

- [NWListener.State.waiting(\_:)](waiting%28__%29.md): The listener is waiting for a network to become available.
- [NWListener.State.ready](ready.md): The listener is running and able to receive incoming connections.
- [NWListener.State.failed(\_:)](failed%28__%29.md): The listener has encountered a fatal error.
- [NWListener.State.cancelled](cancelled.md): The listener has been canceled.
