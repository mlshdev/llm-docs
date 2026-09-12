> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/portmessage/sendport](https://developer.apple.com/documentation/foundation/portmessage/sendport)

# sendPort (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

For an outgoing message, returns the port the receiver will send itself through. For an incoming message, returns the port replies to the receiver should be sent through.

## Declaration

```swift
var sendPort: Port? { get }
```

<a id="return-value"></a>

## Return Value

For an outgoing message, the port the receiver will send itself through when it receives a [send(before:)](send%28before_%29.md) message. For an incoming message, the port replies to the receiver should be sent through.

## See Also

### Getting the Ports

- [receivePort](receiveport.md): For an outgoing message, returns the port on which replies to the receiver will arrive. For an incoming message, returns the port the receiver did arrive on.

# sendPort (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

For an outgoing message, returns the port the receiver will send itself through. For an incoming message, returns the port replies to the receiver should be sent through.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSPort * sendPort;
```

<a id="return-value"></a>

## Return Value

For an outgoing message, the port the receiver will send itself through when it receives a [sendBeforeDate:](send%28before_%29.md) message. For an incoming message, the port replies to the receiver should be sent through.

## See Also

### Getting the Ports

- [receivePort](receiveport.md): For an outgoing message, returns the port on which replies to the receiver will arrive. For an incoming message, returns the port the receiver did arrive on.
