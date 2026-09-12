> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocator](https://developer.apple.com/documentation/corefoundation/cfallocator)

# CFAllocator (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFAllocator
```

<a id="Overview"></a>

## Overview

CFAllocator is an opaque type that allocates and deallocates memory for you. You never have to allocate, reallocate, or deallocate memory directly for Core Foundation objects—and rarely should you. You pass CFAllocator objects into functions that create objects; these functions have “Create” embedded in their names, for example, `CFStringCreateWithPascalString`. The creation functions use the allocators to allocate memory for the objects they create.

## Topics

### Creating an Allocator

- [CFAllocatorCreate(\_:\_:)](cfallocatorcreate%28____%29.md): Creates an allocator object.

### Managing Memory with an Allocator

- [CFAllocatorAllocate(\_:\_:\_:)](cfallocatorallocate%28______%29.md): Allocates memory using the specified allocator.
- [CFAllocatorDeallocate(\_:\_:)](cfallocatordeallocate%28____%29.md): Deallocates a block of memory with a given allocator.
- [CFAllocatorGetPreferredSizeForSize(\_:\_:\_:)](cfallocatorgetpreferredsizeforsize%28______%29.md): Obtains the number of bytes likely to be allocated upon a specific request.
- [CFAllocatorReallocate(\_:\_:\_:\_:)](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.

### Getting and Setting the Default Allocator

- [CFAllocatorGetDefault()](cfallocatorgetdefault%28%29.md): Gets the default allocator object for the current thread.
- [CFAllocatorSetDefault(\_:)](cfallocatorsetdefault%28__%29.md): Sets the given allocator as the default for the current thread.

### Getting an Allocator’s Context

- [CFAllocatorGetContext(\_:\_:)](cfallocatorgetcontext%28____%29.md): Obtains the context of the specified allocator or of the default allocator.

### Getting the CFAllocator Type ID

- [CFAllocatorGetTypeID()](cfallocatorgettypeid%28%29.md): Returns the type identifier for the CFAllocator opaque type.

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorCopyDescriptionCallBack](cfallocatorcopydescriptioncallback.md): A prototype for a function callback that provides a description of the specified data.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReallocateCallBack](cfallocatorreallocatecallback.md): A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.
- [CFAllocatorReleaseCallBack](cfallocatorreleasecallback.md): A prototype for a function callback that releases the given data.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.

### Data Types

- [CFAllocatorContext](cfallocatorcontext.md): A structure that defines the context or operating environment for an allocator (CFAllocator) object. Every Core Foundation allocator object must have a context defined for it.

### Constants

- [Predefined Allocators](predefined-allocators.md): CFAllocator provides the following predefined allocators. In general, you should use `kCFAllocatorDefault` unless one of the special circumstances exist below.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)

### Opaque Types

- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFAllocatorRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFAllocator * CFAllocatorRef;
```

<a id="Overview"></a>

## Overview

CFAllocator is an opaque type that allocates and deallocates memory for you. You never have to allocate, reallocate, or deallocate memory directly for Core Foundation objects—and rarely should you. You pass CFAllocator objects into functions that create objects; these functions have “Create” embedded in their names, for example, `CFStringCreateWithPascalString`. The creation functions use the allocators to allocate memory for the objects they create.

## Topics

### Creating an Allocator

- [CFAllocatorCreate](cfallocatorcreate%28____%29.md): Creates an allocator object.

### Managing Memory with an Allocator

- [CFAllocatorAllocate](cfallocatorallocate%28______%29.md): Allocates memory using the specified allocator.
- [CFAllocatorDeallocate](cfallocatordeallocate%28____%29.md): Deallocates a block of memory with a given allocator.
- [CFAllocatorGetPreferredSizeForSize](cfallocatorgetpreferredsizeforsize%28______%29.md): Obtains the number of bytes likely to be allocated upon a specific request.
- [CFAllocatorReallocate](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.

### Getting and Setting the Default Allocator

- [CFAllocatorGetDefault](cfallocatorgetdefault%28%29.md): Gets the default allocator object for the current thread.
- [CFAllocatorSetDefault](cfallocatorsetdefault%28__%29.md): Sets the given allocator as the default for the current thread.

### Getting an Allocator’s Context

- [CFAllocatorGetContext](cfallocatorgetcontext%28____%29.md): Obtains the context of the specified allocator or of the default allocator.

### Getting the CFAllocator Type ID

- [CFAllocatorGetTypeID](cfallocatorgettypeid%28%29.md): Returns the type identifier for the CFAllocator opaque type.

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorCopyDescriptionCallBack](cfallocatorcopydescriptioncallback.md): A prototype for a function callback that provides a description of the specified data.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReallocateCallBack](cfallocatorreallocatecallback.md): A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.
- [CFAllocatorReleaseCallBack](cfallocatorreleasecallback.md): A prototype for a function callback that releases the given data.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.

### Data Types

- [CFAllocatorContext](cfallocatorcontext.md): A structure that defines the context or operating environment for an allocator (CFAllocator) object. Every Core Foundation allocator object must have a context defined for it.

### Constants

- [Predefined Allocators](predefined-allocators.md): CFAllocator provides the following predefined allocators. In general, you should use `kCFAllocatorDefault` unless one of the special circumstances exist below.

## See Also

### Related Documentation

- [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)

### Opaque Types

- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
