> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftyperef](https://developer.apple.com/documentation/corefoundation/cftyperef)

# CFTypeRef (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An untyped “generic” reference to any Core Foundation object.

## Declaration

```swift
typealias CFTypeRef = AnyObject
```

<a id="discussion"></a>

## Discussion

All other Core Foundation opaque types derive from `CFTypeRef`. The functions, callbacks, data types, and constants defined for CFType can be used by any derived opaque type. Hence, `CFTypeRef` functions are referred to as “polymorphic functions.” You use `CFTypeRef` functions to retain and release objects, to compare and inspect objects, get descriptions of objects and opaque types, and to get object allocators.

## Topics

### Memory Management

- [CFGetAllocator(\_:)](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.
- [CFGetRetainCount(\_:)](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.

### Determining Equality

- [CFEqual(\_:\_:)](cfequal%28____%29.md): Determines whether two Core Foundation objects are considered equal.

### Hashing

- [CFHash(\_:)](cfhash%28__%29.md): Returns a code that can be used to identify an object in a hashing structure.

### Miscellaneous Functions

- [CFCopyDescription(\_:)](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFCopyTypeIDDescription(\_:)](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFGetTypeID(\_:)](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
- [CFShow(\_:)](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.

### Data Types

- [CFHashCode](cfhashcode.md): A type for hash codes returned by the `CFHash` function.
- [CFTypeID](cftypeid.md): A type for unique, constant integer values that identify particular Core Foundation opaque types.

## See Also

### Related Documentation

- [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)
- [Core Foundation Design Concepts](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/CFDesignConcepts.html#//apple_ref/doc/uid/10000122i)

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFDateFormatterKey](cfdateformatterkey.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFLocaleKey](cflocalekey.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFStreamPropertyKey](cfstreampropertykey.md)

# CFTypeRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An untyped “generic” reference to any Core Foundation object.

## Declaration

```objectivec
typedef const void * CFTypeRef;
```

<a id="discussion"></a>

## Discussion

All other Core Foundation opaque types derive from `CFTypeRef`. The functions, callbacks, data types, and constants defined for CFType can be used by any derived opaque type. Hence, `CFTypeRef` functions are referred to as “polymorphic functions.” You use `CFTypeRef` functions to retain and release objects, to compare and inspect objects, get descriptions of objects and opaque types, and to get object allocators.

## Topics

### Memory Management

- [CFGetAllocator](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.
- [CFGetRetainCount](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.
- [CFMakeCollectable](cfmakecollectable.md): Makes a newly-allocated Core Foundation object eligible for garbage collection.
- [CFRelease](cfrelease.md): Releases a Core Foundation object.
- [CFRetain](cfretain.md): Retains a Core Foundation object.

### Determining Equality

- [CFEqual](cfequal%28____%29.md): Determines whether two Core Foundation objects are considered equal.

### Hashing

- [CFHash](cfhash%28__%29.md): Returns a code that can be used to identify an object in a hashing structure.

### Miscellaneous Functions

- [CFCopyDescription](cfcopydescription%28__%29.md): Returns a textual description of a Core Foundation object.
- [CFCopyTypeIDDescription](cfcopytypeiddescription%28__%29.md): Returns a textual description of a Core Foundation type, as identified by its type ID, which can be used when debugging.
- [CFGetTypeID](cfgettypeid%28__%29.md): Returns the unique identifier of an opaque type to which a Core Foundation object belongs.
- [CFShow](cfshow%28__%29.md): Prints a description of a Core Foundation object to stderr.

### Data Types

- [CFHashCode](cfhashcode.md): A type for hash codes returned by the `CFHash` function.
- [CFTypeID](cftypeid.md): A type for unique, constant integer values that identify particular Core Foundation opaque types.

## See Also

### Related Documentation

- [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)
- [Core Foundation Design Concepts](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/CFDesignConcepts.html#//apple_ref/doc/uid/10000122i)

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFDateFormatterKey](cfdateformatterkey.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFLocaleKey](cflocalekey.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CGFloat](cgfloat-c.typealias.md): The basic type for all floating-point values.
- [HRESULT](hresult.md)
- [LPVOID](lpvoid.md)
- [REFIID](refiid.md)
- [ULONG](ulong.md)
