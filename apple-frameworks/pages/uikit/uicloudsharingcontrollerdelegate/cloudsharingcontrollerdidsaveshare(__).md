> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontrollerdelegate/cloudsharingcontrollerdidsaveshare(_:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontrollerdelegate/cloudsharingcontrollerdidsaveshare(_:))

# cloudSharingControllerDidSaveShare(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the CloudKit sharing controller saved the share record.

## Declaration

```swift
optional func cloudSharingControllerDidSaveShare(_ csc: UICloudSharingController)
```

<a id="Discussion"></a>

## Discussion

Implement this method to receive a notification from the [UICloudSharingController](../uicloudsharingcontroller.md) instance after it saves changes to the [CKShare](../../cloudkit/ckshare.md) record.

## See Also

### Processing shared items

- [cloudSharingController(\_:failedToSaveShareWithError:)](cloudsharingcontroller%28__failedtosavesharewitherror_%29.md): Tells the delegate that the CloudKit sharing controller failed to save the share record.
- [cloudSharingControllerDidStopSharing(\_:)](cloudsharingcontrollerdidstopsharing%28__%29.md): Tells the delegate that the user has stopped sharing the record.

# cloudSharingControllerDidSaveShare: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the CloudKit sharing controller saved the share record.

## Declaration

```objectivec
- (void) cloudSharingControllerDidSaveShare:(UICloudSharingController *) csc;
```

<a id="Discussion"></a>

## Discussion

Implement this method to receive a notification from the [UICloudSharingController](../uicloudsharingcontroller.md) instance after it saves changes to the [CKShare](../../cloudkit/ckshare.md) record.

## See Also

### Processing shared items

- [cloudSharingController:failedToSaveShareWithError:](cloudsharingcontroller%28__failedtosavesharewitherror_%29.md): Tells the delegate that the CloudKit sharing controller failed to save the share record.
- [cloudSharingControllerDidStopSharing:](cloudsharingcontrollerdidstopsharing%28__%29.md): Tells the delegate that the user has stopped sharing the record.
