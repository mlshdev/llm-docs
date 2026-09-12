> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlstereoscopiccamera/overlap](https://developer.apple.com/documentation/modelio/mdlstereoscopiccamera/overlap)

# overlap (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount, as a fraction of image width, by which the images from the camera’s two viewpoints overlap.

## Declaration

```swift
var overlap: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Some stereoscopic rendering processes require shifting the location of each viewpoint’s rendered image in a framebuffer before display. Use this property to determine the distance to shift images by during rendering.

## See Also

### Modeling Stereoscopic Imaging

- [interPupillaryDistance](interpupillarydistance.md): The distance, in millimeters, between the stereoscopic camera’s two viewpoints.
- [leftVergence](leftvergence.md): The angle, in degrees, at which the camera’s left viewpoint faces toward a central focal point.
- [rightVergence](rightvergence.md): The angle, in degrees, at which the camera’s right viewpoint faces toward a central focal point.

# overlap (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount, as a fraction of image width, by which the images from the camera’s two viewpoints overlap.

## Declaration

```objectivec
@property (nonatomic, assign) float overlap;
```

<a id="Discussion"></a>

## Discussion

Some stereoscopic rendering processes require shifting the location of each viewpoint’s rendered image in a framebuffer before display. Use this property to determine the distance to shift images by during rendering.

## See Also

### Modeling Stereoscopic Imaging

- [interPupillaryDistance](interpupillarydistance.md): The distance, in millimeters, between the stereoscopic camera’s two viewpoints.
- [leftVergence](leftvergence.md): The angle, in degrees, at which the camera’s left viewpoint faces toward a central focal point.
- [rightVergence](rightvergence.md): The angle, in degrees, at which the camera’s right viewpoint faces toward a central focal point.
