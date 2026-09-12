> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/reportincomingcall(userinfo:)](https://developer.apple.com/documentation/networkextension/neapppushprovider/reportincomingcall(userinfo:))

# reportIncomingCall(userInfo:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Informs the manager about an incoming call.

## Declaration

```swift
func reportIncomingCall(userInfo: [AnyHashable : Any] = [:])
```

## Parameters

- `userInfo`: A dictionary of custom information associated with the incoming call. The dictionary’s values must only use data types supported by [PropertyListSerialization](../../foundation/propertylistserialization.md); you can’t use custom types for the values.

<a id="Discussion"></a>

## Discussion

Call this method when your provider determines it’s receiving an incoming call on the connection. The manager’s delegate receives this dictionary as-is.

## See Also

### Receiving local events

- [reportPushToTalkMessage(userInfo:)](reportpushtotalkmessage%28userinfo_%29.md): Informs the manager about a push-to-talk message on the connection.

# reportIncomingCallWithUserInfo: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Informs the manager about an incoming call.

## Declaration

```objectivec
- (void) reportIncomingCallWithUserInfo:(NSDictionary *) userInfo;
```

## Parameters

- `userInfo`: A dictionary of custom information associated with the incoming call. The dictionary’s values must only use data types supported by [NSPropertyListSerialization](../../foundation/propertylistserialization.md); you can’t use custom types for the values.

<a id="Discussion"></a>

## Discussion

Call this method when your provider determines it’s receiving an incoming call on the connection. The manager’s delegate receives this dictionary as-is.

## See Also

### Receiving local events

- [reportPushToTalkMessageWithUserInfo:](reportpushtotalkmessage%28userinfo_%29.md): Informs the manager about a push-to-talk message on the connection.
