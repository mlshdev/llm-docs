> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfuuidcreatestring(_:_:)](https://developer.apple.com/documentation/corefoundation/cfuuidcreatestring(_:_:))

# CFUUIDCreateString(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the string representation of a specified CFUUID object.

## Declaration

```swift
func CFUUIDCreateString(_ alloc: CFAllocator!, _ uuid: CFUUID!) -> CFString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `uuid`: The CFUUID object whose string representation to obtain.

<a id="return-value"></a>

## Return Value

The string representation of `uuid`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About CFUUID Objects

- [CFUUIDGetConstantUUIDWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md): Returns a CFUUID object from raw UUID bytes.
- [CFUUIDGetUUIDBytes(\_:)](cfuuidgetuuidbytes%28__%29.md): Returns the value of a UUID object as raw bytes.

# CFUUIDCreateString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the string representation of a specified CFUUID object.

## Declaration

```objectivec
extern CFStringRefCFUUIDCreateString(CFAllocatorRef alloc, CFUUIDRef uuid);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `uuid`: The CFUUID object whose string representation to obtain.

<a id="return-value"></a>

## Return Value

The string representation of `uuid`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About CFUUID Objects

- [CFUUIDGetConstantUUIDWithBytes](cfuuidgetconstantuuidwithbytes%28__________________________________%29.md): Returns a CFUUID object from raw UUID bytes.
- [CFUUIDGetUUIDBytes](cfuuidgetuuidbytes%28__%29.md): Returns the value of a UUID object as raw bytes.
