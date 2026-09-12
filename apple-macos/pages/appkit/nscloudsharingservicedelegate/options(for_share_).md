> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscloudsharingservicedelegate/options(for:share:)](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate/options(for:share:))

# options(for:share:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Asks the delegate for the participant options for the cloud-sharing service.

## Declaration

```swift
optional func options(for cloudKitSharingService: NSSharingService, share provider: NSItemProvider) -> NSSharingService.CloudKitOptions
```

## Parameters

- `cloudKitSharingService`: The cloud-sharing service that invokes this delegate method.
- `provider`: The item provider that supplies the share to the service.

<a id="Discussion"></a>

## Discussion

Use this method to specify whether the share is public or private. The options you return also determine any permissions that the share’s participants have. If you don’t implement this method, the cloud-sharing service uses the [standard](../nssharingservice/cloudkitoptions/standard.md) options.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService(\_:didCompleteForItems:error:)](sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService(\_:didSave:)](sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService(\_:didStopSharing:)](sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [NSSharingService.CloudKitOptions](../nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

# optionsForSharingService:shareProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the participant options for the cloud-sharing service.

## Declaration

```objectivec
- (NSCloudKitSharingServiceOptions) optionsForSharingService:(NSSharingService *) cloudKitSharingService shareProvider:(NSItemProvider *) provider;
```

## Parameters

- `cloudKitSharingService`: The cloud-sharing service that invokes this delegate method.
- `provider`: The item provider that supplies the share to the service.

<a id="Discussion"></a>

## Discussion

Use this method to specify whether the share is public or private. The options you return also determine any permissions that the share’s participants have. If you don’t implement this method, the cloud-sharing service uses the [NSCloudKitSharingServiceStandard](../nssharingservice/cloudkitoptions/standard.md) options.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService:didCompleteForItems:error:](sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService:didSaveShare:](sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService:didStopSharing:](sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [NSCloudKitSharingServiceOptions](../nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.
