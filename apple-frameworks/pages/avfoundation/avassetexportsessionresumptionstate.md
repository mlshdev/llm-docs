> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsessionresumptionstate](https://developer.apple.com/documentation/avfoundation/avassetexportsessionresumptionstate)

# AVAssetExportSessionResumptionState

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The current resumption state of the export session.

## Declaration

```objectivec
@interface AVAssetExportSessionResumptionState : NSObject
```

<a id="overview"></a>

## Overview

Configure a resumable export session with [configureForResumableExportWithCompletionHandler:](avassetexportsession/configureforresumableexportwithcompletionhandler_.md).

## Topics

### Inspecting the resumption state

- [resumptionConfigured](avassetexportsessionresumptionstate/resumptionconfigured.md): A Boolean value that indicates whether the export session is configured as resumable.
- [resumingFromPreviousState](avassetexportsessionresumptionstate/resumingfrompreviousstate.md): A Boolean value that indicates whether or not a resuming export is continuing from a previous state.
- [configurationFailureReason](avassetexportsessionresumptionstate/configurationfailurereason.md): The reason that the export session couldn’t be configured as resumable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring resumable export

- [configureForResumableExportWithCompletionHandler:](avassetexportsession/configureforresumableexportwithcompletionhandler_.md): Attempts to configure the export session into resumption mode.
- [AVAssetExportSessionResumptionFailureReason](avassetexportsession/resumptionfailurereason.md): The reason that configuring the export session for resumption failed.
