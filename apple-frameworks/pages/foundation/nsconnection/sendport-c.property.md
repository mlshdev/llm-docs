> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/sendport-c.property](https://developer.apple.com/documentation/foundation/nsconnection/sendport-c.property)

# sendPort

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The port that the connection sends outgoing network messages through.

## Declaration

```objectivec
@property (retain, readonly) NSPort * sendPort;
```

<a id="Discussion"></a>

## Discussion

You can inspect this object for debugging purposes or use it to create another `NSConnection` object, but shouldn’t use it to send or receive messages explicitly. Don’t set the delegate of the send port—it already has a delegate established by the `NSConnection` object.

## See Also

### Related Documentation

- [initWithReceivePort:sendPort:](initwithreceiveport_sendport_.md): Deprecated. Returns an `NSConnection` object initialized with given send and receive ports.

### Getting Ports

- [receivePort](receiveport-c.property.md): Deprecated. The port on which the receiver receives incoming network messages.
- [dispatchWithComponents:](dispatchwithcomponents_.md): Deprecated. Allows subclasses to ask a connection object to dispatch component data.
