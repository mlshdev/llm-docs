> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitemcollisionboundstype](https://developer.apple.com/documentation/uikit/uidynamicitemcollisionboundstype)

# UIDynamicItemCollisionBoundsType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that indicate the shape of the item’s collision bounds.

## Declaration

```swift
enum UIDynamicItemCollisionBoundsType
```

## Topics

### Constants

- [UIDynamicItemCollisionBoundsType.rectangle](uidynamicitemcollisionboundstype/rectangle.md): Rectangular collision bounds.
- [UIDynamicItemCollisionBoundsType.ellipse](uidynamicitemcollisionboundstype/ellipse.md): Elliptical collision bounds. The shape of the ellipse is determined by the width and height of the item’s [bounds](uidynamicitem/bounds.md) property.
- [UIDynamicItemCollisionBoundsType.path](uidynamicitemcollisionboundstype/path.md): Path-based collision bounds. For this type, the shape is a [UIBezierPath](uibezierpath.md) object stored in the item’s [collisionBoundingPath](uidynamicitem/collisionboundingpath.md) property. See the description of that property for information about how to configure the path itself.

### Initializers

- [init(rawValue:)](uidynamicitemcollisionboundstype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UIDynamicItemCollisionBoundsType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that indicate the shape of the item’s collision bounds.

## Declaration

```objectivec
enum UIDynamicItemCollisionBoundsType : NSUInteger;
```

## Topics

### Constants

- [UIDynamicItemCollisionBoundsTypeRectangle](uidynamicitemcollisionboundstype/rectangle.md): Rectangular collision bounds.
- [UIDynamicItemCollisionBoundsTypeEllipse](uidynamicitemcollisionboundstype/ellipse.md): Elliptical collision bounds. The shape of the ellipse is determined by the width and height of the item’s [bounds](uidynamicitem/bounds.md) property.
- [UIDynamicItemCollisionBoundsTypePath](uidynamicitemcollisionboundstype/path.md): Path-based collision bounds. For this type, the shape is a [UIBezierPath](uibezierpath.md) object stored in the item’s [collisionBoundingPath](uidynamicitem/collisionboundingpath.md) property. See the description of that property for information about how to configure the path itself.
