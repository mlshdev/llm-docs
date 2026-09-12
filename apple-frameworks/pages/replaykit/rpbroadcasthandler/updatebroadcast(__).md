> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcasthandler/updatebroadcast(_:)](https://developer.apple.com/documentation/replaykit/rpbroadcasthandler/updatebroadcast(_:))

# updateBroadcast(\_:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends the current broadcast URL to the broadcast controller.

## Declaration

```swift
func updateBroadcast(_ broadcastURL: URL)
```

## Parameters

- `broadcastURL`: A URL that specifies where the broadcast to be passed to the broadcasting app is contained.

<a id="Discussion"></a>

## Discussion

This method updates the [broadcastURL](../rpbroadcastcontroller/broadcasturl.md) property for the broadcast controller.

## See Also

### Updating Current Broadcast Information

- [updateServiceInfo(\_:)](updateserviceinfo%28__%29.md): Deprecated. Sends information about the current broadcast to the broadcasting app.

# updateBroadcastURL: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends the current broadcast URL to the broadcast controller.

## Declaration

```objectivec
- (void) updateBroadcastURL:(NSURL *) broadcastURL;
```

## Parameters

- `broadcastURL`: A URL that specifies where the broadcast to be passed to the broadcasting app is contained.

<a id="Discussion"></a>

## Discussion

This method updates the [broadcastURL](../rpbroadcastcontroller/broadcasturl.md) property for the broadcast controller.

## See Also

### Updating Current Broadcast Information

- [updateServiceInfo:](updateserviceinfo%28__%29.md): Deprecated. Sends information about the current broadcast to the broadcasting app.
