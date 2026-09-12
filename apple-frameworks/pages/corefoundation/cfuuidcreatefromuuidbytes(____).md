> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuidcreatefromuuidbytes(_:_:)](https://developer.apple.com/documentation/corefoundation/cfuuidcreatefromuuidbytes(_:_:))

# CFUUIDCreateFromUUIDBytes(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFUUID object from raw UUID bytes.

## Declaration

```swift
func CFUUIDCreateFromUUIDBytes(_ alloc: CFAllocator!, _ bytes: CFUUIDBytes) -> CFUUID!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bytes`: Raw UUID bytes to use to create the CFUUID object.

<a id="return-value"></a>

## Return Value

A new CFUUID object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating CFUUID Objects

- [CFUUIDCreate(\_:)](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromString(\_:\_:)](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.

# CFUUIDCreateFromUUIDBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFUUID object from raw UUID bytes.

## Declaration

```objectivec
extern CFUUIDRefCFUUIDCreateFromUUIDBytes(CFAllocatorRef alloc, CFUUIDBytes bytes);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bytes`: Raw UUID bytes to use to create the CFUUID object.

<a id="return-value"></a>

## Return Value

A new CFUUID object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating CFUUID Objects

- [CFUUIDCreate](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromString](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateWithBytes](cfuuidcreatewithbytes%28__________________________________%29.md): Creates a CFUUID object from raw UUID bytes.
