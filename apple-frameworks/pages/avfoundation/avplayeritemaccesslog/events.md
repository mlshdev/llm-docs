> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslog/events](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/events)

# events (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A chronologically ordered array of player item access log events.

## Declaration

```swift
var events: [AVPlayerItemAccessLogEvent] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains [AVPlayerItemAccessLogEvent](../avplayeritemaccesslogevent.md) objects that represent the chronological sequence of events contained in the access log.

This property isn’t observable. For more information about key-value observing, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Accessing log data

- [extendedLogData()](extendedlogdata%28%29.md): Returns a serialized representation of the access log in the Extended Log File Format.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): The string encoding of the extended log data.

# events (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A chronologically ordered array of player item access log events.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVPlayerItemAccessLogEvent *> * events;
```

<a id="Discussion"></a>

## Discussion

The array contains [AVPlayerItemAccessLogEvent](../avplayeritemaccesslogevent.md) objects that represent the chronological sequence of events contained in the access log.

This property isn’t observable. For more information about key-value observing, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Accessing log data

- [extendedLogData](extendedlogdata%28%29.md): Returns a serialized representation of the access log in the Extended Log File Format.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): The string encoding of the extended log data.
