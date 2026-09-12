> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontrollerdelegate/itemtitle(for:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontrollerdelegate/itemtitle(for:))

# itemTitle(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the title to display on the invitation screen.

## Declaration

```swift
func itemTitle(for csc: UICloudSharingController) -> String?
```

<a id="Discussion"></a>

## Discussion

Implement this method to provide a meaningful title to the [UICloudSharingController](../uicloudsharingcontroller.md) invitation screen.

[itemTitle(for:)](itemtitle%28for_%29.md) is called only when creating a new share. For an existing share, the title is retrieved from the share using the [CKShareTitleKey](../../cloudkit/cksharetitlekey-9yavd.md) key, which is set when a new share is saved.

**Swift**

```swift
func itemTitle(for csc: UICloudSharingController) -> String? {
  return "Untitled"
}
```

**Objective-C**

```objc
- (nullable NSString *)itemTitleForCloudSharingController:(UICloudSharingController *)csc
{
  return @"Untitled";
}
```

## See Also

### Configuring the view controller

- [itemType(for:)](itemtype%28for_%29.md): Asks the delegate for the Uniform Type Identifier (UTI) of the item.
- [itemThumbnailData(for:)](itemthumbnaildata%28for_%29.md): Asks the delegate for the thumbnail image data to display on the invitation.

# itemTitleForCloudSharingController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the delegate for the title to display on the invitation screen.

## Declaration

```objectivec
- (NSString *) itemTitleForCloudSharingController:(UICloudSharingController *) csc;
```

<a id="Discussion"></a>

## Discussion

Implement this method to provide a meaningful title to the [UICloudSharingController](../uicloudsharingcontroller.md) invitation screen.

[itemTitleForCloudSharingController:](itemtitle%28for_%29.md) is called only when creating a new share. For an existing share, the title is retrieved from the share using the [CKShareTitleKey](../../cloudkit/cksharetitlekey-9yavd.md) key, which is set when a new share is saved.

**Swift**

```swift
func itemTitle(for csc: UICloudSharingController) -> String? {
  return "Untitled"
}
```

**Objective-C**

```objc
- (nullable NSString *)itemTitleForCloudSharingController:(UICloudSharingController *)csc
{
  return @"Untitled";
}
```

## See Also

### Configuring the view controller

- [itemTypeForCloudSharingController:](itemtype%28for_%29.md): Asks the delegate for the Uniform Type Identifier (UTI) of the item.
- [itemThumbnailDataForCloudSharingController:](itemthumbnaildata%28for_%29.md): Asks the delegate for the thumbnail image data to display on the invitation.
