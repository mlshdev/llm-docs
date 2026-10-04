> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/assetpackmanager/localversion(ofassetpackwithid:)

# localVersion(ofAssetPackWithID:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

Returns a locally available asset pack’s version number.

## Declaration

```swift
nonisolated func localVersion(ofAssetPackWithID assetPackID: String) throws -> Int
```

## Parameters

- `assetPackID`: The asset pack’s ID.

<a id="return-value"></a>

## Return Value

The asset pack’s version number.

<a id="discussion"></a>

## Discussion

> **Throws**

> [ManagedBackgroundAssetsError.assetPackNotFound(withID:)](../managedbackgroundassetserror/assetpacknotfound%28withid_%29.md) when no asset pack with the specified ID is available locally.
