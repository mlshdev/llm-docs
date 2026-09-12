> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfieldscope](https://developer.apple.com/documentation/scenekit/scnphysicsfieldscope)

# SCNPhysicsFieldScope (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for defining the region of space affected by a physics field, used by the [scope](scnphysicsfield/scope.md) property.

## Declaration

```swift
enum SCNPhysicsFieldScope
```

<a id="overview"></a>

## Overview

You define a region of space for a field using the position of the node containing the field and the field’s [halfExtent](scnphysicsfield/halfextent.md) and [usesEllipsoidalExtent](scnphysicsfield/usesellipsoidalextent.md) properties. Then, you use the [scope](scnphysicsfield/scope.md) property to choose whether the field’s area of effect is the interior of this region or whether it is the entirety of scene space excluding this region.

## Topics

### Constants

- [SCNPhysicsFieldScope.insideExtent](scnphysicsfieldscope/insideextent.md): The field’s effect applies only to objects within the region of space defined by its position and extent.
- [SCNPhysicsFieldScope.outsideExtent](scnphysicsfieldscope/outsideextent.md): The field’s effect applies only to objects outside the region of space defined by its position and extent.

### Initializers

- [init(rawValue:)](scnphysicsfieldscope/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [SCNFieldForceEvaluator](scnfieldforceevaluator.md): The signature for a block that SceneKit calls to determine the effect of a custom field on an object.

# SCNPhysicsFieldScope (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for defining the region of space affected by a physics field, used by the [scope](scnphysicsfield/scope.md) property.

## Declaration

```objectivec
enum SCNPhysicsFieldScope : NSInteger;
```

<a id="overview"></a>

## Overview

You define a region of space for a field using the position of the node containing the field and the field’s [halfExtent](scnphysicsfield/halfextent.md) and [usesEllipsoidalExtent](scnphysicsfield/usesellipsoidalextent.md) properties. Then, you use the [scope](scnphysicsfield/scope.md) property to choose whether the field’s area of effect is the interior of this region or whether it is the entirety of scene space excluding this region.

## Topics

### Constants

- [SCNPhysicsFieldScopeInsideExtent](scnphysicsfieldscope/insideextent.md): The field’s effect applies only to objects within the region of space defined by its position and extent.
- [SCNPhysicsFieldScopeOutsideExtent](scnphysicsfieldscope/outsideextent.md): The field’s effect applies only to objects outside the region of space defined by its position and extent.

## See Also

### Constants

- [SCNFieldForceEvaluator](scnfieldforceevaluator.md): The signature for a block that SceneKit calls to determine the effect of a custom field on an object.
