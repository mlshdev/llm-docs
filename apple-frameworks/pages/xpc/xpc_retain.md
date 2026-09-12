> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_retain](https://developer.apple.com/documentation/xpc/xpc_retain)

# xpc_retain

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the reference count of an object.

## Declaration

```objectivec
extern xpc_object_txpc_retain(xpc_object_t object);
```

## Parameters

- `object`: The object which is to be manipulated.

<a id="return-value"></a>

## Return Value

The object which was given.

<a id="Discussion"></a>

## Discussion

Calls to [xpc_retain](xpc_retain.md) must be balanced with calls to [xpc_release](xpc_release.md) to avoid leaking memory.

## See Also

### Object life cycle

- [xpc_release](xpc_release.md): Decrements the reference count of an object.
