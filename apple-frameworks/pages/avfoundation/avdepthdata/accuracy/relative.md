> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/accuracy/relative](https://developer.apple.com/documentation/avfoundation/avdepthdata/accuracy/relative)

# AVDepthData.Accuracy.relative (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Values within the depth data map are usable for foreground/background separation, but are not absolutely accurate in the physical world.

## Declaration

```swift
case relative
```

## Mentioned In

- [Capturing photos with depth](../../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

This level of accuracy indicates that values within a depth map are usable relative to one another (that is, a depth value of 2 is twice as far as a depth value of 1), but do not accurately convey real-world distance.

## See Also

### Accuracy values

- [AVDepthData.Accuracy.absolute](absolute.md): Values within the depth map are absolutely accurate within the physical world.

# AVDepthDataAccuracyRelative (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Values within the depth data map are usable for foreground/background separation, but are not absolutely accurate in the physical world.

## Declaration

```objectivec
AVDepthDataAccuracyRelative
```

## Mentioned In

- [Capturing photos with depth](../../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

This level of accuracy indicates that values within a depth map are usable relative to one another (that is, a depth value of 2 is twice as far as a depth value of 1), but do not accurately convey real-world distance.

## See Also

### Accuracy values

- [AVDepthDataAccuracyAbsolute](absolute.md): Values within the depth map are absolutely accurate within the physical world.
