> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhorizonobservation/angle](https://developer.apple.com/documentation/vision/vnhorizonobservation/angle)

# angle (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The angle of the observed horizon.

## Declaration

```swift
var angle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Use the angle to orient the image in an upright position and make the detected horizon level.

## See Also

### Evaluating the Horizon

- [transform](transform.md): The transform to apply to the detected horizon.
- [transform(forImageWidth:height:)](transform%28forimagewidth_height_%29.md): Creates an affine transform for the specified image width and height.

# angle (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The angle of the observed horizon.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGFloat angle;
```

<a id="Discussion"></a>

## Discussion

Use the angle to orient the image in an upright position and make the detected horizon level.

## See Also

### Evaluating the Horizon

- [transform](transform.md): The transform to apply to the detected horizon.
- [transformForImageWidth:height:](transform%28forimagewidth_height_%29.md): Creates an affine transform for the specified image width and height.
