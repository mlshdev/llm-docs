> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/removedetectiontrack(_:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/removedetectiontrack(_:))

# removeDetectionTrack(\_:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Removes the user-created detection track.

## Declaration

```swift
final func removeDetectionTrack(_ detectionTrack: CNDetectionTrack) -> Bool
```

## Parameters

- `detectionTrack`: The detection track to remove.

<a id="return-value"></a>

## Return Value

A flag indicating whether removal of the user-created detection track was successful.

<a id="Discussion"></a>

## Discussion

It’s not possible to remove tracks created at recording time.
