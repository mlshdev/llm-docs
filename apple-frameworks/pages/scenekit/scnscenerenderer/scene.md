> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/scene](https://developer.apple.com/documentation/scenekit/scnscenerenderer/scene)

# scene (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The scene to be displayed.

## Declaration

```swift
var scene: SCNScene? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a new scene immediately replaces whatever scene the renderer was previously displaying. To display a transition between scenes, use the [present(\_:with:incomingPointOfView:completionHandler:)](present%28__with_incomingpointofview_completionhandler_%29.md) method.

## See Also

### Presenting a Scene

- [present(\_:with:incomingPointOfView:completionHandler:)](present%28__with_incomingpointofview_completionhandler_%29.md): Displays the specified scene with an animated transition.

# scene (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scene to be displayed.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNScene * scene;
```

<a id="Discussion"></a>

## Discussion

Setting a new scene immediately replaces whatever scene the renderer was previously displaying. To display a transition between scenes, use the [presentScene:withTransition:incomingPointOfView:completionHandler:](present%28__with_incomingpointofview_completionhandler_%29.md) method.

## See Also

### Presenting a Scene

- [presentScene:withTransition:incomingPointOfView:completionHandler:](present%28__with_incomingpointofview_completionhandler_%29.md): Displays the specified scene with an animated transition.
