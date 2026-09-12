> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontrollerdelegate/itemthumbnaildata(for:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontrollerdelegate/itemthumbnaildata(for:))

# itemThumbnailData(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the thumbnail image data to display on the invitation.

## Declaration

```swift
optional func itemThumbnailData(for csc: UICloudSharingController) -> Data?
```

<a id="Discussion"></a>

## Discussion

Implement this method to return image data representing the shared recording. Returning `nil` tells the [UICloudSharingController](../uicloudsharingcontroller.md) instance to display the generic image. Not implementing this method is the same as returning `nil`.

[itemThumbnailData(for:)](itemthumbnaildata%28for_%29.md) is called only when creating a new share. For an existing share, the thumbnail image is retrieved from the share using the [CKShareThumbnailImageDataKey](../../cloudkit/cksharethumbnailimagedatakey-1rxdx.md) key.

The following code shows an example of retrieving the image data from a data set stored in an asset catalog found in the main bundle.

```swift
- (nullable NSData *)itemThumbnailDataForCloudSharingController:(UICloudSharingController *)csc
{  
  NSDataAsset *icon = [[NSDataAsset alloc] initWithName:@"thumbnail"];
  return [icon data];
}
```

## See Also

### Configuring the view controller

- [itemTitle(for:)](itemtitle%28for_%29.md): Asks the delegate for the title to display on the invitation screen.
- [itemType(for:)](itemtype%28for_%29.md): Asks the delegate for the Uniform Type Identifier (UTI) of the item.

# itemThumbnailDataForCloudSharingController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the delegate for the thumbnail image data to display on the invitation.

## Declaration

```objectivec
- (NSData *) itemThumbnailDataForCloudSharingController:(UICloudSharingController *) csc;
```

<a id="Discussion"></a>

## Discussion

Implement this method to return image data representing the shared recording. Returning `nil` tells the [UICloudSharingController](../uicloudsharingcontroller.md) instance to display the generic image. Not implementing this method is the same as returning `nil`.

[itemThumbnailDataForCloudSharingController:](itemthumbnaildata%28for_%29.md) is called only when creating a new share. For an existing share, the thumbnail image is retrieved from the share using the [CKShareThumbnailImageDataKey](../../cloudkit/cksharethumbnailimagedatakey-1rxdx.md) key.

The following code shows an example of retrieving the image data from a data set stored in an asset catalog found in the main bundle.

```swift
- (nullable NSData *)itemThumbnailDataForCloudSharingController:(UICloudSharingController *)csc
{  
  NSDataAsset *icon = [[NSDataAsset alloc] initWithName:@"thumbnail"];
  return [icon data];
}
```

## See Also

### Configuring the view controller

- [itemTitleForCloudSharingController:](itemtitle%28for_%29.md): Asks the delegate for the title to display on the invitation screen.
- [itemTypeForCloudSharingController:](itemtype%28for_%29.md): Asks the delegate for the Uniform Type Identifier (UTI) of the item.
