> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess/reason](https://developer.apple.com/documentation/crashreportextension/crashedprocess/reason)

# reason

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Contextual information about the reported crash.

## Declaration

```swift
final var reason: CrashReason
```

## See Also

### Accessing process properties

- [CrashReason](../crashreason.md): Context information about the crash being reported
- [binaryImages](binaryimages.md): A list of binary images from the crashed process.
- [BinaryImageInfo](../binaryimageinfo.md): A type that represents a binary image loaded in the crashed process.
- [corpsePort](corpseport.md): A property that provides a Mach port to the crashed process.
