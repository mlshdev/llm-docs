> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/scene(options:statushandler:)](https://developer.apple.com/documentation/scenekit/scnscenesource/scene(options:statushandler:))

# scene(options:statusHandler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads the entire scene graph from the scene source and calls the specified block to provide progress information.

## Declaration

```swift
func scene(options: [SCNSceneSource.LoadingOption : Any]? = nil, statusHandler: SCNSceneSourceStatusHandler? = nil) -> SCNScene?
```

## Parameters

- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.
- `statusHandler`: An [SCNSceneSourceStatusHandler](../scnscenesourcestatushandler.md) block. SceneKit calls this block periodically to report progress while loading the scene.

<a id="return-value"></a>

## Return Value

An [SCNScene](../scnscene.md) object containing the entire scene graph from the scene source, or `nil` if loading was not successful.

<a id="Discussion"></a>

## Discussion

Use this method if you need to monitor progress while loading a scene from the scene source. For simpler scene loading, use the [scene(options:)](scene%28options_%29.md) method or the [SCNScene](../scnscene.md) method [init(url:options:)](../scnscene/init%28url_options_%29-7ugvv.md).

A scene source can contain objects that are not part of its scene graph. To obtain these objects, you must load them individually with the the [entryWithIdentifier:withClass:](entrywithidentifier_withclass_.md) or [entries(passingTest:)](entries%28passingtest_%29.md) method. For example, a scene file containing a game character could include several animations for the character geometry (such as running, jumping, and standing idle). Because you typically do not apply multiple animations at once, the scene file contains these animations without their being attached to the character geometry.

## See Also

### Loading a Complete Scene

- [scene(options:)](scene%28options_%29.md): Instantiates a scene from the scene source with the specified options.

# sceneWithOptions:statusHandler: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads the entire scene graph from the scene source and calls the specified block to provide progress information.

## Declaration

```objectivec
- (SCNScene *) sceneWithOptions:(NSDictionary<NSString *,id> *) options statusHandler:(SCNSceneSourceStatusHandler) statusHandler;
```

## Parameters

- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.
- `statusHandler`: An [SCNSceneSourceStatusHandler](../scnscenesourcestatushandler.md) block. SceneKit calls this block periodically to report progress while loading the scene.

<a id="return-value"></a>

## Return Value

An [SCNScene](../scnscene.md) object containing the entire scene graph from the scene source, or `nil` if loading was not successful.

<a id="Discussion"></a>

## Discussion

Use this method if you need to monitor progress while loading a scene from the scene source. For simpler scene loading, use the [sceneWithOptions:error:](scene%28options_%29.md) method or the [SCNScene](../scnscene.md) method [sceneWithURL:options:error:](../scnscene/init%28url_options_%29-7ugvv.md).

A scene source can contain objects that are not part of its scene graph. To obtain these objects, you must load them individually with the the [entryWithIdentifier:withClass:](entrywithidentifier_withclass_.md) or [entriesPassingTest:](entries%28passingtest_%29.md) method. For example, a scene file containing a game character could include several animations for the character geometry (such as running, jumping, and standing idle). Because you typically do not apply multiple animations at once, the scene file contains these animations without their being attached to the character geometry.

## See Also

### Loading a Complete Scene

- [sceneWithOptions:error:](scene%28options_%29.md): Instantiates a scene from the scene source with the specified options.
