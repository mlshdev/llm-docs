> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscloudsharingservicedelegate/sharingservice(_:didstopsharing:)](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate/sharingservice(_:didstopsharing:))

# sharingService(\_:didStopSharing:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Tells the delegate when the user stops sharing the CloudKit share.

## Declaration

```swift
optional func sharingService(_ sharingService: NSSharingService, didStopSharing share: CKShare)
```

## Parameters

- `sharingService`: The cloud-sharing service that invokes this delegate method.
- `share`: The share the user is no longer sharing.

<a id="Discussion"></a>

## Discussion

The cloud-sharing service invokes this method after it deletes the share on the server. The `share` parameter is the most recent state of the share before the service deletes it.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService(\_:didCompleteForItems:error:)](sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService(\_:didSave:)](sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [options(for:share:)](options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
- [NSSharingService.CloudKitOptions](../nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

# sharingService:didStopSharing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate when the user stops sharing the CloudKit share.

## Declaration

```objectivec
- (void) sharingService:(NSSharingService *) sharingService didStopSharing:(CKShare *) share;
```

## Parameters

- `sharingService`: The cloud-sharing service that invokes this delegate method.
- `share`: The share the user is no longer sharing.

<a id="Discussion"></a>

## Discussion

The cloud-sharing service invokes this method after it deletes the share on the server. The `share` parameter is the most recent state of the share before the service deletes it.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService:didCompleteForItems:error:](sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService:didSaveShare:](sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [optionsForSharingService:shareProvider:](options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
- [NSCloudKitSharingServiceOptions](../nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.
