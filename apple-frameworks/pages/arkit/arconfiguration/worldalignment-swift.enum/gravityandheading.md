> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/worldalignment-swift.enum/gravityandheading](https://developer.apple.com/documentation/arkit/arconfiguration/worldalignment-swift.enum/gravityandheading)

# ARConfiguration.WorldAlignment.gravityAndHeading (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coordinate system’s y-axis is parallel to gravity, its x- and z-axes are oriented to compass heading, and its origin is the initial position of the device.

## Declaration

```swift
case gravityAndHeading
```

<a id="Discussion"></a>

## Discussion

The y-axis matches the direction of gravity as detected by the device’s motion sensing hardware; that is, the vector `(0,-1,0)` points downward.

The x- and z-axes match the longitude and latitude directions as measured by Location Services. The vector `(0,0,-1)` points to true north and the vector `(-1,0,0)` points west. (That is, the positive x-, y-, and z-axes point east, up, and south, respectively.)

![](https://developer.apple.com/images/com.apple.arkit/media-2891462@2x.png)

Although this option fixes the *directions* of the three coordinate axes to real-world directions, the *location* of the coordinate system’s origin is still relative to the device, matching the device’s position as of when the session configuration is first run.

> **Note**

>  Using gravity and heading alignment requires tracking the device’s geographic location. Your app’s Info.plist must include user-facing text for the [NSLocationUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSLocationUsageDescription) or [NSLocationWhenInUseUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSLocationWhenInUseUsageDescription) key so that the user can grant your app permission for location tracking.

## See Also

### Alignments

- [ARConfiguration.WorldAlignment.gravity](gravity.md): The coordinate system’s y-axis is parallel to gravity, and its origin is the initial position of the device.
- [ARConfiguration.WorldAlignment.camera](camera.md): The scene coordinate system is locked to match the orientation of the camera.

# ARWorldAlignmentGravityAndHeading (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The coordinate system’s y-axis is parallel to gravity, its x- and z-axes are oriented to compass heading, and its origin is the initial position of the device.

## Declaration

```objectivec
ARWorldAlignmentGravityAndHeading
```

<a id="Discussion"></a>

## Discussion

The y-axis matches the direction of gravity as detected by the device’s motion sensing hardware; that is, the vector `(0,-1,0)` points downward.

The x- and z-axes match the longitude and latitude directions as measured by Location Services. The vector `(0,0,-1)` points to true north and the vector `(-1,0,0)` points west. (That is, the positive x-, y-, and z-axes point east, up, and south, respectively.)

![](https://developer.apple.com/images/com.apple.arkit/media-2891462@2x.png)

Although this option fixes the *directions* of the three coordinate axes to real-world directions, the *location* of the coordinate system’s origin is still relative to the device, matching the device’s position as of when the session configuration is first run.

> **Note**

>  Using gravity and heading alignment requires tracking the device’s geographic location. Your app’s Info.plist must include user-facing text for the [NSLocationUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSLocationUsageDescription) or [NSLocationWhenInUseUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSLocationWhenInUseUsageDescription) key so that the user can grant your app permission for location tracking.

## See Also

### Alignments

- [ARWorldAlignmentGravity](gravity.md): The coordinate system’s y-axis is parallel to gravity, and its origin is the initial position of the device.
- [ARWorldAlignmentCamera](camera.md): The scene coordinate system is locked to match the orientation of the camera.
