> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath](https://developer.apple.com/documentation/gameplaykit/gkpath)

# GKPath (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A polygonal path that can be followed by an agent.

## Declaration

```swift
class GKPath
```

<a id="overview"></a>

## Overview

To make an agent move to or stay within the area defined by a path, create a goal with the [init(toStayOn:maxPredictionTime:)](gkgoal/init%28tostayon_maxpredictiontime_%29.md) method; to make an agent traverse along a path, create a goal with the [init(toFollow:maxPredictionTime:forward:)](gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md) method.

A path can be expressed as a sequence of either 2D points or 3D points. Use the former to create paths for use by [GKAgent2D](gkagent2d.md) objects, and the latter to create paths for [GKAgent3D](gkagent3d.md) objects to follow.

> **Note**

>  The coordinate system in which you express the path’s vertices and radius is arbitrary; you may choose how to map agent positions and sizes into your game scene. It often makes sense to use the same coordinate system as your game engine—for example, when using agents in a SpriteKit-based game, you’d typically specify a path in screen points.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Path

- [init(graphNodes:radius:)](gkpath/init%28graphnodes_radius_%29.md): Initializes a path using the positions of the specified graph nodes.

### Managing a Path’s Attributes

- [radius](gkpath/radius.md): The radius of the path.
- [isCyclical](gkpath/iscyclical.md): A Boolean value that determines whether the path loops around on itself (that is, the path’s end point connects to its start point).

### Inspecting a Path’s Shape

- [numPoints](gkpath/numpoints.md): The number of vertices in the path.
- [float2(at:)](gkpath/float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [float3(at:)](gkpath/float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
- [point(at:)](gkpath/point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.

### Initializers

- [init(points:radius:cyclical:)](gkpath/init%28points_radius_cyclical_%29-6qqn4.md)
- [init(points:radius:cyclical:)](gkpath/init%28points_radius_cyclical_%29-2iv4v.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKBehavior](gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.

# GKPath (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A polygonal path that can be followed by an agent.

## Declaration

```objectivec
@interface GKPath : NSObject
```

<a id="overview"></a>

## Overview

To make an agent move to or stay within the area defined by a path, create a goal with the [goalToStayOnPath:maxPredictionTime:](gkgoal/init%28tostayon_maxpredictiontime_%29.md) method; to make an agent traverse along a path, create a goal with the [goalToFollowPath:maxPredictionTime:forward:](gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md) method.

A path can be expressed as a sequence of either 2D points or 3D points. Use the former to create paths for use by [GKAgent2D](gkagent2d.md) objects, and the latter to create paths for [GKAgent3D](gkagent3d.md) objects to follow.

> **Note**

>  The coordinate system in which you express the path’s vertices and radius is arbitrary; you may choose how to map agent positions and sizes into your game scene. It often makes sense to use the same coordinate system as your game engine—for example, when using agents in a SpriteKit-based game, you’d typically specify a path in screen points.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Path

- [initWithPoints:count:radius:cyclical:](gkpath/initwithpoints_count_radius_cyclical_.md): Initializes a path with the specified array of 2D points.
- [pathWithPoints:count:radius:cyclical:](gkpath/pathwithpoints_count_radius_cyclical_.md): Creates a path with the specified array of 2D points.
- [initWithFloat3Points:count:radius:cyclical:](gkpath/initwithfloat3points_count_radius_cyclical_.md): Initializes a path with the specified array of 3D points.
- [pathWithFloat3Points:count:radius:cyclical:](gkpath/pathwithfloat3points_count_radius_cyclical_.md): Creates a path with the specified array of 3D points.
- [initWithGraphNodes:radius:](gkpath/init%28graphnodes_radius_%29.md): Initializes a path using the positions of the specified graph nodes.
- [pathWithGraphNodes:radius:](gkpath/pathwithgraphnodes_radius_.md): Creates a path using the positions of the specified graph nodes.

### Managing a Path’s Attributes

- [radius](gkpath/radius.md): The radius of the path.
- [cyclical](gkpath/iscyclical.md): A Boolean value that determines whether the path loops around on itself (that is, the path’s end point connects to its start point).

### Inspecting a Path’s Shape

- [numPoints](gkpath/numpoints.md): The number of vertices in the path.
- [float2AtIndex:](gkpath/float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [float3AtIndex:](gkpath/float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
- [pointAtIndex:](gkpath/point%28at_%29.md): Deprecated. Returns the 2D point at the specified index in the path’s list of vertices.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKBehavior](gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.
