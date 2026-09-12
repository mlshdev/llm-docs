> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/connectionwithreceiveport:sendport:](https://developer.apple.com/documentation/foundation/nsconnection/connectionwithreceiveport:sendport:)

# connectionWithReceivePort:sendPort:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an `NSConnection` object that communicates using given send and receive ports.

## Declaration

```objectivec
+ (instancetype) connectionWithReceivePort:(NSPort *) receivePort sendPort:(NSPort *) sendPort;
```

## Parameters

- `receivePort`: A receive port.
- `sendPort`: A send port.

<a id="return-value"></a>

## Return Value

An `NSConnection` object that communicates using `receivePort` and `sendPort`.

<a id="Discussion"></a>

## Discussion

See [initWithReceivePort:sendPort:](initwithreceiveport_sendport_.md) for more information.

## See Also

### Related Documentation

- [defaultConnection](defaultconnection.md): Deprecated. Returns the default `NSConnection` object for the current thread.

### Creating Instances

- [initWithReceivePort:sendPort:](initwithreceiveport_sendport_.md): Deprecated. Returns an `NSConnection` object initialized with given send and receive ports.
