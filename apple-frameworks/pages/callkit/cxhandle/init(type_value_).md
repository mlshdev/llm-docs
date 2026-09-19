> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxhandle/init(type:value:)

# init(type:value:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new handle of a given type with the specified value.

## Declaration

```swift
init(type: CXHandle.HandleType, value: String)
```

## Parameters

- `type`: The type of handle. For possible values, see
- `value`: The value for the handle.

<a id="return-value"></a>

## Return Value

A new handle with the specified type and value.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

# initWithType:value: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new handle of a given type with the specified value.

## Declaration

```objectivec
- (instancetype) initWithType:(CXHandleType) type value:(NSString *) value;
```

## Parameters

- `type`: The type of handle. For possible values, see
- `value`: The value for the handle.

<a id="return-value"></a>

## Return Value

A new handle with the specified type and value.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.
