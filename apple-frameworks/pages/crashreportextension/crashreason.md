> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashreason](https://developer.apple.com/documentation/crashreportextension/crashreason)

# CrashReason

**Framework:** CrashReportExtension  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

Context information about the crash being reported

## Declaration

```swift
struct CrashReason
```

## Topics

### Creating a crash reason

- [init(exception:codes:)](crashreason/init%28exception_codes_%29.md): Creates a crash reason instance with the given parameters.

### Inpecting crash reason properties

- [codes](crashreason/codes.md): An array of exception-specific codes providing additional details.
- [exception](crashreason/exception.md): The Mach exception type.

## See Also

### Accessing process properties

- [reason](crashedprocess/reason.md): Contextual information about the reported crash.
- [binaryImages](crashedprocess/binaryimages.md): A list of binary images from the crashed process.
- [BinaryImageInfo](binaryimageinfo.md): A type that represents a binary image loaded in the crashed process.
- [corpsePort](crashedprocess/corpseport.md): A property that provides a Mach port to the crashed process.
