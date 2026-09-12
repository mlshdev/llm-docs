> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuid](https://developer.apple.com/documentation/corefoundation/cfuuid)

# CFUUID (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFUUID
```

<a id="Overview"></a>

## Overview

CFUUID objects are used by plug-ins to uniquely identify types, interfaces, and factories. When creating a new type, host developers must generate UUIDs to identify the type as well as its interfaces and factories.

UUIDs (Universally Unique Identifiers), also known as GUIDs (Globally Unique Identifiers) or IIDs (Interface Identifiers), are 128-bit values designed to be unique.

The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`. The hex representation looks, as you might expect, like a list of numerical values preceded by `0x`. For example, `0x68, 0x75, 0x3A, 0x44, 0x4D, 0x6F, 0x12, 0x26, 0x9C, 0x60, 0x00, 0x50, 0xE4, 0xC0, 0x00, 0x67` . To use a UUID, you create it and then copy the resulting strings into your header and C language source files. Because a UUID is expressed as an array of bytes, there are no endianness considerations for different platforms.

You can create a CFUUID object using any one of the `CFUUIDCreate...` functions. Use the [CFUUIDGetConstantUUIDWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md) function if you want to declare a UUID constant in a `#define` statement. You can get the raw bytes of an existing CFUUID object using the [CFUUIDGetUUIDBytes(\_:)](cfuuidgetuuidbytes%28__%29.md) function.

## Topics

### Creating CFUUID Objects

- [CFUUIDCreate(\_:)](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromString(\_:\_:)](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateFromUUIDBytes(\_:\_:)](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
- [CFUUIDCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.

### Getting Information About CFUUID Objects

- [CFUUIDCreateString(\_:\_:)](cfuuidcreatestring%28____%29.md): Returns the string representation of a specified CFUUID object.
- [CFUUIDGetConstantUUIDWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md): Returns a CFUUID object from raw UUID bytes.
- [CFUUIDGetUUIDBytes(\_:)](cfuuidgetuuidbytes%28__%29.md): Returns the value of a UUID object as raw bytes.

### Getting the CFUUID Type Identifier

- [CFUUIDGetTypeID()](cfuuidgettypeid%28%29.md): Returns the type identifier for all CFUUID objects.

### Data Types

- [CFUUIDBytes](cfuuidbytes.md): A 128-bit struct that represents a UUID as raw bytes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

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
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFUUIDRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFUUID * CFUUIDRef;
```

<a id="Overview"></a>

## Overview

CFUUID objects are used by plug-ins to uniquely identify types, interfaces, and factories. When creating a new type, host developers must generate UUIDs to identify the type as well as its interfaces and factories.

UUIDs (Universally Unique Identifiers), also known as GUIDs (Globally Unique Identifiers) or IIDs (Interface Identifiers), are 128-bit values designed to be unique.

The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`. The hex representation looks, as you might expect, like a list of numerical values preceded by `0x`. For example, `0x68, 0x75, 0x3A, 0x44, 0x4D, 0x6F, 0x12, 0x26, 0x9C, 0x60, 0x00, 0x50, 0xE4, 0xC0, 0x00, 0x67` . To use a UUID, you create it and then copy the resulting strings into your header and C language source files. Because a UUID is expressed as an array of bytes, there are no endianness considerations for different platforms.

You can create a CFUUID object using any one of the `CFUUIDCreate...` functions. Use the [CFUUIDGetConstantUUIDWithBytes](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md) function if you want to declare a UUID constant in a `#define` statement. You can get the raw bytes of an existing CFUUID object using the [CFUUIDGetUUIDBytes](cfuuidgetuuidbytes%28__%29.md) function.

## Topics

### Creating CFUUID Objects

- [CFUUIDCreate](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromString](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateFromUUIDBytes](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
- [CFUUIDCreateWithBytes](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.

### Getting Information About CFUUID Objects

- [CFUUIDCreateString](cfuuidcreatestring%28____%29.md): Returns the string representation of a specified CFUUID object.
- [CFUUIDGetConstantUUIDWithBytes](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md): Returns a CFUUID object from raw UUID bytes.
- [CFUUIDGetUUIDBytes](cfuuidgetuuidbytes%28__%29.md): Returns the value of a UUID object as raw bytes.

### Getting the CFUUID Type Identifier

- [CFUUIDGetTypeID](cfuuidgettypeid%28%29.md): Returns the type identifier for all CFUUID objects.

### Data Types

- [CFUUIDBytes](cfuuidbytes.md): A 128-bit struct that represents a UUID as raw bytes.

## See Also

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
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
