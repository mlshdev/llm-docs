> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundasset/url](https://developer.apple.com/documentation/phase/phasesoundasset/url)

# url (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The URL of the sound asset.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property has a value when an app creates the asset with [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](../phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md); otherwise the value is `nil`.

## See Also

### Accessing Sound Data

- [data](data.md): A storage buffer for the sound asset.

# url (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The URL of the sound asset.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

This property has a value when an app creates the asset with [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](../phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md); otherwise the value is `nil`.

## See Also

### Accessing Sound Data

- [data](data.md): A storage buffer for the sound asset.
