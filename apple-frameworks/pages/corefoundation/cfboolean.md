> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfboolean](https://developer.apple.com/documentation/corefoundation/cfboolean)

# CFBoolean (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFBoolean
```

<a id="Overview"></a>

## Overview

CFBoolean objects are used to wrap boolean values for use in Core Foundation property lists and collection types.

## Topics

### CFBoolean Miscellaneous Functions

- [CFBooleanGetTypeID()](cfbooleangettypeid%28%29.md): Returns the Core Foundation type identifier for the CFBoolean opaque type.
- [CFBooleanGetValue(\_:)](cfbooleangetvalue%28__%29.md): Returns the value of a CFBoolean object as a standard C type `Boolean`.

### Constants

- [Boolean Values](boolean-values.md): CFBoolean evaluates to either true or false values where `kCFBooleanTrue` is the true, and `kCFBooleanFalse` is the false value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFBooleanRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFBoolean * CFBooleanRef;
```

<a id="Overview"></a>

## Overview

CFBoolean objects are used to wrap boolean values for use in Core Foundation property lists and collection types.

## Topics

### CFBoolean Miscellaneous Functions

- [CFBooleanGetTypeID](cfbooleangettypeid%28%29.md): Returns the Core Foundation type identifier for the CFBoolean opaque type.
- [CFBooleanGetValue](cfbooleangetvalue%28__%29.md): Returns the value of a CFBoolean object as a standard C type `Boolean`.

### Constants

- [Boolean Values](boolean-values.md): CFBoolean evaluates to either true or false values where `kCFBooleanTrue` is the true, and `kCFBooleanFalse` is the false value.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
