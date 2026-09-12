> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsprotocolchecker/init(target:protocol:)](https://developer.apple.com/documentation/foundation/nsprotocolchecker/init(target:protocol:))

# init(target:protocol:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.

## Declaration

```swift
init(target anObject: NSObject, protocol aProtocol: Protocol)
```

<a id="Discussion"></a>

## Discussion

Thus, the checker can be vended in lieu of `anObject` to restrict the messages that can be sent to `anObject`. If `anObject` is allowed to be freed or dereferenced by clients, the `free` method should be included in `aProtocol`.

# initWithTarget:protocol: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.

## Declaration

```objectivec
- (instancetype) initWithTarget:(NSObject *) anObject protocol:(Protocol *) aProtocol;
```

<a id="Discussion"></a>

## Discussion

Thus, the checker can be vended in lieu of `anObject` to restrict the messages that can be sent to `anObject`. If `anObject` is allowed to be freed or dereferenced by clients, the `free` method should be included in `aProtocol`.

## See Also

### Creating a checker

- [protocolCheckerWithTarget:protocol:](protocolcheckerwithtarget_protocol_.md): Allocates and initializes an `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.
