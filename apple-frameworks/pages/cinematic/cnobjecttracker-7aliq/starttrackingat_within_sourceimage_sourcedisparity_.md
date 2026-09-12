> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-7aliq/starttrackingat:within:sourceimage:sourcedisparity:](https://developer.apple.com/documentation/cinematic/cnobjecttracker-7aliq/starttrackingat:within:sourceimage:sourcedisparity:)

# startTrackingAt:within:sourceImage:sourceDisparity:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Starts creating a detection track to track an object within the given bounds.

## Declaration

```objectivec
- (BOOL) startTrackingAt:(CMTime) time within:(CGRect) normalizedBounds sourceImage:(CVPixelBufferRef) sourceImage sourceDisparity:(CVPixelBufferRef) sourceDisparity;
```

## Parameters

- `time`: The presentation time of the first frame in the detection track.
- `normalizedBounds`: The bounds of the object to track in normalized coordinates where (0.0, 0.0) is the upper-left corner, and (1.0, 1.0) is the lower-right.
- `sourceImage`: The image buffer containing the image.
- `sourceDisparity`: The disparity buffer containing depth information.

<a id="return-value"></a>

## Return Value

A flag representing whether the object can be tracked.

<a id="Discussion"></a>

## Discussion

If you can track the object, the system adds a detection to the detection track you’re building.
