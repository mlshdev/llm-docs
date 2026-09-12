> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/worldalignment-swift.property](https://developer.apple.com/documentation/arkit/arconfiguration/worldalignment-swift.property)

# worldAlignment (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A value specifying how the session maps real-world device motion into a 3D scene coordinate system.

## Declaration

```swift
var worldAlignment: ARConfiguration.WorldAlignment { get set }
```

## Mentioned In

- [Understanding World Tracking](../understanding-world-tracking.md)

<a id="Discussion"></a>

## Discussion

Creating an AR experience depends on being able to construct a coordinate system for placing objects in a virtual 3D world that maps to the real-world position and motion of the device. When you run a session configuration, ARKit creates a scene coordinate system based on the position and orientation of the device; any [ARAnchor](../aranchor.md) objects you create or that the AR session detects are positioned relative to that coordinate system.

See [ARConfiguration.WorldAlignment](worldalignment-swift.enum.md) for possible values.

## See Also

### Configuring the AR session

- [isLightEstimationEnabled](islightestimationenabled.md): A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.
- [ARConfiguration.WorldAlignment](worldalignment-swift.enum.md): Options for how ARKit constructs a scene coordinate system based on real-world device motion.

# worldAlignment (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A value specifying how the session maps real-world device motion into a 3D scene coordinate system.

## Declaration

```objectivec
@property (nonatomic, assign) ARWorldAlignment worldAlignment;
```

## Mentioned In

- [Understanding World Tracking](../understanding-world-tracking.md)

<a id="Discussion"></a>

## Discussion

Creating an AR experience depends on being able to construct a coordinate system for placing objects in a virtual 3D world that maps to the real-world position and motion of the device. When you run a session configuration, ARKit creates a scene coordinate system based on the position and orientation of the device; any [ARAnchor](../aranchor.md) objects you create or that the AR session detects are positioned relative to that coordinate system.

See [ARWorldAlignment](worldalignment-swift.enum.md) for possible values.

## See Also

### Configuring the AR session

- [lightEstimationEnabled](islightestimationenabled.md): A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.
- [ARWorldAlignment](worldalignment-swift.enum.md): Options for how ARKit constructs a scene coordinate system based on real-world device motion.
