> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerating/enumerator(for:request:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerating/enumerator(for:request:))

# enumerator(for:request:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider to return an enumerator for the provided directory.

## Declaration

```swift
func enumerator(for containerItemIdentifier: NSFileProviderItemIdentifier, request: NSFileProviderRequest) throws -> any NSFileProviderEnumerator
```

## Parameters

- `containerItemIdentifier`: The item identifier for the directory.
- `request`: An object that identifies the context of that request, such as the requesting app.

<a id="return-value"></a>

## Return Value

An enumerator for the specified directory.

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)

<a id="Discussion"></a>

## Discussion

The system calls this method to request an enumerator for the specified item.

Possible item identifiers include:

- **[rootContainer](../nsfileprovideritemidentifier/rootcontainer.md)**: The system passes this identifier when the user begins browsing your file provider’s content.
- **A directory’s [itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: The system requests a new enumerator each time the user opens a new directory.
- **[workingSet](../nsfileprovideritemidentifier/workingset.md)**: The system can request an enumerator so that it can sync the working set in the background.
- **A document’s [itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: The system subscribes to live updates by requesting an enumerator for a document.
- **The [trashContainer](../nsfileprovideritemidentifier/trashcontainer.md) directory.**: The system passes this identifier when the user browses the contents of the trash. If your File Provider extension doesn’t support moving items to the trash, your implementation should throw or return an error.

Your implementation should create and return an [NSFileProviderEnumerator](../nsfileproviderenumerator.md) object that provides the requested content.

<a id="Handle-Errors"></a>

### Handle Errors

If you can’t return the requested enumerator, you must throw an error in Swift, or if you return nil in Objective-C, you must set the `error` out parameter.

If the `containerItemIdentifier` parameter is [trashContainer](../nsfileprovideritemidentifier/trashcontainer.md) and your extension doesn’t support trashing items, then it should fail with the [NSFeatureUnsupportedError](../../foundation/nsfeatureunsupportederror-swift.var.md) error code from the [NSCocoaErrorDomain](../../foundation/nscocoaerrordomain.md) domain. Additionally, make sure the items managed by your File Provider extension don’t have the [allowsTrashing](../nsfileprovideritemcapabilities/allowstrashing.md) capability enabled.

If the `containerItemIdentifier` parameter doesn’t exist in your remote storage, you should fail with an [NSFileProviderError.Code.noSuchItem](../nsfileprovidererror/code/nosuchitem.md) error. The system then attempts to delete the item from disk.

If you pass [NSFileProviderError.Code.notAuthenticated](../nsfileprovidererror/code/notauthenticated.md) or [NSFileProviderError.Code.serverUnreachable](../nsfileprovidererror/code/serverunreachable.md) to the handler, the system presents an appropriate alert to the user, but doesn’t try to access the metadata until triggered again by the user.

The system considers any other errors to be transient, and automatically retries the method call.

# enumeratorForContainerItemIdentifier:request:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider to return an enumerator for the provided directory.

## Declaration

```objectivec
- (id<NSFileProviderEnumerator>) enumeratorForContainerItemIdentifier:(NSFileProviderItemIdentifier) containerItemIdentifier request:(NSFileProviderRequest *) request error:(NSError **) error;
```

## Parameters

- `containerItemIdentifier`: The item identifier for the directory.
- `request`: An object that identifies the context of that request, such as the requesting app.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An enumerator for the specified directory. On failure, this method returns `nil`.

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)

<a id="Discussion"></a>

## Discussion

The system calls this method to request an enumerator for the specified item.

Possible item identifiers include:

- **[NSFileProviderRootContainerItemIdentifier](../nsfileprovideritemidentifier/rootcontainer.md)**: The system passes this identifier when the user begins browsing your file provider’s content.
- **A directory’s [itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: The system requests a new enumerator each time the user opens a new directory.
- **[NSFileProviderWorkingSetContainerItemIdentifier](../nsfileprovideritemidentifier/workingset.md)**: The system can request an enumerator so that it can sync the working set in the background.
- **A document’s [itemIdentifier](../nsfileprovideritemprotocol/itemidentifier.md)**: The system subscribes to live updates by requesting an enumerator for a document.
- **The [NSFileProviderTrashContainerItemIdentifier](../nsfileprovideritemidentifier/trashcontainer.md) directory.**: The system passes this identifier when the user browses the contents of the trash. If your File Provider extension doesn’t support moving items to the trash, your implementation should throw or return an error.

Your implementation should create and return an [NSFileProviderEnumerator](../nsfileproviderenumerator.md) object that provides the requested content.

<a id="Handle-Errors"></a>

### Handle Errors

If you can’t return the requested enumerator, you must throw an error in Swift, or if you return nil in Objective-C, you must set the `error` out parameter.

If the `containerItemIdentifier` parameter is [NSFileProviderTrashContainerItemIdentifier](../nsfileprovideritemidentifier/trashcontainer.md) and your extension doesn’t support trashing items, then it should fail with the [NSFeatureUnsupportedError](../../foundation/nsfeatureunsupportederror-swift.var.md) error code from the [NSCocoaErrorDomain](../../foundation/nscocoaerrordomain.md) domain. Additionally, make sure the items managed by your File Provider extension don’t have the [NSFileProviderItemCapabilitiesAllowsTrashing](../nsfileprovideritemcapabilities/allowstrashing.md) capability enabled.

If the `containerItemIdentifier` parameter doesn’t exist in your remote storage, you should fail with an [NSFileProviderErrorNoSuchItem](../nsfileprovidererror/code/nosuchitem.md) error. The system then attempts to delete the item from disk.

If you pass [NSFileProviderErrorNotAuthenticated](../nsfileprovidererror/code/notauthenticated.md) or [NSFileProviderErrorServerUnreachable](../nsfileprovidererror/code/serverunreachable.md) to the handler, the system presents an appropriate alert to the user, but doesn’t try to access the metadata until triggered again by the user.

The system considers any other errors to be transient, and automatically retries the method call.
