> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/cloudkitoptions](https://developer.apple.com/documentation/appkit/nssharingservice/cloudkitoptions)

# NSSharingService.CloudKitOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

Constants that describe how a participant can configure a CloudKit share.

## Declaration

```swift
struct CloudKitOptions
```

## Topics

### Creating CloudKit Options

- [init(rawValue:)](cloudkitoptions/init%28rawvalue_%29.md): Creates a set of CloudKit options using the specified raw value.

### CloudKit Options

- [allowPrivate](cloudkitoptions/allowprivate.md): An option that allows the participant to privately distribute the share to other iCloud users.
- [allowPublic](cloudkitoptions/allowpublic.md): An option that allows the participant to publicly distribute the share to other iCloud users.
- [allowReadOnly](cloudkitoptions/allowreadonly.md): An option that allows the participant to grant other participants read-only permissions.
- [allowReadWrite](cloudkitoptions/allowreadwrite.md): An option that allows the participant to grant other participants read-write permissions.
- [standard](cloudkitoptions/standard.md): An option that allows the participant to configure the share with a standard set of options.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the Cloud-Sharing Service

- [sharingService(\_:didCompleteForItems:error:)](../nscloudsharingservicedelegate/sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService(\_:didSave:)](../nscloudsharingservicedelegate/sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService(\_:didStopSharing:)](../nscloudsharingservicedelegate/sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [options(for:share:)](../nscloudsharingservicedelegate/options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.

# NSCloudKitSharingServiceOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Constants that describe how a participant can configure a CloudKit share.

## Declaration

```objectivec
enum NSCloudKitSharingServiceOptions : NSUInteger;
```

## Topics

### CloudKit Options

- [NSCloudKitSharingServiceAllowPrivate](cloudkitoptions/allowprivate.md): An option that allows the participant to privately distribute the share to other iCloud users.
- [NSCloudKitSharingServiceAllowPublic](cloudkitoptions/allowpublic.md): An option that allows the participant to publicly distribute the share to other iCloud users.
- [NSCloudKitSharingServiceAllowReadOnly](cloudkitoptions/allowreadonly.md): An option that allows the participant to grant other participants read-only permissions.
- [NSCloudKitSharingServiceAllowReadWrite](cloudkitoptions/allowreadwrite.md): An option that allows the participant to grant other participants read-write permissions.
- [NSCloudKitSharingServiceStandard](cloudkitoptions/standard.md): An option that allows the participant to configure the share with a standard set of options.

## See Also

### Managing the Cloud-Sharing Service

- [sharingService:didCompleteForItems:error:](../nscloudsharingservicedelegate/sharingservice%28__didcompleteforitems_error_%29.md): Tells the delegate when the cloud-sharing service completes.
- [sharingService:didSaveShare:](../nscloudsharingservicedelegate/sharingservice%28__didsave_%29.md): Tells the delegate when the cloud-sharing service saves the CloudKit share.
- [sharingService:didStopSharing:](../nscloudsharingservicedelegate/sharingservice%28__didstopsharing_%29.md): Tells the delegate when the user stops sharing the CloudKit share.
- [optionsForSharingService:shareProvider:](../nscloudsharingservicedelegate/options%28for_share_%29.md): Asks the delegate for the participant options for the cloud-sharing service.
