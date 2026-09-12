> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxplaydtmfcallaction/init(call:digits:type:)](https://developer.apple.com/documentation/callkit/cxplaydtmfcallaction/init(call:digits:type:))

# init(call:digits:type:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as a specified type and sequence of digits.

## Declaration

```swift
init(call callUUID: UUID, digits: String, type: CXPlayDTMFCallAction.ActionType)
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object.
- `digits`: A sequence of digits.
- `type`: The type of the call action. For possible values, see [CXPlayDTMFCallAction.ActionType](actiontype.md).

<a id="return-value"></a>

## Return Value

<a id="Discussion"></a>

## Discussion

A new action for the specified call UUID, type, and digits.

## See Also

### Creating New Actions

- [init(coder:)](init%28coder_%29.md): Creates a new action to play dual-tone multifrequency (DTMF) tones with data in an unarchiver.

# initWithCallUUID:digits:type: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID, as well as a specified type and sequence of digits.

## Declaration

```objectivec
- (instancetype) initWithCallUUID:(NSUUID *) callUUID digits:(NSString *) digits type:(CXPlayDTMFCallActionType) type;
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object.
- `digits`: A sequence of digits.
- `type`: The type of the call action. For possible values, see [CXPlayDTMFCallActionType](actiontype.md).

<a id="return-value"></a>

## Return Value

<a id="Discussion"></a>

## Discussion

A new action for the specified call UUID, type, and digits.

## See Also

### Creating New Actions

- [initWithCoder:](init%28coder_%29.md): Creates a new action to play dual-tone multifrequency (DTMF) tones with data in an unarchiver.
