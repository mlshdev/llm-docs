> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlstereoscopiccamera/interpupillarydistance](https://developer.apple.com/documentation/modelio/mdlstereoscopiccamera/interpupillarydistance)

# interPupillaryDistance (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The distance, in millimeters, between the stereoscopic camera’s two viewpoints.

## Declaration

```swift
var interPupillaryDistance: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Each viewpoint is assumed to be horizontally offset from the camera’s position by half the interocular distance.

## See Also

### Modeling Stereoscopic Imaging

- [overlap](overlap.md): The amount, as a fraction of image width, by which the images from the camera’s two viewpoints overlap.
- [leftVergence](leftvergence.md): The angle, in degrees, at which the camera’s left viewpoint faces toward a central focal point.
- [rightVergence](rightvergence.md): The angle, in degrees, at which the camera’s right viewpoint faces toward a central focal point.

# interPupillaryDistance (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The distance, in millimeters, between the stereoscopic camera’s two viewpoints.

## Declaration

```objectivec
@property (nonatomic, assign) float interPupillaryDistance;
```

<a id="Discussion"></a>

## Discussion

Each viewpoint is assumed to be horizontally offset from the camera’s position by half the interocular distance.

## See Also

### Modeling Stereoscopic Imaging

- [overlap](overlap.md): The amount, as a fraction of image width, by which the images from the camera’s two viewpoints overlap.
- [leftVergence](leftvergence.md): The angle, in degrees, at which the camera’s left viewpoint faces toward a central focal point.
- [rightVergence](rightvergence.md): The angle, in degrees, at which the camera’s right viewpoint faces toward a central focal point.
