> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/share](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/share)

# share (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A reference to the CloudKit share record used by the CloudKit sharing controller.

## Declaration

```swift
var share: CKShare? { get }
```

<a id="Discussion"></a>

## Discussion

This property provides a reference to the [CKShare](../../cloudkit/ckshare.md) record used by [UICloudSharingController](../uicloudsharingcontroller.md). The property is `nil` if the controller doesn’t have a share record. This can happen when the controller is initialized with the [init(preparationHandler:)](init%28preparationhandler_%29.md) method and the preparation handler hasn’t yet been called.

# share (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A reference to the CloudKit share record used by the CloudKit sharing controller.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CKShare * share;
```

<a id="Discussion"></a>

## Discussion

This property provides a reference to the [CKShare](../../cloudkit/ckshare.md) record used by [UICloudSharingController](../uicloudsharingcontroller.md). The property is `nil` if the controller doesn’t have a share record. This can happen when the controller is initialized with the [initWithPreparationHandler:](init%28preparationhandler_%29.md) method and the preparation handler hasn’t yet been called.
