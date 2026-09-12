> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall/isoutgoing](https://developer.apple.com/documentation/callkit/cxcall/isoutgoing)

# isOutgoing (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call is outgoing.

## Declaration

```swift
var isOutgoing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

An outgoing call is a call initiated by the user, as opposed to an incoming call which is received by the telephony provider.

## See Also

### Accessing Call Attributes

- [uuid](uuid.md): The unique identifier for the call.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
- [isOnHold](isonhold.md): A Boolean value that indicates whether the call is on hold.

# outgoing (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call is outgoing.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isOutgoing) BOOL outgoing;
```

<a id="Discussion"></a>

## Discussion

An outgoing call is a call initiated by the user, as opposed to an incoming call which is received by the telephony provider.

## See Also

### Accessing Call Attributes

- [UUID](uuid.md): The unique identifier for the call.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
- [onHold](isonhold.md): A Boolean value that indicates whether the call is on hold.
