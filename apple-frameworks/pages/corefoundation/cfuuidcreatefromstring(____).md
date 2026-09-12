> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuidcreatefromstring(_:_:)](https://developer.apple.com/documentation/corefoundation/cfuuidcreatefromstring(_:_:))

# CFUUIDCreateFromString(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFUUID object for a specified string.

## Declaration

```swift
func CFUUIDCreateFromString(_ alloc: CFAllocator!, _ uuidStr: CFString!) -> CFUUID!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `uuidStr`: A string containing a UUID. The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`.

<a id="return-value"></a>

## Return Value

A new CFUUID object, or if a CFUUID object of the same value already exists, the existing instance with its reference count incremented. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating CFUUID Objects

- [CFUUIDCreate(\_:)](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromUUIDBytes(\_:\_:)](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
- [CFUUIDCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.

# CFUUIDCreateFromString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFUUID object for a specified string.

## Declaration

```objectivec
extern CFUUIDRefCFUUIDCreateFromString(CFAllocatorRef alloc, CFStringRef uuidStr);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `uuidStr`: A string containing a UUID. The standard format for UUIDs represented in ASCII is a string punctuated by hyphens, for example `68753A44-4D6F-1226-9C60-0050E4C00067`.

<a id="return-value"></a>

## Return Value

A new CFUUID object, or if a CFUUID object of the same value already exists, the existing instance with its reference count incremented. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating CFUUID Objects

- [CFUUIDCreate](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromUUIDBytes](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
- [CFUUIDCreateWithBytes](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.
