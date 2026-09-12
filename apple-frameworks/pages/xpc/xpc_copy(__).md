> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_copy(_:)](https://developer.apple.com/documentation/xpc/xpc_copy(_:))

# xpc_copy(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the object.

## Declaration

```swift
func xpc_copy(_ object: xpc_object_t) -> xpc_object_t?
```

## Parameters

- `object`: The object to copy.

<a id="return-value"></a>

## Return Value

The new object. `NULL` if the object type does not support copying or if sufficient memory for the copy could not be allocated. Service objects do not support copying.

<a id="Discussion"></a>

## Discussion

When called on an array or dictionary, [xpc_copy(\_:)](xpc_copy%28__%29.md) will perform a deep copy.

The object returned is not necessarily guaranteed to be a new object, and whether it is will depend on the implementation of the object being copied.

## See Also

### Copying

- [xpc_copy_description(\_:)](xpc_copy_description%28__%29.md): Copies a debug string that describes the object.

# xpc_copy (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the object.

## Declaration

```objectivec
extern xpc_object_txpc_copy(xpc_object_t object);
```

## Parameters

- `object`: The object to copy.

<a id="return-value"></a>

## Return Value

The new object. `NULL` if the object type does not support copying or if sufficient memory for the copy could not be allocated. Service objects do not support copying.

<a id="Discussion"></a>

## Discussion

When called on an array or dictionary, [xpc_copy](xpc_copy%28__%29.md) will perform a deep copy.

The object returned is not necessarily guaranteed to be a new object, and whether it is will depend on the implementation of the object being copied.

## See Also

### Copying

- [xpc_copy_description](xpc_copy_description%28__%29.md): Copies a debug string that describes the object.
