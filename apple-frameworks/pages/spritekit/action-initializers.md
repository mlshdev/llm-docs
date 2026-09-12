> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/action-initializers](https://developer.apple.com/documentation/spritekit/action-initializers)

# Action Initializers (Swift)

**Framework:** SpriteKit  
**Kind:** API Collection

Use these functions to create actions.

<a id="overview"></a>

## Overview

Most actions implement specific predefined animations that are done for you by SpriteKit. If your animation needs fall outside of the suite provided here, then you should:

- Consider using the methods in Creating Custom Actions below (never subclass `SKAction`)
- Consider the advice in [Drive Game Logic](getting-started-with-actions.md#Drive-Game-Logic)

<a id="Choose-an-Initializer-for-the-Property-You-Want-to-Alter"></a>

### Choose an Initializer for the Property You Want to Alter

Most actions allow you to change a node’s properties and some actions specifically apply to specific nodes, like [SKSpriteNode](skspritenode.md)’s actions for animating its color or texture.

Here are the most common animated properties:

- Changing a node’s [position](sknode/position.md) and [zRotation](sknode/zrotation.md)
- Changing a node’s `size` or scaling properties
- Changing a node’s visibility or making it translucent
- Changing a sprite node’s contents so that it animates through a series of textures
- Colorizing a sprite node
- Playing sounds
- Removing a node from the node tree
- Calling a block
- Invoking a selector on an object

See [Action Initializers](action-initializers.md) for a full list of action types.

<a id="Chaining-Actions"></a>

### Chaining Actions

Actions can be chained together in multiple ways:

- A *sequence action* has multiple child actions. Each action in the sequence begins after the previous action ends.
- A *group action* has multiple child actions. All actions stored in the group begin executing at the same time.
- A *repeating action* stores a single child action. When the child action completes, it is restarted.

To delay a subsequent action in the chain, insert a [wait(forDuration:)](skaction/wait%28forduration_%29.md) action in the sequence, and remember that groups, sequences, and repeating actions may be nested.

## Topics

### Animating a Node’s Position in a Linear Path

Animate linear node movement.

- [moveBy(x:y:duration:)](skaction/moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(by:duration:)](skaction/move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](skaction/move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveTo(x:duration:)](skaction/moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveTo(y:duration:)](skaction/moveto%28y_duration_%29.md): Creates an action that moves a node vertically.

### Animating a Node’s Position Along a Custom Path

Provide a path for the node to follow.

- [follow(\_:duration:)](skaction/follow%28__duration_%29.md): Creates an action that moves the node along a relative path, orienting the node to the path.
- [follow(\_:speed:)](skaction/follow%28__speed_%29.md): Creates an action that moves the node along a relative path at a specified speed, orienting the node to the path.
- [follow(\_:asOffset:orientToPath:duration:)](skaction/follow%28__asoffset_orienttopath_duration_%29.md): Creates an action that moves the node along a path.
- [follow(\_:asOffset:orientToPath:speed:)](skaction/follow%28__asoffset_orienttopath_speed_%29.md): Creates an action that moves the node at a specified speed along a path.

### Animating the Rotation of a Node

Animate the z rotation of a node. If instead you wish to change the x or y rotation of a node, see [SKTransformNode](sktransformnode.md).

- [rotate(byAngle:duration:)](skaction/rotate%28byangle_duration_%29.md): Creates an action that rotates the node by a relative value.
- [rotate(toAngle:duration:)](skaction/rotate%28toangle_duration_%29.md): Creates an action that rotates the node counterclockwise to an absolute angle.
- [rotate(toAngle:duration:shortestUnitArc:)](skaction/rotate%28toangle_duration_shortestunitarc_%29.md): Creates an action that rotates the node to an absolute value.

### Controlling the Action’s Speed

Control the speed of an animation.

- [speed(by:duration:)](skaction/speed%28by_duration_%29.md): Creates an action that changes how fast the node executes actions by a relative value.
- [speed(to:duration:)](skaction/speed%28to_duration_%29.md): Creates an action that changes how fast the node executes actions.

### Animating the Scaling of a Node

Animate the visual scaling of a node.

- [scale(by:duration:)](skaction/scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scale(to:duration:)](skaction/scale%28to_duration_%29-43bz6.md): Creates an action that changes the x and y scale values of a node to achieve
- [scale(to:duration:)](skaction/scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(by:y:duration:)](skaction/scalex%28by_y_duration_%29.md): Creates an action that adds relative values to the x and y scale values of a node.
- [scaleX(to:y:duration:)](skaction/scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(to:duration:)](skaction/scalex%28to_duration_%29.md): Creates an action that changes the x scale value of a node to a new value.
- [scaleY(to:duration:)](skaction/scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.

### Animating the Transparency of a Node

Gradually change a node’s transparency.

- [fadeIn(withDuration:)](skaction/fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeOut(withDuration:)](skaction/fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlpha(by:duration:)](skaction/fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
- [fadeAlpha(to:duration:)](skaction/fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.

### Animating a Node’s Texture

Change a node’s texture or the texture’s properties.

- [resize(byWidth:height:duration:)](skaction/resize%28bywidth_height_duration_%29.md): Creates an action that adjusts the size of a sprite.
- [resize(toHeight:duration:)](skaction/resize%28toheight_duration_%29.md): Creates an action that changes the height of a sprite to a new absolute value.
- [resize(toWidth:duration:)](skaction/resize%28towidth_duration_%29.md): Creates an action that changes the width of a sprite to a new absolute value.
- [resize(toWidth:height:duration:)](skaction/resize%28towidth_height_duration_%29.md): Creates an action that changes the width and height of a sprite to a new absolute value.
- [setTexture(\_:)](skaction/settexture%28__%29.md): Creates an action that changes a sprite’s texture.
- [setTexture(\_:resize:)](skaction/settexture%28__resize_%29.md): Creates an action that changes a sprite’s texture, possibly resizing the sprite.
- [animate(with:timePerFrame:)](skaction/animate%28with_timeperframe_%29.md): Creates an action that animates changes to a sprite’s texture.
- [animate(with:timePerFrame:resize:restore:)](skaction/animate%28with_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.
- [setNormalTexture(\_:)](skaction/setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture(\_:resize:)](skaction/setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animate(withNormalTextures:timePerFrame:)](skaction/animate%28withnormaltextures_timeperframe_%29.md): Creates an action that animates changes to a sprite’s normal texture.
- [animate(withNormalTextures:timePerFrame:resize:restore:)](skaction/animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorize(with:colorBlendFactor:duration:)](skaction/colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorize(withColorBlendFactor:duration:)](skaction/colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.

### Animating Properties of a Node’s Physics Body

Physics actions are instantaneous and therefore more useful when `Chaining Actions` or [Reuse Actions](getting-started-with-actions.md#Reuse-Actions).

- [applyForce(\_:duration:)](skaction/applyforce%28__duration_%29.md): Creates an action that applies a force to the center of gravity of a node’s physics body.
- [applyTorque(\_:duration:)](skaction/applytorque%28__duration_%29.md): Creates an action that applies a torque to a node’s physics body.
- [applyForce(\_:at:duration:)](skaction/applyforce%28__at_duration_%29.md): Creates an action that applies a force to a specific point on a node’s physics body.
- [applyImpulse(\_:duration:)](skaction/applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse(\_:duration:)](skaction/applyangularimpulse%28__duration_%29.md): Creates an action that applies an angular impulse to a node’s physics body.
- [applyImpulse(\_:at:duration:)](skaction/applyimpulse%28__at_duration_%29.md): Creates an action that applies an impulse to a specific point of a node’s physics body.
- [applyImpulse(\_:duration:)](skaction/applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [changeCharge(to:duration:)](skaction/changecharge%28to_duration_%29.md): Creates an action that changes the charge of a node’s physics body to a new value.
- [changeCharge(by:duration:)](skaction/changecharge%28by_duration_%29.md): Creates an action that changes the charge of a node’s physics body by a relative value.
- [changeMass(to:duration:)](skaction/changemass%28to_duration_%29.md): Creates an action that changes the mass of a node’s physics body to a new value.
- [changeMass(by:duration:)](skaction/changemass%28by_duration_%29.md): Creates an action that changes the mass of a node’s physics body by a relative value.
- [strength(to:duration:)](skaction/strength%28to_duration_%29.md): Creates an action that animates a change of a physics field’s strength.
- [strength(by:duration:)](skaction/strength%28by_duration_%29.md): Creates an action that animates a change of a physics field’s strength to a value relative to the existing value.
- [falloff(to:duration:)](skaction/falloff%28to_duration_%29.md): Creates an action that animates a change of a physics field’s falloff.
- [falloff(by:duration:)](skaction/falloff%28by_duration_%29.md): Creates an action that animates a change of a physics field’s falloff to a value relative to the existing value.

### Reversing an Animation

Create a new action that is the opposite of another action.

- [reversed()](skaction/reversed%28%29.md): Creates an action that reverses the behavior of another action.

### Animate the Warping of a Node

Interpolate the warping of a node over time.

- [animate(withWarps:times:)](skaction/animate%28withwarps_times_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](skwarpgeometry.md) objects.
- [animate(withWarps:times:restore:)](skaction/animate%28withwarps_times_restore_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](skwarpgeometry.md) objects.
- [warp(to:duration:)](skaction/warp%28to_duration_%29.md): Creates an action to distort a node based using an [SKWarpGeometry](skwarpgeometry.md) object.

### Controlling the Audio of a Node

Audio actions are instantaneous and so, more useful when `Chaining Actions` or [Reuse Actions](getting-started-with-actions.md#Reuse-Actions).

- [playSoundFileNamed(\_:waitForCompletion:)](skaction/playsoundfilenamed%28__waitforcompletion_%29.md): Creates an action that plays a sound.
- [play()](skaction/play%28%29.md): Creates an action that tells an audio node to start playback.
- [pause()](skaction/pause%28%29.md): Creates an action that tells an audio node to pause playback.
- [stop()](skaction/stop%28%29.md): Creates an action that tells an audio node to stop playback.
- [changePlaybackRate(to:duration:)](skaction/changeplaybackrate%28to_duration_%29.md): Creates an action that changes an audio node’s playback rate to a new value.
- [changePlaybackRate(by:duration:)](skaction/changeplaybackrate%28by_duration_%29.md): Creates an action that changes an audio node’s playback rate by a relative amount.
- [changeVolume(to:duration:)](skaction/changevolume%28to_duration_%29.md): Creates an action that changes an audio node’s volume to a new value.
- [changeVolume(by:duration:)](skaction/changevolume%28by_duration_%29.md): Creates an action that changes an audio node’s volume by a relative value.
- [changeObstruction(to:duration:)](skaction/changeobstruction%28to_duration_%29.md): Creates an action that changes an audio node’s obstruction to a new value.
- [changeObstruction(by:duration:)](skaction/changeobstruction%28by_duration_%29.md): Creates an action that changes an audio node’s obstruction by a relative value.
- [changeOcclusion(to:duration:)](skaction/changeocclusion%28to_duration_%29.md): Creates an action that changes an audio node’s occlusion to a new value.
- [changeOcclusion(by:duration:)](skaction/changeocclusion%28by_duration_%29.md): Creates an action that changes an audio node’s occlusion by a relative value.
- [changeReverb(to:duration:)](skaction/changereverb%28to_duration_%29.md): Creates an action that changes an audio node’s reverb to a new value.
- [changeReverb(by:duration:)](skaction/changereverb%28by_duration_%29.md): Creates an action that changes an audio node’s reverb by a relative value.
- [stereoPan(to:duration:)](skaction/stereopan%28to_duration_%29.md): Creates an action that changes an audio node’s stereo panning to a new value.
- [stereoPan(by:duration:)](skaction/stereopan%28by_duration_%29.md): Creates an action that changes an audio node’s stereo panning by a relative value.

### Removing a Node from the Scene

Instantaneous action that is useful when `Chaining Actions` or [Reuse Actions](getting-started-with-actions.md#Reuse-Actions).

- [removeFromParent()](skaction/removefromparent%28%29.md): Creates an action that removes the node from its parent.

### Running Actions on Children

Run an action on a child node by its name.

- [run(\_:onChildWithName:)](skaction/run%28__onchildwithname_%29.md): Creates an action that runs an action on a named child object.

### Chaining Actions

Create an action that contains a series, or chain, of other actions.

- [group(\_:)](skaction/group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence(\_:)](skaction/sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeat(\_:count:)](skaction/repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatForever(\_:)](skaction/repeatforever%28__%29.md): Creates an action that repeats another action forever.

### Delaying Actions

Delay a subseqent action in a sequence of other actions.

- [wait(forDuration:)](skaction/wait%28forduration_%29.md): Creates an action that idles for a specified period of time.
- [wait(forDuration:withRange:)](skaction/wait%28forduration_withrange_%29.md): Creates an action that idles for a randomized period of time.

### Performing Inverse Kinematics

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [reach(to:rootNode:duration:)](skaction/reach%28to_rootnode_duration_%29-9gdvl.md): Creates an action that performs an inverse kinematic reach.
- [reach(to:rootNode:velocity:)](skaction/reach%28to_rootnode_velocity_%29-8xv45.md): Creates an action that performs an inverse kinematic reach.
- [reach(to:rootNode:duration:)](skaction/reach%28to_rootnode_duration_%29-1db76.md): Creates an action that performs an inverse kinematic reach.
- [reach(to:rootNode:velocity:)](skaction/reach%28to_rootnode_velocity_%29-7gbvx.md): Creates an action that performs an inverse kinematic reach.

### Creating Custom Actions

Provide code that implements your own action.

- [init(named:)](skaction/init%28named_%29.md): Creates an action of the given name from an action file.
- [init(named:duration:)](skaction/init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [init(named:fromURL:)](skaction/init%28named_fromurl_%29.md): Creates an action of the given name from an action file.
- [init(named:fromURL:duration:)](skaction/init%28named_fromurl_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customAction(withDuration:actionBlock:)](skaction/customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [perform(\_:onTarget:)](skaction/perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [run(\_:)](skaction/run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](skaction/run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.

### Controlling Node Visibility

Control a node’s visibility.

- [unhide()](skaction/unhide%28%29.md): Creates an action that makes a node visible.
- [hide()](skaction/hide%28%29.md): Creates an action that hides a node.

## See Also

### First Steps

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.

# Action Initializers (Objective-C)

**Framework:** SpriteKit  
**Kind:** API Collection

Use these functions to create actions.

<a id="overview"></a>

## Overview

Most actions implement specific predefined animations that are done for you by SpriteKit. If your animation needs fall outside of the suite provided here, then you should:

- Consider using the methods in Creating Custom Actions below (never subclass `SKAction`)
- Consider the advice in [Drive Game Logic](getting-started-with-actions.md#Drive-Game-Logic)

<a id="Choose-an-Initializer-for-the-Property-You-Want-to-Alter"></a>

### Choose an Initializer for the Property You Want to Alter

Most actions allow you to change a node’s properties and some actions specifically apply to specific nodes, like [SKSpriteNode](skspritenode.md)’s actions for animating its color or texture.

Here are the most common animated properties:

- Changing a node’s [position](sknode/position.md) and [zRotation](sknode/zrotation.md)
- Changing a node’s `size` or scaling properties
- Changing a node’s visibility or making it translucent
- Changing a sprite node’s contents so that it animates through a series of textures
- Colorizing a sprite node
- Playing sounds
- Removing a node from the node tree
- Calling a block
- Invoking a selector on an object

See [Action Initializers](action-initializers.md) for a full list of action types.

<a id="Chaining-Actions"></a>

### Chaining Actions

Actions can be chained together in multiple ways:

- A *sequence action* has multiple child actions. Each action in the sequence begins after the previous action ends.
- A *group action* has multiple child actions. All actions stored in the group begin executing at the same time.
- A *repeating action* stores a single child action. When the child action completes, it is restarted.

To delay a subsequent action in the chain, insert a [waitForDuration:](skaction/wait%28forduration_%29.md) action in the sequence, and remember that groups, sequences, and repeating actions may be nested.

## Topics

### Animating a Node’s Position in a Linear Path

Animate linear node movement.

- [moveByX:y:duration:](skaction/moveby%28x_y_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveBy:duration:](skaction/move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](skaction/move%28to_duration_%29.md): Creates an action that moves a node to a new position.
- [moveToX:duration:](skaction/moveto%28x_duration_%29.md): Creates an action that moves a node horizontally.
- [moveToY:duration:](skaction/moveto%28y_duration_%29.md): Creates an action that moves a node vertically.

### Animating a Node’s Position Along a Custom Path

Provide a path for the node to follow.

- [followPath:duration:](skaction/follow%28__duration_%29.md): Creates an action that moves the node along a relative path, orienting the node to the path.
- [followPath:speed:](skaction/follow%28__speed_%29.md): Creates an action that moves the node along a relative path at a specified speed, orienting the node to the path.
- [followPath:asOffset:orientToPath:duration:](skaction/follow%28__asoffset_orienttopath_duration_%29.md): Creates an action that moves the node along a path.
- [followPath:asOffset:orientToPath:speed:](skaction/follow%28__asoffset_orienttopath_speed_%29.md): Creates an action that moves the node at a specified speed along a path.

### Animating the Rotation of a Node

Animate the z rotation of a node. If instead you wish to change the x or y rotation of a node, see [SKTransformNode](sktransformnode.md).

- [rotateByAngle:duration:](skaction/rotate%28byangle_duration_%29.md): Creates an action that rotates the node by a relative value.
- [rotateToAngle:duration:](skaction/rotate%28toangle_duration_%29.md): Creates an action that rotates the node counterclockwise to an absolute angle.
- [rotateToAngle:duration:shortestUnitArc:](skaction/rotate%28toangle_duration_shortestunitarc_%29.md): Creates an action that rotates the node to an absolute value.

### Controlling the Action’s Speed

Control the speed of an animation.

- [speedBy:duration:](skaction/speed%28by_duration_%29.md): Creates an action that changes how fast the node executes actions by a relative value.
- [speedTo:duration:](skaction/speed%28to_duration_%29.md): Creates an action that changes how fast the node executes actions.

### Animating the Scaling of a Node

Animate the visual scaling of a node.

- [scaleBy:duration:](skaction/scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scaleToSize:duration:](skaction/scale%28to_duration_%29-43bz6.md): Creates an action that changes the x and y scale values of a node to achieve
- [scaleTo:duration:](skaction/scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleXBy:y:duration:](skaction/scalex%28by_y_duration_%29.md): Creates an action that adds relative values to the x and y scale values of a node.
- [scaleXTo:y:duration:](skaction/scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleXTo:duration:](skaction/scalex%28to_duration_%29.md): Creates an action that changes the x scale value of a node to a new value.
- [scaleYTo:duration:](skaction/scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.

### Animating the Transparency of a Node

Gradually change a node’s transparency.

- [fadeInWithDuration:](skaction/fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeOutWithDuration:](skaction/fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlphaBy:duration:](skaction/fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
- [fadeAlphaTo:duration:](skaction/fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.

### Animating a Node’s Texture

Change a node’s texture or the texture’s properties.

- [resizeByWidth:height:duration:](skaction/resize%28bywidth_height_duration_%29.md): Creates an action that adjusts the size of a sprite.
- [resizeToHeight:duration:](skaction/resize%28toheight_duration_%29.md): Creates an action that changes the height of a sprite to a new absolute value.
- [resizeToWidth:duration:](skaction/resize%28towidth_duration_%29.md): Creates an action that changes the width of a sprite to a new absolute value.
- [resizeToWidth:height:duration:](skaction/resize%28towidth_height_duration_%29.md): Creates an action that changes the width and height of a sprite to a new absolute value.
- [setTexture:](skaction/settexture%28__%29.md): Creates an action that changes a sprite’s texture.
- [setTexture:resize:](skaction/settexture%28__resize_%29.md): Creates an action that changes a sprite’s texture, possibly resizing the sprite.
- [animateWithTextures:timePerFrame:](skaction/animate%28with_timeperframe_%29.md): Creates an action that animates changes to a sprite’s texture.
- [animateWithTextures:timePerFrame:resize:restore:](skaction/animate%28with_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.
- [setNormalTexture:](skaction/setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture:resize:](skaction/setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animateWithNormalTextures:timePerFrame:](skaction/animate%28withnormaltextures_timeperframe_%29.md): Creates an action that animates changes to a sprite’s normal texture.
- [animateWithNormalTextures:timePerFrame:resize:restore:](skaction/animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorizeWithColor:colorBlendFactor:duration:](skaction/colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorizeWithColorBlendFactor:duration:](skaction/colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.

### Animating Properties of a Node’s Physics Body

Physics actions are instantaneous and therefore more useful when `Chaining Actions` or [Reuse Actions](getting-started-with-actions.md#Reuse-Actions).

- [applyForce:duration:](skaction/applyforce%28__duration_%29.md): Creates an action that applies a force to the center of gravity of a node’s physics body.
- [applyTorque:duration:](skaction/applytorque%28__duration_%29.md): Creates an action that applies a torque to a node’s physics body.
- [applyForce:atPoint:duration:](skaction/applyforce%28__at_duration_%29.md): Creates an action that applies a force to a specific point on a node’s physics body.
- [applyImpulse:duration:](skaction/applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse:duration:](skaction/applyangularimpulse%28__duration_%29.md): Creates an action that applies an angular impulse to a node’s physics body.
- [applyImpulse:atPoint:duration:](skaction/applyimpulse%28__at_duration_%29.md): Creates an action that applies an impulse to a specific point of a node’s physics body.
- [applyImpulse:duration:](skaction/applyimpulse%28__duration_%29.md): Creates an action that applies an impulse to the center of gravity of a physics body.
- [changeChargeTo:duration:](skaction/changecharge%28to_duration_%29.md): Creates an action that changes the charge of a node’s physics body to a new value.
- [changeChargeBy:duration:](skaction/changecharge%28by_duration_%29.md): Creates an action that changes the charge of a node’s physics body by a relative value.
- [changeMassTo:duration:](skaction/changemass%28to_duration_%29.md): Creates an action that changes the mass of a node’s physics body to a new value.
- [changeMassBy:duration:](skaction/changemass%28by_duration_%29.md): Creates an action that changes the mass of a node’s physics body by a relative value.
- [strengthTo:duration:](skaction/strength%28to_duration_%29.md): Creates an action that animates a change of a physics field’s strength.
- [strengthBy:duration:](skaction/strength%28by_duration_%29.md): Creates an action that animates a change of a physics field’s strength to a value relative to the existing value.
- [falloffTo:duration:](skaction/falloff%28to_duration_%29.md): Creates an action that animates a change of a physics field’s falloff.
- [falloffBy:duration:](skaction/falloff%28by_duration_%29.md): Creates an action that animates a change of a physics field’s falloff to a value relative to the existing value.

### Reversing an Animation

Create a new action that is the opposite of another action.

- [reversedAction](skaction/reversed%28%29.md): Creates an action that reverses the behavior of another action.

### Animate the Warping of a Node

Interpolate the warping of a node over time.

- [animateWithWarps:times:](skaction/animate%28withwarps_times_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](skwarpgeometry.md) objects.
- [animateWithWarps:times:restore:](skaction/animate%28withwarps_times_restore_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](skwarpgeometry.md) objects.
- [warpTo:duration:](skaction/warp%28to_duration_%29.md): Creates an action to distort a node based using an [SKWarpGeometry](skwarpgeometry.md) object.

### Controlling the Audio of a Node

Audio actions are instantaneous and so, more useful when `Chaining Actions` or [Reuse Actions](getting-started-with-actions.md#Reuse-Actions).

- [playSoundFileNamed:waitForCompletion:](skaction/playsoundfilenamed%28__waitforcompletion_%29.md): Creates an action that plays a sound.
- [play](skaction/play%28%29.md): Creates an action that tells an audio node to start playback.
- [pause](skaction/pause%28%29.md): Creates an action that tells an audio node to pause playback.
- [stop](skaction/stop%28%29.md): Creates an action that tells an audio node to stop playback.
- [changePlaybackRateTo:duration:](skaction/changeplaybackrate%28to_duration_%29.md): Creates an action that changes an audio node’s playback rate to a new value.
- [changePlaybackRateBy:duration:](skaction/changeplaybackrate%28by_duration_%29.md): Creates an action that changes an audio node’s playback rate by a relative amount.
- [changeVolumeTo:duration:](skaction/changevolume%28to_duration_%29.md): Creates an action that changes an audio node’s volume to a new value.
- [changeVolumeBy:duration:](skaction/changevolume%28by_duration_%29.md): Creates an action that changes an audio node’s volume by a relative value.
- [changeObstructionTo:duration:](skaction/changeobstruction%28to_duration_%29.md): Creates an action that changes an audio node’s obstruction to a new value.
- [changeObstructionBy:duration:](skaction/changeobstruction%28by_duration_%29.md): Creates an action that changes an audio node’s obstruction by a relative value.
- [changeOcclusionTo:duration:](skaction/changeocclusion%28to_duration_%29.md): Creates an action that changes an audio node’s occlusion to a new value.
- [changeOcclusionBy:duration:](skaction/changeocclusion%28by_duration_%29.md): Creates an action that changes an audio node’s occlusion by a relative value.
- [changeReverbTo:duration:](skaction/changereverb%28to_duration_%29.md): Creates an action that changes an audio node’s reverb to a new value.
- [changeReverbBy:duration:](skaction/changereverb%28by_duration_%29.md): Creates an action that changes an audio node’s reverb by a relative value.
- [stereoPanTo:duration:](skaction/stereopan%28to_duration_%29.md): Creates an action that changes an audio node’s stereo panning to a new value.
- [stereoPanBy:duration:](skaction/stereopan%28by_duration_%29.md): Creates an action that changes an audio node’s stereo panning by a relative value.

### Removing a Node from the Scene

Instantaneous action that is useful when `Chaining Actions` or [Reuse Actions](getting-started-with-actions.md#Reuse-Actions).

- [removeFromParent](skaction/removefromparent%28%29.md): Creates an action that removes the node from its parent.

### Running Actions on Children

Run an action on a child node by its name.

- [runAction:onChildWithName:](skaction/run%28__onchildwithname_%29.md): Creates an action that runs an action on a named child object.

### Chaining Actions

Create an action that contains a series, or chain, of other actions.

- [group:](skaction/group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence:](skaction/sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatAction:count:](skaction/repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatActionForever:](skaction/repeatforever%28__%29.md): Creates an action that repeats another action forever.

### Delaying Actions

Delay a subseqent action in a sequence of other actions.

- [waitForDuration:](skaction/wait%28forduration_%29.md): Creates an action that idles for a specified period of time.
- [waitForDuration:withRange:](skaction/wait%28forduration_withrange_%29.md): Creates an action that idles for a randomized period of time.

### Performing Inverse Kinematics

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [reachTo:rootNode:duration:](skaction/reach%28to_rootnode_duration_%29-9gdvl.md): Creates an action that performs an inverse kinematic reach.
- [reachTo:rootNode:velocity:](skaction/reach%28to_rootnode_velocity_%29-8xv45.md): Creates an action that performs an inverse kinematic reach.
- [reachToNode:rootNode:duration:](skaction/reach%28to_rootnode_duration_%29-1db76.md): Creates an action that performs an inverse kinematic reach.
- [reachToNode:rootNode:velocity:](skaction/reach%28to_rootnode_velocity_%29-7gbvx.md): Creates an action that performs an inverse kinematic reach.

### Creating Custom Actions

Provide code that implements your own action.

- [actionNamed:](skaction/init%28named_%29.md): Creates an action of the given name from an action file.
- [actionNamed:duration:](skaction/init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customActionWithDuration:actionBlock:](skaction/customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [performSelector:onTarget:](skaction/perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [runBlock:](skaction/run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](skaction/run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.

### Controlling Node Visibility

Control a node’s visibility.

- [unhide](skaction/unhide%28%29.md): Creates an action that makes a node visible.
- [hide](skaction/hide%28%29.md): Creates an action that hides a node.

## See Also

### First Steps

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
