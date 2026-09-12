> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/name](https://developer.apple.com/documentation/scenekit/scncamera/name)

# name (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A name associated with the camera object.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can provide a descriptive name for a camera object to make managing your scene graph easier. Cameras loaded from a scene file may have names assigned by an artist using a 3D authoring tool. Use the [SCNSceneSource](../scnscenesource.md) class to examine cameras in a scene file without loading its scene graph.

Camera names are saved when you export a scene to a file using its [write(to:options:delegate:progressHandler:)](../scnscene/write%28to_options_delegate_progresshandler_%29.md) method. These names also appear in the Xcode scene editor. The SceneKit statistics view (see [showsStatistics](../scnscenerenderer/showsstatistics.md)) shows the names of nodes with attached camera objects (which may not match the names of the attached camera objects themselves).

# name (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A name associated with the camera object.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

You can provide a descriptive name for a camera object to make managing your scene graph easier. Cameras loaded from a scene file may have names assigned by an artist using a 3D authoring tool. Use the [SCNSceneSource](../scnscenesource.md) class to examine cameras in a scene file without loading its scene graph.

Camera names are saved when you export a scene to a file using its [writeToURL:options:delegate:progressHandler:](../scnscene/write%28to_options_delegate_progresshandler_%29.md) method. These names also appear in the Xcode scene editor. The SceneKit statistics view (see [showsStatistics](../scnscenerenderer/showsstatistics.md)) shows the names of nodes with attached camera objects (which may not match the names of the attached camera objects themselves).
