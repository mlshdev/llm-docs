> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/fadeopacity(by:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/fadeopacity(by:duration:))

# fadeOpacity(by:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that adjusts the opacity of a node by a relative value.

## Declaration

```swift
class func fadeOpacity(by factor: CGFloat, duration sec: TimeInterval) -> SCNAction
```

## Parameters

- `factor`: The amount to change the node’s opacity by.
- `sec`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [opacity](../scnnode/opacity.md) property animates to its new value.

This action is reversible; the reverse is created as if the following code had been executed:

```objc
[SCNAction fadeOpacityBy: -factor duration: sec];
```

## See Also

### Creating Actions That Change a Node’s Opacity

- [fadeIn(duration:)](fadein%28duration_%29.md): Creates an action that changes the opacity of the node to `1.0`.
- [fadeOut(duration:)](fadeout%28duration_%29.md): Creates an action that changes the opacity of the node to `0.0`.
- [fadeOpacity(to:duration:)](fadeopacity%28to_duration_%29.md): Creates an action that adjusts the opacity of a node to a new value.

# fadeOpacityBy:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that adjusts the opacity of a node by a relative value.

## Declaration

```objectivec
+ (SCNAction *) fadeOpacityBy:(CGFloat) factor duration:(NSTimeInterval) sec;
```

## Parameters

- `factor`: The amount to change the node’s opacity by.
- `sec`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [opacity](../scnnode/opacity.md) property animates to its new value.

This action is reversible; the reverse is created as if the following code had been executed:

```objc
[SCNAction fadeOpacityBy: -factor duration: sec];
```

## See Also

### Creating Actions That Change a Node’s Opacity

- [fadeInWithDuration:](fadein%28duration_%29.md): Creates an action that changes the opacity of the node to `1.0`.
- [fadeOutWithDuration:](fadeout%28duration_%29.md): Creates an action that changes the opacity of the node to `0.0`.
- [fadeOpacityTo:duration:](fadeopacity%28to_duration_%29.md): Creates an action that adjusts the opacity of a node to a new value.
