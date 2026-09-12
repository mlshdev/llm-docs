> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/urlforitem(withpersistentidentifier:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/urlforitem(withpersistentidentifier:))

# urlForItem(withPersistentIdentifier:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Returns the URL for a given persistent identifier.

## Declaration

```swift
func urlForItem(withPersistentIdentifier identifier: NSFileProviderItemIdentifier) -> URL?
```

## Parameters

- `identifier`: The persistent identifier for a shared document.

<a id="return-value"></a>

## Return Value

The URL of a shared document.

<a id="Discussion"></a>

## Discussion

Override this method to provide the URL for the document with the given identifier. This method must be the inverse of [persistentIdentifierForItem(at:)](persistentidentifierforitem%28at_%29.md), mapping from the persistent identifier, back to the URL.

This URL must be inside the directory referred to by the [NSFileProviderManager](../nsfileprovidermanager.md) object’s [documentStorageURL](../nsfileprovidermanager/documentstorageurl.md) property.

## See Also

### Working with items and persistent identifiers

- [persistentIdentifierForItem(at:)](persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [item(for:)](item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [enumerator(for:)](enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.

# URLForItemWithPersistentIdentifier: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Returns the URL for a given persistent identifier.

## Declaration

```objectivec
- (NSURL *) URLForItemWithPersistentIdentifier:(NSFileProviderItemIdentifier) identifier;
```

## Parameters

- `identifier`: The persistent identifier for a shared document.

<a id="return-value"></a>

## Return Value

The URL of a shared document.

<a id="Discussion"></a>

## Discussion

Override this method to provide the URL for the document with the given identifier. This method must be the inverse of [persistentIdentifierForItemAtURL:](persistentidentifierforitem%28at_%29.md), mapping from the persistent identifier, back to the URL.

This URL must be inside the directory referred to by the [NSFileProviderManager](../nsfileprovidermanager.md) object’s [documentStorageURL](../nsfileprovidermanager/documentstorageurl.md) property.

## See Also

### Working with items and persistent identifiers

- [persistentIdentifierForItemAtURL:](persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [itemForIdentifier:error:](item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [enumeratorForContainerItemIdentifier:error:](enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
