> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/persistentidentifierforitem(at:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/persistentidentifierforitem(at:))

# persistentIdentifierForItem(at:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Returns a unique identifier for the given URL.

## Declaration

```swift
func persistentIdentifierForItem(at url: URL) -> NSFileProviderItemIdentifier?
```

## Parameters

- `url`: The URL of a shared document.

<a id="return-value"></a>

## Return Value

A unique identifier for the item specified by the URL, or `nil` if the document is not in the File Provider’s shared container.

<a id="Discussion"></a>

## Discussion

Override this method to define a static mapping between URLs and their persistent identifiers. A document’s identifier should remain constant over time; it should not change when the document is edited, moved, or renamed.

For example, if you already have a unique key for the document in your cloud database, you can use that key as the document’s identifier.

Always return `nil` if the URL is not inside in the directory referred to by the [NSFileProviderManager](../nsfileprovidermanager.md) object’s [documentStorageURL](../nsfileprovidermanager/documentstorageurl.md) property.

## See Also

### Working with items and persistent identifiers

- [urlForItem(withPersistentIdentifier:)](urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [item(for:)](item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [enumerator(for:)](enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.

# persistentIdentifierForItemAtURL: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Returns a unique identifier for the given URL.

## Declaration

```objectivec
- (NSFileProviderItemIdentifier) persistentIdentifierForItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of a shared document.

<a id="return-value"></a>

## Return Value

A unique identifier for the item specified by the URL, or `nil` if the document is not in the File Provider’s shared container.

<a id="Discussion"></a>

## Discussion

Override this method to define a static mapping between URLs and their persistent identifiers. A document’s identifier should remain constant over time; it should not change when the document is edited, moved, or renamed.

For example, if you already have a unique key for the document in your cloud database, you can use that key as the document’s identifier.

Always return `nil` if the URL is not inside in the directory referred to by the [NSFileProviderManager](../nsfileprovidermanager.md) object’s [documentStorageURL](../nsfileprovidermanager/documentstorageurl.md) property.

## See Also

### Working with items and persistent identifiers

- [URLForItemWithPersistentIdentifier:](urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [itemForIdentifier:error:](item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [enumeratorForContainerItemIdentifier:error:](enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
