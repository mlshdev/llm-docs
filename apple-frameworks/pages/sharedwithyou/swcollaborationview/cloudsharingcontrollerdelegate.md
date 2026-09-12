> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/cloudsharingcontrollerdelegate](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/cloudsharingcontrollerdelegate)

# cloudSharingControllerDelegate (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A reference to an object that conforms to the CloudKit sharing controller delegate protocol.

## Declaration

```swift
weak var cloudSharingControllerDelegate: (any UICloudSharingControllerDelegate)? { get set }
```

## See Also

### Customizing the cloud-sharing behavior

- [cloudSharingServiceDelegate](cloudsharingservicedelegate.md): A reference to an object that conforms to the cloud-sharing service delegate protocol.

# cloudSharingControllerDelegate (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A reference to an object that conforms to the CloudKit sharing controller delegate protocol.

## Declaration

```objectivec
@property (nonatomic, weak) id<UICloudSharingControllerDelegate> cloudSharingControllerDelegate;
```

## See Also

### Customizing the cloud-sharing behavior

- [cloudSharingServiceDelegate](cloudsharingservicedelegate.md): A reference to an object that conforms to the cloud-sharing service delegate protocol.
