> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndetection-c.class/initwithtime:detectiontype:normalizedrect:focusdisparity:

# initWithTime:detectionType:normalizedRect:focusDisparity:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a Cinematic detection of a subject.

## Declaration

```objectivec
- (instancetype) initWithTime:(CMTime) time detectionType:(CNDetectionType) detectionType normalizedRect:(CGRect) normalizedRect focusDisparity:(float) focusDisparity;
```

## Parameters

- `time`: The presentation time of the frame that the detection occurred.
- `detectionType`: The type of object detected, such as the face, torso, cat, dog, and so on.
- `normalizedRect`: The rectangle within the image where the object occurs, normalized such that (0.0, 0.0) is the top-left and (1.0, 1.0) is the bottom-right.
- `focusDisparity`: The disparity to use in order to focus on the object.

<a id="return-value"></a>

## Return Value

A structure representing the Cinematic detection of a subject.
