> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall/uuid](https://developer.apple.com/documentation/callkit/cxcall/uuid)

# uuid (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier for the call.

## Declaration

```swift
var uuid: UUID { get }
```

## See Also

### Accessing Call Attributes

- [isOutgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
- [isOnHold](isonhold.md): A Boolean value that indicates whether the call is on hold.

# UUID (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier for the call.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * UUID;
```

## See Also

### Accessing Call Attributes

- [outgoing](isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](hasended.md): A Boolean value that indicates whether the call has ended.
- [onHold](isonhold.md): A Boolean value that indicates whether the call is on hold.
