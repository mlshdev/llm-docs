> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/automaticallyupdateslighting](https://developer.apple.com/documentation/arkit/arscnview/automaticallyupdateslighting)

# automaticallyUpdatesLighting (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value that specifies whether ARKit creates and updates SceneKit lights in the view’s scene.

## Declaration

```swift
var automaticallyUpdatesLighting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) (the default), the view automatically creates one or more [SCNLight](../../scenekit/scnlight.md) objects, adds them to the scene, and updates their properties to reflect estimated lighting information from the camera scene. Set this value to [false](https://developer.apple.com/documentation/swift/false) if you want to directly control all lighting in the SceneKit scene.

# automaticallyUpdatesLighting (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value that specifies whether ARKit creates and updates SceneKit lights in the view’s scene.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticallyUpdatesLighting;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) (the default), the view automatically creates one or more [SCNLight](../../scenekit/scnlight.md) objects, adds them to the scene, and updates their properties to reflect estimated lighting information from the camera scene. Set this value to [false](https://developer.apple.com/documentation/swift/false) if you want to directly control all lighting in the SceneKit scene.
