> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutemediasession-4mo0j](https://developer.apple.com/documentation/avsystemrouting/avsystemroutemediasession-4mo0j)

# AVSystemRouteMediaSession

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that provides playback controls and a data channel for a session running on a remote device.

## Declaration

```objectivec
@interface AVSystemRouteMediaSession : NSObject
```

<a id="overview"></a>

## Overview

Use this object to access playback controls and a data channel for communicating with the remote application. Call [startWithCompletionHandler:](avsystemroutesession-5i6j6/startwithcompletionhandler_.md) to get this object after adding a session to an [AVSystemRoute](avsystemroute-9kkj3.md).

## Topics

### Instance Properties

- [dataChannel](avsystemroutemediasession-4mo0j/datachannel.md): The data channel for sending and receiving data with the remote application.
- [playbackControl](avsystemroutemediasession-4mo0j/playbackcontrol.md): The playback control interface for the remote session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Playback and communication

- [AVSystemRouteDataDelegate](avsystemroutedatadelegate-3zbcm.md): A protocol for handling data from a remote application.
