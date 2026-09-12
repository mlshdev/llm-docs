> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorpher](https://developer.apple.com/documentation/scenekit/scnmorpher)

# SCNMorpher (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that manages smooth transitions between a node’s base geometry and one or more target geometries.

## Declaration

```swift
class SCNMorpher
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929789@2x.png)

You control these transitions by associating an [SCNMorpher](scnmorpher.md) object with a node using its [morpher](scnnode/morpher.md) property. The morpher maintains an array of target geometries and a set of weights associated with each. When all weights are zero, the surface takes the form of the base geometry (from the node’s [geometry](scnnode/geometry.md) property). When you use the [setWeight(\_:forTargetAt:)](scnmorpher/setweight%28__fortargetat_%29.md) method to increase a weight to `1.0`, the surface takes the form of the geometry at the corresponding index in the morpher’s [targets](scnmorpher/targets.md) array. If you use a variety of weight values for several targets, the surface takes a form that proportionally interpolates between the target geometries.

You can also animate weights implicitly or explicitly using keypath animations. For example, the following code creates a morph animation that transitions one target weight back and forth repeatedly:

```objc
CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"morpher.weights[0]"];
animation.fromValue = @0.0;
animation.toValue = @1.0;
animation.autoreverses = YES;
animation.repeatCount = INFINITY;
animation.duration = 5;
[node addAnimation:animation forKey:nil];
```

A morpher and its target geometries may be loaded from a scene file or created programmatically. The base geometry and all target geometries must be topologically identical—that is, they must contain the same number and structural arrangement of vertices.

## Topics

### Specifying Morph Targets

- [targets](scnmorpher/targets.md): The array of target geometries to morph between.

### Blending between Morph Targets

- [weight(forTargetAt:)](scnmorpher/weight%28fortargetat_%29.md): Returns the weight value for the specified target index.
- [setWeight(\_:forTargetAt:)](scnmorpher/setweight%28__fortargetat_%29.md): Specifies a weight value at a specified target index.

### Changing Interpolation Mode

- [calculationMode](scnmorpher/calculationmode.md): The interpolation formula for blending between target geometries.

### Constants

- [SCNMorpherCalculationMode](scnmorphercalculationmode.md): The interpolation formulas for blending between target geometries.

### Initializers

- [init(coder:)](scnmorpher/init%28coder_%29.md)

### Instance Properties

- [unifiesNormals](scnmorpher/unifiesnormals.md)
- [weights](scnmorpher/weights.md)

### Instance Methods

- [setWeight(\_:forTargetNamed:)](scnmorpher/setweight%28__fortargetnamed_%29.md)
- [weight(forTargetNamed:)](scnmorpher/weight%28fortargetnamed_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

## See Also

### Animation and Constraints

- [Animation](animation.md): Create declarative animations that move elements of a scene in predetermined ways, or manage animations imported with external authoring tools.
- [Constraints](constraints.md): Automatically adjust the position or orientation of a node based on specified rules.
- [SCNSkinner](scnskinner.md): An object that manages the relationship between skeletal animations and the nodes and geometries they animate.

# SCNMorpher (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

An object that manages smooth transitions between a node’s base geometry and one or more target geometries.

## Declaration

```objectivec
@interface SCNMorpher : NSObject
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929789@2x.png)

You control these transitions by associating an [SCNMorpher](scnmorpher.md) object with a node using its [morpher](scnnode/morpher.md) property. The morpher maintains an array of target geometries and a set of weights associated with each. When all weights are zero, the surface takes the form of the base geometry (from the node’s [geometry](scnnode/geometry.md) property). When you use the [setWeight:forTargetAtIndex:](scnmorpher/setweight%28__fortargetat_%29.md) method to increase a weight to `1.0`, the surface takes the form of the geometry at the corresponding index in the morpher’s [targets](scnmorpher/targets.md) array. If you use a variety of weight values for several targets, the surface takes a form that proportionally interpolates between the target geometries.

You can also animate weights implicitly or explicitly using keypath animations. For example, the following code creates a morph animation that transitions one target weight back and forth repeatedly:

```objc
CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"morpher.weights[0]"];
animation.fromValue = @0.0;
animation.toValue = @1.0;
animation.autoreverses = YES;
animation.repeatCount = INFINITY;
animation.duration = 5;
[node addAnimation:animation forKey:nil];
```

A morpher and its target geometries may be loaded from a scene file or created programmatically. The base geometry and all target geometries must be topologically identical—that is, they must contain the same number and structural arrangement of vertices.

## Topics

### Specifying Morph Targets

- [targets](scnmorpher/targets.md): The array of target geometries to morph between.

### Blending between Morph Targets

- [weightForTargetAtIndex:](scnmorpher/weight%28fortargetat_%29.md): Returns the weight value for the specified target index.
- [setWeight:forTargetAtIndex:](scnmorpher/setweight%28__fortargetat_%29.md): Specifies a weight value at a specified target index.

### Changing Interpolation Mode

- [calculationMode](scnmorpher/calculationmode.md): The interpolation formula for blending between target geometries.

### Constants

- [SCNMorpherCalculationMode](scnmorphercalculationmode.md): The interpolation formulas for blending between target geometries.

### Instance Properties

- [unifiesNormals](scnmorpher/unifiesnormals.md)
- [weights](scnmorpher/weights.md)

### Instance Methods

- [setWeight:forTargetNamed:](scnmorpher/setweight%28__fortargetnamed_%29.md)
- [weightForTargetNamed:](scnmorpher/weight%28fortargetnamed_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

## See Also

### Animation and Constraints

- [Animation](animation.md): Create declarative animations that move elements of a scene in predetermined ways, or manage animations imported with external authoring tools.
- [Constraints](constraints.md): Automatically adjust the position or orientation of a node based on specified rules.
- [SCNSkinner](scnskinner.md): An object that manages the relationship between skeletal animations and the nodes and geometries they animate.
