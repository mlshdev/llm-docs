> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/crashreportextension/crashreporterextension

# CrashReporterExtension

**Framework:** CrashReportExtension  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS

The base type for crash reporter extensions.

## Declaration

```swift
protocol CrashReporterExtension : AppExtension
```

<a id="overview"></a>

## Overview

Conform to this protocol and implement [processCrashReport(process:)](crashreporterextension/processcrashreport%28process_%29.md) to create a crash reporter. Your extension runs in its own process, separate from the crashed app.

The following example shows an implementation that accesses the crashed process’s [corpsePort](crashedprocess/corpseport.md) and [binaryImages](crashedprocess/binaryimages.md) for use in generating a crash report.

```swift
@main
struct MyCrashExtension: CrashReporterExtension {
    func processCrashReport(process: CrashedProcess) {
        let corpsePort = process.corpsePort
        let images = process.binaryImages
        // Generate your crash report...
    }
}
```

After collecting the needed information from the crashed process, you can persist your crash report or send it back to a server you control.

## Topics

### Processing a crash report

- [processCrashReport(process:)](crashreporterextension/processcrashreport%28process_%29.md): A method the system calls when a crash report is ready to be processed.
- [CrashedProcess](crashedprocess.md): A synchronous client for accessing crash data from the host process.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)
