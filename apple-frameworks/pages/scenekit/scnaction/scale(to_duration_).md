> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/scale(to:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/scale(to:duration:))

# scale(to:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that uniformly changes the scale factor of a node to an absolute value.

## Declaration

```swift
class func scale(to scale: CGFloat, duration sec: TimeInterval) -> SCNAction
```

## Parameters

- `scale`: The new value for all three components of the node’s scale.
- `sec`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [scale](../scnnode/scale.md) property animates to the new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Creating Actions That Change a Node’s Scale

- [scale(by:duration:)](scale%28by_duration_%29.md): Creates an action that uniformly changes the scale factor of a node by a relative value.

# scaleTo:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that uniformly changes the scale factor of a node to an absolute value.

## Declaration

```objectivec
+ (SCNAction *) scaleTo:(CGFloat) scale duration:(NSTimeInterval) sec;
```

## Parameters

- `scale`: The new value for all three components of the node’s scale.
- `sec`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [scale](../scnnode/scale.md) property animates to the new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Creating Actions That Change a Node’s Scale

- [scaleBy:duration:](scale%28by_duration_%29.md): Creates an action that uniformly changes the scale factor of a node by a relative value.
