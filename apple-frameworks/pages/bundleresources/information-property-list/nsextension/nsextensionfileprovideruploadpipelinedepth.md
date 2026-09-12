> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionfileprovideruploadpipelinedepth](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionfileprovideruploadpipelinedepth)

# NSExtensionFileProviderUploadPipelineDepth (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 12.0+

The per-domain limit of concurrent calls that a file provider extension can make to upload data.

## Details

`NSExtensionFileProviderUploadPipelineDepth`

<a id="Discussion"></a>

## Discussion

Use this value to set the limit of concurrent calls to methods like [createItem(basedOn:fields:contents:options:request:completionHandler:)](../../../fileprovider/nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) and [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](../../../fileprovider/nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md). Set the value for this key to an integer in the range `1` to `128`.

## See Also

### File Provider

- [NSExtensionFileProviderActions](nsextensionfileprovideractions.md): The custom actions for a File Provider extension.
- [NSExtensionFileProviderDocumentGroup](nsextensionfileproviderdocumentgroup.md): The identifier of a shared container that can be accessed by a Document Picker extension and its associated File Provider extension.
- [NSExtensionFileProviderSupportsEnumeration](nsextensionfileprovidersupportsenumeration.md): A Boolean value that indicates whether a File Provider extension enumerates its content.
- [NSExtensionFileProviderDownloadPipelineDepth](nsextensionfileproviderdownloadpipelinedepth.md): The per-domain limit of concurrent calls that a file provider extension can make to fetch data from remote storage.

# NSExtensionFileProviderUploadPipelineDepth (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 12.0+

The per-domain limit of concurrent calls that a file provider extension can make to upload data.

## Details

`NSExtensionFileProviderUploadPipelineDepth`

<a id="Discussion"></a>

## Discussion

Use this value to set the limit of concurrent calls to methods like [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../../../fileprovider/nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) and [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](../../../fileprovider/nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md). Set the value for this key to an integer in the range `1` to `128`.

## See Also

### File Provider

- [NSExtensionFileProviderActions](nsextensionfileprovideractions.md): The custom actions for a File Provider extension.
- [NSExtensionFileProviderDocumentGroup](nsextensionfileproviderdocumentgroup.md): The identifier of a shared container that can be accessed by a Document Picker extension and its associated File Provider extension.
- [NSExtensionFileProviderSupportsEnumeration](nsextensionfileprovidersupportsenumeration.md): A Boolean value that indicates whether a File Provider extension enumerates its content.
- [NSExtensionFileProviderDownloadPipelineDepth](nsextensionfileproviderdownloadpipelinedepth.md): The per-domain limit of concurrent calls that a file provider extension can make to fetch data from remote storage.
