> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/render(attime:)](https://developer.apple.com/documentation/scenekit/scnrenderer/render(attime:))

# render(atTime:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Renders the scene’s contents at the specified system time in the renderer’s OpenGL context.

## Declaration

```swift
func render(atTime time: CFTimeInterval)
```

## Parameters

- `time`: The timestamp, in seconds, at which to render the scene.

<a id="Discussion"></a>

## Discussion

This method can be used only with an [SCNRenderer](../scnrenderer.md) object created with the [SCNRenderer](../scnrenderer.md) initializer. Call this method to tell SceneKit to draw the renderer’s scene into the OpenGL context you created the renderer with.

When you call this method, SceneKit updates its hierarchy of presentation nodes based on the specified timestamp, and then draws the scene.

> **Note**

>  By default, the playback timing of actions and animations in a scene is based on the system time, not the scene time. Before using this method to control the playback of animations, set the [usesSceneTimeBase](../../quartzcore/caanimation/usesscenetimebase.md) property of each animation to [true](https://developer.apple.com/documentation/swift/true), or specify the [playUsingSceneTimeBase](../scnscenesource/animationimportpolicy/playusingscenetimebase.md) option when loading a scene file that contains animations.

## See Also

### Rendering a Scene Using OpenGL

- [render()](render%28%29.md): Deprecated. Renders the scene’s contents in the renderer’s OpenGL context.

# renderAtTime: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

Renders the scene’s contents at the specified system time in the renderer’s OpenGL context.

## Declaration

```objectivec
- (void) renderAtTime:(CFTimeInterval) time;
```

## Parameters

- `time`: The timestamp, in seconds, at which to render the scene.

<a id="Discussion"></a>

## Discussion

This method can be used only with an [SCNRenderer](../scnrenderer.md) object created with the [SCNRenderer](../scnrenderer.md) initializer. Call this method to tell SceneKit to draw the renderer’s scene into the OpenGL context you created the renderer with.

When you call this method, SceneKit updates its hierarchy of presentation nodes based on the specified timestamp, and then draws the scene.

> **Note**

>  By default, the playback timing of actions and animations in a scene is based on the system time, not the scene time. Before using this method to control the playback of animations, set the [usesSceneTimeBase](../../quartzcore/caanimation/usesscenetimebase.md) property of each animation to [true](https://developer.apple.com/documentation/swift/true), or specify the [SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase](../scnscenesource/animationimportpolicy/playusingscenetimebase.md) option when loading a scene file that contains animations.

## See Also

### Rendering a Scene Using OpenGL

- [render](render%28%29.md): Deprecated. Renders the scene’s contents in the renderer’s OpenGL context.
