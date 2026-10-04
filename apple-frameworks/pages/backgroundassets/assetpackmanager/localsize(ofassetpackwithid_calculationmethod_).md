> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/assetpackmanager/localsize(ofassetpackwithid:calculationmethod:)

# localSize(ofAssetPackWithID:calculationMethod:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

Calculates a locally available asset pack’s installation size.

## Declaration

```swift
func localSize(ofAssetPackWithID assetPackID: String, calculationMethod: SizeCalculationMethod) async throws -> Int64
```

## Parameters

- `assetPackID`: The asset pack’s ID.
- `calculationMethod`: The method to use to calculate the asset pack’s installation size.

<a id="return-value"></a>

## Return Value

The asset pack’s installation size in bytes.

<a id="discussion"></a>

## Discussion

This is different than the download size, which could be smaller. Calculating the size of an asset pack that contains many files can take a long time.

> **Throws**

> [ManagedBackgroundAssetsError.assetPackNotFound(withID:)](../managedbackgroundassetserror/assetpacknotfound%28withid_%29.md) when no asset pack with the specified ID is available locally.
