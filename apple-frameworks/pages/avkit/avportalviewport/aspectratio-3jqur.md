> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avportalviewport/aspectratio-3jqur](https://developer.apple.com/documentation/avkit/avportalviewport/aspectratio-3jqur)

# aspectRatio

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The aspect ratio of the portal frame.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSNumber * aspectRatio;
```

<a id="discussion"></a>

## Discussion

This value determines the width-to-height ratio of the portal frame. Common aspect ratios include:

- 1.78 (16:9) for standard widescreen content
- 2.35 or 2.39 for cinematic widescreen content
- 1.33 (4:3) for traditional content

When nil, the system defaults to a 16:9 (1.78) aspect ratio.

> **Important**

> The system may adjust values outside typical ranges to ensure a comfortable viewing experience.
