> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundasset/type](https://developer.apple.com/documentation/phase/phasesoundasset/type)

# type (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The type of sound asset.

## Declaration

```swift
var type: PHASEAsset.AssetType { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the type you pass into [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](../phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md).

# type (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The type of sound asset.

## Declaration

```objectivec
@property (readonly) PHASEAssetType type;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the type you pass into [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](../phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md).
