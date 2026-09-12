> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/scaling-filters](https://developer.apple.com/documentation/quartzcore/scaling-filters)

# Scaling Filters (Swift)

**Framework:** Core Animation  
**Kind:** API Collection

These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).

## Topics

### Constants

- [linear](calayercontentsfilter/linear.md): Linear interpolation filter.
- [nearest](calayercontentsfilter/nearest.md): Nearest neighbor interpolation filter.
- [trilinear](calayercontentsfilter/trilinear.md): Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.

## See Also

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [action(forKey:)](calayer/action%28forkey_%29.md), [add(\_:forKey:)](calayer/add%28__forkey_%29.md), [defaultAction(forKey:)](calayer/defaultaction%28forkey_%29.md), [removeAnimation(forKey:)](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CALayer.DynamicRange](calayer/dynamicrange.md)

# Scaling Filters (Objective-C)

**Framework:** Core Animation  
**Kind:** API Collection

These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).

## Topics

### Constants

- [kCAFilterLinear](calayercontentsfilter/linear.md): Linear interpolation filter.
- [kCAFilterNearest](calayercontentsfilter/nearest.md): Nearest neighbor interpolation filter.
- [kCAFilterTrilinear](calayercontentsfilter/trilinear.md): Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.

## See Also

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [actionForKey:](calayer/action%28forkey_%29.md), [addAnimation:forKey:](calayer/add%28__forkey_%29.md), [defaultActionForKey:](calayer/defaultaction%28forkey_%29.md), [removeAnimationForKey:](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CADynamicRange](calayer/dynamicrange.md)
