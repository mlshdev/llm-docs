> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/enumerator(for:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/enumerator(for:))

# enumerator(for:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

Returns an enumerator for the specified item.

## Declaration

```swift
func enumerator(for containerItemIdentifier: NSFileProviderItemIdentifier) throws -> any NSFileProviderEnumerator
```

## Parameters

- `containerItemIdentifier`: The persistent identifier for a document or folder.

<a id="return-value"></a>

## Return Value

An enumerator for the specified document or folder, or `nil` in Objective-C if an error has occurred.

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

<a id="Discussion"></a>

## Discussion

Your File Provider extension must define one or more classes that adopt the [NSFileProviderEnumerator](../nsfileproviderenumerator.md) protocol. Instances of these classes must be able to enumerate both the contents of the specified item and any changes to the content.

Override this method to return an instance of your custom [NSFileProviderEnumerator](../nsfileproviderenumerator.md) class for the specified item (either a document or a folder). For more information, see [Content and Change Tracking](../content-and-change-tracking.md).

## See Also

### Working with items and persistent identifiers

- [persistentIdentifierForItem(at:)](persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [urlForItem(withPersistentIdentifier:)](urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [item(for:)](item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.

# enumeratorForContainerItemIdentifier:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

Returns an enumerator for the specified item.

## Declaration

```objectivec
- (id<NSFileProviderEnumerator>) enumeratorForContainerItemIdentifier:(NSFileProviderItemIdentifier) containerItemIdentifier error:(NSError **) error;
```

## Parameters

- `containerItemIdentifier`: The persistent identifier for a document or folder.
- `error`: In Objective-C, a pointer that allows the method to pass errors back to the method’s call site. If an error occurs, your assign an [NSError](../../foundation/nserror.md) object that describes the problem, and return `nil`.

<a id="return-value"></a>

## Return Value

An enumerator for the specified document or folder, or `nil` in Objective-C if an error has occurred.

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

<a id="Discussion"></a>

## Discussion

Your File Provider extension must define one or more classes that adopt the [NSFileProviderEnumerator](../nsfileproviderenumerator.md) protocol. Instances of these classes must be able to enumerate both the contents of the specified item and any changes to the content.

Override this method to return an instance of your custom [NSFileProviderEnumerator](../nsfileproviderenumerator.md) class for the specified item (either a document or a folder). For more information, see [Content and Change Tracking](../content-and-change-tracking.md).

## See Also

### Working with items and persistent identifiers

- [persistentIdentifierForItemAtURL:](persistentidentifierforitem%28at_%29.md): Returns a unique identifier for the given URL.
- [URLForItemWithPersistentIdentifier:](urlforitem%28withpersistentidentifier_%29.md): Returns the URL for a given persistent identifier.
- [itemForIdentifier:error:](item%28for_%29.md): Returns a description of the item associated with the persistent identifier.
- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
