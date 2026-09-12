> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/loops](https://developer.apple.com/documentation/scenekit/scnscenerenderer/loops)

# loops (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.

## Declaration

```swift
var loops: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit returns the scene time to zero after all animations associated with the scene have played, causing those animations to repeat. Otherwise, SceneKit stops playing the scene when all animations have completed.

## See Also

### Managing Scene Animation Timing

- [sceneTime](scenetime.md): The current scene time.
- [isPlaying](isplaying.md): A Boolean value that determines whether the scene is playing.

# loops (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.

## Declaration

```objectivec
@property (nonatomic) BOOL loops;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit returns the scene time to zero after all animations associated with the scene have played, causing those animations to repeat. Otherwise, SceneKit stops playing the scene when all animations have completed.

## See Also

### Managing Scene Animation Timing

- [sceneTime](scenetime.md): The current scene time.
- [playing](isplaying.md): A Boolean value that determines whether the scene is playing.
