> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest/creationrequestforassetcollection(withtitle:)](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/creationrequestforassetcollection(withtitle:))

# creationRequestForAssetCollection(withTitle:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new asset collection to the Photos library.

## Declaration

```swift
class func creationRequestForAssetCollection(withTitle title: String) -> Self
```

## Parameters

- `title`: A name for the new asset collection.

<a id="return-value"></a>

## Return Value

An asset collection creation request.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset collection. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To add assets to the newly created asset collection or change its title, use the methods listed in Modifying Asset Collections. To reference the newly created asset collection later in the same change block or after the change block completes, use the [placeholderForCreatedAssetCollection](placeholderforcreatedassetcollection.md) property to retrieve a placeholder object.

## See Also

### Adding New Asset Collections

- [placeholderForCreatedAssetCollection](placeholderforcreatedassetcollection.md): A placeholder object for the asset collection that the change request creates.

# creationRequestForAssetCollectionWithTitle: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new asset collection to the Photos library.

## Declaration

```objectivec
+ (instancetype) creationRequestForAssetCollectionWithTitle:(NSString *) title;
```

## Parameters

- `title`: A name for the new asset collection.

<a id="return-value"></a>

## Return Value

An asset collection creation request.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset collection. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To add assets to the newly created asset collection or change its title, use the methods listed in Modifying Asset Collections. To reference the newly created asset collection later in the same change block or after the change block completes, use the [placeholderForCreatedAssetCollection](placeholderforcreatedassetcollection.md) property to retrieve a placeholder object.

## See Also

### Adding New Asset Collections

- [placeholderForCreatedAssetCollection](placeholderforcreatedassetcollection.md): A placeholder object for the asset collection that the change request creates.
