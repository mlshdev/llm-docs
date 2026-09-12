> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/islightestimationenabled](https://developer.apple.com/documentation/arkit/arconfiguration/islightestimationenabled)

# isLightEstimationEnabled (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.

## Declaration

```swift
var isLightEstimationEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true) (the default), a running AR session provides scene lighting information in the [lightEstimate](../arframe/lightestimate.md) property of each [ARFrame](../arframe.md) object it captures.

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. (A [RealityView](../../realitykit/realityview.md) or [ARView](../../realitykit/arview.md) automatically uses this information to configure RealityKit lighting.)

## See Also

### Configuring the AR session

- [worldAlignment](worldalignment-swift.property.md): A value specifying how the session maps real-world device motion into a 3D scene coordinate system.
- [ARConfiguration.WorldAlignment](worldalignment-swift.enum.md): Options for how ARKit constructs a scene coordinate system based on real-world device motion.

# lightEstimationEnabled (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isLightEstimationEnabled) BOOL lightEstimationEnabled;
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true) (the default), a running AR session provides scene lighting information in the [lightEstimate](../arframe/lightestimate.md) property of each [ARFrame](../arframe.md) object it captures.

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. (A [RealityView](../../realitykit/realityview.md) or [ARView](../../realitykit/arview.md) automatically uses this information to configure RealityKit lighting.)

## See Also

### Configuring the AR session

- [worldAlignment](worldalignment-swift.property.md): A value specifying how the session maps real-world device motion into a 3D scene coordinate system.
- [ARWorldAlignment](worldalignment-swift.enum.md): Options for how ARKit constructs a scene coordinate system based on real-world device motion.
