> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/portmessage/send(before:)](https://developer.apple.com/documentation/foundation/portmessage/send(before:))

# send(before:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attempts to send the message before the specified date.

## Declaration

```swift
func send(before date: Date) -> Bool
```

## Parameters

- `date`: The instant before which the message should be sent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful, otherwise [false](https://developer.apple.com/documentation/swift/false) (for example, if the operation times out).

<a id="Discussion"></a>

## Discussion

If an error other than a time out occurs, this method could raise an `NSInvalidSendPortException`, `NSInvalidReceivePortException`, or an `NSPortSendException`, depending on the type of send port and the type of error.

If the message cannot be sent immediately, the sending thread blocks until either the message is sent or `aDate` is reached. Sent messages are queued to minimize blocking, but failure can occur if multiple messages are sent to a port faster than the port’s owner can receive them, causing the queue to fill up. Therefore, select a value for `aDate` that provides enough time for the message to be processed before the next message is sent. See the [Port](../port.md) class specification for information on receiving a port message.

# sendBeforeDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attempts to send the message before the specified date.

## Declaration

```objectivec
- (BOOL) sendBeforeDate:(NSDate *) date;
```

## Parameters

- `date`: The instant before which the message should be sent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful, otherwise [false](https://developer.apple.com/documentation/swift/false) (for example, if the operation times out).

<a id="Discussion"></a>

## Discussion

If an error other than a time out occurs, this method could raise an `NSInvalidSendPortException`, `NSInvalidReceivePortException`, or an `NSPortSendException`, depending on the type of send port and the type of error.

If the message cannot be sent immediately, the sending thread blocks until either the message is sent or `aDate` is reached. Sent messages are queued to minimize blocking, but failure can occur if multiple messages are sent to a port faster than the port’s owner can receive them, causing the queue to fill up. Therefore, select a value for `aDate` that provides enough time for the message to be processed before the next message is sent. See the [NSPort](../port.md) class specification for information on receiving a port message.
