> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/domainremovalmode](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/domainremovalmode)

# NSFileProviderManager.DomainRemovalMode (Swift)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A mode indicating how the system handles user data when removing a domain.

## Declaration

```swift
enum DomainRemovalMode
```

## Topics

### Options

- [NSFileProviderManager.DomainRemovalMode.removeAll](domainremovalmode/removeall.md): Deletes all items in the domain.
- [NSFileProviderManager.DomainRemovalMode.preserveDirtyUserData](domainremovalmode/preservedirtyuserdata.md): Deletes the domain but keeps any items with unsynced, local changes.
- [NSFileProviderManager.DomainRemovalMode.preserveDownloadedUserData](domainremovalmode/preservedownloadeduserdata.md): Deletes the domain, but keeps the downloaded user data.

### Initializers

- [init(rawValue:)](domainremovalmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with domains

- [init(for:)](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [import(\_:fromDirectoryAt:completionHandler:)](import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [add(\_:completionHandler:)](add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler(\_:)](getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [remove(\_:completionHandler:)](remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [remove(\_:mode:completionHandler:)](remove%28__mode_completionhandler_%29.md): Removes a domain from the File Provider extension using the specified options.
- [removeAllDomains(completionHandler:)](removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [disconnect(reason:options:completionHandler:)](disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManager.DisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnect(completionHandler:)](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilization(completionHandler:)](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURL()](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

# NSFileProviderDomainRemovalMode (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

A mode indicating how the system handles user data when removing a domain.

## Declaration

```objectivec
enum NSFileProviderDomainRemovalMode : NSInteger;
```

## Topics

### Options

- [NSFileProviderDomainRemovalModeRemoveAll](domainremovalmode/removeall.md): Deletes all items in the domain.
- [NSFileProviderDomainRemovalModePreserveDirtyUserData](domainremovalmode/preservedirtyuserdata.md): Deletes the domain but keeps any items with unsynced, local changes.
- [NSFileProviderDomainRemovalModePreserveDownloadedUserData](domainremovalmode/preservedownloadeduserdata.md): Deletes the domain, but keeps the downloaded user data.

## See Also

### Working with domains

- [managerForDomain:](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [importDomain:fromDirectoryAtURL:completionHandler:](import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [addDomain:completionHandler:](add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler:](getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [removeDomain:completionHandler:](remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [removeDomain:mode:completionHandler:](remove%28__mode_completionhandler_%29.md): Removes a domain from the File Provider extension using the specified options.
- [removeAllDomainsWithCompletionHandler:](removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [disconnectWithReason:options:completionHandler:](disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManagerDisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnectWithCompletionHandler:](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilizationWithCompletionHandler:](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURLWithError:](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.
