> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontrollerdelegate/itemtype(for:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontrollerdelegate/itemtype(for:))

# itemType(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the Uniform Type Identifier (UTI) of the item.

## Declaration

```swift
optional func itemType(for csc: UICloudSharingController) -> String?
```

<a id="Discussion"></a>

## Discussion

[UICloudSharingController](../uicloudsharingcontroller.md) uses the UTI to determine if the shared item is a special type. This allows text presented by the controller to refer to the item using descriptive wording. For example, if the shared item is a presentation and `kUTTypePresentation` is returned, the screens refer to the shared item as a *presentation*. Likewise, if the shared item is a document and `kUTTypeContent` is returned, the screens refer to the item as a *document*. And when `kUTTypeSpreadsheet` is returned, the screens refer to the item as a *spreadsheet*.

For types unique to your app, return `nil` or do not implement this method.

**Swift**

```swift
func itemType(for csc: UICloudSharingController) -> String? {
  return kUTTypePNG as String // Add "import MobileCoreServices" to use UTI constants.
}
```

**Objective-C**

```objc
- (nullable NSString *)itemTypeForCloudSharingController:(UICloudSharingController *)csc
{
  return (NSString*)kUTTypePNG; // Add #import <MobileCoreServices/MobileCoreServices.h> to use UTI constants.
}
```

## See Also

### Configuring the view controller

- [itemTitle(for:)](itemtitle%28for_%29.md): Asks the delegate for the title to display on the invitation screen.
- [itemThumbnailData(for:)](itemthumbnaildata%28for_%29.md): Asks the delegate for the thumbnail image data to display on the invitation.

# itemTypeForCloudSharingController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the delegate for the Uniform Type Identifier (UTI) of the item.

## Declaration

```objectivec
- (NSString *) itemTypeForCloudSharingController:(UICloudSharingController *) csc;
```

<a id="Discussion"></a>

## Discussion

[UICloudSharingController](../uicloudsharingcontroller.md) uses the UTI to determine if the shared item is a special type. This allows text presented by the controller to refer to the item using descriptive wording. For example, if the shared item is a presentation and `kUTTypePresentation` is returned, the screens refer to the shared item as a *presentation*. Likewise, if the shared item is a document and `kUTTypeContent` is returned, the screens refer to the item as a *document*. And when `kUTTypeSpreadsheet` is returned, the screens refer to the item as a *spreadsheet*.

For types unique to your app, return `nil` or do not implement this method.

**Swift**

```swift
func itemType(for csc: UICloudSharingController) -> String? {
  return kUTTypePNG as String // Add "import MobileCoreServices" to use UTI constants.
}
```

**Objective-C**

```objc
- (nullable NSString *)itemTypeForCloudSharingController:(UICloudSharingController *)csc
{
  return (NSString*)kUTTypePNG; // Add #import <MobileCoreServices/MobileCoreServices.h> to use UTI constants.
}
```

## See Also

### Configuring the view controller

- [itemTitleForCloudSharingController:](itemtitle%28for_%29.md): Asks the delegate for the title to display on the invitation screen.
- [itemThumbnailDataForCloudSharingController:](itemthumbnaildata%28for_%29.md): Asks the delegate for the thumbnail image data to display on the invitation.
