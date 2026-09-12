> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess](https://developer.apple.com/documentation/crashreportextension/crashedprocess)

# CrashedProcess

**Framework:** CrashReportExtension  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

A synchronous client for accessing crash data from the host process.

## Declaration

```swift
final class CrashedProcess
```

<a id="overview"></a>

## Overview

Your extension receives this type as the parameter to [processCrashReport(process:)](crashreporterextension/processcrashreport%28process_%29.md). Use this class to access symbolication and binary images, and perform symbol lookup. You can also access the [corpsePort](crashedprocess/corpseport.md) to send Mach IPC commands to the crashed process.

## Topics

### Accessing process properties

- [reason](crashedprocess/reason.md): Contextual information about the reported crash.
- [CrashReason](crashreason.md): Context information about the crash being reported
- [binaryImages](crashedprocess/binaryimages.md): A list of binary images from the crashed process.
- [BinaryImageInfo](binaryimageinfo.md): A type that represents a binary image loaded in the crashed process.
- [corpsePort](crashedprocess/corpseport.md): A property that provides a Mach port to the crashed process.

### Symbolicating addresses

- [symbolicateAddress(\_:)](crashedprocess/symbolicateaddress%28__%29.md): Symbolicates an address, returning symbol info with inline frame expansion.
- [symbolicateAddresses(\_:)](crashedprocess/symbolicateaddresses%28__%29.md): Symbolicates an array of addresses, returning symbol information with inline frame expansion.
- [SymbolicatedFrame](symbolicatedframe.md): A type that represents a single symbolicated stack frame.

### Accessing symbols

- [symbolAddress(imageName:symbolName:)](crashedprocess/symboladdress%28imagename_symbolname_%29.md): Looks up a symbol’s address by name.

## See Also

### Processing a crash report

- [processCrashReport(process:)](crashreporterextension/processcrashreport%28process_%29.md): A method the system calls when a crash report is ready to be processed.
