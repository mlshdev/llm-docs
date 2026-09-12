> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/init(node:)](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/init(node:))

# init(node:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a wheel object.

## Declaration

```swift
convenience init(node: SCNNode)
```

## Parameters

- `node`: The node whose contents provide the wheel’s visual representation.

<a id="return-value"></a>

## Return Value

A new wheel object.

<a id="Discussion"></a>

## Discussion

The node representing a wheel must be a child of the node whose physics body serves as the chassis of the [SCNPhysicsVehicle](../scnphysicsvehicle.md) behavior the wheel is attached to. Each wheel object must reference a unique node. To use the wheel, add it to the vehicle behavior using the addWheel: method.

SceneKit uses the node’s bounding box to determine the wheel’s initial size, and it uses the node’s position to determine the where the wheel connects to the vehicle’s chassis. You can change attributes using the [radius](radius.md) and [connectionPosition](connectionposition.md) properties.

# wheelWithNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a wheel object.

## Declaration

```objectivec
+ (instancetype) wheelWithNode:(SCNNode *) node;
```

## Parameters

- `node`: The node whose contents provide the wheel’s visual representation.

<a id="return-value"></a>

## Return Value

A new wheel object.

<a id="Discussion"></a>

## Discussion

The node representing a wheel must be a child of the node whose physics body serves as the chassis of the [SCNPhysicsVehicle](../scnphysicsvehicle.md) behavior the wheel is attached to. Each wheel object must reference a unique node. To use the wheel, add it to the vehicle behavior using the addWheel: method.

SceneKit uses the node’s bounding box to determine the wheel’s initial size, and it uses the node’s position to determine the where the wheel connects to the vehicle’s chassis. You can change attributes using the [radius](radius.md) and [connectionPosition](connectionposition.md) properties.
