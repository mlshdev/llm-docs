> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall/hasended](https://developer.apple.com/documentation/callkit/cxcall/hasended)

# hasEnded (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call has ended.

## Declaration

```swift
var hasEnded: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A call is considered ended when the user disconnects or all other callers disconnect.

## See Also

### Accessing Call Attributes

- [uuid](uuid.md): The unique identifier for the call.
- [isOutgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [isOnHold](isonhold.md): A Boolean value that indicates whether the call is on hold.

# hasEnded (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call has ended.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL hasEnded;
```

<a id="Discussion"></a>

## Discussion

A call is considered ended when the user disconnects or all other callers disconnect.

## See Also

### Accessing Call Attributes

- [UUID](uuid.md): The unique identifier for the call.
- [outgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [onHold](isonhold.md): A Boolean value that indicates whether the call is on hold.
