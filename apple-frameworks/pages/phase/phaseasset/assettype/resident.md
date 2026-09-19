> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseasset/assettype/resident

# PHASEAsset.AssetType.resident (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sound asset that plays after fully loading in memory.

## Declaration

```swift
case resident
```

<a id="Discussion"></a>

## Discussion

If the sound asset is in memory, the framework prepares it for playback. If the asset is on disk, the framework loads it into memory, and prepares it for playback.

## See Also

### Types

- [PHASEAsset.AssetType.streamed](streamed.md): A sound asset that streams from disk into memory as it plays.

# PHASEAssetTypeResident (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sound asset that plays after fully loading in memory.

## Declaration

```objectivec
PHASEAssetTypeResident
```

<a id="Discussion"></a>

## Discussion

If the sound asset is in memory, the framework prepares it for playback. If the asset is on disk, the framework loads it into memory, and prepares it for playback.

## See Also

### Types

- [PHASEAssetTypeStreamed](streamed.md): A sound asset that streams from disk into memory as it plays.
