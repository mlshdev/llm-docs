> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatacreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatacreate(_:_:_:))

# CFDataCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable CFData object using data copied from a specified byte buffer.

## Declaration

```swift
func CFDataCreate(_ allocator: CFAllocator!, _ bytes: UnsafePointer<UInt8>!, _ length: CFIndex) -> CFData!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: A pointer to the byte buffer that contains the raw data to be copied into `theData`.
- `length`: The number of bytes in the buffer (`bytes`).

<a id="return-value"></a>

## Return Value

A new CFData object, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You must supply a count of the bytes in the buffer. This function always copies the bytes in the provided buffer into internal storage.

## See Also

### Creating a CFData Object

- [CFDataCreateCopy(\_:\_:)](cfdatacreatecopy%28____%29.md): Creates an immutable copy of a CFData object.
- [CFDataCreateWithBytesNoCopy(\_:\_:\_:\_:)](cfdatacreatewithbytesnocopy%28________%29.md): Creates an immutable CFData object from an external (client-owned) byte buffer.

# CFDataCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable CFData object using data copied from a specified byte buffer.

## Declaration

```objectivec
extern CFDataRefCFDataCreate(CFAllocatorRef allocator, const UInt8 *bytes, CFIndex length);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: A pointer to the byte buffer that contains the raw data to be copied into `theData`.
- `length`: The number of bytes in the buffer (`bytes`).

<a id="return-value"></a>

## Return Value

A new CFData object, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You must supply a count of the bytes in the buffer. This function always copies the bytes in the provided buffer into internal storage.

## See Also

### Creating a CFData Object

- [CFDataCreateCopy](cfdatacreatecopy%28____%29.md): Creates an immutable copy of a CFData object.
- [CFDataCreateWithBytesNoCopy](cfdatacreatewithbytesnocopy%28________%29.md): Creates an immutable CFData object from an external (client-owned) byte buffer.
