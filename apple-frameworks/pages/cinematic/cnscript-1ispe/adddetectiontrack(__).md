> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/adddetectiontrack(_:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/adddetectiontrack(_:))

# addDetectionTrack(\_:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Adds a user-created detection track.

## Declaration

```swift
final func addDetectionTrack(_ detectionTrack: CNDetectionTrack) -> CNDetectionID
```

## Parameters

- `detectionTrack`: The detection track to add.

<a id="return-value"></a>

## Return Value

The unique detection ID assigned to the added track, which can be used for later lookup or decision creation.
