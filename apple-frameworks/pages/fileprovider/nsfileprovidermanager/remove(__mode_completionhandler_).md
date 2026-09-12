> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/remove(_:mode:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/remove(_:mode:completionhandler:))

# remove(\_:mode:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Removes a domain from the File Provider extension using the specified options.

## Declaration

```swift
class func remove(_ domain: NSFileProviderDomain, mode: NSFileProviderManager.DomainRemovalMode, completionHandler: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
class func remove(_ domain: NSFileProviderDomain, mode: NSFileProviderManager.DomainRemovalMode) async throws -> URL?
```

## Parameters

- `domain`: The domain to remove.
- `mode`: An option that determines how the system handles user data. For a complete list of options, see [NSFileProviderManager.DomainRemovalMode](domainremovalmode.md).
- `completionHandler`: A block that the system calls after removing the domain. It takes the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func remove(_ domain: NSFileProviderDomain, mode: NSFileProviderManager.DomainRemovalMode) async throws -> URL?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with domains

- [init(for:)](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [import(\_:fromDirectoryAt:completionHandler:)](import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [add(\_:completionHandler:)](add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler(\_:)](getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [remove(\_:completionHandler:)](remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [removeAllDomains(completionHandler:)](removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [NSFileProviderManager.DomainRemovalMode](domainremovalmode.md): A mode indicating how the system handles user data when removing a domain.
- [disconnect(reason:options:completionHandler:)](disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManager.DisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnect(completionHandler:)](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilization(completionHandler:)](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURL()](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

# removeDomain:mode:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

Removes a domain from the File Provider extension using the specified options.

## Declaration

```objectivec
+ (void) removeDomain:(NSFileProviderDomain *) domain mode:(NSFileProviderDomainRemovalMode) mode completionHandler:(void (^)(NSURL *preservedLocation, NSError *error)) completionHandler;
```

## Parameters

- `domain`: The domain to remove.
- `mode`: An option that determines how the system handles user data. For a complete list of options, see [NSFileProviderDomainRemovalMode](domainremovalmode.md).
- `completionHandler`: A block that the system calls after removing the domain. It takes the following parameter:

  - **`error`**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func remove(_ domain: NSFileProviderDomain, mode: NSFileProviderManager.DomainRemovalMode) async throws -> URL?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with domains

- [managerForDomain:](init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [importDomain:fromDirectoryAtURL:completionHandler:](import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [addDomain:completionHandler:](add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler:](getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [removeDomain:completionHandler:](remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [removeAllDomainsWithCompletionHandler:](removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [NSFileProviderDomainRemovalMode](domainremovalmode.md): A mode indicating how the system handles user data when removing a domain.
- [disconnectWithReason:options:completionHandler:](disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManagerDisconnectionOptions](disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnectWithCompletionHandler:](reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilizationWithCompletionHandler:](waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURLWithError:](temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.
