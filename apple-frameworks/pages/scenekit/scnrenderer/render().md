> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/render()](https://developer.apple.com/documentation/scenekit/scnrenderer/render())

# render() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Renders the scene’s contents in the renderer’s OpenGL context.

## Declaration

```swift
func render()
```

<a id="Discussion"></a>

## Discussion

This method can be used only with an [SCNRenderer](../scnrenderer.md) object created with the [SCNRenderer](../scnrenderer.md) initializer. Call this method to tell SceneKit to draw the renderer’s scene into the OpenGL context you created the renderer with.

When you call this method, SceneKit updates its hierarchy of presentation nodes based on the current system time, and then draws the scene.

## See Also

### Rendering a Scene Using OpenGL

- [render(atTime:)](render%28attime_%29.md): Renders the scene’s contents at the specified system time in the renderer’s OpenGL context.

# render (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · macOS 10.8+ (deprecated in 10.11)

Renders the scene’s contents in the renderer’s OpenGL context.

## Declaration

```objectivec
- (void) render;
```

<a id="Discussion"></a>

## Discussion

This method can be used only with an [SCNRenderer](../scnrenderer.md) object created with the [SCNRenderer](../scnrenderer.md) initializer. Call this method to tell SceneKit to draw the renderer’s scene into the OpenGL context you created the renderer with.

When you call this method, SceneKit updates its hierarchy of presentation nodes based on the current system time, and then draws the scene.

## See Also

### Rendering a Scene Using OpenGL

- [renderAtTime:](render%28attime_%29.md): Renders the scene’s contents at the specified system time in the renderer’s OpenGL context.
