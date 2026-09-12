> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuidcreate(_:)](https://developer.apple.com/documentation/corefoundation/cfuuidcreate(_:))

# CFUUIDCreate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a Universally Unique Identifier (UUID) object.

## Declaration

```swift
func CFUUIDCreate(_ alloc: CFAllocator!) -> CFUUID!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.

<a id="return-value"></a>

## Return Value

A new CFUUID object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating CFUUID Objects

- [CFUUIDCreateFromString(\_:\_:)](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateFromUUIDBytes(\_:\_:)](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
- [CFUUIDCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.

# CFUUIDCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a Universally Unique Identifier (UUID) object.

## Declaration

```objectivec
extern CFUUIDRefCFUUIDCreate(CFAllocatorRef alloc);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.

<a id="return-value"></a>

## Return Value

A new CFUUID object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating CFUUID Objects

- [CFUUIDCreateFromString](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateFromUUIDBytes](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
- [CFUUIDCreateWithBytes](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.
