> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/transferuserinfo(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/transferuserinfo(_:))

# transferUserInfo(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sends the specified data dictionary to the counterpart.

## Declaration

```swift
func transferUserInfo(_ userInfo: [String : Any] = [:]) -> WCSessionUserInfoTransfer
```

## Parameters

- `userInfo`: A dictionary of property list values that you want to send. You define the contents of the dictionary that your counterpart supports. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A transfer object that you can use to monitor and cancel the operation.

<a id="Discussion"></a>

## Discussion

Call this method when you want to send a dictionary of data to the counterpart and ensure that it’s delivered. Dictionaries sent using this method are queued on the other device and delivered in the order in which they were sent. After a transfer begins, the transfer operation continues even if the app is suspended.

This method can only be called while the session is active (the [activationState](activationstate.md) property is set to [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md)). Calling this method for an inactive or deactivated session is a programmer error.

> **Warning**

>  Always test Watch Connectivity data transfers on paired devices. The Simulator app doesn’t support the  [transferUserInfo(\_:)](transferuserinfo%28__%29.md) method.

## See Also

### Transferring Data in the Background

- [outstandingUserInfoTransfers](outstandinguserinfotransfers.md): An array of in-progress data transfers.

# transferUserInfo: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Sends the specified data dictionary to the counterpart.

## Declaration

```objectivec
- (WCSessionUserInfoTransfer *) transferUserInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `userInfo`: A dictionary of property list values that you want to send. You define the contents of the dictionary that your counterpart supports. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A transfer object that you can use to monitor and cancel the operation.

<a id="Discussion"></a>

## Discussion

Call this method when you want to send a dictionary of data to the counterpart and ensure that it’s delivered. Dictionaries sent using this method are queued on the other device and delivered in the order in which they were sent. After a transfer begins, the transfer operation continues even if the app is suspended.

This method can only be called while the session is active (the [activationState](activationstate.md) property is set to [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md)). Calling this method for an inactive or deactivated session is a programmer error.

> **Warning**

>  Always test Watch Connectivity data transfers on paired devices. The Simulator app doesn’t support the  [transferUserInfo:](transferuserinfo%28__%29.md) method.

## See Also

### Transferring Data in the Background

- [outstandingUserInfoTransfers](outstandinguserinfotransfers.md): An array of in-progress data transfers.
