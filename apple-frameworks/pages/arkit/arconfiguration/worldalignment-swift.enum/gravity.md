> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/worldalignment-swift.enum/gravity](https://developer.apple.com/documentation/arkit/arconfiguration/worldalignment-swift.enum/gravity)

# ARConfiguration.WorldAlignment.gravity (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coordinate system’s y-axis is parallel to gravity, and its origin is the initial position of the device.

## Declaration

```swift
case gravity
```

<a id="Discussion"></a>

## Discussion

The y-axis matches the direction of gravity as detected by the device’s motion sensing hardware; that is, the vector `(0,-1,0)` points downward.

The position and orientation of the device as of when the session configuration is first run determine the rest of the coordinate system: For the z-axis, ARKit chooses a basis vector `(0,0,-1)` pointing in the direction the device camera faces and perpendicular to the gravity axis. ARKit chooses a x-axis based on the z- and y-axes using the right hand rule—that is, the basis vector `(1,0,0)` is orthogonal to the other two axes, and (for a viewer looking in the negative-z direction) points toward the right.

![](https://developer.apple.com/images/com.apple.arkit/media-2891463@2x.png)

## See Also

### Alignments

- [ARConfiguration.WorldAlignment.gravityAndHeading](gravityandheading.md): The coordinate system’s y-axis is parallel to gravity, its x- and z-axes are oriented to compass heading, and its origin is the initial position of the device.
- [ARConfiguration.WorldAlignment.camera](camera.md): The scene coordinate system is locked to match the orientation of the camera.

# ARWorldAlignmentGravity (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The coordinate system’s y-axis is parallel to gravity, and its origin is the initial position of the device.

## Declaration

```objectivec
ARWorldAlignmentGravity
```

<a id="Discussion"></a>

## Discussion

The y-axis matches the direction of gravity as detected by the device’s motion sensing hardware; that is, the vector `(0,-1,0)` points downward.

The position and orientation of the device as of when the session configuration is first run determine the rest of the coordinate system: For the z-axis, ARKit chooses a basis vector `(0,0,-1)` pointing in the direction the device camera faces and perpendicular to the gravity axis. ARKit chooses a x-axis based on the z- and y-axes using the right hand rule—that is, the basis vector `(1,0,0)` is orthogonal to the other two axes, and (for a viewer looking in the negative-z direction) points toward the right.

![](https://developer.apple.com/images/com.apple.arkit/media-2891463@2x.png)

## See Also

### Alignments

- [ARWorldAlignmentGravityAndHeading](gravityandheading.md): The coordinate system’s y-axis is parallel to gravity, its x- and z-axes are oriented to compass heading, and its origin is the initial position of the device.
- [ARWorldAlignmentCamera](camera.md): The scene coordinate system is locked to match the orientation of the camera.
