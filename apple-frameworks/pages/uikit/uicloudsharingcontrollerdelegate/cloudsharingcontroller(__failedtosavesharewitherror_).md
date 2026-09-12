> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontrollerdelegate/cloudsharingcontroller(_:failedtosavesharewitherror:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontrollerdelegate/cloudsharingcontroller(_:failedtosavesharewitherror:))

# cloudSharingController(\_:failedToSaveShareWithError:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the CloudKit sharing controller failed to save the share record.

## Declaration

```swift
func cloudSharingController(_ csc: UICloudSharingController, failedToSaveShareWithError error: any Error)
```

<a id="Discussion"></a>

## Discussion

Implement this method to receive a notification from the [UICloudSharingController](../uicloudsharingcontroller.md) instance after it fails to save changes to the [CKShare](../../cloudkit/ckshare.md) record.

## See Also

### Processing shared items

- [cloudSharingControllerDidStopSharing(\_:)](cloudsharingcontrollerdidstopsharing%28__%29.md): Tells the delegate that the user has stopped sharing the record.
- [cloudSharingControllerDidSaveShare(\_:)](cloudsharingcontrollerdidsaveshare%28__%29.md): Tells the delegate that the CloudKit sharing controller saved the share record.

# cloudSharingController:failedToSaveShareWithError: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the CloudKit sharing controller failed to save the share record.

## Declaration

```objectivec
- (void) cloudSharingController:(UICloudSharingController *) csc failedToSaveShareWithError:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

Implement this method to receive a notification from the [UICloudSharingController](../uicloudsharingcontroller.md) instance after it fails to save changes to the [CKShare](../../cloudkit/ckshare.md) record.

## See Also

### Processing shared items

- [cloudSharingControllerDidStopSharing:](cloudsharingcontrollerdidstopsharing%28__%29.md): Tells the delegate that the user has stopped sharing the record.
- [cloudSharingControllerDidSaveShare:](cloudsharingcontrollerdidsaveshare%28__%29.md): Tells the delegate that the CloudKit sharing controller saved the share record.
