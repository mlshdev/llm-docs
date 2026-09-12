> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdate](https://developer.apple.com/documentation/corefoundation/cfdate)

# CFDate (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFDate
```

<a id="Overview"></a>

## Overview

`CFDate` objects store dates and times that can be compared to other dates and times. `CFDate` objects are immutable—there is no mutable counterpart for this opaque type.

`CFDate` provides functions for creating dates, comparing dates, and computing intervals. You use the [CFDateCreate(\_:\_:)](cfdatecreate%28____%29.md) function to create `CFDate` objects. You use the [CFDateCompare(\_:\_:\_:)](cfdatecompare%28______%29.md) function to compare two dates, and the [CFDateGetTimeIntervalSinceDate(\_:\_:)](cfdategettimeintervalsincedate%28____%29.md) function to compute a time interval. Additional functions for managing dates and times are described in [Time Utilities](time-utilities.md)

`CFDate` is “toll-free bridged” with its Cocoa Foundation counterpart, [NSDate](../foundation/nsdate.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. In other words, in a method where you see an `NSDate *` parameter, you can pass in a `CFDateRef`, and in a function where you see a `CFDateRef` parameter, you can pass in an `NSDate` instance. This also applies to concrete subclasses of `NSDate`. See Interchangeable Data Types for more information on toll-free bridging.

## Topics

### CFDate Miscellaneous Functions

- [CFDateCompare(\_:\_:\_:)](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateCreate(\_:\_:)](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetAbsoluteTime(\_:)](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTimeIntervalSinceDate(\_:\_:)](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID()](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [Date and Time Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDatesAndTimes/CFDatesAndTimes.html#//apple_ref/doc/uid/10000125i)

### Opaque Types

- [CFAllocator](cfallocator.md)
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
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFDateRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFDate * CFDateRef;
```

<a id="Overview"></a>

## Overview

`CFDate` objects store dates and times that can be compared to other dates and times. `CFDate` objects are immutable—there is no mutable counterpart for this opaque type.

`CFDate` provides functions for creating dates, comparing dates, and computing intervals. You use the [CFDateCreate](cfdatecreate%28____%29.md) function to create `CFDate` objects. You use the [CFDateCompare](cfdatecompare%28______%29.md) function to compare two dates, and the [CFDateGetTimeIntervalSinceDate](cfdategettimeintervalsincedate%28____%29.md) function to compute a time interval. Additional functions for managing dates and times are described in [Time Utilities](time-utilities.md)

`CFDate` is “toll-free bridged” with its Cocoa Foundation counterpart, [NSDate](../foundation/nsdate.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. In other words, in a method where you see an `NSDate *` parameter, you can pass in a `CFDateRef`, and in a function where you see a `CFDateRef` parameter, you can pass in an `NSDate` instance. This also applies to concrete subclasses of `NSDate`. See Interchangeable Data Types for more information on toll-free bridging.

## Topics

### CFDate Miscellaneous Functions

- [CFDateCompare](cfdatecompare%28______%29.md): Compares two `CFDate` objects and returns a comparison result.
- [CFDateCreate](cfdatecreate%28____%29.md): Creates a `CFDate` object given an absolute time.
- [CFDateGetAbsoluteTime](cfdategetabsolutetime%28__%29.md): Returns a `CFDate` object’s absolute time.
- [CFDateGetTimeIntervalSinceDate](cfdategettimeintervalsincedate%28____%29.md): Returns the number of elapsed seconds between the given `CFDate` objects.
- [CFDateGetTypeID](cfdategettypeid%28%29.md): Returns the type identifier for the `CFDate` opaque type.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [Date and Time Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDatesAndTimes/CFDatesAndTimes.html#//apple_ref/doc/uid/10000125i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
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
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
