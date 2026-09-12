> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstitchedlibraryoptions](https://developer.apple.com/documentation/metal/mtlstitchedlibraryoptions)

# MTLStitchedLibraryOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
struct MTLStitchedLibraryOptions
```

## Topics

### Initializers

- [init(rawValue:)](mtlstitchedlibraryoptions/init%28rawvalue_%29.md)

### Type Properties

- [failOnBinaryArchiveMiss](mtlstitchedlibraryoptions/failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function for a stitched library isn’t in a binary archive.
- [storeLibraryInMetalPipelinesScript](mtlstitchedlibraryoptions/storelibraryinmetalpipelinesscript.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Structures

- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLBinaryArchiveError](mtlbinaryarchiveerror-swift.struct.md): An error that occurred when creating a binary shader archive.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct.md): The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.
- [MTLComponentTransform](mtlcomponenttransform.md)
- [MTLCounterSampleBufferError](mtlcountersamplebuffererror-swift.struct.md): The error codes that indicate why a GPU driver can’t create a counter sample buffer.
- [MTLDynamicLibraryError](mtldynamiclibraryerror-swift.struct.md): Errors when compiling dynamic libraries.
- [MTLIOError](mtlioerror-swift.struct.md): The categories of errors for creating an input/output file handle.
- [MTLPackedFloatQuaternion](mtlpackedfloatquaternion.md)
- [NSDeviceCertification](nsdevicecertification.md)
- [NSProcessPerformanceProfile](nsprocessperformanceprofile.md): A value describing the device’s performance profile.

# MTLStitchedLibraryOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
enum MTLStitchedLibraryOptions : NSUInteger;
```

## Topics

### Enumeration Cases

- [MTLStitchedLibraryOptionNone](mtlstitchedlibraryoptions/mtlstitchedlibraryoptionnone.md)
- [MTLStitchedLibraryOptionFailOnBinaryArchiveMiss](mtlstitchedlibraryoptions/failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function for a stitched library isn’t in a binary archive.
- [MTLStitchedLibraryOptionStoreLibraryInMetalPipelinesScript](mtlstitchedlibraryoptions/storelibraryinmetalpipelinesscript.md)

## See Also

### Structures

- [MTLComponentTransform](mtlcomponenttransform.md)
- [MTLPackedFloatQuaternion](mtlpackedfloatquaternion.md)
- [NSDeviceCertification](nsdevicecertification.md)
- [NSProcessPerformanceProfile](nsprocessperformanceprofile.md): A value describing the device’s performance profile.
