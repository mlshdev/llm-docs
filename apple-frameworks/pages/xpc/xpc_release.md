> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_release](https://developer.apple.com/documentation/xpc/xpc_release)

# xpc_release

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the reference count of an object.

## Declaration

```objectivec
extern void xpc_release(xpc_object_t object);
```

## Parameters

- `object`: The object which is to be manipulated.

<a id="Discussion"></a>

## Discussion

The caller must take care to balance retains and releases. When creating or retaining XPC objects, the creator obtains a reference on the object. Thus, it is the caller’s responsibility to call [xpc_release](xpc_release.md) on those objects when they are no longer needed.

## See Also

### Object life cycle

- [xpc_retain](xpc_retain.md): Increments the reference count of an object.
