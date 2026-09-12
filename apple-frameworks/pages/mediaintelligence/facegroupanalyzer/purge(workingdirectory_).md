> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/purge(workingdirectory:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/purge(workingdirectory:))

# purge(workingDirectory:)

**Framework:** Media Intelligence  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes all analyzer data from the specified directory.

## Declaration

```swift
nonisolated(nonsending) static func purge(workingDirectory: URL) async throws
```

## Parameters

- `workingDirectory`: The directory to purge.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

Call this method to permanently delete all face data, cluster assignments, and metadata from `workingDirectory`. This operation is irreversible.

## See Also

### Managing assets

- [workingDirectory](workingdirectory.md): A directory where the analyzer stores its face data and metadata.
- [insertOrUpdateAssets(\_:)](insertorupdateassets%28__%29.md): Adds or replaces image assets in the analyzer.
- [deleteAssets(\_:)](deleteassets%28__%29.md): Removes the specified assets and their associated face data.
- [deleteAllAssets()](deleteallassets%28%29.md): Removes all assets and their associated face data from the analyzer.
