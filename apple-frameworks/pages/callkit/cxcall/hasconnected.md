> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall/hasconnected](https://developer.apple.com/documentation/callkit/cxcall/hasconnected)

# hasConnected (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call has connected.

## Declaration

```swift
var hasConnected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A call is considered connected when both caller and callee can start communicating.

## See Also

### Accessing Call Attributes

- [uuid](uuid.md): The unique identifier for the call.
- [isOutgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
- [isOnHold](isonhold.md): A Boolean value that indicates whether the call is on hold.

# hasConnected (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call has connected.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL hasConnected;
```

<a id="Discussion"></a>

## Discussion

A call is considered connected when both caller and callee can start communicating.

## See Also

### Accessing Call Attributes

- [UUID](uuid.md): The unique identifier for the call.
- [outgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
- [onHold](isonhold.md): A Boolean value that indicates whether the call is on hold.
