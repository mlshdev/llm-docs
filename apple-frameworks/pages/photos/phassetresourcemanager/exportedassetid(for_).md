> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcemanager/exportedassetid(for:)](https://developer.apple.com/documentation/photos/phassetresourcemanager/exportedassetid(for:))

# exportedAssetID(for:)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the exported asset ID for the specified asset resource.

## Declaration

```swift
func exportedAssetID(for resource: PHAssetResource) async throws -> CKAsset.ExportedAssetID
```

## Parameters

- `resource`: The asset resource to get an exported asset ID for.

<a id="return-value"></a>

## Return Value

The exported asset ID for the resource.

<a id="discussion"></a>

## Discussion

The returned `CKAsset.ExportedAssetID` can be used to create a `CKAsset` that references the asset resource data without copying it. Network access is required; the request will fail if the resource cannot be resolved in CloudKit. Only resources belonging to `PHAssetResource.TypeGroup.coreComponents` are valid. The photo library must be cloud-enabled; requests against a local-only library will fail with `PHPhotosError.requestNotSupportedForAsset`.

This method supports task cancellation. If the calling task is cancelled, the underlying network request is cancelled and this method throws `CancellationError`.

> **Throws**

> `CancellationError` if the task is cancelled, or another error if the request fails.
