> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/frame/bestdetection(for:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/frame/bestdetection(for:))

# bestDetection(for:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The best detection to focus on in a frame among those within the given detection group.

## Declaration

```swift
func bestDetection(for detectionGroupID: CNDetectionGroupID) -> CNDetection?
```

## Parameters

- `detectionGroupID`: Associates related detections.

<a id="return-value"></a>

## Return Value

An object representing the best detection to focus on in a frame among those within the given detection group.

<a id="Discussion"></a>

## Discussion

Some types of detections also include a detection group ID that associates related detections, such as a face and torso, of the same person.
