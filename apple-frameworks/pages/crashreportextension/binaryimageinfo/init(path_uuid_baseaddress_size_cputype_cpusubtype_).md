> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/binaryimageinfo/init(path:uuid:baseaddress:size:cputype:cpusubtype:)](https://developer.apple.com/documentation/crashreportextension/binaryimageinfo/init(path:uuid:baseaddress:size:cputype:cpusubtype:))

# init(path:uuid:baseAddress:size:cpuType:cpuSubType:)

**Framework:** CrashReportExtension  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Creates a binary image info instance.

## Declaration

```swift
init(path: String, uuid: UUID?, baseAddress: UInt64, size: UInt64, cpuType: cpu_type_t, cpuSubType: cpu_subtype_t)
```

## Parameters

- `path`: The path to the binary image.
- `uuid`: The UUID of the binary image.
- `baseAddress`: The base address of the binary image.
- `size`: The size of the binary image.
- `cpuType`: The binary image’s CPU type.
- `cpuSubType`: The binary image’s CPU subtype.
