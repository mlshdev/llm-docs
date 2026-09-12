> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/worldalignment-swift.enum](https://developer.apple.com/documentation/arkit/arconfiguration/worldalignment-swift.enum)

# ARConfiguration.WorldAlignment (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Options for how ARKit constructs a scene coordinate system based on real-world device motion.

## Declaration

```swift
enum WorldAlignment
```

## Topics

### Alignments

- [ARConfiguration.WorldAlignment.gravity](worldalignment-swift.enum/gravity.md): The coordinate system’s y-axis is parallel to gravity, and its origin is the initial position of the device.
- [ARConfiguration.WorldAlignment.gravityAndHeading](worldalignment-swift.enum/gravityandheading.md): The coordinate system’s y-axis is parallel to gravity, its x- and z-axes are oriented to compass heading, and its origin is the initial position of the device.
- [ARConfiguration.WorldAlignment.camera](worldalignment-swift.enum/camera.md): The scene coordinate system is locked to match the orientation of the camera.

### Initializers

- [init(rawValue:)](worldalignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the AR session

- [isLightEstimationEnabled](islightestimationenabled.md): A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.
- [worldAlignment](worldalignment-swift.property.md): A value specifying how the session maps real-world device motion into a 3D scene coordinate system.

# ARWorldAlignment (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Options for how ARKit constructs a scene coordinate system based on real-world device motion.

## Declaration

```objectivec
enum ARWorldAlignment : NSInteger;
```

## Topics

### Alignments

- [ARWorldAlignmentGravity](worldalignment-swift.enum/gravity.md): The coordinate system’s y-axis is parallel to gravity, and its origin is the initial position of the device.
- [ARWorldAlignmentGravityAndHeading](worldalignment-swift.enum/gravityandheading.md): The coordinate system’s y-axis is parallel to gravity, its x- and z-axes are oriented to compass heading, and its origin is the initial position of the device.
- [ARWorldAlignmentCamera](worldalignment-swift.enum/camera.md): The scene coordinate system is locked to match the orientation of the camera.

## See Also

### Configuring the AR session

- [lightEstimationEnabled](islightestimationenabled.md): A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.
- [worldAlignment](worldalignment-swift.property.md): A value specifying how the session maps real-world device motion into a 3D scene coordinate system.
