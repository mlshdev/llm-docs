> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionfileproviderdownloadpipelinedepth](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionfileproviderdownloadpipelinedepth)

# NSExtensionFileProviderDownloadPipelineDepth (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.0+

The per-domain limit of concurrent calls that a file provider extension can make to fetch data from remote storage.

## Details

`NSExtensionFileProviderDownloadPipelineDepth`

<a id="Discussion"></a>

## Discussion

Use this value to set the limit of concurrent calls to methods like [fetchContents(for:version:request:completionHandler:)](../../../fileprovider/nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md). Set the value for this key to an integer in the range `1` to `128`.

## See Also

### File Provider

- [NSExtensionFileProviderActions](nsextensionfileprovideractions.md): The custom actions for a File Provider extension.
- [NSExtensionFileProviderDocumentGroup](nsextensionfileproviderdocumentgroup.md): The identifier of a shared container that can be accessed by a Document Picker extension and its associated File Provider extension.
- [NSExtensionFileProviderSupportsEnumeration](nsextensionfileprovidersupportsenumeration.md): A Boolean value that indicates whether a File Provider extension enumerates its content.
- [NSExtensionFileProviderUploadPipelineDepth](nsextensionfileprovideruploadpipelinedepth.md): The per-domain limit of concurrent calls that a file provider extension can make to upload data.

# NSExtensionFileProviderDownloadPipelineDepth (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.0+

The per-domain limit of concurrent calls that a file provider extension can make to fetch data from remote storage.

## Details

`NSExtensionFileProviderDownloadPipelineDepth`

<a id="Discussion"></a>

## Discussion

Use this value to set the limit of concurrent calls to methods like [fetchContentsForItemWithIdentifier:version:request:completionHandler:](../../../fileprovider/nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md). Set the value for this key to an integer in the range `1` to `128`.

## See Also

### File Provider

- [NSExtensionFileProviderActions](nsextensionfileprovideractions.md): The custom actions for a File Provider extension.
- [NSExtensionFileProviderDocumentGroup](nsextensionfileproviderdocumentgroup.md): The identifier of a shared container that can be accessed by a Document Picker extension and its associated File Provider extension.
- [NSExtensionFileProviderSupportsEnumeration](nsextensionfileprovidersupportsenumeration.md): A Boolean value that indicates whether a File Provider extension enumerates its content.
- [NSExtensionFileProviderUploadPipelineDepth](nsextensionfileprovideruploadpipelinedepth.md): The per-domain limit of concurrent calls that a file provider extension can make to upload data.
