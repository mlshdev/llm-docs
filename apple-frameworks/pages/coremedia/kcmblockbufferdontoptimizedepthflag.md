> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmblockbufferdontoptimizedepthflag](https://developer.apple.com/documentation/coremedia/kcmblockbufferdontoptimizedepthflag)

# kCMBlockBufferDontOptimizeDepthFlag (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Passed to block buffers to suppress reference depth optimization.

## Declaration

```swift
var kCMBlockBufferDontOptimizeDepthFlag: CMBlockBufferFlags { get }
```

## See Also

### Constants

- [kCMBlockBufferAssureMemoryNowFlag](kcmblockbufferassurememorynowflag.md): When passed to routines that accept block allocators, causes the memory block to be allocated immediately.
- [kCMBlockBufferAlwaysCopyDataFlag](kcmblockbufferalwayscopydataflag.md): Used with [CMBlockBuffer](cmblockbuffer.md) to cause it to always produce an allocated copy of the desired data.
- [kCMBlockBufferPermitEmptyReferenceFlag](kcmblockbufferpermitemptyreferenceflag.md): Passed to [CMBlockBuffer](cmblockbuffer.md) and [CMBlockBuffer](cmblockbuffer.md) to allow references into a `CMBlockBuffer` that may not yet be populated.

# kCMBlockBufferDontOptimizeDepthFlag (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Passed to block buffers to suppress reference depth optimization.

## Declaration

```objectivec
kCMBlockBufferDontOptimizeDepthFlag
```

## See Also

### Constants

- [kCMBlockBufferAssureMemoryNowFlag](kcmblockbufferassurememorynowflag.md): When passed to routines that accept block allocators, causes the memory block to be allocated immediately.
- [kCMBlockBufferAlwaysCopyDataFlag](kcmblockbufferalwayscopydataflag.md): Used with [CMBlockBufferRef](cmblockbuffer.md) to cause it to always produce an allocated copy of the desired data.
- [kCMBlockBufferPermitEmptyReferenceFlag](kcmblockbufferpermitemptyreferenceflag.md): Passed to [CMBlockBufferRef](cmblockbuffer.md) and [CMBlockBufferRef](cmblockbuffer.md) to allow references into a `CMBlockBuffer` that may not yet be populated.
