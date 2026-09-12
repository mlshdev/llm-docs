> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcasthandler](https://developer.apple.com/documentation/replaykit/rpbroadcasthandler)

# RPBroadcastHandler (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that sends messages to the broadcasting app.

> No longer supported

## Declaration

```swift
class RPBroadcastHandler
```

## Topics

### Updating Current Broadcast Information

- [updateServiceInfo(\_:)](rpbroadcasthandler/updateserviceinfo%28__%29.md): Deprecated. Sends information about the current broadcast to the broadcasting app.
- [updateBroadcast(\_:)](rpbroadcasthandler/updatebroadcast%28__%29.md): Deprecated. Sends the current broadcast URL to the broadcast controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md)
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media Clip Processing

- [RPBroadcastController](rpbroadcastcontroller.md): Deprecated. An object containing methods for starting and controlling a broadcast.
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.
- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.

# RPBroadcastHandler (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that sends messages to the broadcasting app.

> No longer supported

## Declaration

```objectivec
@interface RPBroadcastHandler : NSObject
```

## Topics

### Updating Current Broadcast Information

- [updateServiceInfo:](rpbroadcasthandler/updateserviceinfo%28__%29.md): Deprecated. Sends information about the current broadcast to the broadcasting app.
- [updateBroadcastURL:](rpbroadcasthandler/updatebroadcast%28__%29.md): Deprecated. Sends the current broadcast URL to the broadcast controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md)
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md)

### Conforms To

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Media Clip Processing

- [RPBroadcastController](rpbroadcastcontroller.md): Deprecated. An object containing methods for starting and controlling a broadcast.
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.
- [RPBroadcastMP4ClipHandler](rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.
