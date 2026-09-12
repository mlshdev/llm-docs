> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caedgeantialiasingmask](https://developer.apple.com/documentation/quartzcore/caedgeantialiasingmask)

# CAEdgeAntialiasingMask (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.

## Declaration

```swift
struct CAEdgeAntialiasingMask
```

## Topics

### Constants

- [init(rawValue:)](caedgeantialiasingmask/init%28rawvalue_%29.md)
- [layerLeftEdge](caedgeantialiasingmask/layerleftedge.md)
- [layerRightEdge](caedgeantialiasingmask/layerrightedge.md)
- [layerBottomEdge](caedgeantialiasingmask/layerbottomedge.md)
- [layerTopEdge](caedgeantialiasingmask/layertopedge.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [action(forKey:)](calayer/action%28forkey_%29.md), [add(\_:forKey:)](calayer/add%28__forkey_%29.md), [defaultAction(forKey:)](calayer/defaultaction%28forkey_%29.md), [removeAnimation(forKey:)](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md).
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CALayer.DynamicRange](calayer/dynamicrange.md)

# CAEdgeAntialiasingMask (Objective-C)

**Framework:** Core Animation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.

## Declaration

```objectivec
enum CAEdgeAntialiasingMask : unsigned int;
```

## Topics

### Constants

- [kCALayerLeftEdge](caedgeantialiasingmask/layerleftedge.md)
- [kCALayerRightEdge](caedgeantialiasingmask/layerrightedge.md)
- [kCALayerBottomEdge](caedgeantialiasingmask/layerbottomedge.md)
- [kCALayerTopEdge](caedgeantialiasingmask/layertopedge.md)

## See Also

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [actionForKey:](calayer/action%28forkey_%29.md), [addAnimation:forKey:](calayer/add%28__forkey_%29.md), [defaultActionForKey:](calayer/defaultaction%28forkey_%29.md), [removeAnimationForKey:](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md).
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CADynamicRange](calayer/dynamicrange.md)
