> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/temporarydirectoryurl()](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/temporarydirectoryurl())

# temporaryDirectoryURL() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

## Declaration

```swift
func temporaryDirectoryURL() throws -> URL
```

<a id="Discussion"></a>

## Discussion

The system guarantees that the temporary URL refers to a directory on the same volume as the user-visible URL so that the system can automatically clone or move files between the temporary URL and the user-visible URL. For example, the File Provider extension can use the temporary directory to store content passed to the [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) or [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) methods.

When you implement your File Provider extension’s [fetchContents(for:version:request:completionHandler:)](../nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md) method, the URL you pass to the completion handler must be on the same volume as the temporary directory, so the system can clone it to provide the content for the dataless item.

This method fails if the system can’t find a suitable directory, for example, if the domain doesn’t exist. However, it can’t fail if the file provider has an active instance for the specified domain.

## See Also

### Working with domains

- [init(for:)](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [import(\_:fromDirectoryAt:completionHandler:)](import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [add(\_:completionHandler:)](add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler(\_:)](getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [remove(\_:completionHandler:)](remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [remove(\_:mode:completionHandler:)](remove%28__mode_completionhandler_%29.md): Removes a domain from the File Provider extension using the specified options.
- [removeAllDomains(completionHandler:)](removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [NSFileProviderManager.DomainRemovalMode](domainremovalmode.md): A mode indicating how the system handles user data when removing a domain.
- [disconnect(reason:options:completionHandler:)](disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManager.DisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnect(completionHandler:)](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilization(completionHandler:)](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.

# temporaryDirectoryURLWithError: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

## Declaration

```objectivec
- (NSURL *) temporaryDirectoryURLWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

The system guarantees that the temporary URL refers to a directory on the same volume as the user-visible URL so that the system can automatically clone or move files between the temporary URL and the user-visible URL. For example, the File Provider extension can use the temporary directory to store content passed to the [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) or [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) methods.

When you implement your File Provider extension’s [fetchContentsForItemWithIdentifier:version:request:completionHandler:](../nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md) method, the URL you pass to the completion handler must be on the same volume as the temporary directory, so the system can clone it to provide the content for the dataless item.

This method fails if the system can’t find a suitable directory, for example, if the domain doesn’t exist. However, it can’t fail if the file provider has an active instance for the specified domain.

## See Also

### Working with domains

- [managerForDomain:](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [importDomain:fromDirectoryAtURL:completionHandler:](import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [addDomain:completionHandler:](add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler:](getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [removeDomain:completionHandler:](remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [removeDomain:mode:completionHandler:](remove%28__mode_completionhandler_%29.md): Removes a domain from the File Provider extension using the specified options.
- [removeAllDomainsWithCompletionHandler:](removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [NSFileProviderDomainRemovalMode](domainremovalmode.md): A mode indicating how the system handles user data when removing a domain.
- [disconnectWithReason:options:completionHandler:](disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManagerDisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnectWithCompletionHandler:](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilizationWithCompletionHandler:](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
