> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/insertorupdateassets(_:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/insertorupdateassets(_:))

# insertOrUpdateAssets(\_:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds or replaces image assets in the analyzer.

## Declaration

```swift
final nonisolated(nonsending) func insertOrUpdateAssets(_ assets: [MediaIntelligenceImageAsset]) async throws -> some AsyncSequence<(assetID: MediaIntelligenceImageAsset.ID, faces: Array<FaceGroupAnalyzer.Face>), any Error>

```

## Parameters

- `assets`: The image assets to ingest.

<a id="return-value"></a>

## Return Value

An async sequence of `(assetID, faces)` pairs — one per asset — reporting the faces detected in each image.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

For each asset, the method detects faces and extracts facial data, then persists the results to the working directory. If an asset with the same identifier already exists, the method replaces its face data.

After this call, [state](state-swift.property.md) becomes [FaceGroupAnalyzer.State.stale](state-swift.enum/stale.md) until you call [update(subprogress:)](update%28subprogress_%29.md). Faces detected in this call have a `nil` [entityID](face/entityid.md) until clustering runs.

## See Also

### Managing assets

- [workingDirectory](workingdirectory.md): A directory where the analyzer stores its face data and metadata.
- [deleteAssets(\_:)](deleteassets%28__%29.md): Removes the specified assets and their associated face data.
- [deleteAllAssets()](deleteallassets%28%29.md): Removes all assets and their associated face data from the analyzer.
- [purge(workingDirectory:)](purge%28workingdirectory_%29.md): Removes all analyzer data from the specified directory.
