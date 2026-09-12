> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscriptframe/bestdetectionforgroupid:](https://developer.apple.com/documentation/cinematic/cnscriptframe/bestdetectionforgroupid:)

# bestDetectionForGroupID:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The best detection to focus on in a frame among those within the given detection group.

## Declaration

```objectivec
- (CNDetection *) bestDetectionForGroupID:(CNDetectionGroupID) detectionGroupID;
```

## Parameters

- `detectionGroupID`: Associates related detections.

<a id="return-value"></a>

## Return Value

An object representing the best detection to focus on in a frame among those within the given detection group.

<a id="Discussion"></a>

## Discussion

Some types of detections also include a detection group ID that associates related detections, such as a face and torso, of the same person.
