> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/third-party-casting-support](https://developer.apple.com/documentation/avkit/third-party-casting-support)

# Third-party casting support (Swift)

**Framework:** AVKit  
**Kind:** API Collection

Provide custom playback controls for third-party casting services and other media sources.

<a id="Overview"></a>

## Overview

Use the [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) protocol suite to build custom transport controls that work with third-party casting services. The [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) composite protocol combines playback, timeline, media selection, volume, and metadata capabilities into a single interface.

## Topics

### Playback

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-9he54.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-50vcy.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-8ee5z.md): Provides audio and subtitle selection capabilities for media content.
- [AVPlaybackUserInterfaceMediaSelectionOption](avplaybackuserinterfacemediaselectionoption.md): Represents a media selection option for audio tracks or subtitle tracks.

### Volume

- [AVPlaybackUserInterfaceVolumeControllable](avplaybackuserinterfacevolumecontrollable-4vgi1.md): Provides volume and audio muting control for media content.

### Metadata

- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-814y4.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-swift.struct.md): A Swift-friendly structure representing media metadata.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.

### Complete interface

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md): A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

## See Also

### iOS playback and capture

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.

# Third-party casting support (Objective-C)

**Framework:** AVKit  
**Kind:** API Collection

Provide custom playback controls for third-party casting services and other media sources.

<a id="Overview"></a>

## Overview

Use the [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) protocol suite to build custom transport controls that work with third-party casting services. The [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) composite protocol combines playback, timeline, media selection, volume, and metadata capabilities into a single interface.

## Topics

### Playback

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-81n66.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.

### Timeline

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-62fq2.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-2fftn.md): Provides audio and subtitle selection capabilities for media content.
- [AVPlaybackUserInterfaceMediaSelectionOption](avplaybackuserinterfacemediaselectionoption.md): Represents a media selection option for audio tracks or subtitle tracks.

### Volume

- [AVPlaybackUserInterfaceVolumeControllable](avplaybackuserinterfacevolumecontrollable-5ystg.md): Provides volume and audio muting control for media content.

### Metadata

- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-1w04z.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-c.class.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadataTemplate](avplaybackuserinterfacecontentmetadatatemplate.md): A mutable template for configuring media metadata before creating immutable metadata objects.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
- [AVPlaybackUserInterfaceContentVideoProperties](avplaybackuserinterfacecontentvideoproperties.md): Properties specific to video content.

### Complete interface

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-7ti30.md): A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

## See Also

### iOS playback and capture

- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
