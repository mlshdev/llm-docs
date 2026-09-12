> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportcoder/portcoderwithreceiveport:sendport:components:](https://developer.apple.com/documentation/foundation/nsportcoder/portcoderwithreceiveport:sendport:components:)

# portCoderWithReceivePort:sendPort:components:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Creates and returns a new `NSPortCoder` object.

## Declaration

```objectivec
+ (id) portCoderWithReceivePort:(NSPort *) rcvPort sendPort:(NSPort *) sndPort components:(NSArray *) comps;
```

## Parameters

- `rcvPort`: The receiver port.
- `sndPort`: The send port.
- `comps`: An array containing an encoded distributed objects message.

<a id="return-value"></a>

## Return Value

A new `NSPortCoder` object connected to the communication ports `rcvPort` and `sndPort`, with an encoded distributed objects message stored in `comps`.

## See Also

### Related Documentation

- [dispatch](dispatch.md): Deprecated. Processes and acts upon the distributed object message with which the receiver was initialized.
- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating an NSPortCoder Object

- [initWithReceivePort:sendPort:components:](initwithreceiveport_sendport_components_.md): Deprecated. Initializes and returns an `NSPortCoder` object.
