> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess/binaryimages](https://developer.apple.com/documentation/crashreportextension/crashedprocess/binaryimages)

# binaryImages

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

A list of binary images from the crashed process.

## Declaration

```swift
final var binaryImages: [BinaryImageInfo] { get }
```

## See Also

### Accessing process properties

- [reason](reason.md): Contextual information about the reported crash.
- [CrashReason](../crashreason.md): Context information about the crash being reported
- [BinaryImageInfo](../binaryimageinfo.md): A type that represents a binary image loaded in the crashed process.
- [corpsePort](corpseport.md): A property that provides a Mach port to the crashed process.
