> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasset/assettype](https://developer.apple.com/documentation/phase/phaseasset/assettype)

# PHASEAsset.AssetType (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that determine how PHASE manages sound assets in memory.

## Declaration

```swift
enum AssetType
```

<a id="overview"></a>

## Overview

To prepare for playback, the framework can decompress a sound asset or perform a format conversion, or both, depending on the type of the underlying asset data.

## Topics

### Types

- [PHASEAsset.AssetType.resident](assettype/resident.md): A sound asset that plays after fully loading in memory.
- [PHASEAsset.AssetType.streamed](assettype/streamed.md): A sound asset that streams from disk into memory as it plays.

### Initializers

- [init(rawValue:)](assettype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PHASEAssetType (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that determine how PHASE manages sound assets in memory.

## Declaration

```objectivec
enum PHASEAssetType : NSInteger;
```

<a id="overview"></a>

## Overview

To prepare for playback, the framework can decompress a sound asset or perform a format conversion, or both, depending on the type of the underlying asset data.

## Topics

### Types

- [PHASEAssetTypeResident](assettype/resident.md): A sound asset that plays after fully loading in memory.
- [PHASEAssetTypeStreamed](assettype/streamed.md): A sound asset that streams from disk into memory as it plays.
