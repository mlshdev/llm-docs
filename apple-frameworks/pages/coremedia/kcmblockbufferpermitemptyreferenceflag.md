> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmblockbufferpermitemptyreferenceflag](https://developer.apple.com/documentation/coremedia/kcmblockbufferpermitemptyreferenceflag)

# kCMBlockBufferPermitEmptyReferenceFlag (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Passed to [CMBlockBuffer](cmblockbuffer.md) and [CMBlockBuffer](cmblockbuffer.md) to allow references into a `CMBlockBuffer` that may not yet be populated.

## Declaration

```swift
var kCMBlockBufferPermitEmptyReferenceFlag: CMBlockBufferFlags { get }
```

## See Also

### Constants

- [kCMBlockBufferAssureMemoryNowFlag](kcmblockbufferassurememorynowflag.md): When passed to routines that accept block allocators, causes the memory block to be allocated immediately.
- [kCMBlockBufferAlwaysCopyDataFlag](kcmblockbufferalwayscopydataflag.md): Used with [CMBlockBuffer](cmblockbuffer.md) to cause it to always produce an allocated copy of the desired data.
- [kCMBlockBufferDontOptimizeDepthFlag](kcmblockbufferdontoptimizedepthflag.md): Passed to block buffers to suppress reference depth optimization.

# kCMBlockBufferPermitEmptyReferenceFlag (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Passed to [CMBlockBufferRef](cmblockbuffer.md) and [CMBlockBufferRef](cmblockbuffer.md) to allow references into a `CMBlockBuffer` that may not yet be populated.

## Declaration

```objectivec
kCMBlockBufferPermitEmptyReferenceFlag
```

## See Also

### Constants

- [kCMBlockBufferAssureMemoryNowFlag](kcmblockbufferassurememorynowflag.md): When passed to routines that accept block allocators, causes the memory block to be allocated immediately.
- [kCMBlockBufferAlwaysCopyDataFlag](kcmblockbufferalwayscopydataflag.md): Used with [CMBlockBufferRef](cmblockbuffer.md) to cause it to always produce an allocated copy of the desired data.
- [kCMBlockBufferDontOptimizeDepthFlag](kcmblockbufferdontoptimizedepthflag.md): Passed to block buffers to suppress reference depth optimization.
