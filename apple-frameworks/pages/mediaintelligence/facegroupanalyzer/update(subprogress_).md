> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/update(subprogress:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/update(subprogress:))

# update(subprogress:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Clusters faces into entities and updates their assignments.

## Declaration

```swift
nonisolated(nonsending) final func update(subprogress: consuming Subprogress? = nil) async throws
```

## Parameters

- `subprogress`: An optional subprogress object for reporting progress to a parent `Progress`.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

Call this method after ingesting assets with [insertOrUpdateAssets(\_:)](insertorupdateassets%28__%29.md) to run the face clustering algorithm. When this method completes, every face has a non-nil [entityID](face/entityid.md) and [state](state-swift.property.md) returns [FaceGroupAnalyzer.State.ready](state-swift.enum/ready.md).

If the analyzer is already up to date, this method returns immediately without performing any clustering.

## See Also

### Updating the gallery

- [state](state-swift.property.md): A value describing the current processing state of the analyzer.
- [FaceGroupAnalyzer.State](state-swift.enum.md): The current processing state of a face group analyzer.
