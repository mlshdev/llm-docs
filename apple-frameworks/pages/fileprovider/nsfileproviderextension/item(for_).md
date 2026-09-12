> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/item(for:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/item(for:))

# item(for:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Returns a description of the item associated with the persistent identifier.

## Declaration

```swift
func item(for identifier: NSFileProviderItemIdentifier) throws -> NSFileProviderItem
```

## Parameters

- `identifier`: The persistent identifier for a shared document.

<a id="return-value"></a>

## Return Value

A custom object that describes the specified document or directory, or `nil` in Objective-C if an error occurs.

<a id="Discussion"></a>

## Discussion

Your File Provider extension must define a class that adopts the [NSFileProviderItemProtocol](../nsfileprovideritemprotocol.md) interface. Instances of this class provides access to information about an item (a document or directory) that your File Provider manages and stores.

Your class should implement as many of the protocol’s optional methods as makes sense for the specified item. This lets the system provide as much information as possible to the user as they browse your File Provider.

Optionally, you can define different classes for different types of items—for example, different classes for documents and directories. These classes can define different subsets of the [NSFileProviderItemProtocol](../nsfileprovideritemprotocol.md) interface’s optional methods. For example, the class representing a folder implements the [childItemCount](../nsfileprovideritemprotocol/childitemcount.md) property, while the class representing a document does not.

Override this method to look up the item associated with the persistent identifier and return an instance of your custom [NSFileProviderItemProtocol](../nsfileprovideritemprotocol.md) class for that item.

## See Also

### Working with items and persistent identifiers

- [persistentIdentifierForItem(at:)](persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [urlForItem(withPersistentIdentifier:)](urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [enumerator(for:)](enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.

# itemForIdentifier:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Returns a description of the item associated with the persistent identifier.

## Declaration

```objectivec
- (NSFileProviderItem) itemForIdentifier:(NSFileProviderItemIdentifier) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The persistent identifier for a shared document.
- `error`: In Objective-C, a pointer that allows the method to pass errors back to the method’s call site. If an error occurs, your implementation should assign an [NSError](../../foundation/nserror.md) object that describes the problem and return `nil`.

<a id="return-value"></a>

## Return Value

A custom object that describes the specified document or directory, or `nil` in Objective-C if an error occurs.

<a id="Discussion"></a>

## Discussion

Your File Provider extension must define a class that adopts the [NSFileProviderItem](../nsfileprovideritemprotocol.md) interface. Instances of this class provides access to information about an item (a document or directory) that your File Provider manages and stores.

Your class should implement as many of the protocol’s optional methods as makes sense for the specified item. This lets the system provide as much information as possible to the user as they browse your File Provider.

Optionally, you can define different classes for different types of items—for example, different classes for documents and directories. These classes can define different subsets of the [NSFileProviderItem](../nsfileprovideritemprotocol.md) interface’s optional methods. For example, the class representing a folder implements the [childItemCount](../nsfileprovideritemprotocol/childitemcount.md) property, while the class representing a document does not.

Override this method to look up the item associated with the persistent identifier and return an instance of your custom [NSFileProviderItem](../nsfileprovideritemprotocol.md) class for that item.

## See Also

### Working with items and persistent identifiers

- [persistentIdentifierForItemAtURL:](persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [URLForItemWithPersistentIdentifier:](urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [enumeratorForContainerItemIdentifier:error:](enumerator%28for_%29.md): Returns an enumerator for the specified item.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
