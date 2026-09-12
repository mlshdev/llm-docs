> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/angularvelocity](https://developer.apple.com/documentation/scenekit/scnphysicsbody/angularvelocity)

# angularVelocity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A vector describing both the current rotation axis and rotational speed (in radians per second) of the physics body.

## Declaration

```swift
var angularVelocity: SCNVector4 { get set }
```

<a id="Discussion"></a>

## Discussion

A positive rotational speed indicates counterclockwise rotation (when viewed from the direction the rotation axis points in).

SceneKit’s physics simulation determines the angular velocity (and corresponding change in rotation) of each dynamic physics body in the scene. You can also set a body’s velocity directly to set the physics simulation in motion or influence its behavior.

The effect of reading or setting this property’s value changes based on the current context:

- When invoked within a rendering loop method (any of the methods in the [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) protocol), or from any other code invoked from within such a method, reading the property returns the current result of the physics simulation, and setting the property immediately applies the change.
- When invoked at any other time, reading the property returns the last value set for the property, and setting the property does not take effect until the next pass through the rendering loop.

## See Also

### Interacting with Bodies in Motion

- [velocity](velocity.md): A vector describing both the current speed (in meters per second) and direction of motion of the physics body.

# angularVelocity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A vector describing both the current rotation axis and rotational speed (in radians per second) of the physics body.

## Declaration

```objectivec
@property (nonatomic) SCNVector4 angularVelocity;
```

<a id="Discussion"></a>

## Discussion

A positive rotational speed indicates counterclockwise rotation (when viewed from the direction the rotation axis points in).

SceneKit’s physics simulation determines the angular velocity (and corresponding change in rotation) of each dynamic physics body in the scene. You can also set a body’s velocity directly to set the physics simulation in motion or influence its behavior.

The effect of reading or setting this property’s value changes based on the current context:

- When invoked within a rendering loop method (any of the methods in the [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) protocol), or from any other code invoked from within such a method, reading the property returns the current result of the physics simulation, and setting the property immediately applies the change.
- When invoked at any other time, reading the property returns the last value set for the property, and setting the property does not take effect until the next pass through the rendering loop.

## See Also

### Interacting with Bodies in Motion

- [velocity](velocity.md): A vector describing both the current speed (in meters per second) and direction of motion of the physics body.
