> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/ispaused](https://developer.apple.com/documentation/scenekit/scnscene/ispaused)

# isPaused (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether to run actions, animations, particle systems, and physics simulations in the scene graph.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit continuously updates and renders the contents of the scene. Pausing a scene pauses any running animations or actions attached to the scene graph, and suspends updates of the scene’s physics simulation and any particle systems in the scene.

# paused (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether to run actions, animations, particle systems, and physics simulations in the scene graph.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit continuously updates and renders the contents of the scene. Pausing a scene pauses any running animations or actions attached to the scene graph, and suspends updates of the scene’s physics simulation and any particle systems in the scene.
