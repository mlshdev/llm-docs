> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontroller](https://developer.apple.com/documentation/replaykit/rpbroadcastcontroller)

# RPBroadcastController (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object containing methods for starting and controlling a broadcast.

> No longer supported

## Declaration

```swift
class RPBroadcastController
```

## Topics

### Controlling the Broadcast

- [broadcastURL](rpbroadcastcontroller/broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [startBroadcast(handler:)](rpbroadcastcontroller/startbroadcast%28handler_%29.md): Deprecated. Starts a broadcast.
- [pauseBroadcast()](rpbroadcastcontroller/pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast()](rpbroadcastcontroller/resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [finishBroadcast(handler:)](rpbroadcastcontroller/finishbroadcast%28handler_%29.md): Deprecated. Stops the current broadcast.
- [serviceInfo](rpbroadcastcontroller/serviceinfo.md): Deprecated. Information updated by the service during a broadcast.

### Retrieving Information About the Broadcast

- [broadcastExtensionBundleID](rpbroadcastcontroller/broadcastextensionbundleid.md): Deprecated. The bundle ID for the selected broadcast service.
- [isBroadcasting](rpbroadcastcontroller/isbroadcasting.md): Deprecated. A Boolean value indicating whether the controller is broadcasting.
- [isPaused](rpbroadcastcontroller/ispaused.md): Deprecated. A Boolean value indicating whether the broadcast is paused.

### Getting the Delegate

- [delegate](rpbroadcastcontroller/delegate.md): Deprecated. The delegate for the broadcast controller.
- [RPBroadcastControllerDelegate](rpbroadcastcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes in a live broadcast.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media Clip Processing

- [RPBroadcastHandler](rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.
- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.

# RPBroadcastController (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object containing methods for starting and controlling a broadcast.

> No longer supported

## Declaration

```objectivec
@interface RPBroadcastController : NSObject
```

## Topics

### Controlling the Broadcast

- [broadcastURL](rpbroadcastcontroller/broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [startBroadcastWithHandler:](rpbroadcastcontroller/startbroadcast%28handler_%29.md): Deprecated. Starts a broadcast.
- [pauseBroadcast](rpbroadcastcontroller/pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast](rpbroadcastcontroller/resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [finishBroadcastWithHandler:](rpbroadcastcontroller/finishbroadcast%28handler_%29.md): Deprecated. Stops the current broadcast.
- [serviceInfo](rpbroadcastcontroller/serviceinfo.md): Deprecated. Information updated by the service during a broadcast.

### Retrieving Information About the Broadcast

- [broadcastExtensionBundleID](rpbroadcastcontroller/broadcastextensionbundleid.md): Deprecated. The bundle ID for the selected broadcast service.
- [broadcasting](rpbroadcastcontroller/isbroadcasting.md): Deprecated. A Boolean value indicating whether the controller is broadcasting.
- [paused](rpbroadcastcontroller/ispaused.md): Deprecated. A Boolean value indicating whether the broadcast is paused.

### Getting the Delegate

- [delegate](rpbroadcastcontroller/delegate.md): Deprecated. The delegate for the broadcast controller.
- [RPBroadcastControllerDelegate](rpbroadcastcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes in a live broadcast.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media Clip Processing

- [RPBroadcastHandler](rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.
- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.
