> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_shmem_create(_:_:)](https://developer.apple.com/documentation/xpc/xpc_shmem_create(_:_:))

# xpc_shmem_create(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents the specified shared memory region.

## Declaration

```swift
func xpc_shmem_create(_ region: UnsafeMutableRawPointer, _ length: Int) -> xpc_object_t
```

## Parameters

- `region`: A pointer to a region of shared memory, created through a call to mmap(2) with the MAP_SHARED flag, which is to be boxed.
- `length`: The length of the region.

<a id="return-value"></a>

## Return Value

A new shared memory object.

<a id="Discussion"></a>

## Discussion

This API is NOT for making a private region of memory shareable. It is to allow for already-shareable regions of memory to be boxed in an XPC object. Do not pass a region allocated with `malloc(3)` or friends to this API.

## See Also

### Shared memory objects

- [xpc_shmem_map(\_:\_:)](xpc_shmem_map%28____%29.md): Maps the region that the XPC shared memory object boxes into the caller’s address space.

# xpc_shmem_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents the specified shared memory region.

## Declaration

```objectivec
extern xpc_object_txpc_shmem_create(void *region, size_t length);
```

## Parameters

- `region`: A pointer to a region of shared memory, created through a call to mmap(2) with the MAP_SHARED flag, which is to be boxed.
- `length`: The length of the region.

<a id="return-value"></a>

## Return Value

A new shared memory object.

<a id="Discussion"></a>

## Discussion

This API is NOT for making a private region of memory shareable. It is to allow for already-shareable regions of memory to be boxed in an XPC object. Do not pass a region allocated with `malloc(3)` or friends to this API.

## See Also

### Shared memory objects

- [xpc_shmem_map](xpc_shmem_map%28____%29.md): Maps the region that the XPC shared memory object boxes into the caller’s address space.
