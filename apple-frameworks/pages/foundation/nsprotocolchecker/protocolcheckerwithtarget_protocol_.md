> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsprotocolchecker/protocolcheckerwithtarget:protocol:](https://developer.apple.com/documentation/foundation/nsprotocolchecker/protocolcheckerwithtarget:protocol:)

# protocolCheckerWithTarget:protocol:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Allocates and initializes an `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.

## Declaration

```objectivec
+ (instancetype) protocolCheckerWithTarget:(NSObject *) anObject protocol:(Protocol *) aProtocol;
```

<a id="Discussion"></a>

## Discussion

Thus, the checker can be vended in lieu of `anObject` to restrict the messages that can be sent to `anObject`. Returns the new instance.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating a checker

- [initWithTarget:protocol:](init%28target_protocol_%29.md): Initializes a newly allocated `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.
