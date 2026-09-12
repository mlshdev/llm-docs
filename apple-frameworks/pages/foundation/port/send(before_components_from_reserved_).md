> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/send(before:components:from:reserved:)](https://developer.apple.com/documentation/foundation/port/send(before:components:from:reserved:))

# send(before:components:from:reserved:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is provided for subclasses that have custom types of `NSPort`.

## Declaration

```swift
func send(before limitDate: Date, components: NSMutableArray?, from receivePort: Port?, reserved headerSpaceReserved: Int) -> Bool
```

## Parameters

- `limitDate`: The last instant that a message may be sent.
- `components`: The message components.
- `receivePort`: The receive port.
- `headerSpaceReserved`: The number of bytes reserved for the header.

<a id="Discussion"></a>

## Discussion

`NSConnection` calls this method at the appropriate times. This method should not be called directly. This method could raise an `NSInvalidSendPortException`, `NSInvalidReceivePortException`, or an `NSPortSendException`, depending on the type of send port and the type of error.

## See Also

### Setting information

- [send(before:msgid:components:from:reserved:)](send%28before_msgid_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [reservedSpaceLength](reservedspacelength.md): The number of bytes of space reserved by the receiver for sending data.

# sendBeforeDate:components:from:reserved: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is provided for subclasses that have custom types of `NSPort`.

## Declaration

```objectivec
- (BOOL) sendBeforeDate:(NSDate *) limitDate components:(NSMutableArray *) components from:(NSPort *) receivePort reserved:(NSUInteger) headerSpaceReserved;
```

## Parameters

- `limitDate`: The last instant that a message may be sent.
- `components`: The message components.
- `receivePort`: The receive port.
- `headerSpaceReserved`: The number of bytes reserved for the header.

<a id="Discussion"></a>

## Discussion

`NSConnection` calls this method at the appropriate times. This method should not be called directly. This method could raise an `NSInvalidSendPortException`, `NSInvalidReceivePortException`, or an `NSPortSendException`, depending on the type of send port and the type of error.

## See Also

### Setting information

- [sendBeforeDate:msgid:components:from:reserved:](send%28before_msgid_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [reservedSpaceLength](reservedspacelength.md): The number of bytes of space reserved by the receiver for sending data.
