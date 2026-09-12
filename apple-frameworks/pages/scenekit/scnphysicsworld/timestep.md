> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/timestep](https://developer.apple.com/documentation/scenekit/scnphysicsworld/timestep)

# timeStep (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The time interval between updates to the physics simulation.

## Declaration

```swift
var timeStep: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit processes the physics simulation and updates the state of all physics bodies once per the time interval specified by this property. The default value is 1/60 second (a rate of 60 Hz).

A faster simulation rate provides more accuracy in simulation results—such as collisions between fast-moving objects—but at a higher cost in CPU time (which may in turn slow down your app’s rendering frame rate). Typically, you should set this property to match your target rendering frame rate (as defined by the [preferredFramesPerSecond](../scnview/preferredframespersecond.md) property of the [SCNView](../scnview.md) object rendering your scene).

## See Also

### Managing the Physics Simulation

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](speed.md): The rate at which the simulation executes.
- [updateCollisionPairs()](updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.

# timeStep (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The time interval between updates to the physics simulation.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval timeStep;
```

<a id="Discussion"></a>

## Discussion

SceneKit processes the physics simulation and updates the state of all physics bodies once per the time interval specified by this property. The default value is 1/60 second (a rate of 60 Hz).

A faster simulation rate provides more accuracy in simulation results—such as collisions between fast-moving objects—but at a higher cost in CPU time (which may in turn slow down your app’s rendering frame rate). Typically, you should set this property to match your target rendering frame rate (as defined by the [preferredFramesPerSecond](../scnview/preferredframespersecond.md) property of the [SCNView](../scnview.md) object rendering your scene).

## See Also

### Managing the Physics Simulation

- [gravity](gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](speed.md): The rate at which the simulation executes.
- [updateCollisionPairs](updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.
