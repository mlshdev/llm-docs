> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashreporterextension/processcrashreport(process:)](https://developer.apple.com/documentation/crashreportextension/crashreporterextension/processcrashreport(process:))

# processCrashReport(process:)

**Framework:** CrashReportExtension  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS

A method the system calls when a crash report is ready to be processed.

## Declaration

```swift
func processCrashReport(process: CrashedProcess)
```

## Parameters

- `process`: Client for accessing crash data (corpse port, symbolication, etc.)

<a id="discussion"></a>

## Discussion

Implement this method by inspecting the [CrashedProcess](../crashedprocess.md) object to prepare a crash report. You can then persist this report or send it back to your own server.

## See Also

### Processing a crash report

- [CrashedProcess](../crashedprocess.md): A synchronous client for accessing crash data from the host process.
