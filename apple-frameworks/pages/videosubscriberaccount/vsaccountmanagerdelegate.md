> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanagerdelegate](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanagerdelegate)

# VSAccountManagerDelegate (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The methods you use to respond to authentication view controller requests.

## Declaration

```swift
protocol VSAccountManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the [VSAccountManagerDelegate](vsaccountmanagerdelegate.md) methods to aid in displaying and dismissing authentication view controllers.

If the person isn’t authenticated when your app calls [enqueue(\_:completionHandler:)](vsaccountmanager/enqueue%28__completionhandler_%29.md) with [isInterruptionAllowed](vsaccountmetadatarequest/isinterruptionallowed.md) set to [true](https://developer.apple.com/documentation/swift/true), the system sends an authentication view controller to the delegate in the [accountManager(\_:present:)](vsaccountmanagerdelegate/accountmanager%28__present_%29.md) method for your app to present to them.

## Topics

### Displaying Authentication Views

- [accountManager(\_:present:)](vsaccountmanagerdelegate/accountmanager%28__present_%29.md): Tells the delegate to present an authentication view controller.

### Dismissing Authentication Views

- [accountManager(\_:dismiss:)](vsaccountmanagerdelegate/accountmanager%28__dismiss_%29.md): Tells the delegate to dismiss an authentication view controller.

### Supporting Degradation Scenarios

- [accountManager(\_:shouldAuthenticateAccountProviderWithIdentifier:)](vsaccountmanagerdelegate/accountmanager%28__shouldauthenticateaccountproviderwithidentifier_%29.md): Asks the delegate whether to authenticate the user with the selected provider.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to account manager requests

- [delegate](vsaccountmanager/delegate.md): The delegate of the account manager object.

# VSAccountManagerDelegate (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The methods you use to respond to authentication view controller requests.

## Declaration

```objectivec
@protocol VSAccountManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use the [VSAccountManagerDelegate](vsaccountmanagerdelegate.md) methods to aid in displaying and dismissing authentication view controllers.

If the person isn’t authenticated when your app calls [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md) with [interruptionAllowed](vsaccountmetadatarequest/isinterruptionallowed.md) set to [true](https://developer.apple.com/documentation/swift/true), the system sends an authentication view controller to the delegate in the [accountManager:presentViewController:](vsaccountmanagerdelegate/accountmanager%28__present_%29.md) method for your app to present to them.

## Topics

### Displaying Authentication Views

- [accountManager:presentViewController:](vsaccountmanagerdelegate/accountmanager%28__present_%29.md): Tells the delegate to present an authentication view controller.

### Dismissing Authentication Views

- [accountManager:dismissViewController:](vsaccountmanagerdelegate/accountmanager%28__dismiss_%29.md): Tells the delegate to dismiss an authentication view controller.

### Supporting Degradation Scenarios

- [accountManager:shouldAuthenticateAccountProviderWithIdentifier:](vsaccountmanagerdelegate/accountmanager%28__shouldauthenticateaccountproviderwithidentifier_%29.md): Asks the delegate whether to authenticate the user with the selected provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to account manager requests

- [delegate](vsaccountmanager/delegate.md): The delegate of the account manager object.
