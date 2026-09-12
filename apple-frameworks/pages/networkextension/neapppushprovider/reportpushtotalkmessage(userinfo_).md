> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/reportpushtotalkmessage(userinfo:)](https://developer.apple.com/documentation/networkextension/neapppushprovider/reportpushtotalkmessage(userinfo:))

# reportPushToTalkMessage(userInfo:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Informs the manager about a push-to-talk message on the connection.

## Declaration

```swift
func reportPushToTalkMessage(userInfo: [AnyHashable : Any] = [:])
```

## Parameters

- `userInfo`: A dictionary of custom information associated with the push-to -talk message, such as the active remote participant. The containing app’s [PTChannelManagerDelegate](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate) receives this dictionary if the user has joined a push-to-talk channel.

## See Also

### Receiving local events

- [reportIncomingCall(userInfo:)](reportincomingcall%28userinfo_%29.md): Informs the manager about an incoming call.

# reportPushToTalkMessageWithUserInfo: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · visionOS 1.0+

Informs the manager about a push-to-talk message on the connection.

## Declaration

```objectivec
- (void) reportPushToTalkMessageWithUserInfo:(NSDictionary *) userInfo;
```

## Parameters

- `userInfo`: A dictionary of custom information associated with the push-to -talk message, such as the active remote participant. The containing app’s [PTChannelManagerDelegate](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate) receives this dictionary if the user has joined a push-to-talk channel.

## See Also

### Receiving local events

- [reportIncomingCallWithUserInfo:](reportincomingcall%28userinfo_%29.md): Informs the manager about an incoming call.
