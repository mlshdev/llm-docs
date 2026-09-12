> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/import(_:fromdirectoryat:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/import(_:fromdirectoryat:completionhandler:))

# import(\_:fromDirectoryAt:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.

## Declaration

```swift
class func `import`(_ domain: NSFileProviderDomain, fromDirectoryAt url: URL, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func `import`(_ domain: NSFileProviderDomain, fromDirectoryAt url: URL) async throws
```

## Parameters

- `domain`: The domain to import.
- `url`: A URL that points to the directory to import.
- `completionHandler`: A block that the system calls as soon as it creates the new domain. It takes the following parameters:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func `import`(_ domain: NSFileProviderDomain, fromDirectoryAt url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to migrate an existing file hierarchy on disk to a [NSFileProviderExtension](../nsfileproviderextension.md) without redownloading the data. After you call the method, the provided URL is no longer valid. The system has moved and now manages all of its contents.

If a domain with the same name already exists, the method fails with an [NSFileWriteFileExistsError](../../foundation/nsfilewritefileexistserror-swift.var.md) error. The URL remains untouched. If the system doesn’t allow the extension to request a migration, the method fails with an [NSFeatureUnsupportedError](../../foundation/nsfeatureunsupportederror-swift.var.md) error.

The system starts by moving the provided directory into its local cache, and then calls the completion handler. Then, for each item in the directory, it calls your extension’s [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) with the [mayAlreadyExist](../nsfileprovidercreateitemoptions/mayalreadyexist.md) option.

When the import finishes, the system calls your extension’s [importDidFinish(completionHandler:)](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) method. If you call [reimportItems(below:completionHandler:)](reimportitems%28below_completionhandler_%29.md) before the import finishes, the system makes a single call to [importDidFinish(completionHandler:)](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) for both imports.

## See Also

### Working with domains

- [init(for:)](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
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

# importDomain:fromDirectoryAtURL:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.

## Declaration

```objectivec
+ (void) importDomain:(NSFileProviderDomain *) domain fromDirectoryAtURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `domain`: The domain to import.
- `url`: A URL that points to the directory to import.
- `completionHandler`: A block that the system calls as soon as it creates the new domain. It takes the following parameters:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func `import`(_ domain: NSFileProviderDomain, fromDirectoryAt url: URL) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to migrate an existing file hierarchy on disk to a [NSFileProviderExtension](../nsfileproviderextension.md) without redownloading the data. After you call the method, the provided URL is no longer valid. The system has moved and now manages all of its contents.

If a domain with the same name already exists, the method fails with an [NSFileWriteFileExistsError](../../foundation/nsfilewritefileexistserror-swift.var.md) error. The URL remains untouched. If the system doesn’t allow the extension to request a migration, the method fails with an [NSFeatureUnsupportedError](../../foundation/nsfeatureunsupportederror-swift.var.md) error.

The system starts by moving the provided directory into its local cache, and then calls the completion handler. Then, for each item in the directory, it calls your extension’s [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) with the [NSFileProviderCreateItemMayAlreadyExist](../nsfileprovidercreateitemoptions/mayalreadyexist.md) option.

When the import finishes, the system calls your extension’s [importDidFinishWithCompletionHandler:](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) method. If you call [reimportItemsBelowItemWithIdentifier:completionHandler:](reimportitems%28below_completionhandler_%29.md) before the import finishes, the system makes a single call to [importDidFinishWithCompletionHandler:](../nsfileproviderreplicatedextension/importdidfinish%28completionhandler_%29.md) for both imports.

## See Also

### Working with domains

- [managerForDomain:](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
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
