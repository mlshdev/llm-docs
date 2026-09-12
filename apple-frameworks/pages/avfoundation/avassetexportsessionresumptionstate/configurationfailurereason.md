> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsessionresumptionstate/configurationfailurereason](https://developer.apple.com/documentation/avfoundation/avassetexportsessionresumptionstate/configurationfailurereason)

# configurationFailureReason

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The reason that the export session couldn’t be configured as resumable.

## Declaration

```objectivec
@property (readonly, nullable) AVAssetExportSessionResumptionFailureReason configurationFailureReason;
```

<a id="discussion"></a>

## Discussion

This value is valid only when [resumptionConfigured](resumptionconfigured.md) is `false`.

## See Also

### Inspecting the resumption state

- [resumptionConfigured](resumptionconfigured.md): A Boolean value that indicates whether the export session is configured as resumable.
- [resumingFromPreviousState](resumingfrompreviousstate.md): A Boolean value that indicates whether or not a resuming export is continuing from a previous state.
