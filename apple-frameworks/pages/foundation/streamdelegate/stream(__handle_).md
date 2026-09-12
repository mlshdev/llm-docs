> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamdelegate/stream(_:handle:)](https://developer.apple.com/documentation/foundation/streamdelegate/stream(_:handle:))

# stream(\_:handle:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate receives this message when a given event has occurred on a given stream.

## Declaration

```swift
optional func stream(_ aStream: Stream, handle eventCode: Stream.Event)
```

## Parameters

- `aStream`: The stream on which `streamEvent` occurred.
- `eventCode`: The stream event that occurred.

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

<a id="Discussion"></a>

## Discussion

The delegate receives this message only if `theStream` is scheduled on a run loop. The message is sent on the stream object’s thread. The delegate should examine `streamEvent` to determine the appropriate action it should take.

## See Also

### Related Documentation

- [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i)

# stream:handleEvent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate receives this message when a given event has occurred on a given stream.

## Declaration

```objectivec
- (void) stream:(NSStream *) aStream handleEvent:(NSStreamEvent) eventCode;
```

## Parameters

- `aStream`: The stream on which `streamEvent` occurred.
- `eventCode`: The stream event that occurred.

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

<a id="Discussion"></a>

## Discussion

The delegate receives this message only if `theStream` is scheduled on a run loop. The message is sent on the stream object’s thread. The delegate should examine `streamEvent` to determine the appropriate action it should take.

## See Also

### Related Documentation

- [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i)
