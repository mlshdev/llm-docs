> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesamplernodedefinition/assetidentifier](https://developer.apple.com/documentation/phase/phasesamplernodedefinition/assetidentifier)

# assetIdentifier (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The name of the audio this node plays.

## Declaration

```swift
var assetIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property refers to the registered identifier of the audio file. See [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](../phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md).

# assetIdentifier (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The name of the audio this node plays.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * assetIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property refers to the registered identifier of the audio file. See [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](../phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md).
