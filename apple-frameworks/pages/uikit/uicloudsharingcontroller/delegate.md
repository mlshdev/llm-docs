> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/delegate](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A reference to an object that conforms to the CloudKit sharing controller delegate protocol.

## Declaration

```swift
weak var delegate: (any UICloudSharingControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The [UICloudSharingController](../uicloudsharingcontroller.md) instance can interact with your app by way of a delegate object (an object that conforms to the [UICloudSharingControllerDelegate](../uicloudsharingcontrollerdelegate.md) protocol). If you provide a delegate object to the controller, the controller can notify your app of status changes to the [CKShare](../../cloudkit/ckshare.md) record that happen while the user interacts with the controller’s user interface. The controller can also ask the delegate object for app-specific settings, such as a title, for display in the controller’s user interface.

Although providing a delegate object is not required, doing so ensures that, at a minimum, a meaningful title is displayed in the controller’s user interface.

## See Also

### Customizing the cloud sharing controller behavior

- [UICloudSharingControllerDelegate](../uicloudsharingcontrollerdelegate.md): The protocol you implement to provide additional information to, and receive notifications from, the CloudKit sharing controller.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A reference to an object that conforms to the CloudKit sharing controller delegate protocol.

## Declaration

```objectivec
@property (nonatomic, weak) id<UICloudSharingControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The [UICloudSharingController](../uicloudsharingcontroller.md) instance can interact with your app by way of a delegate object (an object that conforms to the [UICloudSharingControllerDelegate](../uicloudsharingcontrollerdelegate.md) protocol). If you provide a delegate object to the controller, the controller can notify your app of status changes to the [CKShare](../../cloudkit/ckshare.md) record that happen while the user interacts with the controller’s user interface. The controller can also ask the delegate object for app-specific settings, such as a title, for display in the controller’s user interface.

Although providing a delegate object is not required, doing so ensures that, at a minimum, a meaningful title is displayed in the controller’s user interface.

## See Also

### Customizing the cloud sharing controller behavior

- [UICloudSharingControllerDelegate](../uicloudsharingcontrollerdelegate.md): The protocol you implement to provide additional information to, and receive notifications from, the CloudKit sharing controller.
