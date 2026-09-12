> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-2ata2/preprocessasset(configuration:subprogress:)](https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2/preprocessasset(configuration:subprogress:))

# preprocessAsset(configuration:subprogress:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+

Preprocesses the asset by generating a disparity track, writing the result to the URL specified in `configuration`. Required for assets whose `cinematicCapability` is `.needsPreprocessing`; on success the returned `CNAssetInfo` will be `.renderable`.

## Declaration

```swift
func preprocessAsset(configuration: CNAssetPreprocessConfiguration, subprogress: consuming Subprogress? = nil) async throws -> CNAssetInfo
```

## Parameters

- `configuration`: Destination URL and whether to embed or reference source tracks.
- `subprogress`: Optional `Subprogress` for integrating into a `ProgressManager` tree.

<a id="return-value"></a>

## Return Value

A `CNAssetInfo` for the preprocessed asset at the destination URL.

<a id="discussion"></a>

## Discussion

Ensure `resourceStatus` is `.ready` before calling — download resources first if needed.

Cancellation: this method responds to Swift Task cancellation. If the calling task is cancelled, the preprocessing stops; any partially processed destination asset is discarded.

> **Throws**

> `CNCinematicError` on failure.
