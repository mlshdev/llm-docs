> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/workingdirectory](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/workingdirectory)

# workingDirectory

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A directory where the analyzer stores its face data and metadata.

## Declaration

```swift
final let workingDirectory: URL
```

## See Also

### Managing assets

- [insertOrUpdateAssets(\_:)](insertorupdateassets%28__%29.md): Adds or replaces image assets in the analyzer.
- [deleteAssets(\_:)](deleteassets%28__%29.md): Removes the specified assets and their associated face data.
- [deleteAllAssets()](deleteallassets%28%29.md): Removes all assets and their associated face data from the analyzer.
- [purge(workingDirectory:)](purge%28workingdirectory_%29.md): Removes all analyzer data from the specified directory.
