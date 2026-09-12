> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/present(_:with:incomingpointofview:completionhandler:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/present(_:with:incomingpointofview:completionhandler:))

# present(\_:with:incomingPointOfView:completionHandler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Displays the specified scene with an animated transition.

## Declaration

```swift
func present(_ scene: SCNScene, with transition: SKTransition, incomingPointOfView pointOfView: SCNNode?, completionHandler: (@Sendable () -> Void)? = nil)
```

```swift
func present(_ scene: SCNScene, with transition: SKTransition, incomingPointOfView pointOfView: SCNNode?) async
```

## Parameters

- `scene`: The new scene to be displayed.
- `transition`: An object that specifies the duration and style of the animated transition.
- `pointOfView`: The node to use as the [pointOfView](pointofview.md) property when displaying the new scene.
- `completionHandler`: A block that SceneKit calls after the transition animation has completed.

  This block takes no parameters and has no return value.

<a id="Discussion"></a>

## Discussion

Use this method to change the scene displayed in a SceneKit view (or other renderer) with an animated transition. For details on transition styles, see [SKTransition](../../spritekit/sktransition.md).

## See Also

### Presenting a Scene

- [scene](scene.md): The scene to be displayed.

# presentScene:withTransition:incomingPointOfView:completionHandler: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Displays the specified scene with an animated transition.

## Declaration

```objectivec
- (void) presentScene:(SCNScene *) scene withTransition:(SKTransition *) transition incomingPointOfView:(SCNNode *) pointOfView completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `scene`: The new scene to be displayed.
- `transition`: An object that specifies the duration and style of the animated transition.
- `pointOfView`: The node to use as the [pointOfView](pointofview.md) property when displaying the new scene.
- `completionHandler`: A block that SceneKit calls after the transition animation has completed.

  This block takes no parameters and has no return value.

<a id="Discussion"></a>

## Discussion

Use this method to change the scene displayed in a SceneKit view (or other renderer) with an animated transition. For details on transition styles, see [SKTransition](../../spritekit/sktransition.md).

## See Also

### Presenting a Scene

- [scene](scene.md): The scene to be displayed.
