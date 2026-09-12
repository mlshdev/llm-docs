> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportcoder/initwithreceiveport:sendport:components:](https://developer.apple.com/documentation/foundation/nsportcoder/initwithreceiveport:sendport:components:)

# initWithReceivePort:sendPort:components:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Initializes and returns an `NSPortCoder` object.

## Declaration

```objectivec
- (id) initWithReceivePort:(NSPort *) rcvPort sendPort:(NSPort *) sndPort components:(NSArray *) comps;
```

## Parameters

- `rcvPort`: The receive port.
- `sndPort`: The send port.
- `comps`: An array containing an encoded distributed objects message.

<a id="Discussion"></a>

## Discussion

Initializes a newly allocated `NSPortCoder` object connected to the communication ports `rcvPort` and `sndPort`, with an encoded distributed objects message stored in `comps`.

## See Also

### Related Documentation

- [dispatch](dispatch.md): Deprecated. Processes and acts upon the distributed object message with which the receiver was initialized.

### Creating an NSPortCoder Object

- [portCoderWithReceivePort:sendPort:components:](portcoderwithreceiveport_sendport_components_.md): Deprecated. Creates and returns a new `NSPortCoder` object.
