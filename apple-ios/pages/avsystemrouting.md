> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting](https://developer.apple.com/documentation/avsystemrouting)

# AVSystemRouting (Swift)

**Framework:** AVSystemRouting  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Send media from your app to a TV, speaker, or other device through a media device extension.

<a id="Overview"></a>

## Overview

The AVSystemRouting framework lets your app send media to other devices, like TVs and speakers. Media sharing protocol providers distribute media device extensions through their own apps so you don’t need to bundle each device’s SDK in your app.

When someone selects a device, your app receives an event describing their choice and starts a playback session on that device.

![An illustration showing an iPhone on the left sending a media stream wirelessly to a pair of external speakers on the right.](https://developer.apple.com/images/com.apple.avsystemrouting/av-system-routing-hero@2x.png)

Your app uses the shared [AVSystemRouteController](avsystemrouting/avsystemroutecontroller-18ns8.md) and registers an [AVSystemRouteControllerObserver](avsystemrouting/avsystemroutecontrollerobserver-5syvg.md) to receive routing events. When your app receives an [AVSystemRouteEvent](avsystemrouting/avsystemrouteevent-2elr5.md) with an [AVSystemRouteEvent.Reason.activate](avsystemrouting/avsystemrouteevent-2elr5/reason-swift.enum/activate.md) reason, create an [AVSystemRouteSession](avsystemrouting/avsystemroutesession-gp78.md) with a URL and an [AVSystemRoute.LaunchMode](avsystemrouting/avsystemroute-5s2um/launchmode.md) the device supports. The launch mode either plays the URL on the receiver or launches your app’s counterpart there. Add the session to the event’s [AVSystemRoute](avsystemrouting/avsystemroute-5s2um.md), then start it; on success, you receive an [AVSystemRouteMediaSession](avsystemrouting/avsystemroutemediasession-98ioq.md) for managing playback.

Declare your supported protocols in your app’s Info pane in Xcode using the [MDESupportedProtocols](https://developer.apple.com/documentation/bundleresources/information-property-list/mdesupportedprotocols) key, and add [MDESupportsUniversalURLPlayback](https://developer.apple.com/documentation/bundleresources/information-property-list/mdesupportsuniversalurlplayback) as needed for URL-based playback.

After starting a session, use the [AVSystemRouteMediaSession](avsystemrouting/avsystemroutemediasession-98ioq.md) class’s playback control to manage remote playback and receive state updates. For communication that includes a companion app on the remote device, use the media session’s data channel and implement [AVSystemRouteDataDelegate](avsystemrouting/avsystemroutedatadelegate-7vt4b.md).

AVSystemRouting is the app-side counterpart to the [Media Device](mediadevice.md) framework, which provides the extension API that media sharing protocol providers implement. To learn how extension providers register their protocols and handle playback, see [Creating a media device extension](mediadevice/creating-a-media-device-extension.md). The two frameworks communicate through the system, so your app never needs to interact with protocol-specific details directly.

## Topics

### Essentials

- [Routing media to third-party devices](avsystemrouting/routing-media-to-third-party-devices.md): Respond to routing events and control playback on a TV, speaker, or other media device.
- [Routing and streaming media to remote devices](avsystemrouting/routing-and-streaming-media-to-remote-devices.md): Send media from an app to nearby remote playback devices.
- [AVSystemRouteController](avsystemrouting/avsystemroutecontroller-18ns8.md): An object that manages interaction with system routes.
- [AVSystemRouteControllerObserver](avsystemrouting/avsystemroutecontrollerobserver-5syvg.md): A protocol for observers of a system routing controller.

### Routing events

- [AVSystemRouteEvent](avsystemrouting/avsystemrouteevent-2elr5.md): An object that represents an event that occurs on a system route.
- [AVSystemRouteEvent.Reason](avsystemrouting/avsystemrouteevent-2elr5/reason-swift.enum.md): Values that indicate the reason for a routing event.

### Routes and sessions

- [AVSystemRoute](avsystemrouting/avsystemroute-5s2um.md): An active media route to a remote device that manages connection and communication for media playback and data exchange.
- [AVSystemRouteSession](avsystemrouting/avsystemroutesession-gp78.md): An object that manages a single media playback session on a remote device.
- [AVSystemRoute.LaunchMode](avsystemrouting/avsystemroute-5s2um/launchmode.md): The mode that determines how media playback launches on a remote device.

### Playback and communication

- [AVSystemRouteMediaSession](avsystemrouting/avsystemroutemediasession-98ioq.md): An object that provides playback controls and a data channel for a session running on a remote device.
- [AVSystemRoute.DataChannel](avsystemrouting/avsystemroute-5s2um/datachannel.md): An object that manages bidirectional data communication with a remote application.
- [AVSystemRouteDataDelegate](avsystemrouting/avsystemroutedatadelegate-7vt4b.md): A protocol for handling data from a remote application.

### Errors

- [AVSystemRoutingError](avsystemrouting/avsystemroutingerror-7miya.md): An error that an AVSystemRouting operation throws when it fails.
- [AVSystemRoutingError](avsystemrouting/avsystemroutingerror-19zkj.md)

# AVSystemRouting (Objective-C)

**Framework:** AVSystemRouting  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Send media from your app to a TV, speaker, or other device through a media device extension.

<a id="Overview"></a>

## Overview

The AVSystemRouting framework lets your app send media to other devices, like TVs and speakers. Media sharing protocol providers distribute media device extensions through their own apps so you don’t need to bundle each device’s SDK in your app.

When someone selects a device, your app receives an event describing their choice and starts a playback session on that device.

![An illustration showing an iPhone on the left sending a media stream wirelessly to a pair of external speakers on the right.](https://developer.apple.com/images/com.apple.avsystemrouting/av-system-routing-hero@2x.png)

Your app uses the shared [AVSystemRouteController](avsystemrouting/avsystemroutecontroller-18ns8.md) and registers an [AVSystemRouteControllerObserver](avsystemrouting/avsystemroutecontrollerobserver-5syvg.md) to receive routing events. When your app receives an [AVSystemRouteEvent](avsystemrouting/avsystemrouteevent-2elr5.md) with an [AVSystemRouteEvent.Reason.activate](avsystemrouting/avsystemrouteevent-2elr5/reason-swift.enum/activate.md) reason, create an [AVSystemRouteSession](avsystemrouting/avsystemroutesession-gp78.md) with a URL and an [AVSystemRoute.LaunchMode](avsystemrouting/avsystemroute-5s2um/launchmode.md) the device supports. The launch mode either plays the URL on the receiver or launches your app’s counterpart there. Add the session to the event’s [AVSystemRoute](avsystemrouting/avsystemroute-5s2um.md), then start it; on success, you receive an [AVSystemRouteMediaSession](avsystemrouting/avsystemroutemediasession-98ioq.md) for managing playback.

Declare your supported protocols in your app’s Info pane in Xcode using the [MDESupportedProtocols](https://developer.apple.com/documentation/bundleresources/information-property-list/mdesupportedprotocols) key, and add [MDESupportsUniversalURLPlayback](https://developer.apple.com/documentation/bundleresources/information-property-list/mdesupportsuniversalurlplayback) as needed for URL-based playback.

After starting a session, use the [AVSystemRouteMediaSession](avsystemrouting/avsystemroutemediasession-98ioq.md) class’s playback control to manage remote playback and receive state updates. For communication that includes a companion app on the remote device, use the media session’s data channel and implement [AVSystemRouteDataDelegate](avsystemrouting/avsystemroutedatadelegate-7vt4b.md).

AVSystemRouting is the app-side counterpart to the [Media Device](mediadevice.md) framework, which provides the extension API that media sharing protocol providers implement. To learn how extension providers register their protocols and handle playback, see [Creating a media device extension](mediadevice/creating-a-media-device-extension.md). The two frameworks communicate through the system, so your app never needs to interact with protocol-specific details directly.

## Topics

### Essentials

- [Routing media to third-party devices](avsystemrouting/routing-media-to-third-party-devices.md): Respond to routing events and control playback on a TV, speaker, or other media device.
- [Routing and streaming media to remote devices](avsystemrouting/routing-and-streaming-media-to-remote-devices.md): Send media from an app to nearby remote playback devices.
- [AVSystemRouteController](avsystemrouting/avsystemroutecontroller-4teia.md): An object that manages interaction with system routes.
- [AVSystemRouteControllerObserver](avsystemrouting/avsystemroutecontrollerobserver-7p7a5.md): A protocol for observers of a system routing controller.

### Routing events

- [AVSystemRouteEvent](avsystemrouting/avsystemrouteevent-1r0st.md): An object that represents an event that occurs on a system route.
- [AVSystemRouteEventReason](avsystemrouting/avsystemrouteeventreason.md): Values that indicate the reason for a routing event.

### Routes and sessions

- [AVSystemRoute](avsystemrouting/avsystemroute-9kkj3.md): An active media route to a remote device that manages connection and communication for media playback and data exchange.
- [AVSystemRouteSession](avsystemrouting/avsystemroutesession-5i6j6.md): An object that manages a single media playback session on a remote device.
- [AVSystemRouteLaunchMode](avsystemrouting/avsystemroutelaunchmode.md): The mode that determines how media playback launches on a remote device.

### Playback and communication

- [AVSystemRouteMediaSession](avsystemrouting/avsystemroutemediasession-4mo0j.md): An object that provides playback controls and a data channel for a session running on a remote device.
- [AVSystemRouteDataDelegate](avsystemrouting/avsystemroutedatadelegate-3zbcm.md): A protocol for handling data from a remote application.

### Classes

- [AVSystemRouteDataChannel](avsystemrouting/avsystemroutedatachannel.md): An object that manages bidirectional data communication with a remote application.

### Variables

- [AVSystemRoutingErrorDomain](avsystemrouting/avsystemroutingerrordomain.md): The error domain for AVSystemRouting errors.

### Enumerations

- [AVSystemRoutingError](avsystemrouting/avsystemroutingerror-19zkj/code.md): An error that an AVSystemRouting operation throws when it fails.
