> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatacreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatacreatecopy(_:_:))

# CFDataCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable copy of a CFData object.

## Declaration

```swift
func CFDataCreateCopy(_ allocator: CFAllocator!, _ theData: CFData!) -> CFData!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theData`: The CFData object to copy.

<a id="return-value"></a>

## Return Value

An immutable copy of `theData`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The resulting object has the same byte contents as the original object, but it is always immutable. If the specified allocator and the allocator of the original object are the same, and the string is already immutable, this function may simply increment the retain count without making a true copy. To the caller, however, the resulting object is a true immutable copy, except the operation was more efficient.

Use this function when you need to pass a CFData object into another function by value (not reference).

## See Also

### Creating a CFData Object

- [CFDataCreate(\_:\_:\_:)](cfdatacreate%28______%29.md): Creates an immutable CFData object using data copied from a specified byte buffer.
- [CFDataCreateWithBytesNoCopy(\_:\_:\_:\_:)](cfdatacreatewithbytesnocopy%28________%29.md): Creates an immutable CFData object from an external (client-owned) byte buffer.

# CFDataCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable copy of a CFData object.

## Declaration

```objectivec
extern CFDataRefCFDataCreateCopy(CFAllocatorRef allocator, CFDataRef theData);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theData`: The CFData object to copy.

<a id="return-value"></a>

## Return Value

An immutable copy of `theData`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The resulting object has the same byte contents as the original object, but it is always immutable. If the specified allocator and the allocator of the original object are the same, and the string is already immutable, this function may simply increment the retain count without making a true copy. To the caller, however, the resulting object is a true immutable copy, except the operation was more efficient.

Use this function when you need to pass a CFData object into another function by value (not reference).

## See Also

### Creating a CFData Object

- [CFDataCreate](cfdatacreate%28______%29.md): Creates an immutable CFData object using data copied from a specified byte buffer.
- [CFDataCreateWithBytesNoCopy](cfdatacreatewithbytesnocopy%28________%29.md): Creates an immutable CFData object from an external (client-owned) byte buffer.
