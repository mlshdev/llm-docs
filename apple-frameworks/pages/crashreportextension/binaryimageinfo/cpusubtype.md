> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/crashreportextension/binaryimageinfo/cpusubtype

# cpuSubType

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

The binary image’s CPU subtype.

## Declaration

```swift
let cpuSubType: cpu_subtype_t
```

## See Also

### Inspecting binary image properties

- [baseAddress](baseaddress.md): The base address of the binary image.
- [cpuType](cputype.md): The binary image’s CPU type.
- [path](path.md): The path to the binary image.
- [size](size.md): The size of the binary image.
- [uuid](uuid.md): The UUID of the binary image.
