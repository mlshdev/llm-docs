> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetmutedcallaction/init(call:muted:)](https://developer.apple.com/documentation/callkit/cxsetmutedcallaction/init(call:muted:))

# init(call:muted:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as whether the call is muted.

## Declaration

```swift
convenience init(call callUUID: UUID, muted: Bool)
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object of the action.
- `muted`: Whether the call is muted.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and whether the call is muted.

## See Also

### Creating New Actions

- [init(coder:)](init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.

# initWithCallUUID:muted: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as whether the call is muted.

## Declaration

```objectivec
- (instancetype) initWithCallUUID:(NSUUID *) callUUID muted:(BOOL) muted;
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object of the action.
- `muted`: Whether the call is muted.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and whether the call is muted.

## See Also

### Creating New Actions

- [initWithCoder:](init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.
