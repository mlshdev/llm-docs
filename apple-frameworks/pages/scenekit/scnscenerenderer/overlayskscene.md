> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/overlayskscene](https://developer.apple.com/documentation/scenekit/scnscenerenderer/overlayskscene)

# overlaySKScene (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Sprite Kit scene to be rendered on top of the SceneKit content.

## Declaration

```swift
var overlaySKScene: SKScene? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to render 2D content that overlays your scene—for example, a heads-up-display for a game. The Sprite Kit scene shares the same underlying GPU resources as the SceneKit renderer, so using this property can provide much better performance than overlaying other views or layers above the view rendering your SceneKit content.

# overlaySKScene (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Sprite Kit scene to be rendered on top of the SceneKit content.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKScene * overlaySKScene;
```

<a id="Discussion"></a>

## Discussion

Use this property to render 2D content that overlays your scene—for example, a heads-up-display for a game. The Sprite Kit scene shares the same underlying GPU resources as the SceneKit renderer, so using this property can provide much better performance than overlaying other views or layers above the view rendering your SceneKit content.
