> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skcloudservicesetupviewcontrollerdelegate

# SKCloudServiceSetupViewControllerDelegate (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

A protocol that defines the methods a cloud service setup view controller can use to get the status of the view, including when it is dismissed.

> Use the musicSubscriptionOffer(isPresented:options:onLoadCompletion:) SwiftUI View Modifier from MusicKit.

## Declaration

```swift
protocol SKCloudServiceSetupViewControllerDelegate : NSObjectProtocol
```

## Topics

### Receiving Notification of Dismissal

- [cloudServiceSetupViewControllerDidDismiss(\_:)](skcloudservicesetupviewcontrollerdelegate/cloudservicesetupviewcontrollerdiddismiss%28__%29.md): Deprecated. Tells the delegate that the cloud service setup view controller was dismissed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a delegate

- [delegate](skcloudservicesetupviewcontroller/delegate.md): Deprecated. The cloud service view controller’s delegate.

# SKCloudServiceSetupViewControllerDelegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

A protocol that defines the methods a cloud service setup view controller can use to get the status of the view, including when it is dismissed.

> Use the musicSubscriptionOffer(isPresented:options:onLoadCompletion:) SwiftUI View Modifier from MusicKit.

## Declaration

```objectivec
@protocol SKCloudServiceSetupViewControllerDelegate <NSObject>
```

## Topics

### Receiving Notification of Dismissal

- [cloudServiceSetupViewControllerDidDismiss:](skcloudservicesetupviewcontrollerdelegate/cloudservicesetupviewcontrollerdiddismiss%28__%29.md): Deprecated. Tells the delegate that the cloud service setup view controller was dismissed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting a delegate

- [delegate](skcloudservicesetupviewcontroller/delegate.md): Deprecated. The cloud service view controller’s delegate.
