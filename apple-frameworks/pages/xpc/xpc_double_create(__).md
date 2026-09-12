> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_double_create(_:)](https://developer.apple.com/documentation/xpc/xpc_double_create(_:))

# xpc_double_create(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC double object.

## Declaration

```swift
func xpc_double_create(_ value: Double) -> xpc_object_t
```

## Parameters

- `value`: The floating point quantity which is to be boxed.

<a id="return-value"></a>

## Return Value

A new floating point object.

## See Also

### Number objects

- [xpc_double_get_value(\_:)](xpc_double_get_value%28__%29.md): Returns the underlying double-precision floating point value from an object.
- [xpc_int64_create(\_:)](xpc_int64_create%28__%29.md): Creates an XPC signed integer object.
- [xpc_int64_get_value(\_:)](xpc_int64_get_value%28__%29.md): Returns the underlying signed 64-bit integer value from an object.
- [xpc_uint64_create(\_:)](xpc_uint64_create%28__%29.md): Creates an XPC unsigned integer object.
- [xpc_uint64_get_value(\_:)](xpc_uint64_get_value%28__%29.md): Returns the underlying unsigned 64-bit integer value from an object.

# xpc_double_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC double object.

## Declaration

```objectivec
extern xpc_object_txpc_double_create(double value);
```

## Parameters

- `value`: The floating point quantity which is to be boxed.

<a id="return-value"></a>

## Return Value

A new floating point object.

## See Also

### Number objects

- [xpc_double_get_value](xpc_double_get_value%28__%29.md): Returns the underlying double-precision floating point value from an object.
- [xpc_int64_create](xpc_int64_create%28__%29.md): Creates an XPC signed integer object.
- [xpc_int64_get_value](xpc_int64_get_value%28__%29.md): Returns the underlying signed 64-bit integer value from an object.
- [xpc_uint64_create](xpc_uint64_create%28__%29.md): Creates an XPC unsigned integer object.
- [xpc_uint64_get_value](xpc_uint64_get_value%28__%29.md): Returns the underlying unsigned 64-bit integer value from an object.
