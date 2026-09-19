> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit

# AVKit (Swift)

**Framework:** AVKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Adopt the system’s video playback interfaces, and integrate your camera app with capture hardware.

## Mentioned In

- [Adopting Picture in Picture for video calls](avkit/adopting-picture-in-picture-for-video-calls.md)

<a id="Overview"></a>

## Overview

AVKit provides the interfaces your app uses to integrate media with the hardware and software of an Apple device. For playback, it provides the system’s standard video player, so your app presents video the way people already expect instead of designing an interface of its own. For capture, it provides the integration points that connect a camera app to capture hardware and to the system features that surround it.

It builds on [AVFoundation](avfoundation.md), which does the work of playing and capturing media. Implement your app’s media features with AVFoundation, then adopt AVKit so those features work the way the rest of the device does.

## Topics

### Essentials

- [Playback interfaces](avkit/avkit-playback-interfaces.md): Present video with the system player, complete with transport controls and Picture in Picture.
- [Capture interfaces](avkit/avkit-capture-interfaces.md): Capture from hardware buttons and AirPods, present an audio input picker, and connect a nearby iPhone as a camera.

### Errors

- [AVKitErrorDomain](avkit/avkiterrordomain.md): The domain of errors the framework generates.
- [AVKitError](avkit/avkiterror-swift.struct.md): A structure that represents a framework error.
- [AVKitError.Code](avkit/avkiterror-swift.struct/code.md): Constants that identify framework error codes.
- [Error constants](avkit/error-constants.md): Error code constants for framework operations.

### Macros

- [Macros](avkit/avkit-macros.md)

# AVKit (Objective-C)

**Framework:** AVKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Adopt the system’s video playback interfaces, and integrate your camera app with capture hardware.

## Mentioned In

- [Adopting Picture in Picture for video calls](avkit/adopting-picture-in-picture-for-video-calls.md)

<a id="Overview"></a>

## Overview

AVKit provides the interfaces your app uses to integrate media with the hardware and software of an Apple device. For playback, it provides the system’s standard video player, so your app presents video the way people already expect instead of designing an interface of its own. For capture, it provides the integration points that connect a camera app to capture hardware and to the system features that surround it.

It builds on [AVFoundation](avfoundation.md), which does the work of playing and capturing media. Implement your app’s media features with AVFoundation, then adopt AVKit so those features work the way the rest of the device does.

## Topics

### Essentials

- [Playback interfaces](avkit/avkit-playback-interfaces.md): Present video with the system player, complete with transport controls and Picture in Picture.
- [Capture interfaces](avkit/avkit-capture-interfaces.md): Capture from hardware buttons and AirPods, present an audio input picker, and connect a nearby iPhone as a camera.

### Errors

- [AVKitErrorDomain](avkit/avkiterrordomain.md): The domain of errors the framework generates.
- [AVKitError](avkit/avkiterror-swift.struct/code.md): Constants that identify framework error codes.
- [Error constants](avkit/error-constants.md): Error code constants for framework operations.

### Macros

- [Macros](avkit/avkit-macros.md)

### Classes

- [AVInterfaceAlbumArtwork](avkit/avinterfacealbumartwork.md): Base class representing album artwork or cover art for media content.
- [AVInterfaceMediaSelectionOptionSource](avkit/avinterfacemediaselectionoptionsource.md): Represents a media selection option for audio tracks or subtitle tracks.
- [AVInterfaceMetadata](avkit/avinterfacemetadata.md): Provides metadata information about media content including title, artwork, and content type.
- [AVInterfaceMetadataTemplate](avkit/avinterfacemetadatatemplate.md): A mutable template for configuring media metadata before creating immutable metadata objects.
- [AVInterfaceTimelineSegment](avkit/avinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVInterfaceURLAlbumArtwork](avkit/avinterfaceurlalbumartwork.md): An album artwork subclass that references artwork via a URL and content type.

### Protocols

- [AVInterfaceControllable](avkit/avinterfacecontrollable.md): A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.
- [AVInterfaceMediaSelectionControllable](avkit/avinterfacemediaselectioncontrollable.md): Provides audio and subtitle selection capabilities for media content.
- [AVInterfaceMetadataProviding](avkit/avinterfacemetadataproviding.md): Provides metadata information about media content including title, artwork, and content type.
- [AVInterfacePlaybackControllable](avkit/avinterfaceplaybackcontrollable.md): Provides playback control and state management for media content.
- [AVInterfaceTimeControllable](avkit/avinterfacetimecontrollable.md): Provides time control and navigation capabilities for media content.
- [AVInterfaceVolumeControllable](avkit/avinterfacevolumecontrollable.md): Provides volume and audio muting control for media content.

### Enumerations

- [AVInterfacePlaybackState](avkit/avinterfaceplaybackstate.md): Describes possible playback states of the interface source.
- [AVInterfaceSeekCapabilities](avkit/avinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.
