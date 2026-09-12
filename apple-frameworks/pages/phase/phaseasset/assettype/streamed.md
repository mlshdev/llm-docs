> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasset/assettype/streamed](https://developer.apple.com/documentation/phase/phaseasset/assettype/streamed)

# PHASEAsset.AssetType.streamed (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sound asset that streams from disk into memory as it plays.

## Declaration

```swift
case streamed
```

<a id="Discussion"></a>

## Discussion

If the asset is on disk, the framework streams the asset’s data from disk into memory and prepares the asset during playback. If the asset is in memory, the framework streams from memory and prepares the asset during playback.

## See Also

### Types

- [PHASEAsset.AssetType.resident](resident.md): A sound asset that plays after fully loading in memory.

# PHASEAssetTypeStreamed (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sound asset that streams from disk into memory as it plays.

## Declaration

```objectivec
PHASEAssetTypeStreamed
```

<a id="Discussion"></a>

## Discussion

If the asset is on disk, the framework streams the asset’s data from disk into memory and prepares the asset during playback. If the asset is in memory, the framework streams from memory and prepares the asset during playback.

## See Also

### Types

- [PHASEAssetTypeResident](resident.md): A sound asset that plays after fully loading in memory.
