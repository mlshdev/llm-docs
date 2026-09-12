> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuidcreatewithbytes(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfuuidcreatewithbytes(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# CFUUIDCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFUUID object from raw UUID bytes.

## Declaration

```swift
func CFUUIDCreateWithBytes(_ alloc: CFAllocator!, _ byte0: UInt8, _ byte1: UInt8, _ byte2: UInt8, _ byte3: UInt8, _ byte4: UInt8, _ byte5: UInt8, _ byte6: UInt8, _ byte7: UInt8, _ byte8: UInt8, _ byte9: UInt8, _ byte10: UInt8, _ byte11: UInt8, _ byte12: UInt8, _ byte13: UInt8, _ byte14: UInt8, _ byte15: UInt8) -> CFUUID!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `byte0`: Raw byte number `0`.
- `byte1`: Raw byte number `1`.
- `byte2`: Raw byte number `2`.
- `byte3`: Raw byte number `3`.
- `byte4`: Raw byte number `4`.
- `byte5`: Raw byte number `5`.
- `byte6`: Raw byte number `6`.
- `byte7`: Raw byte number `7`.
- `byte8`: Raw byte number `8`.
- `byte9`: Raw byte number `9`.
- `byte10`: Raw byte number `10`.
- `byte11`: Raw byte number `11`.
- `byte12`: Raw byte number `12`.
- `byte13`: Raw byte number `13`.
- `byte14`: Raw byte number `14`.
- `byte15`: Raw byte number `15`.

<a id="return-value"></a>

## Return Value

A new CFUUID object, or, if a CFUUID object of the same value already exists, the existing instance with its reference count incremented. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

.

## See Also

### Creating CFUUID Objects

- [CFUUIDCreate(\_:)](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromString(\_:\_:)](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateFromUUIDBytes(\_:\_:)](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.

# CFUUIDCreateWithBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFUUID object from raw UUID bytes.

## Declaration

```objectivec
extern CFUUIDRefCFUUIDCreateWithBytes(CFAllocatorRef alloc, UInt8 byte0, UInt8 byte1, UInt8 byte2, UInt8 byte3, UInt8 byte4, UInt8 byte5, UInt8 byte6, UInt8 byte7, UInt8 byte8, UInt8 byte9, UInt8 byte10, UInt8 byte11, UInt8 byte12, UInt8 byte13, UInt8 byte14, UInt8 byte15);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFUUID object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `byte0`: Raw byte number `0`.
- `byte1`: Raw byte number `1`.
- `byte2`: Raw byte number `2`.
- `byte3`: Raw byte number `3`.
- `byte4`: Raw byte number `4`.
- `byte5`: Raw byte number `5`.
- `byte6`: Raw byte number `6`.
- `byte7`: Raw byte number `7`.
- `byte8`: Raw byte number `8`.
- `byte9`: Raw byte number `9`.
- `byte10`: Raw byte number `10`.
- `byte11`: Raw byte number `11`.
- `byte12`: Raw byte number `12`.
- `byte13`: Raw byte number `13`.
- `byte14`: Raw byte number `14`.
- `byte15`: Raw byte number `15`.

<a id="return-value"></a>

## Return Value

A new CFUUID object, or, if a CFUUID object of the same value already exists, the existing instance with its reference count incremented. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

.

## See Also

### Creating CFUUID Objects

- [CFUUIDCreate](cfuuidcreate%28__%29.md): Creates a Universally Unique Identifier (UUID) object.
- [CFUUIDCreateFromString](cfuuidcreatefromstring%28____%29.md): Creates a CFUUID object for a specified string.
- [CFUUIDCreateFromUUIDBytes](cfuuidcreatefromuuidbytes%28____%29.md): Creates a CFUUID object from raw UUID bytes.
