> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectioneditoperation](https://developer.apple.com/documentation/photos/phcollectioneditoperation)

# PHCollectionEditOperation (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Values identifying possible actions that a collection can support, used by the [canPerform(\_:)](phcollection/canperform%28__%29.md) method.

## Declaration

```swift
enum PHCollectionEditOperation
```

## Topics

### Constants

- [PHCollectionEditOperation.deleteContent](phcollectioneditoperation/deletecontent.md): The collection supports deleting the items it contains.
- [PHCollectionEditOperation.removeContent](phcollectioneditoperation/removecontent.md): The collection supports removing the items it contains.
- [PHCollectionEditOperation.addContent](phcollectioneditoperation/addcontent.md): The collection supports adding items that already exist elsewhere in the photo library.
- [PHCollectionEditOperation.createContent](phcollectioneditoperation/createcontent.md): The collection supports creating new items.
- [PHCollectionEditOperation.rearrangeContent](phcollectioneditoperation/rearrangecontent.md): The collection supports reordering the arrangement of items it contains.
- [PHCollectionEditOperation.delete](phcollectioneditoperation/delete.md): The collection itself can be deleted.
- [PHCollectionEditOperation.rename](phcollectioneditoperation/rename.md): The collection itself can be renamed.

### Initializers

- [init(rawValue:)](phcollectioneditoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Collection Capabilities

- [canContainAssets](phcollection/cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canContainCollections](phcollection/cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [canPerform(\_:)](phcollection/canperform%28__%29.md): Returns whether the collection supports the specified editing operation.

# PHCollectionEditOperation (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Values identifying possible actions that a collection can support, used by the [canPerformEditOperation:](phcollection/canperform%28__%29.md) method.

## Declaration

```objectivec
enum PHCollectionEditOperation : NSInteger;
```

## Topics

### Constants

- [PHCollectionEditOperationDeleteContent](phcollectioneditoperation/deletecontent.md): The collection supports deleting the items it contains.
- [PHCollectionEditOperationRemoveContent](phcollectioneditoperation/removecontent.md): The collection supports removing the items it contains.
- [PHCollectionEditOperationAddContent](phcollectioneditoperation/addcontent.md): The collection supports adding items that already exist elsewhere in the photo library.
- [PHCollectionEditOperationCreateContent](phcollectioneditoperation/createcontent.md): The collection supports creating new items.
- [PHCollectionEditOperationRearrangeContent](phcollectioneditoperation/rearrangecontent.md): The collection supports reordering the arrangement of items it contains.
- [PHCollectionEditOperationDelete](phcollectioneditoperation/delete.md): The collection itself can be deleted.
- [PHCollectionEditOperationRename](phcollectioneditoperation/rename.md): The collection itself can be renamed.

## See Also

### Determining Collection Capabilities

- [canContainAssets](phcollection/cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canContainCollections](phcollection/cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [canPerformEditOperation:](phcollection/canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
