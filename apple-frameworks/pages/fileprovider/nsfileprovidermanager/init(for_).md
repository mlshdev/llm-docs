> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/init(for:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/init(for:))

# init(for:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns a newly created file provider manager for the specified domain.

## Declaration

```swift
convenience init?(for domain: NSFileProviderDomain)
```

## See Also

### Working with domains

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
- [temporaryDirectoryURL()](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

# managerForDomain: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns a newly created file provider manager for the specified domain.

## Declaration

```objectivec
+ (instancetype) managerForDomain:(NSFileProviderDomain *) domain;
```

## See Also

### Working with domains

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
- [temporaryDirectoryURLWithError:](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.
