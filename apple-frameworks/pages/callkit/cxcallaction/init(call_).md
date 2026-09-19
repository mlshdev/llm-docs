> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxcallaction/init(call:)

# init(call:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID.

## Declaration

```swift
init(call callUUID: UUID)
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID.

## See Also

### Creating New Call Actions

- [init(coder:)](init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.

# initWithCallUUID: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new action for a call identified by a given UUID.

## Declaration

```objectivec
- (instancetype) initWithCallUUID:(NSUUID *) callUUID;
```

## Parameters

- `callUUID`: The unique identifier for the associated [CXCall](../cxcall.md) object.

<a id="return-value"></a>

## Return Value

A new action for the specified call UUID.

## See Also

### Creating New Call Actions

- [initWithCoder:](init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.
