> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_fd_dup(_:)](https://developer.apple.com/documentation/xpc/xpc_fd_dup(_:))

# xpc_fd_dup(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a file descriptor that is equivalent to the one that the specified file descriptor object boxes.

## Declaration

```swift
func xpc_fd_dup(_ xfd: xpc_object_t) -> Int32
```

## Parameters

- `xfd`: The file descriptor object which is to be examined.

<a id="return-value"></a>

## Return Value

A file descriptor that is equivalent to the one originally given to [xpc_fd_create(\_:)](xpc_fd_create%28__%29.md). If the descriptor could not be created, -1 is returned.

<a id="Discussion"></a>

## Discussion

Multiple invocations of [xpc_fd_dup(\_:)](xpc_fd_dup%28__%29.md) will not return the same file descriptor number, but they will return descriptors that are equivalent, as though they had been created by `dup(2)`.

The caller is responsible for calling `close(2)` on the returned descriptor.

## See Also

### File Descriptor objects

- [xpc_fd_create(\_:)](xpc_fd_create%28__%29.md): Creates an XPC object that represents a POSIX file descriptor.

# xpc_fd_dup (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a file descriptor that is equivalent to the one that the specified file descriptor object boxes.

## Declaration

```objectivec
extern int xpc_fd_dup(xpc_object_t xfd);
```

## Parameters

- `xfd`: The file descriptor object which is to be examined.

<a id="return-value"></a>

## Return Value

A file descriptor that is equivalent to the one originally given to [xpc_fd_create](xpc_fd_create%28__%29.md). If the descriptor could not be created, -1 is returned.

<a id="Discussion"></a>

## Discussion

Multiple invocations of [xpc_fd_dup](xpc_fd_dup%28__%29.md) will not return the same file descriptor number, but they will return descriptors that are equivalent, as though they had been created by `dup(2)`.

The caller is responsible for calling `close(2)` on the returned descriptor.

## See Also

### File Descriptor objects

- [xpc_fd_create](xpc_fd_create%28__%29.md): Creates an XPC object that represents a POSIX file descriptor.
