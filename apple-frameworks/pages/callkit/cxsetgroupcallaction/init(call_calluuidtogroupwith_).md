> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetgroupcallaction/init(call:calluuidtogroupwith:)](https://developer.apple.com/documentation/callkit/cxsetgroupcallaction/init(call:calluuidtogroupwith:))

# init(call:callUUIDToGroupWith:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as a call to group with identified by another UUID.

## Declaration

```swift
init(call callUUID: UUID, callUUIDToGroupWith: UUID?)
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object of the action.
- `callUUIDToGroupWith`: The unique identifier of a [CXCall](../cxcall.md) object for the call associated with the action to group with.

  If `nil`, the the call associated with the receiver leaves any group it’s currently a member of.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and call UUID to group with.

## See Also

### Creating New Actions

- [init(coder:)](init%28coder_%29.md): Creates a new action to group calls with data in an unarchiver.

# initWithCallUUID:callUUIDToGroupWith: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as a call to group with identified by another UUID.

## Declaration

```objectivec
- (instancetype) initWithCallUUID:(NSUUID *) callUUID callUUIDToGroupWith:(NSUUID *) callUUIDToGroupWith;
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object of the action.
- `callUUIDToGroupWith`: The unique identifier of a [CXCall](../cxcall.md) object for the call associated with the action to group with.

  If `nil`, the the call associated with the receiver leaves any group it’s currently a member of.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and call UUID to group with.

## See Also

### Creating New Actions

- [initWithCoder:](init%28coder_%29.md): Creates a new action to group calls with data in an unarchiver.
