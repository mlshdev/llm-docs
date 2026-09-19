> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/crashreportextension/binaryimageinfo/cputype

# cpuType

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

The binary image’s CPU type.

## Declaration

```swift
let cpuType: cpu_type_t
```

## See Also

### Inspecting binary image properties

- [baseAddress](baseaddress.md): The base address of the binary image.
- [cpuSubType](cpusubtype.md): The binary image’s CPU subtype.
- [path](path.md): The path to the binary image.
- [size](size.md): The size of the binary image.
- [uuid](uuid.md): The UUID of the binary image.
