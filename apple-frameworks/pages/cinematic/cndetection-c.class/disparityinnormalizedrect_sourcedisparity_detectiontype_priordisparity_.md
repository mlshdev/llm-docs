> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetection-c.class/disparityinnormalizedrect:sourcedisparity:detectiontype:priordisparity:](https://developer.apple.com/documentation/cinematic/cndetection-c.class/disparityinnormalizedrect:sourcedisparity:detectiontype:priordisparity:)

# disparityInNormalizedRect:sourceDisparity:detectionType:priorDisparity:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Determines the disparity to use to focus on the object in the rectangle.

## Declaration

```objectivec
+ (float) disparityInNormalizedRect:(CGRect) normalizedRect sourceDisparity:(CVPixelBufferRef) sourceDisparity detectionType:(CNDetectionType) detectionType priorDisparity:(float) priorDisparity;
```

## Parameters

- `normalizedRect`: The rectangle within the image where the object occurs, normalized such that (0.0, 0.0) is the top-left and (1.0, 1.0) is the bottom-right.
- `sourceDisparity`: The disparity buffer containing depth information
- `detectionType`: The type of object expected within the rectangle. Pass \`CNDetectionTypeUnknown\` if unknown.
- `priorDisparity`: The disparity of the object in the prior frame. This helps ensure the object isn’t mistaken for another that enters the same rectangle. Pass \`NAN\` if there’s no known prior, such as in the first frame in which the tracked object.

<a id="return-value"></a>

## Return Value

A float representing the disparity to use to focus on the object in the rectangle.
