> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioerror-swift.struct](https://developer.apple.com/documentation/metal/mtlioerror-swift.struct)

# MTLIOError

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The categories of errors for creating an input/output file handle.

## Declaration

```swift
struct MTLIOError
```

## Topics

### Error codes

- [urlInvalid](mtlioerror-swift.struct/urlinvalid.md): An error that represents a problem with a file URL.
- [internal](mtlioerror-swift.struct/internal.md): An error that represents a problem internal to the Metal framework.
- [MTLIOError.Code](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.

### Error domain

- [errorDomain](mtlioerror-swift.struct/errordomain.md): The current error domain for input/output command queues.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLBinaryArchiveError](mtlbinaryarchiveerror-swift.struct.md): An error that occurred when creating a binary shader archive.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct.md): The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.
- [MTLComponentTransform](mtlcomponenttransform.md)
- [MTLCounterSampleBufferError](mtlcountersamplebuffererror-swift.struct.md): The error codes that indicate why a GPU driver can’t create a counter sample buffer.
- [MTLDynamicLibraryError](mtldynamiclibraryerror-swift.struct.md): Errors when compiling dynamic libraries.
- [MTLPackedFloatQuaternion](mtlpackedfloatquaternion.md)
- [MTLStitchedLibraryOptions](mtlstitchedlibraryoptions.md)
- [NSDeviceCertification](nsdevicecertification.md)
- [NSProcessPerformanceProfile](nsprocessperformanceprofile.md): A value describing the device’s performance profile.
