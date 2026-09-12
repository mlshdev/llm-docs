> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupviewcontroller/delegate](https://developer.apple.com/documentation/storekit/skcloudservicesetupviewcontroller/delegate)

# delegate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

The cloud service view controller’s delegate.

> Use the musicSubscriptionOffer(isPresented:options:onLoadCompletion:) SwiftUI View Modifier from MusicKit.

## Declaration

```swift
weak var delegate: (any SKCloudServiceSetupViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You can identify a delegate to get informed when the cloud service setup view controller is dismissed.

## See Also

### Setting a delegate

- [SKCloudServiceSetupViewControllerDelegate](../skcloudservicesetupviewcontrollerdelegate.md): Deprecated. A protocol that defines the methods a cloud service setup view controller can use to get the status of the view, including when it is dismissed.

# delegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

The cloud service view controller’s delegate.

> Use the musicSubscriptionOffer(isPresented:options:onLoadCompletion:) SwiftUI View Modifier from MusicKit.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SKCloudServiceSetupViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You can identify a delegate to get informed when the cloud service setup view controller is dismissed.

## See Also

### Setting a delegate

- [SKCloudServiceSetupViewControllerDelegate](../skcloudservicesetupviewcontrollerdelegate.md): Deprecated. A protocol that defines the methods a cloud service setup view controller can use to get the status of the view, including when it is dismissed.
