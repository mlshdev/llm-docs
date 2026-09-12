> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/cloudsharingservicedelegate](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/cloudsharingservicedelegate)

# cloudSharingServiceDelegate (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A reference to an object that conforms to the cloud-sharing service delegate protocol.

## Declaration

```swift
weak var cloudSharingServiceDelegate: (any NSCloudSharingServiceDelegate)? { get set }
```

## See Also

### Customizing the cloud-sharing behavior

- [cloudSharingControllerDelegate](cloudsharingcontrollerdelegate.md): A reference to an object that conforms to the CloudKit sharing controller delegate protocol.

# cloudSharingServiceDelegate (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A reference to an object that conforms to the cloud-sharing service delegate protocol.

## Declaration

```objectivec
@property (nonatomic, weak) id<NSCloudSharingServiceDelegate> cloudSharingServiceDelegate;
```

## See Also

### Customizing the cloud-sharing behavior

- [cloudSharingControllerDelegate](cloudsharingcontrollerdelegate.md): A reference to an object that conforms to the CloudKit sharing controller delegate protocol.
