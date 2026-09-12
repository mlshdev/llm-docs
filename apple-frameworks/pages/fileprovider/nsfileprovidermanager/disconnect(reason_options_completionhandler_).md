> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/disconnect(reason:options:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/disconnect(reason:options:completionhandler:))

# disconnect(reason:options:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Disconnects the domain from the extension.

## Declaration

```swift
func disconnect(reason localizedReason: String, options: NSFileProviderManager.DisconnectionOptions = [], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func disconnect(reason localizedReason: String, options: NSFileProviderManager.DisconnectionOptions = []) async throws
```

## Parameters

- `localizedReason`: A localized string that describes the reason for disconnecting the domain.
- `options`: Options for the disconnection. For a complete list of valid options, see [NSFileProviderManager.DisconnectionOptions](disconnectionoptions.md).
- `completionHandler`: A block that the system calls after disconnecting the domain. The block takes the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func disconnect(reason localizedReason: String, options: NSFileProviderManager.DisconnectionOptions = []) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call this method to disconnect the domain from the extension. While the domain is disconnected, the user can continue to browse its content, but the extension no longer receives updates about changes.

Call the [reconnect(completionHandler:)](reconnect%28completionhandler_%29.md) method to reconnect the domain.

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
- [NSFileProviderManager.DisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnect(completionHandler:)](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilization(completionHandler:)](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURL()](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

# disconnectWithReason:options:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Disconnects the domain from the extension.

## Declaration

```objectivec
- (void) disconnectWithReason:(NSString *) localizedReason options:(NSFileProviderManagerDisconnectionOptions) options completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `localizedReason`: A localized string that describes the reason for disconnecting the domain.
- `options`: Options for the disconnection. For a complete list of valid options, see [NSFileProviderManagerDisconnectionOptions](disconnectionoptions.md).
- `completionHandler`: A block that the system calls after disconnecting the domain. The block takes the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func disconnect(reason localizedReason: String, options: NSFileProviderManager.DisconnectionOptions = []) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call this method to disconnect the domain from the extension. While the domain is disconnected, the user can continue to browse its content, but the extension no longer receives updates about changes.

Call the [reconnectWithCompletionHandler:](reconnect%28completionhandler_%29.md) method to reconnect the domain.

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
- [NSFileProviderManagerDisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnectWithCompletionHandler:](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilizationWithCompletionHandler:](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURLWithError:](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.
