> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/transfercurrentcomplicationuserinfo(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsession/transfercurrentcomplicationuserinfo(_:))

# transferCurrentComplicationUserInfo(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+

Sends complication-related data from the iOS app to the WatchKit extension.

## Declaration

```swift
func transferCurrentComplicationUserInfo(_ userInfo: [String : Any] = [:]) -> WCSessionUserInfoTransfer
```

## Parameters

- `userInfo`: A dictionary of property list values that you want to send. You define the contents of the dictionary that your counterpart supports. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A transfer object that you can use to monitor and cancel the operation.

<a id="Discussion"></a>

## Discussion

Call this method when you have new data to send to your complication. Your WatchKit extension can use the data to replace or extend its current timeline entries.

This method can only be called while the session is active (the [activationState](activationstate.md) property is set to [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md)). Calling this method for an inactive or deactivated session is a programmer error.

> **Warning**

>  Always test Watch Connectivity data transfers on paired devices. The Simulator app doesn’t support the [transferCurrentComplicationUserInfo(\_:)](transfercurrentcomplicationuserinfo%28__%29.md) method.

## See Also

### Updating Complication Data

- [remainingComplicationUserInfoTransfers](remainingcomplicationuserinfotransfers.md): The number of remaining times you can send complication data from the iOS app to the WatchKit extension.

# transferCurrentComplicationUserInfo: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sends complication-related data from the iOS app to the WatchKit extension.

## Declaration

```objectivec
- (WCSessionUserInfoTransfer *) transferCurrentComplicationUserInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `userInfo`: A dictionary of property list values that you want to send. You define the contents of the dictionary that your counterpart supports. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A transfer object that you can use to monitor and cancel the operation.

<a id="Discussion"></a>

## Discussion

Call this method when you have new data to send to your complication. Your WatchKit extension can use the data to replace or extend its current timeline entries.

This method can only be called while the session is active (the [activationState](activationstate.md) property is set to [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md)). Calling this method for an inactive or deactivated session is a programmer error.

> **Warning**

>  Always test Watch Connectivity data transfers on paired devices. The Simulator app doesn’t support the [transferCurrentComplicationUserInfo:](transfercurrentcomplicationuserinfo%28__%29.md) method.

## See Also

### Updating Complication Data

- [remainingComplicationUserInfoTransfers](remainingcomplicationuserinfotransfers.md): The number of remaining times you can send complication data from the iOS app to the WatchKit extension.
