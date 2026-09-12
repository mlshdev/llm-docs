> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastmp4cliphandler](https://developer.apple.com/documentation/replaykit/rpbroadcastmp4cliphandler)

# RPBroadcastMP4ClipHandler (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

An object that processes MP4 movie clips from ReplayKit.

> Use [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md) instead.

## Declaration

```swift
class RPBroadcastMP4ClipHandler
```

<a id="overview"></a>

## Overview

Subclass this class to handle movie clips as ReplayKit records them during the broadcast. The system calls [processMP4Clip(with:setupInfo:finished:)](rpbroadcastmp4cliphandler/processmp4clip%28with_setupinfo_finished_%29.md) when a movie clip is available for processing.

## Topics

### Processing MP4 Movie Clips

- [finishedProcessingMP4Clip(withUpdatedBroadcastConfiguration:error:)](rpbroadcastmp4cliphandler/finishedprocessingmp4clip%28withupdatedbroadcastconfiguration_error_%29.md): Deprecated. Applies configuration update changes to the next MP4 movie clip.
- [processMP4Clip(with:setupInfo:finished:)](rpbroadcastmp4cliphandler/processmp4clip%28with_setupinfo_finished_%29.md): Deprecated. Processes MP4 movie clips for a live broadcast.

## Relationships

### Inherits From

- [RPBroadcastHandler](rpbroadcasthandler.md)

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
- [RPBroadcastHandler](rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.

# RPBroadcastMP4ClipHandler (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

An object that processes MP4 movie clips from ReplayKit.

> Use [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md) instead.

## Declaration

```objectivec
@interface RPBroadcastMP4ClipHandler : RPBroadcastHandler
```

<a id="overview"></a>

## Overview

Subclass this class to handle movie clips as ReplayKit records them during the broadcast. The system calls [processMP4ClipWithURL:setupInfo:finished:](rpbroadcastmp4cliphandler/processmp4clip%28with_setupinfo_finished_%29.md) when a movie clip is available for processing.

## Topics

### Processing MP4 Movie Clips

- [finishedProcessingMP4ClipWithUpdatedBroadcastConfiguration:error:](rpbroadcastmp4cliphandler/finishedprocessingmp4clip%28withupdatedbroadcastconfiguration_error_%29.md): Deprecated. Applies configuration update changes to the next MP4 movie clip.
- [processMP4ClipWithURL:setupInfo:finished:](rpbroadcastmp4cliphandler/processmp4clip%28with_setupinfo_finished_%29.md): Deprecated. Processes MP4 movie clips for a live broadcast.

## Relationships

### Inherits From

- [RPBroadcastHandler](rpbroadcasthandler.md)

## See Also

### Media Clip Processing

- [RPBroadcastController](rpbroadcastcontroller.md): Deprecated. An object containing methods for starting and controlling a broadcast.
- [RPBroadcastHandler](rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastSampleHandler](rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.
