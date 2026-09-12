> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/instance](https://developer.apple.com/documentation/network/nwprotocolframer/instance)

# NWProtocolFramer.Instance

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a single instance of your custom protocol running in a connection.

## Declaration

```swift
final class Instance
```

<a id="overview"></a>

## Overview

All interaction between your protocol and the connection occurs through this object.

## Topics

### Writing Output

- [parseOutput(minimumIncompleteLength:maximumLength:parse:)](instance/parseoutput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of output data while inside your output handler.
- [writeOutput(data:)](instance/writeoutput%28data_%29-ydvk.md): Sends arbitrary output data from your protocol to the next protocol.
- [writeOutputNoCopy(length:)](instance/writeoutputnocopy%28length_%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [passThroughOutput()](instance/passthroughoutput%28%29.md): Indicates that your protocol no longer needs to handle output data.

### Delivering Input

- [parseInput(minimumIncompleteLength:maximumLength:parse:)](instance/parseinput%28minimumincompletelength_maximumlength_parse_%29.md): Examines the content of input data while in your input handler.
- [deliverInput(data:message:isComplete:)](instance/deliverinput%28data_message_iscomplete_%29.md): Delivers an inbound message containing arbitrary data from your protocol to the application.
- [deliverInputNoCopy(length:message:isComplete:)](instance/deliverinputnocopy%28length_message_iscomplete_%29.md): Delivers an inbound message containing a specific number of next received bytes.
- [passThroughInput()](instance/passthroughinput%28%29.md): Indicates that your protocol no longer needs to handle input data.

### Managing Instance Lifetime

- [markReady()](instance/markready%28%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [markFailed(error:)](instance/markfailed%28error_%29.md): Indicates to a connection that your protocol has encountered an error, or has gracefully closed.
- [prependApplicationProtocol(options:)](instance/prependapplicationprotocol%28options_%29.md): Dynamically adds another protocol that will run above your protocol after your protocol calls [markReady()](instance/markready%28%29.md).

### Inspecting Instance Properties

- [remote](instance/remote.md): The remote endpoint of the connection in which your protocol is running.
- [local](instance/local.md): The local endpoint of the connection in which your protocol is running.
- [parameters](instance/parameters.md): The parameters of the connection in which your protocol is running.

### Handling Asynchronous Events

- [async(execute:)](instance/async%28execute_%29.md): Requests that a block be executed on the connection’s internal scheduling context.
- [scheduleWakeup(wakeupTime:)](instance/schedulewakeup%28wakeuptime_%29.md): Requests that [wakeup(framer:)](../nwprotocolframerimplementation/wakeup%28framer_%29.md) be called on your protocol at a specific time in the future.
- [NWProtocolFramer.Instance.WakeupTime](instance/wakeuptime.md): Times at which to schedule a protocol wakeup.

### Instance Properties

- [options](instance/options.md)

### Instance Methods

- [prependApplicationProtocolIgnoringReady(options:)](instance/prependapplicationprotocolignoringready%28options_%29.md): Dynamically add a protocol to a connection establishment attempt “above” the framer protocol. This means that the protocol above will start running once the framer becomes ready by calling markReady(). This can only be used with framers that return a value of willMarkReady to their start handlers. An example of using this functionality is adding a security protocol, like TLS, above a framer once that framer completes its initial handshake.
- [writeOutput(data:)](instance/writeoutput%28data_%29-9axn3.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing Framer Protocols

- [NWProtocolFramerImplementation](../nwprotocolframerimplementation.md): A protocol to which your classes can conform in order to implement a custom framing protocol.
