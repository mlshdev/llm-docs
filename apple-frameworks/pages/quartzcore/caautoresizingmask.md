> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caautoresizingmask](https://developer.apple.com/documentation/quartzcore/caautoresizingmask)

# CAAutoresizingMask (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.1+ · macOS

These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.

## Declaration

```swift
struct CAAutoresizingMask
```

## Topics

### Constants

- [init(rawValue:)](caautoresizingmask/init%28rawvalue_%29.md)
- [layerMinXMargin](caautoresizingmask/layerminxmargin.md): The left margin between the receiver and its superview is flexible.
- [layerWidthSizable](caautoresizingmask/layerwidthsizable.md): The receiver’s width is flexible.
- [layerMaxXMargin](caautoresizingmask/layermaxxmargin.md): The right margin between the receiver and its superview is flexible.
- [layerMinYMargin](caautoresizingmask/layerminymargin.md): The bottom margin between the receiver and its superview is flexible.
- [layerHeightSizable](caautoresizingmask/layerheightsizable.md): The receiver’s height is flexible.
- [layerMaxYMargin](caautoresizingmask/layermaxymargin.md): The top margin between the receiver and its superview is flexible.

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

- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [action(forKey:)](calayer/action%28forkey_%29.md), [add(\_:forKey:)](calayer/add%28__forkey_%29.md), [defaultAction(forKey:)](calayer/defaultaction%28forkey_%29.md), [removeAnimation(forKey:)](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CALayer.DynamicRange](calayer/dynamicrange.md)

# CAAutoresizingMask (Objective-C)

**Framework:** Core Animation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ · macOS

These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.

## Declaration

```objectivec
enum CAAutoresizingMask : unsigned int;
```

## Topics

### Constants

- [kCALayerNotSizable](caautoresizingmask/kcalayernotsizable.md): The receiver cannot be resized.
- [kCALayerMinXMargin](caautoresizingmask/layerminxmargin.md): The left margin between the receiver and its superview is flexible.
- [kCALayerWidthSizable](caautoresizingmask/layerwidthsizable.md): The receiver’s width is flexible.
- [kCALayerMaxXMargin](caautoresizingmask/layermaxxmargin.md): The right margin between the receiver and its superview is flexible.
- [kCALayerMinYMargin](caautoresizingmask/layerminymargin.md): The bottom margin between the receiver and its superview is flexible.
- [kCALayerHeightSizable](caautoresizingmask/layerheightsizable.md): The receiver’s height is flexible.
- [kCALayerMaxYMargin](caautoresizingmask/layermaxymargin.md): The top margin between the receiver and its superview is flexible.

## See Also

### Constants

- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [actionForKey:](calayer/action%28forkey_%29.md), [addAnimation:forKey:](calayer/add%28__forkey_%29.md), [defaultActionForKey:](calayer/defaultaction%28forkey_%29.md), [removeAnimationForKey:](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CADynamicRange](calayer/dynamicrange.md)
