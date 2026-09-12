> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontrollerdelegate](https://developer.apple.com/documentation/uikit/uicloudsharingcontrollerdelegate)

# UICloudSharingControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The protocol you implement to provide additional information to, and receive notifications from, the CloudKit sharing controller.

## Declaration

```swift
@MainActor protocol UICloudSharingControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement an object that conforms to the [UICloudSharingControllerDelegate](uicloudsharingcontrollerdelegate.md) protocol when you want to:

- Configure a [UICloudSharingController](uicloudsharingcontroller.md) instance.
- Receive notifications from a [UICloudSharingController](uicloudsharingcontroller.md) instance as it attempts to save or remove the [CKShare](../cloudkit/ckshare.md) record based on user interactions on the Invitation and People screens.

## Topics

### Configuring the view controller

- [itemTitle(for:)](uicloudsharingcontrollerdelegate/itemtitle%28for_%29.md): Asks the delegate for the title to display on the invitation screen.
- [itemType(for:)](uicloudsharingcontrollerdelegate/itemtype%28for_%29.md): Asks the delegate for the Uniform Type Identifier (UTI) of the item.
- [itemThumbnailData(for:)](uicloudsharingcontrollerdelegate/itemthumbnaildata%28for_%29.md): Asks the delegate for the thumbnail image data to display on the invitation.

### Processing shared items

- [cloudSharingController(\_:failedToSaveShareWithError:)](uicloudsharingcontrollerdelegate/cloudsharingcontroller%28__failedtosavesharewitherror_%29.md): Tells the delegate that the CloudKit sharing controller failed to save the share record.
- [cloudSharingControllerDidStopSharing(\_:)](uicloudsharingcontrollerdelegate/cloudsharingcontrollerdidstopsharing%28__%29.md): Tells the delegate that the user has stopped sharing the record.
- [cloudSharingControllerDidSaveShare(\_:)](uicloudsharingcontrollerdelegate/cloudsharingcontrollerdidsaveshare%28__%29.md): Tells the delegate that the CloudKit sharing controller saved the share record.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the cloud sharing controller behavior

- [delegate](uicloudsharingcontroller/delegate.md): A reference to an object that conforms to the CloudKit sharing controller delegate protocol.

# UICloudSharingControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The protocol you implement to provide additional information to, and receive notifications from, the CloudKit sharing controller.

## Declaration

```objectivec
@protocol UICloudSharingControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Implement an object that conforms to the [UICloudSharingControllerDelegate](uicloudsharingcontrollerdelegate.md) protocol when you want to:

- Configure a [UICloudSharingController](uicloudsharingcontroller.md) instance.
- Receive notifications from a [UICloudSharingController](uicloudsharingcontroller.md) instance as it attempts to save or remove the [CKShare](../cloudkit/ckshare.md) record based on user interactions on the Invitation and People screens.

## Topics

### Configuring the view controller

- [itemTitleForCloudSharingController:](uicloudsharingcontrollerdelegate/itemtitle%28for_%29.md): Asks the delegate for the title to display on the invitation screen.
- [itemTypeForCloudSharingController:](uicloudsharingcontrollerdelegate/itemtype%28for_%29.md): Asks the delegate for the Uniform Type Identifier (UTI) of the item.
- [itemThumbnailDataForCloudSharingController:](uicloudsharingcontrollerdelegate/itemthumbnaildata%28for_%29.md): Asks the delegate for the thumbnail image data to display on the invitation.

### Processing shared items

- [cloudSharingController:failedToSaveShareWithError:](uicloudsharingcontrollerdelegate/cloudsharingcontroller%28__failedtosavesharewitherror_%29.md): Tells the delegate that the CloudKit sharing controller failed to save the share record.
- [cloudSharingControllerDidStopSharing:](uicloudsharingcontrollerdelegate/cloudsharingcontrollerdidstopsharing%28__%29.md): Tells the delegate that the user has stopped sharing the record.
- [cloudSharingControllerDidSaveShare:](uicloudsharingcontrollerdelegate/cloudsharingcontrollerdidsaveshare%28__%29.md): Tells the delegate that the CloudKit sharing controller saved the share record.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the cloud sharing controller behavior

- [delegate](uicloudsharingcontroller/delegate.md): A reference to an object that conforms to the CloudKit sharing controller delegate protocol.
