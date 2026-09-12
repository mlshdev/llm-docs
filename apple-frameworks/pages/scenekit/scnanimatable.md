> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnanimatable](https://developer.apple.com/documentation/scenekit/scnanimatable)

# SCNAnimatable (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.

## Declaration

```swift
protocol SCNAnimatable : NSObjectProtocol
```

## Mentioned In

- [Animating SceneKit Content](animating-scenekit-content.md)

<a id="overview"></a>

## Overview

SceneKit uses the same architecture as the Core Animation framework, allowing you to animate property changes implicitly or explicitly. For implicit animation, use the [SCNTransaction](scntransaction.md) class to quickly create simple animations with very little code. For more complex animations, explicitly create [CAAnimation](../quartzcore/caanimation.md) objects, and use the methods in the [SCNAnimatable](scnanimatable.md) protocol to attach them to the SceneKit objects you want to animate. You also use the methods in this protocol to control any animations already attached to a SceneKit object.

For example, making a node spin continuously for as long as it appears in the scene graph requires explicitly creating an animation that repeats. The following code creates such an animation and attaches it to a node:

```objc
CABasicAnimation *rotationAnimation = [CABasicAnimation animationWithKeyPath:@"rotation"];
// Animate one complete revolution around the node's Y axis.
rotationAnimation.toValue = [NSValue valueWithSCNVector4:SCNVector4Make(0, 1, 0, M_PI * 2)];
rotationAnimation.duration = 10.0; // One revolution in ten seconds.
rotationAnimation.repeatCount = FLT_MAX; // Repeat the animation forever.
[node addAnimation:rotationAnimation forKey:nil]; // Attach the animation to the node to start it.
```

## Topics

### Managing Animations

- [addAnimation(\_:forKey:)](scnanimatable/addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animation(forKey:)](scnanimatable/animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](scnanimatable/animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations()](scnanimatable/removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimation(forKey:)](scnanimatable/removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimation(forKey:fadeOutDuration:)](scnanimatable/removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

### Pausing and Resuming Animations

- [pauseAnimation(forKey:)](scnanimatable/pauseanimation%28forkey_%29.md): Deprecated. Pauses the animation attached to the object with the specified key.
- [resumeAnimation(forKey:)](scnanimatable/resumeanimation%28forkey_%29.md): Deprecated. Resumes a previously paused animation attached to the object with the specified key.
- [isAnimationPaused(forKey:)](scnanimatable/isanimationpaused%28forkey_%29.md): Deprecated. Returns a Boolean value indicating whether the animation attached to the object with the specified key is paused.

### Instance Methods

- [addAnimationPlayer(\_:forKey:)](scnanimatable/addanimationplayer%28__forkey_%29.md)
- [animationPlayer(forKey:)](scnanimatable/animationplayer%28forkey_%29.md)
- [removeAllAnimations(withBlendOutDuration:)](scnanimatable/removeallanimations%28withblendoutduration_%29.md)
- [removeAnimation(forKey:blendOutDuration:)](scnanimatable/removeanimation%28forkey_blendoutduration_%29.md)
- [setAnimationSpeed(\_:forKey:)](scnanimatable/setanimationspeed%28__forkey_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNAccelerationConstraint](scnaccelerationconstraint.md)
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNAvoidOccluderConstraint](scnavoidoccluderconstraint.md)
- [SCNBillboardConstraint](scnbillboardconstraint.md)
- [SCNBox](scnbox.md)
- [SCNCamera](scncamera.md)
- [SCNCapsule](scncapsule.md)
- [SCNCone](scncone.md)
- [SCNConstraint](scnconstraint.md)
- [SCNCylinder](scncylinder.md)
- [SCNDistanceConstraint](scndistanceconstraint.md)
- [SCNFloor](scnfloor.md)
- [SCNGeometry](scngeometry.md)
- [SCNIKConstraint](scnikconstraint.md)
- [SCNLight](scnlight.md)
- [SCNLookAtConstraint](scnlookatconstraint.md)
- [SCNMaterial](scnmaterial.md)
- [SCNMaterialProperty](scnmaterialproperty.md)
- [SCNMorpher](scnmorpher.md)
- [SCNNode](scnnode.md)
- [SCNParticleSystem](scnparticlesystem.md)
- [SCNPlane](scnplane.md)
- [SCNPyramid](scnpyramid.md)
- [SCNReferenceNode](scnreferencenode.md)
- [SCNReplicatorConstraint](scnreplicatorconstraint.md)
- [SCNShape](scnshape.md)
- [SCNSliderConstraint](scnsliderconstraint.md)
- [SCNSphere](scnsphere.md)
- [SCNTechnique](scntechnique.md)
- [SCNText](scntext.md)
- [SCNTorus](scntorus.md)
- [SCNTransformConstraint](scntransformconstraint.md)
- [SCNTube](scntube.md)

## See Also

### Explicit Animation

- [SCNAnimationEvent](scnanimationevent.md): A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.
- [SCNAnimation](scnanimation-swift.class.md)
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimationProtocol](scnanimationprotocol.md)
- [SCNAnimation](scnanimation-swift.class.md)

# SCNAnimatable (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.

## Declaration

```objectivec
@protocol SCNAnimatable <NSObject>
```

## Mentioned In

- [Animating SceneKit Content](animating-scenekit-content.md)

<a id="overview"></a>

## Overview

SceneKit uses the same architecture as the Core Animation framework, allowing you to animate property changes implicitly or explicitly. For implicit animation, use the [SCNTransaction](scntransaction.md) class to quickly create simple animations with very little code. For more complex animations, explicitly create [CAAnimation](../quartzcore/caanimation.md) objects, and use the methods in the [SCNAnimatable](scnanimatable.md) protocol to attach them to the SceneKit objects you want to animate. You also use the methods in this protocol to control any animations already attached to a SceneKit object.

For example, making a node spin continuously for as long as it appears in the scene graph requires explicitly creating an animation that repeats. The following code creates such an animation and attaches it to a node:

```objc
CABasicAnimation *rotationAnimation = [CABasicAnimation animationWithKeyPath:@"rotation"];
// Animate one complete revolution around the node's Y axis.
rotationAnimation.toValue = [NSValue valueWithSCNVector4:SCNVector4Make(0, 1, 0, M_PI * 2)];
rotationAnimation.duration = 10.0; // One revolution in ten seconds.
rotationAnimation.repeatCount = FLT_MAX; // Repeat the animation forever.
[node addAnimation:rotationAnimation forKey:nil]; // Attach the animation to the node to start it.
```

## Topics

### Managing Animations

- [addAnimation:forKey:](scnanimatable/addanimation%28__forkey_%29.md): Adds an animation object for the specified key.
- [animationForKey:](scnanimatable/animation%28forkey_%29.md): Deprecated. Returns the animation with the specified key.
- [animationKeys](scnanimatable/animationkeys.md): An array containing the keys of all animations currently attached to the object.
- [removeAllAnimations](scnanimatable/removeallanimations%28%29.md): Removes all the animations currently attached to the object.
- [removeAnimationForKey:](scnanimatable/removeanimation%28forkey_%29.md): Removes the animation attached to the object with the specified key.
- [removeAnimationForKey:fadeOutDuration:](scnanimatable/removeanimation%28forkey_fadeoutduration_%29.md): Deprecated. Removes the animation attached to the object with the specified key, smoothly transitioning out of the animation’s effect.

### Pausing and Resuming Animations

- [pauseAnimationForKey:](scnanimatable/pauseanimation%28forkey_%29.md): Deprecated. Pauses the animation attached to the object with the specified key.
- [resumeAnimationForKey:](scnanimatable/resumeanimation%28forkey_%29.md): Deprecated. Resumes a previously paused animation attached to the object with the specified key.
- [isAnimationForKeyPaused:](scnanimatable/isanimationpaused%28forkey_%29.md): Deprecated. Returns a Boolean value indicating whether the animation attached to the object with the specified key is paused.

### Instance Methods

- [addAnimationPlayer:forKey:](scnanimatable/addanimationplayer%28__forkey_%29.md)
- [animationPlayerForKey:](scnanimatable/animationplayer%28forkey_%29.md)
- [removeAllAnimationsWithBlendOutDuration:](scnanimatable/removeallanimations%28withblendoutduration_%29.md)
- [removeAnimationForKey:blendOutDuration:](scnanimatable/removeanimation%28forkey_blendoutduration_%29.md)
- [setSpeed:forAnimationKey:](scnanimatable/setanimationspeed%28__forkey_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNCamera](scncamera.md)
- [SCNConstraint](scnconstraint.md)
- [SCNGeometry](scngeometry.md)
- [SCNLight](scnlight.md)
- [SCNMaterial](scnmaterial.md)
- [SCNMaterialProperty](scnmaterialproperty.md)
- [SCNMorpher](scnmorpher.md)
- [SCNNode](scnnode.md)
- [SCNParticleSystem](scnparticlesystem.md)
- [SCNTechnique](scntechnique.md)

## See Also

### Explicit Animation

- [SCNAnimationEvent](scnanimationevent.md): A container for a closure, a block in Objective-C, to be executed at a specific time during playback of an animation.
- [SCNAnimation](scnanimation-swift.class.md)
- [SCNAnimationPlayer](scnanimationplayer.md)
- [SCNTimingFunction](scntimingfunction.md)
- [SCNAnimation](scnanimationprotocol.md)
- [SCNAnimation](scnanimation-swift.class.md)
