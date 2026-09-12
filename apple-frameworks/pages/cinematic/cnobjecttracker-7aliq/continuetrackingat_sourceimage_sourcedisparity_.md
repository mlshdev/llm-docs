> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-7aliq/continuetrackingat:sourceimage:sourcedisparity:](https://developer.apple.com/documentation/cinematic/cnobjecttracker-7aliq/continuetrackingat:sourceimage:sourcedisparity:)

# continueTrackingAt:sourceImage:sourceDisparity:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Continues to track an object that you’ve started tracking, and adds a new detection to the detection track you’re building.

## Declaration

```objectivec
- (CNBoundsPrediction *) continueTrackingAt:(CMTime) time sourceImage:(CVPixelBufferRef) sourceImage sourceDisparity:(CVPixelBufferRef) sourceDisparity;
```

## Parameters

- `time`: The presentation time of the first frame in the detection track.
- `sourceImage`: The image buffer containing the image.
- `sourceDisparity`: The disparity buffer containing depth information.

<a id="return-value"></a>

## Return Value

An object representing a prediction of where the object is in the source image.
