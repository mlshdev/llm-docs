> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer/error](https://developer.apple.com/documentation/coremedia/cmblockbuffer/error)

# CMBlockBuffer.Error

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines block buffer errors.

## Declaration

```swift
struct Error
```

## Topics

### Errors

- [badCustomBlockSource](error/badcustomblocksource.md): An error that indicates an attempt to create a block buffer without a valid source.
- [badLengthParameter](error/badlengthparameter.md): An error that indicates you called a function with an invalid length parameter.
- [badOffsetParameter](error/badoffsetparameter.md): An error that indicates you called a function with offset value is out of range.
- [badPointerParameter](error/badpointerparameter.md): An error that indicates a parameter is invalid.
- [blockAllocationFailed](error/blockallocationfailed.md): An error that indicates you specified an invalid allocation block.
- [emptyBlockBuffer](error/emptyblockbuffer.md): An error that indicates you passed an empty block buffer to a function.
- [insufficientSpace](error/insufficientspace.md): An error that indicates there’s insufficient space to perform the operation.
- [structureAllocationFailed](error/structureallocationfailed.md): An error that indicates the allocation of a structure failed.
- [unallocatedBlock](error/unallocatedblock.md): An error that indicates a function encountered an unallocated block of memory.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CMBlockBuffer.Flags](flags.md): A structure that defines feature and control flags.
- [CMBlockBuffer.Slice](slice.md): A slice of a `CMBlockBuffer` instance.
