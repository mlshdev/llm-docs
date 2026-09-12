> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/isplaying](https://developer.apple.com/documentation/scenekit/scnscenerenderer/isplaying)

# isPlaying (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the scene is playing.

## Declaration

```swift
var isPlaying: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit does not increment the scene time, so animations associated with the scene do not play. Change this property’s value to [true](https://developer.apple.com/documentation/swift/true) to start animating the scene.

## See Also

### Managing Scene Animation Timing

- [sceneTime](scenetime.md): The current scene time.
- [loops](loops.md): A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.

# playing (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the scene is playing.

## Declaration

```objectivec
@property (getter=isPlaying) BOOL playing;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit does not increment the scene time, so animations associated with the scene do not play. Change this property’s value to [true](https://developer.apple.com/documentation/swift/true) to start animating the scene.

## See Also

### Managing Scene Animation Timing

- [sceneTime](scenetime.md): The current scene time.
- [loops](loops.md): A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.
