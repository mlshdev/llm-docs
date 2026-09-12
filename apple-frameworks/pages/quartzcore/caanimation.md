> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation](https://developer.apple.com/documentation/quartzcore/caanimation)

# CAAnimation (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The abstract superclass for animations in Core Animation.

## Declaration

```swift
class CAAnimation
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="overview"></a>

## Overview

`CAAnimation` provides the basic support for the [CAMediaTiming](camediatiming.md) and [CAAction](caaction.md) protocols. You do not create instance of [CAAnimation](caanimation.md): to animate Core Animation layers or SceneKit objects, create instances of the concrete subclasses [CABasicAnimation](cabasicanimation.md), [CAKeyframeAnimation](cakeyframeanimation.md), [CAAnimationGroup](caanimationgroup.md), or [CATransition](catransition.md).

<a id="Animating-Core-Animation-Layers"></a>

### Animating Core Animation Layers

You can animate the contents of your iOS or macOS app’s user interface by attaching animations to [CALayer](calayer.md) objects. For more information, see [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514).

<a id="Animating-Scene-Kit-Content"></a>

### Animating Scene Kit Content

In Scene Kit, animation objects represent not only property-based animations, but also animations of geometry data created with external 3D authoring tools and loaded from a scene file. You use the properties of the [CAAnimation](caanimation.md) object representing a geometry animation to control its timing, monitor its progress, and attach actions for Scene Kit to trigger during the animation. You can attach animations to Scene Kit objects that adopt the [SCNAnimatable](../scenekit/scnanimatable.md) protocol, including nodes, geometries, and materials.

In a Scene Kit app, [CAAnimation](caanimation.md) objects support additional methods and properties, listed under Controlling SceneKit Animation Timing, Fading between SceneKit Animations, and Attaching SceneKit Animation Events.

## Topics

### Creating an Animation

- [init(SCNAnimation:)](caanimation/init%28scnanimation_%29.md): Creates an animation from a SceneKit animation.

### Animation Attributes

- [isRemovedOnCompletion](caanimation/isremovedoncompletion.md): Determines if the animation is removed from the target layer’s animations upon completion.
- [timingFunction](caanimation/timingfunction.md): An optional timing function defining the pacing of the animation.

### Providing Default Values

- [defaultValue(forKey:)](caanimation/defaultvalue%28forkey_%29.md): Specifies the default value of the property with the specified key.

### Designating a Delegate

- [delegate](caanimation/delegate.md): Specifies the receiver’s delegate object.

### Archiving Properties

- [shouldArchiveValue(forKey:)](caanimation/shouldarchivevalue%28forkey_%29.md): Specifies whether the value of the property for a given key is archived.

### Controlling SceneKit Animation Timing

- [usesSceneTimeBase](caanimation/usesscenetimebase.md): For animations attached to SceneKit objects, a Boolean value that determines whether the animation is evaluated using the scene time or the system time.

### Fading between SceneKit Animations

- [fadeInDuration](caanimation/fadeinduration.md): For animations attached to SceneKit objects, the duration for transitioning into the animation’s effect as it begins.
- [fadeOutDuration](caanimation/fadeoutduration.md): For animations attached to SceneKit objects, the duration for transitioning out of the animation’s effect as it ends.

### Attaching SceneKit Animation Events

- [animationEvents](caanimation/animationevents.md): For animations attached to SceneKit objects, a list of events attached to an animation.

### Initializers

- [init(SCNAnimation:)](caanimation/init%28scnanimation_%29.md): Creates an animation from a SceneKit animation.
- [init(coder:)](caanimation/init%28coder_%29.md)

### Instance Properties

- [preferredFrameRateRange](caanimation/preferredframeraterange.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CAAnimationGroup](caanimationgroup.md)
- [CAPropertyAnimation](capropertyanimation.md)
- [CATransition](catransition.md)

### Conforms To

- [CAAction](caaction.md)
- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimationProtocol](../scenekit/scnanimationprotocol.md)

## See Also

### Animation

- [CAAnimationDelegate](caanimationdelegate.md): Methods your app can implement to respond when animations start and stop.
- [CAPropertyAnimation](capropertyanimation.md): An abstract subclass for creating animations that manipulate the value of layer properties.
- [CABasicAnimation](cabasicanimation.md): An object that provides basic, single-keyframe animation capabilities for a layer property.
- [CAKeyframeAnimation](cakeyframeanimation.md): An object that provides keyframe animation capabilities for a layer object.
- [CASpringAnimation](caspringanimation.md): An animation that applies a spring-like force to a layer’s properties.
- [CATransition](catransition.md): An object that provides an animated transition between a layer’s states.
- [CAValueFunction](cavaluefunction.md): An object that provides a flexible method of defining animated transformations.

# CAAnimation (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The abstract superclass for animations in Core Animation.

## Declaration

```objectivec
@interface CAAnimation : NSObject
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="overview"></a>

## Overview

`CAAnimation` provides the basic support for the [CAMediaTiming](camediatiming.md) and [CAAction](caaction.md) protocols. You do not create instance of [CAAnimation](caanimation.md): to animate Core Animation layers or SceneKit objects, create instances of the concrete subclasses [CABasicAnimation](cabasicanimation.md), [CAKeyframeAnimation](cakeyframeanimation.md), [CAAnimationGroup](caanimationgroup.md), or [CATransition](catransition.md).

<a id="Animating-Core-Animation-Layers"></a>

### Animating Core Animation Layers

You can animate the contents of your iOS or macOS app’s user interface by attaching animations to [CALayer](calayer.md) objects. For more information, see [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514).

<a id="Animating-Scene-Kit-Content"></a>

### Animating Scene Kit Content

In Scene Kit, animation objects represent not only property-based animations, but also animations of geometry data created with external 3D authoring tools and loaded from a scene file. You use the properties of the [CAAnimation](caanimation.md) object representing a geometry animation to control its timing, monitor its progress, and attach actions for Scene Kit to trigger during the animation. You can attach animations to Scene Kit objects that adopt the [SCNAnimatable](../scenekit/scnanimatable.md) protocol, including nodes, geometries, and materials.

In a Scene Kit app, [CAAnimation](caanimation.md) objects support additional methods and properties, listed under Controlling SceneKit Animation Timing, Fading between SceneKit Animations, and Attaching SceneKit Animation Events.

## Topics

### Creating an Animation

- [animation](caanimation/animation.md): Creates and returns a new `CAAnimation` instance.
- [animationWithSCNAnimation:](caanimation/init%28scnanimation_%29.md): Creates an animation from a SceneKit animation.

### Animation Attributes

- [removedOnCompletion](caanimation/isremovedoncompletion.md): Determines if the animation is removed from the target layer’s animations upon completion.
- [timingFunction](caanimation/timingfunction.md): An optional timing function defining the pacing of the animation.

### Providing Default Values

- [defaultValueForKey:](caanimation/defaultvalue%28forkey_%29.md): Specifies the default value of the property with the specified key.

### Designating a Delegate

- [delegate](caanimation/delegate.md): Specifies the receiver’s delegate object.

### Archiving Properties

- [shouldArchiveValueForKey:](caanimation/shouldarchivevalue%28forkey_%29.md): Specifies whether the value of the property for a given key is archived.

### Controlling SceneKit Animation Timing

- [usesSceneTimeBase](caanimation/usesscenetimebase.md): For animations attached to SceneKit objects, a Boolean value that determines whether the animation is evaluated using the scene time or the system time.

### Fading between SceneKit Animations

- [fadeInDuration](caanimation/fadeinduration.md): For animations attached to SceneKit objects, the duration for transitioning into the animation’s effect as it begins.
- [fadeOutDuration](caanimation/fadeoutduration.md): For animations attached to SceneKit objects, the duration for transitioning out of the animation’s effect as it ends.

### Attaching SceneKit Animation Events

- [animationEvents](caanimation/animationevents.md): For animations attached to SceneKit objects, a list of events attached to an animation.

### Initializers

- [animationWithSCNAnimation:](caanimation/init%28scnanimation_%29.md): Creates an animation from a SceneKit animation.

### Instance Properties

- [preferredFrameRateRange](caanimation/preferredframeraterange.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CAAnimationGroup](caanimationgroup.md)
- [CAPropertyAnimation](capropertyanimation.md)
- [CATransition](catransition.md)

### Conforms To

- [CAAction](caaction.md)
- [CAMediaTiming](camediatiming.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimation](../scenekit/scnanimationprotocol.md)

## See Also

### Animation

- [CAAnimationDelegate](caanimationdelegate.md): Methods your app can implement to respond when animations start and stop.
- [CAPropertyAnimation](capropertyanimation.md): An abstract subclass for creating animations that manipulate the value of layer properties.
- [CABasicAnimation](cabasicanimation.md): An object that provides basic, single-keyframe animation capabilities for a layer property.
- [CAKeyframeAnimation](cakeyframeanimation.md): An object that provides keyframe animation capabilities for a layer object.
- [CASpringAnimation](caspringanimation.md): An animation that applies a spring-like force to a layer’s properties.
- [CATransition](catransition.md): An object that provides an animated transition between a layer’s states.
- [CAValueFunction](cavaluefunction.md): An object that provides a flexible method of defining animated transformations.
