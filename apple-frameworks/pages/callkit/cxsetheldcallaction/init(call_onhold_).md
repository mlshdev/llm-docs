> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetheldcallaction/init(call:onhold:)](https://developer.apple.com/documentation/callkit/cxsetheldcallaction/init(call:onhold:))

# init(call:onHold:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as whether the call is on hold.

## Declaration

```swift
init(call callUUID: UUID, onHold: Bool)
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object of the action.
- `onHold`: Whether the call is on hold.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and whether the call is placed on hold.

## See Also

### Creating New Actions

- [init(coder:)](init%28coder_%29.md): Creates a new action to place a call on hold with data in an unarchiver.

# initWithCallUUID:onHold: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as whether the call is on hold.

## Declaration

```objectivec
- (instancetype) initWithCallUUID:(NSUUID *) callUUID onHold:(BOOL) onHold;
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object of the action.
- `onHold`: Whether the call is on hold.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and whether the call is placed on hold.

## See Also

### Creating New Actions

- [initWithCoder:](init%28coder_%29.md): Creates a new action to place a call on hold with data in an unarchiver.
