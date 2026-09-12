> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscloudsharingservicedelegate](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate)

# NSCloudSharingServiceDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for responding to the life cycle events of the cloud-sharing service.

## Declaration

```swift
protocol NSCloudSharingServiceDelegate : NSSharingServiceDelegate
```

<a id="overview"></a>

## Overview

CloudKit allows a user to share a hierarchy of records with other iCloud users. In macOS, you use [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) and [NSSharingService](nssharingservice.md) to facilitate sharing. Register an instance of [CKShare](https://developer.apple.com/documentation/cloudkit/ckshare) with an item provider, and then use a sharing service to present it to the user. You must initialize the service with the [cloudSharing](nssharingservice/name/cloudsharing.md) service name. If the share is new, the user can configure the share and invite other iCloud users to participate. Otherwise, they can use the service to manage the share’s participants and their permissions.

This protocol defines methods that the sharing service calls when it saves changes to a share, or deletes it. The service also asks its delegate to provide the preferred sharing options when creating a new share. Set the service’s [delegate](nssharingservice/delegate.md) property to an object that implements this protocol. Use your implementation to provide any appropriate behavior, such as deleting a share you cache locally when the service deletes it from the server.

For more information about CloudKit sharing, see [Shared Records](https://developer.apple.com/documentation/cloudkit/shared-records).

## Topics

### Managing the Cloud-Sharing Service

- [sharingService(\_:didCompleteForItems:error:)](nscloudsharingservicedelegate/sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService(\_:didSave:)](nscloudsharingservicedelegate/sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService(\_:didStopSharing:)](nscloudsharingservicedelegate/sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [options(for:share:)](nscloudsharingservicedelegate/options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
- [NSSharingService.CloudKitOptions](nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSharingServiceDelegate](nssharingservicedelegate.md)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.

# NSCloudSharingServiceDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for responding to the life cycle events of the cloud-sharing service.

## Declaration

```objectivec
@protocol NSCloudSharingServiceDelegate <NSSharingServiceDelegate>
```

<a id="overview"></a>

## Overview

CloudKit allows a user to share a hierarchy of records with other iCloud users. In macOS, you use [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) and [NSSharingService](nssharingservice.md) to facilitate sharing. Register an instance of [CKShare](https://developer.apple.com/documentation/cloudkit/ckshare) with an item provider, and then use a sharing service to present it to the user. You must initialize the service with the [NSSharingServiceNameCloudSharing](nssharingservice/name/cloudsharing.md) service name. If the share is new, the user can configure the share and invite other iCloud users to participate. Otherwise, they can use the service to manage the share’s participants and their permissions.

This protocol defines methods that the sharing service calls when it saves changes to a share, or deletes it. The service also asks its delegate to provide the preferred sharing options when creating a new share. Set the service’s [delegate](nssharingservice/delegate.md) property to an object that implements this protocol. Use your implementation to provide any appropriate behavior, such as deleting a share you cache locally when the service deletes it from the server.

For more information about CloudKit sharing, see [Shared Records](https://developer.apple.com/documentation/cloudkit/shared-records).

## Topics

### Managing the Cloud-Sharing Service

- [sharingService:didCompleteForItems:error:](nscloudsharingservicedelegate/sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService:didSaveShare:](nscloudsharingservicedelegate/sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService:didStopSharing:](nscloudsharingservicedelegate/sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [optionsForSharingService:shareProvider:](nscloudsharingservicedelegate/options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
- [NSCloudKitSharingServiceOptions](nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

## Relationships

### Inherits From

- [NSSharingServiceDelegate](nssharingservicedelegate.md)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.
