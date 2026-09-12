> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushdelegate/apppushmanager(_:didreceiveincomingcallwithuserinfo:)](https://developer.apple.com/documentation/networkextension/neapppushdelegate/apppushmanager(_:didreceiveincomingcallwithuserinfo:))

# appPushManager(\_:didReceiveIncomingCallWithUserInfo:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A delegate method that the framework invokes when the provider reports an incoming call.

## Declaration

```swift
func appPushManager(_ manager: NEAppPushManager, didReceiveIncomingCallWithUserInfo userInfo: [AnyHashable : Any] = [:])
```

## Parameters

- `manager`: The local push manager that receives the call.
- `userInfo`: A dictionary of custom information that the provider supplied in its call to [reportIncomingCall(userInfo:)](../neapppushprovider/reportincomingcall%28userinfo_%29.md).

<a id="Discussion"></a>

## Discussion

The framwork calls this method on your delegate when the provider calls the [reportIncomingCall(userInfo:)](../neapppushprovider/reportincomingcall%28userinfo_%29.md) method.

# appPushManager:didReceiveIncomingCallWithUserInfo: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A delegate method that the framework invokes when the provider reports an incoming call.

## Declaration

```objectivec
- (void) appPushManager:(NEAppPushManager *) manager didReceiveIncomingCallWithUserInfo:(NSDictionary *) userInfo;
```

## Parameters

- `manager`: The local push manager that receives the call.
- `userInfo`: A dictionary of custom information that the provider supplied in its call to [reportIncomingCallWithUserInfo:](../neapppushprovider/reportincomingcall%28userinfo_%29.md).

<a id="Discussion"></a>

## Discussion

The framwork calls this method on your delegate when the provider calls the [reportIncomingCallWithUserInfo:](../neapppushprovider/reportincomingcall%28userinfo_%29.md) method.
