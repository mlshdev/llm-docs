> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxstartcallaction/init(call:handle:)](https://developer.apple.com/documentation/callkit/cxstartcallaction/init(call:handle:))

# init(call:handle:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action to start a call with the specified UUID to a recipient with the specified handle.

## Declaration

```swift
init(call callUUID: UUID, handle: CXHandle)
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object.
- `handle`: The handle for the receipient, such as a phone number or email address.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and handle.

## See Also

### Creating New Actions

- [init(coder:)](init%28coder_%29.md): Creates a new action to start a call with data in an unarchiver.

# initWithCallUUID:handle: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action to start a call with the specified UUID to a recipient with the specified handle.

## Declaration

```objectivec
- (instancetype) initWithCallUUID:(NSUUID *) callUUID handle:(CXHandle *) handle;
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object.
- `handle`: The handle for the receipient, such as a phone number or email address.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID and handle.

## See Also

### Creating New Actions

- [initWithCoder:](init%28coder_%29.md): Creates a new action to start a call with data in an unarchiver.
