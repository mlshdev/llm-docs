> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscloudsharingservicedelegate/sharingservice(_:didcompleteforitems:error:)](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate/sharingservice(_:didcompleteforitems:error:))

# sharingService(\_:didCompleteForItems:error:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Tells the delegate when the cloud-sharing service completes.

## Declaration

```swift
optional func sharingService(_ sharingService: NSSharingService, didCompleteForItems items: [Any], error: (any Error)?)
```

## Parameters

- `sharingService`: The cloud-sharing service that invokes this delegate method.
- `items`: The items the service is sharing.
- `error`: If the service can’t share the items, an error that provides information about the failure; otherwise, [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

<a id="Discussion"></a>

## Discussion

The cloud-sharing service invokes this method when the user finishes sharing or dismisses the service’s view controller. If you implement this method, the service calls it instead of the [sharingService(\_:didFailToShareItems:error:)](../nssharingservicedelegate/sharingservice%28__didfailtoshareitems_error_%29.md) and [sharingService(\_:didShareItems:)](../nssharingservicedelegate/sharingservice%28__didshareitems_%29.md) methods.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService(\_:didSave:)](sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService(\_:didStopSharing:)](sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [options(for:share:)](options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
- [NSSharingService.CloudKitOptions](../nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

# sharingService:didCompleteForItems:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate when the cloud-sharing service completes.

## Declaration

```objectivec
- (void) sharingService:(NSSharingService *) sharingService didCompleteForItems:(NSArray *) items error:(NSError *) error;
```

## Parameters

- `sharingService`: The cloud-sharing service that invokes this delegate method.
- `items`: The items the service is sharing.
- `error`: If the service can’t share the items, an error that provides information about the failure; otherwise, [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

<a id="Discussion"></a>

## Discussion

The cloud-sharing service invokes this method when the user finishes sharing or dismisses the service’s view controller. If you implement this method, the service calls it instead of the [sharingService:didFailToShareItems:error:](../nssharingservicedelegate/sharingservice%28__didfailtoshareitems_error_%29.md) and [sharingService:didShareItems:](../nssharingservicedelegate/sharingservice%28__didshareitems_%29.md) methods.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService:didSaveShare:](sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService:didStopSharing:](sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [optionsForSharingService:shareProvider:](options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
- [NSCloudKitSharingServiceOptions](../nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.
