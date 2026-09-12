> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsessionresumptionstate/resumingfrompreviousstate](https://developer.apple.com/documentation/avfoundation/avassetexportsessionresumptionstate/resumingfrompreviousstate)

# resumingFromPreviousState

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether or not a resuming export is continuing from a previous state.

## Declaration

```objectivec
@property (readonly, getter=isResumingFromPreviousState) BOOL resumingFromPreviousState;
```

<a id="discussion"></a>

## Discussion

A value of `true` means the export resumes from previous results; a value of `false` means it starts from the beginning. This value is valid only when [resumptionConfigured](resumptionconfigured.md) is `true`.

## See Also

### Inspecting the resumption state

- [resumptionConfigured](resumptionconfigured.md): A Boolean value that indicates whether the export session is configured as resumable.
- [configurationFailureReason](configurationfailurereason.md): The reason that the export session couldn’t be configured as resumable.
