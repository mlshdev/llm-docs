> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/animationimportpolicy](https://developer.apple.com/documentation/scenekit/scnscenesource/animationimportpolicy)

# SCNSceneSource.AnimationImportPolicy (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for playing animations loaded from a scene file, used with the [animationImportPolicy](loadingoption/animationimportpolicy.md) key in options dictionaries.

## Declaration

```swift
struct AnimationImportPolicy
```

## Topics

### Type Properties

- [doNotPlay](animationimportpolicy/donotplay.md): Animations are not loaded from the scene file.
- [play](animationimportpolicy/play.md): Animations loaded from the scene file are immediately added to the scene and played once.
- [playRepeatedly](animationimportpolicy/playrepeatedly.md): Animations loaded from the scene file are immediately added to the scene and played repeatedly.
- [playUsingSceneTimeBase](animationimportpolicy/playusingscenetimebase.md): Animations loaded from the scene file are immediately added to the scene and played according to the scene’s [sceneTime](../scnscenerenderer/scenetime.md) property.

### Initializers

- [init(rawValue:)](animationimportpolicy/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Type Properties

- [animationImportPolicy](loadingoption/animationimportpolicy.md): An option for controlling the playback of animations in a scene file.
- [assetDirectoryURLs](loadingoption/assetdirectoryurls.md): Locations to use for resolving relative URLs to external resources.
- [checkConsistency](loadingoption/checkconsistency.md): An option to validate scene files while loading.
- [convertToYUp](loadingoption/converttoyup.md): An option for whether to transform assets loaded from the scene file for use in a coordinate system where the y-axis points up.
- [convertUnitsToMeters](loadingoption/convertunitstometers.md): An option for whether to automatically scale the scene’s contents.
- [createNormalsIfAbsent](loadingoption/createnormalsifabsent.md): An option for automatically generating surface normals if they are absent when loading geometry.
- [flattenScene](loadingoption/flattenscene.md): An option for automatically merging portions of a scene graph during loading.
- [overrideAssetURLs](loadingoption/overrideasseturls.md): An option to attempt loading external resources using their URLs as specified in a scene file.
- [preserveOriginalTopology](loadingoption/preserveoriginaltopology.md)
- [strictConformance](loadingoption/strictconformance.md): An option to interpret scene files exactly as specified by the scene file format.
- [useSafeMode](loadingoption/usesafemode.md): Deprecated. An option to limit filesystem and network access for external resources referenced by a scene file.

# SCNSceneSourceAnimationImportPolicy (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for playing animations loaded from a scene file, used with the [SCNSceneSourceAnimationImportPolicyKey](loadingoption/animationimportpolicy.md) key in options dictionaries.

## Declaration

```objectivec
typedef NSString * SCNSceneSourceAnimationImportPolicy;
```

## Topics

### Type Properties

- [SCNSceneSourceAnimationImportPolicyDoNotPlay](animationimportpolicy/donotplay.md): Animations are not loaded from the scene file.
- [SCNSceneSourceAnimationImportPolicyPlay](animationimportpolicy/play.md): Animations loaded from the scene file are immediately added to the scene and played once.
- [SCNSceneSourceAnimationImportPolicyPlayRepeatedly](animationimportpolicy/playrepeatedly.md): Animations loaded from the scene file are immediately added to the scene and played repeatedly.
- [SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase](animationimportpolicy/playusingscenetimebase.md): Animations loaded from the scene file are immediately added to the scene and played according to the scene’s [sceneTime](../scnscenerenderer/scenetime.md) property.

## See Also

### Type Properties

- [SCNSceneSourceAnimationImportPolicyKey](loadingoption/animationimportpolicy.md): An option for controlling the playback of animations in a scene file.
- [SCNSceneSourceAssetDirectoryURLsKey](loadingoption/assetdirectoryurls.md): Locations to use for resolving relative URLs to external resources.
- [SCNSceneSourceCheckConsistencyKey](loadingoption/checkconsistency.md): An option to validate scene files while loading.
- [SCNSceneSourceConvertToYUpKey](loadingoption/converttoyup.md): An option for whether to transform assets loaded from the scene file for use in a coordinate system where the y-axis points up.
- [SCNSceneSourceConvertUnitsToMetersKey](loadingoption/convertunitstometers.md): An option for whether to automatically scale the scene’s contents.
- [SCNSceneSourceCreateNormalsIfAbsentKey](loadingoption/createnormalsifabsent.md): An option for automatically generating surface normals if they are absent when loading geometry.
- [SCNSceneSourceFlattenSceneKey](loadingoption/flattenscene.md): An option for automatically merging portions of a scene graph during loading.
- [SCNSceneSourceOverrideAssetURLsKey](loadingoption/overrideasseturls.md): An option to attempt loading external resources using their URLs as specified in a scene file.
- [SCNSceneSourceLoadingOptionPreserveOriginalTopology](loadingoption/preserveoriginaltopology.md)
- [SCNSceneSourceStrictConformanceKey](loadingoption/strictconformance.md): An option to interpret scene files exactly as specified by the scene file format.
- [SCNSceneSourceUseSafeModeKey](loadingoption/usesafemode.md): Deprecated. An option to limit filesystem and network access for external resources referenced by a scene file.
