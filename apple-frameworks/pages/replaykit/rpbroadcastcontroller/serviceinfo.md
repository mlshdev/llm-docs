> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontroller/serviceinfo](https://developer.apple.com/documentation/replaykit/rpbroadcastcontroller/serviceinfo)

# serviceInfo (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Information updated by the service during a broadcast.

> No longer supported

## Declaration

```swift
var serviceInfo: [String : any NSCoding & NSObjectProtocol]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys and values for the dictionary are defined by the broadcast service and updated through the [updateServiceInfo(\_:)](../rpbroadcasthandler/updateserviceinfo%28__%29.md) function. This property is KVO observable.

## See Also

### Controlling the Broadcast

- [broadcastURL](broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [startBroadcast(handler:)](startbroadcast%28handler_%29.md): Deprecated. Starts a broadcast.
- [pauseBroadcast()](pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast()](resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [finishBroadcast(handler:)](finishbroadcast%28handler_%29.md): Deprecated. Stops the current broadcast.

# serviceInfo (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Information updated by the service during a broadcast.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSObject<NSCoding> *> * serviceInfo;
```

<a id="Discussion"></a>

## Discussion

The keys and values for the dictionary are defined by the broadcast service and updated through the [updateServiceInfo:](../rpbroadcasthandler/updateserviceinfo%28__%29.md) function. This property is KVO observable.

## See Also

### Controlling the Broadcast

- [broadcastURL](broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [startBroadcastWithHandler:](startbroadcast%28handler_%29.md): Deprecated. Starts a broadcast.
- [pauseBroadcast](pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast](resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [finishBroadcastWithHandler:](finishbroadcast%28handler_%29.md): Deprecated. Stops the current broadcast.
