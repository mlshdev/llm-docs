> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/dispatchwithcomponents:](https://developer.apple.com/documentation/foundation/nsconnection/dispatchwithcomponents:)

# dispatchWithComponents:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13)

Allows subclasses to ask a connection object to dispatch component data.

## Declaration

```objectivec
- (void) dispatchWithComponents:(NSArray *) components;
```

## Parameters

- `components`: Distributed Objects component data.

<a id="Discussion"></a>

## Discussion

[NSPort](../port.md) subclasses should use this method to ask a connection object to dispatch Distributed Objects component data received over the wire. This will decode the data, authenticate, and send the message.

## See Also

### Getting Ports

- [receivePort](receiveport-c.property.md): Deprecated. The port on which the receiver receives incoming network messages.
- [sendPort](sendport-c.property.md): Deprecated. The port that the connection sends outgoing network messages through.
