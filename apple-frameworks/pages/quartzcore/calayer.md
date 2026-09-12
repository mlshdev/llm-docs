> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer](https://developer.apple.com/documentation/quartzcore/calayer)

# CALayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An object that manages image-based content and allows you to perform animations on that content.

## Declaration

```swift
class CALayer
```

<a id="overview"></a>

## Overview

Layers are often used to provide the backing store for views but can also be used without a view to display content. A layer’s main job is to manage the visual content that you provide but the layer itself has visual attributes that can be set, such as a background color, border, and shadow. In addition to managing visual content, the layer also maintains information about the geometry of its content (such as its position, size, and transform) that is used to present that content onscreen. Modifying the properties of the layer is how you initiate animations on the layer’s content or geometry. A layer object encapsulates the duration and pacing of a layer and its animations by adopting the [CAMediaTiming](camediatiming.md) protocol, which defines the layer’s timing information.

If the layer object was created by a view, the view typically assigns itself as the layer’s delegate automatically, and you should not change that relationship. For layers you create yourself, you can assign a [delegate](calayer/delegate.md) object and use that object to provide the contents of the layer dynamically and perform other tasks. A layer may also have a layout manager object (assigned to the [layoutManager](calayer/layoutmanager.md) property) to manage the layout of subviews separately.

## Topics

### Creating a layer

- [init()](calayer/init%28%29.md): Returns an initialized `CALayer` object.
- [init(layer:)](calayer/init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.
- [init(remoteClientId:)](calayer/init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.

### Accessing related layer objects

- [presentation()](calayer/presentation%28%29.md): Returns a copy of the presentation layer object that represents the state of the layer as it currently appears onscreen.
- [model()](calayer/model%28%29.md): Returns the model layer object associated with the receiver, if any.

### Accessing the delegate

- [delegate](calayer/delegate.md): The layer’s delegate object.

### Providing the layer’s content

- [contents](calayer/contents.md): An object that provides the contents of the layer. Animatable.
- [contentsRect](calayer/contentsrect.md): The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.
- [contentsCenter](calayer/contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display()](calayer/display%28%29.md): Reloads the content of this layer.
- [draw(in:)](calayer/draw%28in_%29.md): Draws the layer’s content using the specified graphics context.

### Modifying the layer’s appearance

- [contentsGravity](calayer/contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](calayer/contentsgravity.md) property.
- [opacity](calayer/opacity.md): The opacity of the receiver. Animatable.
- [isHidden](calayer/ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](calayer/maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](calayer/mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [isDoubleSided](calayer/isdoublesided.md): A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.
- [cornerRadius](calayer/cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](calayer/maskedcorners.md)
- [CACornerMask](cacornermask.md)
- [borderWidth](calayer/borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](calayer/bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](calayer/backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](calayer/shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](calayer/shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](calayer/shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.
- [shadowColor](calayer/shadowcolor.md): The color of the layer’s shadow. Animatable.
- [shadowPath](calayer/shadowpath.md): The shape of the layer’s shadow. Animatable.
- [style](calayer/style.md): An optional dictionary used to store property values that aren’t explicitly defined by the layer.
- [allowsEdgeAntialiasing](calayer/allowsedgeantialiasing.md): A Boolean indicating whether the layer is allowed to perform edge antialiasing.
- [allowsGroupOpacity](calayer/allowsgroupopacity.md): A Boolean indicating whether the layer is allowed to composite itself as a group separate from its parent.

### Layer filters

- [filters](calayer/filters.md): An array of Core Image filters to apply to the contents of the layer and its sublayers. Animatable.
- [compositingFilter](calayer/compositingfilter.md): A CoreImage filter used to composite the layer and the content behind it. Animatable.
- [backgroundFilters](calayer/backgroundfilters.md): An array of Core Image filters to apply to the content immediately behind the layer. Animatable.
- [minificationFilter](calayer/minificationfilter.md): The filter used when reducing the size of the content.
- [minificationFilterBias](calayer/minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [magnificationFilter](calayer/magnificationfilter.md): The filter used when increasing the size of the content.

### Configuring the layer’s rendering behavior

- [isOpaque](calayer/isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](calayer/edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped()](calayer/contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [isGeometryFlipped](calayer/isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](calayer/drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](calayer/shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](calayer/rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](calayer/contentsformat.md): A hint for the desired storage format of the layer contents.
- [render(in:)](calayer/render%28in_%29.md): Renders the layer and its sublayers into the specified context.

### Modifying the layer geometry

- [frame](calayer/frame.md): The layer’s frame rectangle.
- [bounds](calayer/bounds.md): The layer’s bounds rectangle. Animatable.
- [position](calayer/position.md): The layer’s position in its superlayer’s coordinate space. Animatable.
- [zPosition](calayer/zposition.md): The layer’s position on the z axis. Animatable.
- [anchorPointZ](calayer/anchorpointz.md): The anchor point for the layer’s position along the z axis. Animatable.
- [anchorPoint](calayer/anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](calayer/contentsscale.md): The scale factor applied to the layer.

### Managing the layer’s transform

- [transform](calayer/transform.md): The transform applied to the layer’s contents. Animatable.
- [sublayerTransform](calayer/sublayertransform.md): Specifies the transform to apply to sublayers when rendering. Animatable.
- [affineTransform()](calayer/affinetransform%28%29.md): Returns an affine version of the layer’s transform.
- [setAffineTransform(\_:)](calayer/setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.

### Managing the layer hierarchy

- [sublayers](calayer/sublayers.md): An array containing the layer’s sublayers.
- [superlayer](calayer/superlayer.md): The superlayer of the layer.
- [addSublayer(\_:)](calayer/addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer()](calayer/removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer(\_:at:)](calayer/insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer(\_:below:)](calayer/insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer(\_:above:)](calayer/insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer(\_:with:)](calayer/replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

### Updating layer display

- [setNeedsDisplay()](calayer/setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplay(\_:)](calayer/setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](calayer/needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded()](calayer/displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay()](calayer/needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplay(forKey:)](calayer/needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

### Layer animations

- [add(\_:forKey:)](calayer/add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [animation(forKey:)](calayer/animation%28forkey_%29.md): Returns the animation object with the specified identifier.
- [removeAllAnimations()](calayer/removeallanimations%28%29.md): Remove all animations attached to the layer.
- [removeAnimation(forKey:)](calayer/removeanimation%28forkey_%29.md): Remove the animation object with the specified key.
- [animationKeys()](calayer/animationkeys%28%29.md): Returns an array of strings that identify the animations currently attached to the layer.

### Managing layer resizing and layout

- [layoutManager](calayer/layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](calayer/setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](calayer/layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](calayer/layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](calayer/needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](calayer/autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](calayer/resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](calayer/resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](calayer/preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

### Managing layer constraints

- [constraints](calayer/constraints.md): The constraints used to position current layer’s sublayers.
- [addConstraint(\_:)](calayer/addconstraint%28__%29.md): Adds the specified constraint to the layer.

### Getting the layer’s actions

- [action(forKey:)](calayer/action%28forkey_%29.md): Returns the action object assigned to the specified key.
- [actions](calayer/actions.md): A dictionary containing layer actions.
- [defaultAction(forKey:)](calayer/defaultaction%28forkey_%29.md): Returns the default action for the current class.

### Mapping between coordinate and time spaces

- [convert(\_:from:)](calayer/convert%28__from_%29-8kl76.md): Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convert(\_:to:)](calayer/convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convert(\_:from:)](calayer/convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convert(\_:to:)](calayer/convert%28__to_%29-tly5.md): Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertTime(\_:from:)](calayer/converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
- [convertTime(\_:to:)](calayer/converttime%28__to_%29.md): Converts the time interval from the receiver’s time space to the specified layer’s time space

### Hit testing

- [hitTest(\_:)](calayer/hittest%28__%29.md): Returns the farthest descendant of the receiver in the layer hierarchy (including itself) that contains the specified point.
- [contains(\_:)](calayer/contains%28__%29.md): Returns whether the receiver contains a specified point.

### Scrolling

- [visibleRect](calayer/visiblerect.md): The visible region of the layer in its own coordinate space.
- [scroll(\_:)](calayer/scroll%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.
- [scrollRectToVisible(\_:)](calayer/scrollrecttovisible%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.

### Identifying the layer

- [name](calayer/name.md): The name of the receiver.

### Key-value coding extensions

- [shouldArchiveValue(forKey:)](calayer/shouldarchivevalue%28forkey_%29.md): Returns a Boolean indicating whether the value of the specified key should be archived.
- [defaultValue(forKey:)](calayer/defaultvalue%28forkey_%29.md): Specifies the default value associated with the specified key.

### High dynamic range

- [preferredDynamicRange](calayer/preferreddynamicrange.md)
- [contentsHeadroom](calayer/contentsheadroom.md)
- [wantsExtendedDynamicRangeContent](calayer/wantsextendeddynamicrangecontent.md): Deprecated.

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [action(forKey:)](calayer/action%28forkey_%29.md), [add(\_:forKey:)](calayer/add%28__forkey_%29.md), [defaultAction(forKey:)](calayer/defaultaction%28forkey_%29.md), [removeAnimation(forKey:)](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CALayer.DynamicRange](calayer/dynamicrange.md)

### Instance properties

- [cornerCurve](calayer/cornercurve.md)
- [wantsDynamicContentScaling](calayer/wantsdynamiccontentscaling.md)

### Type methods

- [cornerCurveExpansionFactor(\_:)](calayer/cornercurveexpansionfactor%28__%29.md)

### Initializers

- [init(coder:)](calayer/init%28coder_%29.md)

### Instance Properties

- [toneMapMode](calayer/tonemapmode-swift.property.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CAEAGLLayer](caeagllayer.md)
- [CAEmitterLayer](caemitterlayer.md)
- [CAGradientLayer](cagradientlayer.md)
- [CAMetalLayer](cametallayer.md)
- [CAOpenGLLayer](caopengllayer.md)
- [CAReplicatorLayer](careplicatorlayer.md)
- [CAScrollLayer](cascrolllayer.md)
- [CAShapeLayer](cashapelayer.md)
- [CATextLayer](catextlayer.md)
- [CATiledLayer](catiledlayer.md)
- [CATransformLayer](catransformlayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Layer Basics

- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.

# CALayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An object that manages image-based content and allows you to perform animations on that content.

## Declaration

```objectivec
@interface CALayer : NSObject
```

<a id="overview"></a>

## Overview

Layers are often used to provide the backing store for views but can also be used without a view to display content. A layer’s main job is to manage the visual content that you provide but the layer itself has visual attributes that can be set, such as a background color, border, and shadow. In addition to managing visual content, the layer also maintains information about the geometry of its content (such as its position, size, and transform) that is used to present that content onscreen. Modifying the properties of the layer is how you initiate animations on the layer’s content or geometry. A layer object encapsulates the duration and pacing of a layer and its animations by adopting the [CAMediaTiming](camediatiming.md) protocol, which defines the layer’s timing information.

If the layer object was created by a view, the view typically assigns itself as the layer’s delegate automatically, and you should not change that relationship. For layers you create yourself, you can assign a [delegate](calayer/delegate.md) object and use that object to provide the contents of the layer dynamically and perform other tasks. A layer may also have a layout manager object (assigned to the [layoutManager](calayer/layoutmanager.md) property) to manage the layout of subviews separately.

## Topics

### Creating a layer

- [layer](calayer/layer.md): Creates and returns an instance of the layer object.
- [init](calayer/init%28%29.md): Returns an initialized `CALayer` object.
- [initWithLayer:](calayer/init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.
- [layerWithRemoteClientId:](calayer/init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.

### Accessing related layer objects

- [presentationLayer](calayer/presentation%28%29.md): Returns a copy of the presentation layer object that represents the state of the layer as it currently appears onscreen.
- [modelLayer](calayer/model%28%29.md): Returns the model layer object associated with the receiver, if any.

### Accessing the delegate

- [delegate](calayer/delegate.md): The layer’s delegate object.

### Providing the layer’s content

- [contents](calayer/contents.md): An object that provides the contents of the layer. Animatable.
- [contentsRect](calayer/contentsrect.md): The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.
- [contentsCenter](calayer/contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display](calayer/display%28%29.md): Reloads the content of this layer.
- [drawInContext:](calayer/draw%28in_%29.md): Draws the layer’s content using the specified graphics context.

### Modifying the layer’s appearance

- [contentsGravity](calayer/contentsgravity.md): A constant that specifies how the layer’s contents are positioned or scaled within its bounds.
- [Contents Gravity Values](contents-gravity-values.md): The contents gravity constants specify the position of the content object when the layer bounds is larger than the bounds of the content object. They are used by the [contentsGravity](calayer/contentsgravity.md) property.
- [opacity](calayer/opacity.md): The opacity of the receiver. Animatable.
- [hidden](calayer/ishidden.md): A Boolean indicating whether the layer is displayed. Animatable.
- [masksToBounds](calayer/maskstobounds.md): A Boolean indicating whether sublayers are clipped to the layer’s bounds. Animatable.
- [mask](calayer/mask.md): An optional layer whose alpha channel is used to mask the layer’s content.
- [doubleSided](calayer/isdoublesided.md): A Boolean indicating whether the layer displays its content when facing away from the viewer. Animatable.
- [cornerRadius](calayer/cornerradius.md): The radius to use when drawing rounded corners for the layer’s background. Animatable.
- [maskedCorners](calayer/maskedcorners.md)
- [CACornerMask](cacornermask.md)
- [borderWidth](calayer/borderwidth.md): The width of the layer’s border. Animatable.
- [borderColor](calayer/bordercolor.md): The color of the layer’s border. Animatable.
- [backgroundColor](calayer/backgroundcolor.md): The background color of the receiver. Animatable.
- [shadowOpacity](calayer/shadowopacity.md): The opacity of the layer’s shadow. Animatable.
- [shadowRadius](calayer/shadowradius.md): The blur radius (in points) used to render the layer’s shadow. Animatable.
- [shadowOffset](calayer/shadowoffset.md): The offset (in points) of the layer’s shadow. Animatable.
- [shadowColor](calayer/shadowcolor.md): The color of the layer’s shadow. Animatable.
- [shadowPath](calayer/shadowpath.md): The shape of the layer’s shadow. Animatable.
- [style](calayer/style.md): An optional dictionary used to store property values that aren’t explicitly defined by the layer.
- [allowsEdgeAntialiasing](calayer/allowsedgeantialiasing.md): A Boolean indicating whether the layer is allowed to perform edge antialiasing.
- [allowsGroupOpacity](calayer/allowsgroupopacity.md): A Boolean indicating whether the layer is allowed to composite itself as a group separate from its parent.

### Layer filters

- [filters](calayer/filters.md): An array of Core Image filters to apply to the contents of the layer and its sublayers. Animatable.
- [compositingFilter](calayer/compositingfilter.md): A CoreImage filter used to composite the layer and the content behind it. Animatable.
- [backgroundFilters](calayer/backgroundfilters.md): An array of Core Image filters to apply to the content immediately behind the layer. Animatable.
- [minificationFilter](calayer/minificationfilter.md): The filter used when reducing the size of the content.
- [minificationFilterBias](calayer/minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [magnificationFilter](calayer/magnificationfilter.md): The filter used when increasing the size of the content.

### Configuring the layer’s rendering behavior

- [opaque](calayer/isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](calayer/edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped](calayer/contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [geometryFlipped](calayer/isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](calayer/drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](calayer/shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](calayer/rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](calayer/contentsformat.md): A hint for the desired storage format of the layer contents.
- [renderInContext:](calayer/render%28in_%29.md): Renders the layer and its sublayers into the specified context.

### Modifying the layer geometry

- [frame](calayer/frame.md): The layer’s frame rectangle.
- [bounds](calayer/bounds.md): The layer’s bounds rectangle. Animatable.
- [position](calayer/position.md): The layer’s position in its superlayer’s coordinate space. Animatable.
- [zPosition](calayer/zposition.md): The layer’s position on the z axis. Animatable.
- [anchorPointZ](calayer/anchorpointz.md): The anchor point for the layer’s position along the z axis. Animatable.
- [anchorPoint](calayer/anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](calayer/contentsscale.md): The scale factor applied to the layer.

### Managing the layer’s transform

- [transform](calayer/transform.md): The transform applied to the layer’s contents. Animatable.
- [sublayerTransform](calayer/sublayertransform.md): Specifies the transform to apply to sublayers when rendering. Animatable.
- [affineTransform](calayer/affinetransform%28%29.md): Returns an affine version of the layer’s transform.
- [setAffineTransform:](calayer/setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.

### Managing the layer hierarchy

- [sublayers](calayer/sublayers.md): An array containing the layer’s sublayers.
- [superlayer](calayer/superlayer.md): The superlayer of the layer.
- [addSublayer:](calayer/addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer](calayer/removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer:atIndex:](calayer/insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer:below:](calayer/insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer:above:](calayer/insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer:with:](calayer/replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

### Updating layer display

- [setNeedsDisplay](calayer/setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplayInRect:](calayer/setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](calayer/needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded](calayer/displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay](calayer/needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplayForKey:](calayer/needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

### Layer animations

- [addAnimation:forKey:](calayer/add%28__forkey_%29.md): Add the specified animation object to the layer’s render tree.
- [animationForKey:](calayer/animation%28forkey_%29.md): Returns the animation object with the specified identifier.
- [removeAllAnimations](calayer/removeallanimations%28%29.md): Remove all animations attached to the layer.
- [removeAnimationForKey:](calayer/removeanimation%28forkey_%29.md): Remove the animation object with the specified key.
- [animationKeys](calayer/animationkeys%28%29.md): Returns an array of strings that identify the animations currently attached to the layer.

### Managing layer resizing and layout

- [layoutManager](calayer/layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](calayer/setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](calayer/layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](calayer/layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](calayer/needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](calayer/autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](calayer/resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](calayer/resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](calayer/preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

### Managing layer constraints

- [constraints](calayer/constraints.md): The constraints used to position current layer’s sublayers.
- [addConstraint:](calayer/addconstraint%28__%29.md): Adds the specified constraint to the layer.

### Getting the layer’s actions

- [actionForKey:](calayer/action%28forkey_%29.md): Returns the action object assigned to the specified key.
- [actions](calayer/actions.md): A dictionary containing layer actions.
- [defaultActionForKey:](calayer/defaultaction%28forkey_%29.md): Returns the default action for the current class.

### Mapping between coordinate and time spaces

- [convertPoint:fromLayer:](calayer/convert%28__from_%29-8kl76.md): Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertPoint:toLayer:](calayer/convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertRect:fromLayer:](calayer/convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertRect:toLayer:](calayer/convert%28__to_%29-tly5.md): Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertTime:fromLayer:](calayer/converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
- [convertTime:toLayer:](calayer/converttime%28__to_%29.md): Converts the time interval from the receiver’s time space to the specified layer’s time space

### Hit testing

- [hitTest:](calayer/hittest%28__%29.md): Returns the farthest descendant of the receiver in the layer hierarchy (including itself) that contains the specified point.
- [containsPoint:](calayer/contains%28__%29.md): Returns whether the receiver contains a specified point.

### Scrolling

- [visibleRect](calayer/visiblerect.md): The visible region of the layer in its own coordinate space.
- [scrollPoint:](calayer/scroll%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.
- [scrollRectToVisible:](calayer/scrollrecttovisible%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.

### Identifying the layer

- [name](calayer/name.md): The name of the receiver.

### Key-value coding extensions

- [shouldArchiveValueForKey:](calayer/shouldarchivevalue%28forkey_%29.md): Returns a Boolean indicating whether the value of the specified key should be archived.
- [defaultValueForKey:](calayer/defaultvalue%28forkey_%29.md): Specifies the default value associated with the specified key.

### High dynamic range

- [preferredDynamicRange](calayer/preferreddynamicrange.md)
- [contentsHeadroom](calayer/contentsheadroom.md)
- [wantsExtendedDynamicRangeContent](calayer/wantsextendeddynamicrangecontent.md): Deprecated.

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [actionForKey:](calayer/action%28forkey_%29.md), [addAnimation:forKey:](calayer/add%28__forkey_%29.md), [defaultActionForKey:](calayer/defaultaction%28forkey_%29.md), [removeAnimationForKey:](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CATransform3D](catransform3d.md): The standard transform matrix used throughout Core Animation.
- [CADynamicRange](calayer/dynamicrange.md)

### Instance properties

- [cornerCurve](calayer/cornercurve.md)
- [wantsDynamicContentScaling](calayer/wantsdynamiccontentscaling.md)

### Type methods

- [cornerCurveExpansionFactor:](calayer/cornercurveexpansionfactor%28__%29.md)

### Instance Properties

- [toneMapMode](calayer/tonemapmode-swift.property.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CAEAGLLayer](caeagllayer.md)
- [CAEmitterLayer](caemitterlayer.md)
- [CAGradientLayer](cagradientlayer.md)
- [CAMetalLayer](cametallayer.md)
- [CAOpenGLLayer](caopengllayer.md)
- [CAReplicatorLayer](careplicatorlayer.md)
- [CAScrollLayer](cascrolllayer.md)
- [CAShapeLayer](cashapelayer.md)
- [CATextLayer](catextlayer.md)
- [CATiledLayer](catiledlayer.md)
- [CATransformLayer](catransformlayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Layer Basics

- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CAConstraint](caconstraint.md): A representation of a single layout constraint between two layers.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.
