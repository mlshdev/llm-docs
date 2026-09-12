> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteraction/interactiontimeout](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteraction/interactiontimeout)

# interactionTimeout (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The timeout, in seconds, after the first key stroke. If set to `0`, the reader-defined default timeout is used. `0` by default.

## Declaration

```swift
var interactionTimeout: TimeInterval { get set }
```

## See Also

### Configuring Timeout

- [initialTimeout](initialtimeout.md): The timeout, in seconds, for initial interaction. If set to `0`, the reader-defined default timeout is used. `0` by default.

# interactionTimeout (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The timeout, in seconds, after the first key stroke. If set to `0`, the reader-defined default timeout is used. `0` by default.

## Declaration

```objectivec
@property NSTimeInterval interactionTimeout;
```

## See Also

### Configuring Timeout

- [initialTimeout](initialtimeout.md): The timeout, in seconds, for initial interaction. If set to `0`, the reader-defined default timeout is used. `0` by default.
