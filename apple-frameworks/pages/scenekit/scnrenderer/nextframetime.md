> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/nextframetime](https://developer.apple.com/documentation/scenekit/scnrenderer/nextframetime)

# nextFrameTime (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The timestamp for the next frame to be rendered.

## Declaration

```swift
var nextFrameTime: CFTimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

If the renderer’s scene has any attached actions or animations, use this property to determine how long your app should wait before telling the renderer to draw another frame. If this property’s value matches that of the renderer’s [currentTime](../scnscenerenderer/currenttime.md) property, the scene contains a continuous animation—schedule your next render at whatever time best maintains your app’s performance. If the value is infinite, the scene has no running actions or animations.

# nextFrameTime (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

The timestamp for the next frame to be rendered.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval nextFrameTime;
```

<a id="Discussion"></a>

## Discussion

If the renderer’s scene has any attached actions or animations, use this property to determine how long your app should wait before telling the renderer to draw another frame. If this property’s value matches that of the renderer’s [currentTime](../scnscenerenderer/currenttime.md) property, the scene contains a continuous animation—schedule your next render at whatever time best maintains your app’s performance. If the value is infinite, the scene has no running actions or animations.
