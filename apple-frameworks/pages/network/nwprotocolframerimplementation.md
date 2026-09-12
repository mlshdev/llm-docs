> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframerimplementation](https://developer.apple.com/documentation/network/nwprotocolframerimplementation)

# NWProtocolFramerImplementation

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol to which your classes can conform in order to implement a custom framing protocol.

## Declaration

```swift
protocol NWProtocolFramerImplementation : AnyObject
```

## Topics

### Handling Instance Lifetime

- [init(framer:)](nwprotocolframerimplementation/init%28framer_%29.md): Initializes your custom framing protocol for use in one connection attempt.
- [start(framer:)](nwprotocolframerimplementation/start%28framer_%29.md): Requests that your protocol set up its state and begin a handshake, if necessary.
- [NWProtocolFramer.StartResult](nwprotocolframer/startresult.md): Results that you send to indicate the disposition of your protocol after receiving the call to start.
- [wakeup(framer:)](nwprotocolframerimplementation/wakeup%28framer_%29.md): Delivers a scheduled wakeup event.
- [stop(framer:)](nwprotocolframerimplementation/stop%28framer_%29.md): Requests that your protocol send any final messages to close the connection.
- [cleanup(framer:)](nwprotocolframerimplementation/cleanup%28framer_%29.md): Indicates that your protocol should clean up all allocations before being deallocated.
- [label](nwprotocolframerimplementation/label.md): A label defined by your custom protocol for use in debugging.

### Handling Data

- [handleOutput(framer:message:messageLength:isComplete:)](nwprotocolframerimplementation/handleoutput%28framer_message_messagelength_iscomplete_%29.md): Notifies your protocol about a new outbound message.
- [handleInput(framer:)](nwprotocolframerimplementation/handleinput%28framer_%29.md): Notifies your protocol that new inbound data is available to parse.

## See Also

### Implementing Framer Protocols

- [NWProtocolFramer.Instance](nwprotocolframer/instance.md): An object that represents a single instance of your custom protocol running in a connection.
