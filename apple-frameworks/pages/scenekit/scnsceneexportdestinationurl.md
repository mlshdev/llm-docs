> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsceneexportdestinationurl](https://developer.apple.com/documentation/scenekit/scnsceneexportdestinationurl)

# SCNSceneExportDestinationURL (Swift)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The final destination `URL` for the exported scene file.

## Declaration

```swift
let SCNSceneExportDestinationURL: String
```

<a id="Discussion"></a>

## Discussion

Use this option if you export a scene to a temporary directory and then move it to a final location. You must specify a final destination URL (an [NSURL](../foundation/nsurl.md) object) if your scene references external resources, such as image files for textures. SceneKit uses this URL to construct appropriate paths for external resources when writing the scene file.

# SCNSceneExportDestinationURL (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The final destination `URL` for the exported scene file.

## Declaration

```objectivec
extern NSString * const SCNSceneExportDestinationURL;
```

<a id="Discussion"></a>

## Discussion

Use this option if you export a scene to a temporary directory and then move it to a final location. You must specify a final destination URL (an [NSURL](../foundation/nsurl.md) object) if your scene references external resources, such as image files for textures. SceneKit uses this URL to construct appropriate paths for external resources when writing the scene file.
