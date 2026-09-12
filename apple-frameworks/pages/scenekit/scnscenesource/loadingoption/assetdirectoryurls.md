> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/loadingoption/assetdirectoryurls](https://developer.apple.com/documentation/scenekit/scnscenesource/loadingoption/assetdirectoryurls)

# assetDirectoryURLs (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Locations to use for resolving relative URLs to external resources.

## Declaration

```swift
static let assetDirectoryURLs: SCNSceneSource.LoadingOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSArray](../../../foundation/nsarray.md) object containing one or more [NSURL](../../../foundation/nsurl.md) objects, each of which references a directory.

A scene file may reference external resources, such as image files used as textures in material properties, using relative URL paths. When loading from a scene source, SceneKit first attempts to resolve these references relative to the directory containing the scene file. To search additional directories when loading, provide an array of URLs for this key and SceneKit searches them in order.

When working with a scene source constructed from an [NSData](../../../foundation/nsdata.md) object, you can use this option to provide locations in the filesystem for loading external resources.

## See Also

### Type Properties

- [animationImportPolicy](animationimportpolicy.md): An option for controlling the playback of animations in a scene file.
- [SCNSceneSource.AnimationImportPolicy](../animationimportpolicy.md): Options for playing animations loaded from a scene file, used with the [animationImportPolicy](animationimportpolicy.md) key in options dictionaries.
- [checkConsistency](checkconsistency.md): An option to validate scene files while loading.
- [convertToYUp](converttoyup.md): An option for whether to transform assets loaded from the scene file for use in a coordinate system where the y-axis points up.
- [convertUnitsToMeters](convertunitstometers.md): An option for whether to automatically scale the scene’s contents.
- [createNormalsIfAbsent](createnormalsifabsent.md): An option for automatically generating surface normals if they are absent when loading geometry.
- [flattenScene](flattenscene.md): An option for automatically merging portions of a scene graph during loading.
- [overrideAssetURLs](overrideasseturls.md): An option to attempt loading external resources using their URLs as specified in a scene file.
- [preserveOriginalTopology](preserveoriginaltopology.md)
- [strictConformance](strictconformance.md): An option to interpret scene files exactly as specified by the scene file format.
- [useSafeMode](usesafemode.md): Deprecated. An option to limit filesystem and network access for external resources referenced by a scene file.

# SCNSceneSourceAssetDirectoryURLsKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Locations to use for resolving relative URLs to external resources.

## Declaration

```objectivec
extern SCNSceneSourceLoadingOption const SCNSceneSourceAssetDirectoryURLsKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSArray](../../../foundation/nsarray.md) object containing one or more [NSURL](../../../foundation/nsurl.md) objects, each of which references a directory.

A scene file may reference external resources, such as image files used as textures in material properties, using relative URL paths. When loading from a scene source, SceneKit first attempts to resolve these references relative to the directory containing the scene file. To search additional directories when loading, provide an array of URLs for this key and SceneKit searches them in order.

When working with a scene source constructed from an [NSData](../../../foundation/nsdata.md) object, you can use this option to provide locations in the filesystem for loading external resources.

## See Also

### Type Properties

- [SCNSceneSourceAnimationImportPolicyKey](animationimportpolicy.md): An option for controlling the playback of animations in a scene file.
- [SCNSceneSourceAnimationImportPolicy](../animationimportpolicy.md): Options for playing animations loaded from a scene file, used with the [SCNSceneSourceAnimationImportPolicyKey](animationimportpolicy.md) key in options dictionaries.
- [SCNSceneSourceCheckConsistencyKey](checkconsistency.md): An option to validate scene files while loading.
- [SCNSceneSourceConvertToYUpKey](converttoyup.md): An option for whether to transform assets loaded from the scene file for use in a coordinate system where the y-axis points up.
- [SCNSceneSourceConvertUnitsToMetersKey](convertunitstometers.md): An option for whether to automatically scale the scene’s contents.
- [SCNSceneSourceCreateNormalsIfAbsentKey](createnormalsifabsent.md): An option for automatically generating surface normals if they are absent when loading geometry.
- [SCNSceneSourceFlattenSceneKey](flattenscene.md): An option for automatically merging portions of a scene graph during loading.
- [SCNSceneSourceOverrideAssetURLsKey](overrideasseturls.md): An option to attempt loading external resources using their URLs as specified in a scene file.
- [SCNSceneSourceLoadingOptionPreserveOriginalTopology](preserveoriginaltopology.md)
- [SCNSceneSourceStrictConformanceKey](strictconformance.md): An option to interpret scene files exactly as specified by the scene file format.
- [SCNSceneSourceUseSafeModeKey](usesafemode.md): Deprecated. An option to limit filesystem and network access for external resources referenced by a scene file.
