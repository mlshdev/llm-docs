> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/portmessage/init(send:receive:components:)](https://developer.apple.com/documentation/foundation/portmessage/init(send:receive:components:))

# init(send:receive:components:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated `NSPortMessage` object to send given data on a given port and to receiver replies on another given port.

## Declaration

```swift
init(send sendPort: Port?, receive replyPort: Port?, components: [Any]?)
```

## Parameters

- `sendPort`: The port on which the message is sent.
- `replyPort`: The port on which replies to the message arrive.
- `components`: The data to send in the message. `components` should contain only `NSData` and `NSPort` objects, and the contents of the `NSData` objects should be in network byte order.

<a id="return-value"></a>

## Return Value

An `NSPortMessage` object initialized to send `components` on `sendPort` and to receiver replies on `receivePort`.

<a id="Discussion"></a>

## Discussion

An `NSPortMessage` object initialized with this method has a message identifier of 0.

This is the designated initializer for `NSPortMessage`.

## See Also

### Related Documentation

- [msgid](msgid.md): Returns the identifier for the receiver.
- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

# initWithSendPort:receivePort:components: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated `NSPortMessage` object to send given data on a given port and to receiver replies on another given port.

## Declaration

```objectivec
- (instancetype) initWithSendPort:(NSPort *) sendPort receivePort:(NSPort *) replyPort components:(NSArray *) components;
```

## Parameters

- `sendPort`: The port on which the message is sent.
- `replyPort`: The port on which replies to the message arrive.
- `components`: The data to send in the message. `components` should contain only `NSData` and `NSPort` objects, and the contents of the `NSData` objects should be in network byte order.

<a id="return-value"></a>

## Return Value

An `NSPortMessage` object initialized to send `components` on `sendPort` and to receiver replies on `receivePort`.

<a id="Discussion"></a>

## Discussion

An `NSPortMessage` object initialized with this method has a message identifier of 0.

This is the designated initializer for `NSPortMessage`.

## See Also

### Related Documentation

- [msgid](msgid.md): Returns the identifier for the receiver.
- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
