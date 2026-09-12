> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall/isonhold](https://developer.apple.com/documentation/callkit/cxcall/isonhold)

# isOnHold (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call is on hold.

## Declaration

```swift
var isOnHold: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When a caller places the call on hold, callers are unable to communicate with one another until the holding caller removes the call from hold.

## See Also

### Accessing Call Attributes

- [uuid](uuid.md): The unique identifier for the call.
- [isOutgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.

# onHold (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call is on hold.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isOnHold) BOOL onHold;
```

<a id="Discussion"></a>

## Discussion

When a caller places the call on hold, callers are unable to communicate with one another until the holding caller removes the call from hold.

## See Also

### Accessing Call Attributes

- [UUID](uuid.md): The unique identifier for the call.
- [outgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
