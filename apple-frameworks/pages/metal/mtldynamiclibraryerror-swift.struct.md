> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldynamiclibraryerror-swift.struct](https://developer.apple.com/documentation/metal/mtldynamiclibraryerror-swift.struct)

# MTLDynamicLibraryError

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Errors when compiling dynamic libraries.

## Declaration

```swift
struct MTLDynamicLibraryError
```

## Topics

### Error codes

- [none](mtldynamiclibraryerror-swift.struct/none.md): An error code that represents the absence of any problems.
- [invalidFile](mtldynamiclibraryerror-swift.struct/invalidfile.md): An error code that indicates an app is using an invalid reference to a library file, typically related to a URL.
- [compilationFailure](mtldynamiclibraryerror-swift.struct/compilationfailure.md): An error code that indicates Metal couldn’t compile a dynamic library.
- [unresolvedInstallName](mtldynamiclibraryerror-swift.struct/unresolvedinstallname.md): An error code that indicates Metal couldn’t resolve the installation name for a new dynamic library.
- [dependencyLoadFailure](mtldynamiclibraryerror-swift.struct/dependencyloadfailure.md): An error code that indicates a dynamic library couldn’t link to other dynamic libraries.
- [unsupported](mtldynamiclibraryerror-swift.struct/unsupported.md): An error code that indicates the GPU device doesn’t support dynamic libraries.
- [MTLDynamicLibraryError.Code](mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.

### Error domain

- [errorDomain](mtldynamiclibraryerror-swift.struct/errordomain.md): The current dynamic library error domain.
- [MTLDynamicLibraryDomain](mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

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
- [MTLIOError](mtlioerror-swift.struct.md): The categories of errors for creating an input/output file handle.
- [MTLPackedFloatQuaternion](mtlpackedfloatquaternion.md)
- [MTLStitchedLibraryOptions](mtlstitchedlibraryoptions.md)
- [NSDeviceCertification](nsdevicecertification.md)
- [NSProcessPerformanceProfile](nsprocessperformanceprofile.md): A value describing the device’s performance profile.
