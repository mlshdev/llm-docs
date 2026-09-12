> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatacreatewithbytesnocopy(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatacreatewithbytesnocopy(_:_:_:_:))

# CFDataCreateWithBytesNoCopy(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable CFData object from an external (client-owned) byte buffer.

## Declaration

```swift
func CFDataCreateWithBytesNoCopy(_ allocator: CFAllocator!, _ bytes: UnsafePointer<UInt8>!, _ length: CFIndex, _ bytesDeallocator: CFAllocator!) -> CFData!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: A pointer to the byte buffer to be used as the backing store of the CFData object.
- `length`: The number of bytes in the buffer `bytes`.
- `bytesDeallocator`: The allocator to use to deallocate the external buffer when the CFData object is deallocated. If the default allocator is suitable for this purpose, pass `NULL` or kCFAllocatorDefault. If you do not want the created CFData object to deallocate the buffer (that is, you assume responsibility for freeing it yourself), pass kCFAllocatorNull.

<a id="return-value"></a>

## Return Value

A new CFData object, or `NULL` if there was a problem creating the object. On a `NULL` return, the `bytes` buffer is left intact. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates an immutable CFData object from a buffer of unstructured bytes. Unless the situation warrants otherwise, the created object does not copy the external buffer to internal storage but instead uses the buffer as its backing store. However, you should never count on the object using the external buffer since it could copy the buffer to internal storage or might even dump the buffer altogether and use alternative means for storing the bytes.

## See Also

### Creating a CFData Object

- [CFDataCreate(\_:\_:\_:)](cfdatacreate%28______%29.md): Creates an immutable CFData object using data copied from a specified byte buffer.
- [CFDataCreateCopy(\_:\_:)](cfdatacreatecopy%28____%29.md): Creates an immutable copy of a CFData object.

# CFDataCreateWithBytesNoCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable CFData object from an external (client-owned) byte buffer.

## Declaration

```objectivec
extern CFDataRefCFDataCreateWithBytesNoCopy(CFAllocatorRef allocator, const UInt8 *bytes, CFIndex length, CFAllocatorRef bytesDeallocator);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: A pointer to the byte buffer to be used as the backing store of the CFData object.
- `length`: The number of bytes in the buffer `bytes`.
- `bytesDeallocator`: The allocator to use to deallocate the external buffer when the CFData object is deallocated. If the default allocator is suitable for this purpose, pass `NULL` or kCFAllocatorDefault. If you do not want the created CFData object to deallocate the buffer (that is, you assume responsibility for freeing it yourself), pass kCFAllocatorNull.

<a id="return-value"></a>

## Return Value

A new CFData object, or `NULL` if there was a problem creating the object. On a `NULL` return, the `bytes` buffer is left intact. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates an immutable CFData object from a buffer of unstructured bytes. Unless the situation warrants otherwise, the created object does not copy the external buffer to internal storage but instead uses the buffer as its backing store. However, you should never count on the object using the external buffer since it could copy the buffer to internal storage or might even dump the buffer altogether and use alternative means for storing the bytes.

## See Also

### Creating a CFData Object

- [CFDataCreate](cfdatacreate%28______%29.md): Creates an immutable CFData object using data copied from a specified byte buffer.
- [CFDataCreateCopy](cfdatacreatecopy%28____%29.md): Creates an immutable copy of a CFData object.
