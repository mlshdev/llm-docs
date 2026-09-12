> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/waitforstabilization(completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/waitforstabilization(completionhandler:))

# waitForStabilization(completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Requests a notification after the domain stabilizes.

## Declaration

```swift
func waitForStabilization(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func waitForStabilization() async throws
```

## Parameters

- `completionHandler`: A block that the system calls after pending changes to both the file system and the provider have completed. The system passes the following parameters:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func waitForStabilization() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to enforce a consistent state for testing. The system calls the completion handler after all the pending changes to the local cache and the remote storage have completed. The system waits on any changes that requested before the call to [waitForStabilization(completionHandler:)](waitforstabilization%28completionhandler_%29.md), but which haven’t completed yet.

> **Warning**

>  Only use [waitForStabilization(completionHandler:)](waitforstabilization%28completionhandler_%29.md) for testing and debugging. Don’t call this method in a production app, due to its high performance cost.

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
- [temporaryDirectoryURL()](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

# waitForStabilizationWithCompletionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Requests a notification after the domain stabilizes.

## Declaration

```objectivec
- (void) waitForStabilizationWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that the system calls after pending changes to both the file system and the provider have completed. The system passes the following parameters:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func waitForStabilization() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to enforce a consistent state for testing. The system calls the completion handler after all the pending changes to the local cache and the remote storage have completed. The system waits on any changes that requested before the call to [waitForStabilizationWithCompletionHandler:](waitforstabilization%28completionhandler_%29.md), but which haven’t completed yet.

> **Warning**

>  Only use [waitForStabilizationWithCompletionHandler:](waitforstabilization%28completionhandler_%29.md) for testing and debugging. Don’t call this method in a production app, due to its high performance cost.

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
- [temporaryDirectoryURLWithError:](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.
