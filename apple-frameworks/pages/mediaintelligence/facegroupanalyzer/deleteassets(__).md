> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/deleteassets(_:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/deleteassets(_:))

# deleteAssets(\_:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes the specified assets and their associated face data.

## Declaration

```swift
final nonisolated(nonsending) func deleteAssets(_ assetIDs: [MediaIntelligenceImageAsset.ID]) async throws
```

## Parameters

- `assetIDs`: The identifiers of the assets to remove.

## See Also

### Managing assets

- [workingDirectory](workingdirectory.md): A directory where the analyzer stores its face data and metadata.
- [insertOrUpdateAssets(\_:)](insertorupdateassets%28__%29.md): Adds or replaces image assets in the analyzer.
- [deleteAllAssets()](deleteallassets%28%29.md): Removes all assets and their associated face data from the analyzer.
- [purge(workingDirectory:)](purge%28workingdirectory_%29.md): Removes all analyzer data from the specified directory.
