> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptorreader/processpresentationcommands(for:)](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader/processpresentationcommands(for:))

# processPresentationCommands(for:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Processes the commands and updates the publishers exported by this reader when called by the application (e.g. render/playback loop)

## Declaration

```swift
func processPresentationCommands(for presentationTimeStamp: CMTime)
```

## Parameters

- `presentationTimeStamp`: The current presentation time to query metadata.
