> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcasthandler/updateserviceinfo(_:)](https://developer.apple.com/documentation/replaykit/rpbroadcasthandler/updateserviceinfo(_:))

# updateServiceInfo(\_:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends information about the current broadcast to the broadcasting app.

> No longer supported

## Declaration

```swift
func updateServiceInfo(_ serviceInfo: [String : any NSCoding & NSObjectProtocol])
```

## Parameters

- `serviceInfo`: Dictionary that is passed back to the broadcasting app and contains information about the ongoing broadcast.

<a id="Discussion"></a>

## Discussion

This method populates the [serviceInfo](../rpbroadcastcontroller/serviceinfo.md) property on [RPBroadcastController](../rpbroadcastcontroller.md) to send viewing stats or messages to the broadcasting app.

## See Also

### Updating Current Broadcast Information

- [updateBroadcast(\_:)](updatebroadcast%28__%29.md): Deprecated. Sends the current broadcast URL to the broadcast controller.

# updateServiceInfo: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends information about the current broadcast to the broadcasting app.

> No longer supported

## Declaration

```objectivec
- (void) updateServiceInfo:(NSDictionary<NSString *,NSObject<NSCoding> *> *) serviceInfo;
```

## Parameters

- `serviceInfo`: Dictionary that is passed back to the broadcasting app and contains information about the ongoing broadcast.

<a id="Discussion"></a>

## Discussion

This method populates the [serviceInfo](../rpbroadcastcontroller/serviceinfo.md) property on [RPBroadcastController](../rpbroadcastcontroller.md) to send viewing stats or messages to the broadcasting app.

## See Also

### Updating Current Broadcast Information

- [updateBroadcastURL:](updatebroadcast%28__%29.md): Deprecated. Sends the current broadcast URL to the broadcast controller.
