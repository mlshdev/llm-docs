> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/loadingoption](https://developer.apple.com/documentation/scenekit/scnscenesource/loadingoption)

# SCNSceneSource.LoadingOption (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for creating scene sources and loading the scenes they contain.

## Declaration

```swift
struct LoadingOption
```

## Topics

### Type Properties

- [animationImportPolicy](loadingoption/animationimportpolicy.md): An option for controlling the playback of animations in a scene file.
- [SCNSceneSource.AnimationImportPolicy](animationimportpolicy.md): Options for playing animations loaded from a scene file, used with the [animationImportPolicy](loadingoption/animationimportpolicy.md) key in options dictionaries.
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

### Initializers

- [init(rawValue:)](loadingoption/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Scene Source Properties](../scene-source-properties.md): The metadata properties associated with a scene file, used by the [property(forKey:)](property%28forkey_%29.md) method.
- [Contributor Keys](../contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](../scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](../unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](../scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](../scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](../scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [Scene File Consistency Check Error Codes](../1573761-scene-file-consistency-check-err.md): Error codes that identify errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](../scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
- [SCNSceneSourceStatus](../scnscenesourcestatus.md): Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](../scnscenesourcestatushandler.md) block.

# SCNSceneSourceLoadingOption (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating scene sources and loading the scenes they contain.

## Declaration

```objectivec
typedef NSString * SCNSceneSourceLoadingOption;
```

## Topics

### Type Properties

- [SCNSceneSourceAnimationImportPolicyKey](loadingoption/animationimportpolicy.md): An option for controlling the playback of animations in a scene file.
- [SCNSceneSourceAnimationImportPolicy](animationimportpolicy.md): Options for playing animations loaded from a scene file, used with the [SCNSceneSourceAnimationImportPolicyKey](loadingoption/animationimportpolicy.md) key in options dictionaries.
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

## See Also

### Constants

- [Scene Source Properties](../scene-source-properties.md): The metadata properties associated with a scene file, used by the [propertyForKey:](property%28forkey_%29.md) method.
- [Contributor Keys](../contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](../scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](../unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](../scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](../scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](../scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [Scene File Consistency Check Error Codes](../1573761-scene-file-consistency-check-err.md): Error codes that identify errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](../scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
- [SCNSceneSourceStatus](../scnscenesourcestatus.md): Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](../scnscenesourcestatushandler.md) block.
