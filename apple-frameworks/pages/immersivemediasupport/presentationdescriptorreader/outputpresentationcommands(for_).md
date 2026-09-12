> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptorreader/outputpresentationcommands(for:)](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader/outputpresentationcommands(for:))

# outputPresentationCommands(for:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

This function returns all presentation commands to be muxed into an MOV during an `AVAssetWriter` session. Don’t use this function for playback rendering.

## Declaration

```swift
func outputPresentationCommands(for time: CMTime) -> [PresentationCommand]?
```

## Parameters

- `time`: PTS time to query for commands

<a id="return-value"></a>

## Return Value

An array of PresentationCommand instances representing the commands that need to be included in the output file for that PTS.
