> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnconstraint/influencefactor](https://developer.apple.com/documentation/scenekit/scnconstraint/influencefactor)

# influenceFactor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The influence of the constraint on the node’s transformation.

## Declaration

```swift
var influenceFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to relax the effect of a constraint on the nodes it applies to. For example, consider a node containing a spotlight, constrained by an [SCNLookAtConstraint](../scnlookatconstraint.md) object to point toward another node containing a moving game character. If the constraint’s influence factor is `1.0`, SceneKit adjusts the spotlight node to point directly at the game character each time it renders a frame. If you reduce the influence factor to `0.5`, each time SceneKit renders a frame it moves the spotlight halfway from its current orientation to the target orientation. As a result, the spotlight continues to follow the moving character, but with a slight lag.

The default influence factor is `1.0`, specifying that SceneKit apply the full effect of the constraint every frame. An influence factor of `0.0` means the constraint has no effect.

This property has no effect on [SCNTransformConstraint](../scntransformconstraint.md) objects.

# influenceFactor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The influence of the constraint on the node’s transformation.

## Declaration

```objectivec
@property (nonatomic) CGFloat influenceFactor;
```

<a id="Discussion"></a>

## Discussion

Use this property to relax the effect of a constraint on the nodes it applies to. For example, consider a node containing a spotlight, constrained by an [SCNLookAtConstraint](../scnlookatconstraint.md) object to point toward another node containing a moving game character. If the constraint’s influence factor is `1.0`, SceneKit adjusts the spotlight node to point directly at the game character each time it renders a frame. If you reduce the influence factor to `0.5`, each time SceneKit renders a frame it moves the spotlight halfway from its current orientation to the target orientation. As a result, the spotlight continues to follow the moving character, but with a slight lag.

The default influence factor is `1.0`, specifying that SceneKit apply the full effect of the constraint every frame. An influence factor of `0.0` means the constraint has no effect.

This property has no effect on [SCNTransformConstraint](../scntransformconstraint.md) objects.
