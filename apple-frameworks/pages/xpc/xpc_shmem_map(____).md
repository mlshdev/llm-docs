> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_shmem_map(_:_:)](https://developer.apple.com/documentation/xpc/xpc_shmem_map(_:_:))

# xpc_shmem_map(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Maps the region that the XPC shared memory object boxes into the caller’s address space.

## Declaration

```swift
func xpc_shmem_map(_ xshmem: xpc_object_t, _ region: UnsafeMutablePointer<UnsafeMutableRawPointer?>) -> Int
```

## Parameters

- `xshmem`: The shared memory object to be examined.
- `region`: On return, this will point to the region at which the shared memory was mapped.

<a id="return-value"></a>

## Return Value

The length of the region that was mapped. If the mapping failed, 0 is returned.

<a id="Discussion"></a>

## Discussion

The resulting region must be disposed of with `munmap(2)`.

It is the responsibility of the caller to manage protections on the new region accordingly.

## See Also

### Shared memory objects

- [xpc_shmem_create(\_:\_:)](xpc_shmem_create%28____%29.md): Creates an XPC object that represents the specified shared memory region.

# xpc_shmem_map (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Maps the region that the XPC shared memory object boxes into the caller’s address space.

## Declaration

```objectivec
extern size_t xpc_shmem_map(xpc_object_t xshmem, void **region);
```

## Parameters

- `xshmem`: The shared memory object to be examined.
- `region`: On return, this will point to the region at which the shared memory was mapped.

<a id="return-value"></a>

## Return Value

The length of the region that was mapped. If the mapping failed, 0 is returned.

<a id="Discussion"></a>

## Discussion

The resulting region must be disposed of with `munmap(2)`.

It is the responsibility of the caller to manage protections on the new region accordingly.

## See Also

### Shared memory objects

- [xpc_shmem_create](xpc_shmem_create%28____%29.md): Creates an XPC object that represents the specified shared memory region.
