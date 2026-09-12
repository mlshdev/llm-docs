> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsessionresumptionstate/resumptionconfigured](https://developer.apple.com/documentation/avfoundation/avassetexportsessionresumptionstate/resumptionconfigured)

# resumptionConfigured

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the export session is configured as resumable.

## Declaration

```objectivec
@property (readonly, getter=isResumptionConfigured) BOOL resumptionConfigured;
```

<a id="discussion"></a>

## Discussion

If `true`, the export session is configured as resumable. If `false`, the export session will remain as non-resumable (default). You can still call [exportAsynchronouslyWithCompletionHandler:](../avassetexportsession/exportasynchronously%28completionhandler_%29.md) when this property is `false`.

## See Also

### Inspecting the resumption state

- [resumingFromPreviousState](resumingfrompreviousstate.md): A Boolean value that indicates whether or not a resuming export is continuing from a previous state.
- [configurationFailureReason](configurationfailurereason.md): The reason that the export session couldn’t be configured as resumable.
