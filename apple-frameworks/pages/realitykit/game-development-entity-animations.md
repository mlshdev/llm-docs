> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/game-development-entity-animations](https://developer.apple.com/documentation/realitykit/game-development-entity-animations)

# Entity animations

**Framework:** RealityKit  
**Kind:** API Collection

Dynamically move, rotate, and scale entities at runtime.

## Topics

### Animation playback

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md): Invoke implicit animations by setting the entity’s desired end state.
- [AnimationResource](animationresource.md): An animation for the properties of scenes or entities.
- [AnimationLibraryComponent](animationlibrarycomponent.md): A component that represents a collection of animations that an entity can play.
- [AnimationLibraryComponent.AnimationCollection](animationlibrarycomponent/animationcollection.md): A collection of animations an entity can play.
- [AnimationEvents](animationevents.md): Notable milestones that the framework signals during animation playback.
- [AnimationPlaybackController](animationplaybackcontroller.md): A controller that manages animation playback.
- [AnimationRepeatMode](animationrepeatmode.md): Options that determine whether an animation replays after completion.

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.

### Bindable animation targets

- [BindPath](bindpath.md): The components of a target’s path that refer to the animation properties of a nested scene or entity.
- [BindTarget](bindtarget.md): A reference to a particular scene, entity, or property that animates.
- [BindableValue](bindablevalue.md): The value of a bindable target.
- [BindableValuesReference](bindablevaluesreference.md): A reference to a bindable value of an animation.
- [ParameterSet](parameterset.md): A reference to general-purpose entity parameters for animations.
- [InternalBindPath](internalbindpath.md): A bind target for framework-provided properties.

### Compliance-related protocols

- [AnimatableData](animatabledata.md): A functionality specification that animatable data types adopt.
- [BindableData](bindabledata.md): An opaque base protocol for bindable data objects.

### Blend trees

- [BlendTreeAnimation](blendtreeanimation.md): A collection of animations on the same property that the framework blends to a single animation.
- [BlendTreeNode](blendtreenode.md): An interface for a node that’s a member of a blend tree.
- [BlendTreeBlendNode](blendtreeblendnode.md): A source node for an animation that mixes several animations to form a single animation.
- [BlendTreeSourceNode](blendtreesourcenode.md): A blend node that contains an animation.
- [BlendTreeInvalidNode](blendtreeinvalidnode.md): A blend tree node that’s internal only or sources from an invalid definition.
- [BlendWeight](blendweight.md): A numerical representation of the impact an animation has on a scene or entity.

### Animation graphs

- [AnimationGraphResource](animationgraphresource.md): A compiled animation graph that drives skeletal animation on an entity by blending and transitioning between animation clips at runtime.
- [AnimationGraphComponent](animationgraphcomponent.md): A component that drives skeletal animation on an entity using an animation graph.

## See Also

### Game development

- [Gaming sample code projects](game-development-sample-code.md): Explore a collection of projects relating to game development.
- [Character control, skeletons, and inverse kinematics](game-development-character-skeletons.md): Direct the movements and animation of models.
- [NavigationComponent](navigationcomponent.md): A component that defines which areas of a navigation mesh an entity can move through.
- [NavigationMeshComponent](navigationmeshcomponent.md): A component that provides the navigation meshes an entity uses to find paths through a scene.
- [NavigationController](navigationcontroller.md): An interface for finding paths for an entity moving across a scene’s navigation mesh.
- [NavigationMeshResource](navigationmeshresource.md): A representation of a scene’s navigable surfaces that the system uses to compute paths.
