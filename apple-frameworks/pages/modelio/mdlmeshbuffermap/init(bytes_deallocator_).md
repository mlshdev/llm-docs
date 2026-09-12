> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffermap/init(bytes:deallocator:)](https://developer.apple.com/documentation/modelio/mdlmeshbuffermap/init(bytes:deallocator:))

# init(bytes:deallocator:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a buffer map object to manage access to the specified memory.

## Declaration

```swift
init(bytes: UnsafeMutableRawPointer, deallocator: (() -> Void)? = nil)
```

## Parameters

- `bytes`: A pointer to the data buffer to be managed by the buffer map.
- `deallocator`: Model I/O calls this block when the buffer map object is deallocated. Use this block to unmap a shared buffer or perform other cleanup tasks.

  The block has no parameters and no return value.

<a id="return-value"></a>

## Return Value

A new buffer map object.

# initWithBytes:deallocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a buffer map object to manage access to the specified memory.

## Declaration

```objectivec
- (instancetype) initWithBytes:(void *) bytes deallocator:(void (^)()) deallocator;
```

## Parameters

- `bytes`: A pointer to the data buffer to be managed by the buffer map.
- `deallocator`: Model I/O calls this block when the buffer map object is deallocated. Use this block to unmap a shared buffer or perform other cleanup tasks.

  The block has no parameters and no return value.

<a id="return-value"></a>

## Return Value

A new buffer map object.
