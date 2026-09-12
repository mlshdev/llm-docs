> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/binaryimageinfo](https://developer.apple.com/documentation/crashreportextension/binaryimageinfo)

# BinaryImageInfo

**Framework:** CrashReportExtension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

A type that represents a binary image loaded in the crashed process.

## Declaration

```swift
struct BinaryImageInfo
```

## Topics

### Creating an instance

- [init(path:uuid:baseAddress:size:cpuType:cpuSubType:)](binaryimageinfo/init%28path_uuid_baseaddress_size_cputype_cpusubtype_%29.md): Creates a binary image info instance.

### Inspecting binary image properties

- [baseAddress](binaryimageinfo/baseaddress.md): The base address of the binary image.
- [cpuSubType](binaryimageinfo/cpusubtype.md): The binary image’s CPU subtype.
- [cpuType](binaryimageinfo/cputype.md): The binary image’s CPU type.
- [path](binaryimageinfo/path.md): The path to the binary image.
- [size](binaryimageinfo/size.md): The size of the binary image.
- [uuid](binaryimageinfo/uuid.md): The UUID of the binary image.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing process properties

- [reason](crashedprocess/reason.md): Contextual information about the reported crash.
- [CrashReason](crashreason.md): Context information about the crash being reported
- [binaryImages](crashedprocess/binaryimages.md): A list of binary images from the crashed process.
- [corpsePort](crashedprocess/corpseport.md): A property that provides a Mach port to the crashed process.
