> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/third-party-casting-support

# Third-party casting support (Swift)

**Framework:** AVKit  
**Kind:** API Collection

Provide custom playback controls for third-party casting services and other media sources.

<a id="Overview"></a>

## Overview

Use the [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) protocol suite to build custom transport controls that work with third-party casting services. The [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) composite protocol combines playback, timeline, media selection, volume, and metadata capabilities into a single interface.

## Topics

### Complete control interface

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md): A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

### Playback control

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-9he54.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.

### Timeline and segments

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-50vcy.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-8ee5z.md): Provides audio and subtitle selection capabilities for media content.
- [AVPlaybackUserInterfaceMediaSelectionOption](avplaybackuserinterfacemediaselectionoption.md): Represents a media selection option for audio tracks or subtitle tracks.

### Volume control

- [AVPlaybackUserInterfaceVolumeControllable](avplaybackuserinterfacevolumecontrollable-4vgi1.md): Provides volume and audio muting control for media content.

### Content metadata

- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-814y4.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-swift.struct.md): A Swift-friendly structure representing media metadata.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.

# Third-party casting support (Objective-C)

**Framework:** AVKit  
**Kind:** API Collection

Provide custom playback controls for third-party casting services and other media sources.

<a id="Overview"></a>

## Overview

Use the [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) protocol suite to build custom transport controls that work with third-party casting services. The [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md) composite protocol combines playback, timeline, media selection, volume, and metadata capabilities into a single interface.

## Topics

### Complete control interface

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-7ti30.md): A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

### Playback control

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-81n66.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.

### Timeline and segments

- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-62fq2.md): Provides time control and navigation capabilities for media content.
- [AVPlaybackUserInterfacePlaybackPosition](avplaybackuserinterfaceplaybackposition.md): A snapshot comprising a playback position recorded at a known host time and the rate of position advancement.
- [AVPlaybackUserInterfaceTimelineSegment](avplaybackuserinterfacetimelinesegment.md): Represents a contiguous segment of timeline content with specific playback characteristics.
- [AVPlaybackUserInterfaceTimelineSegmentType](avplaybackuserinterfacetimelinesegmenttype.md): Describes the type of content within a timeline segment.

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-2fftn.md): Provides audio and subtitle selection capabilities for media content.
- [AVPlaybackUserInterfaceMediaSelectionOption](avplaybackuserinterfacemediaselectionoption.md): Represents a media selection option for audio tracks or subtitle tracks.

### Volume control

- [AVPlaybackUserInterfaceVolumeControllable](avplaybackuserinterfacevolumecontrollable-5ystg.md): Provides volume and audio muting control for media content.

### Content metadata

- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-1w04z.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadata](avplaybackuserinterfacecontentmetadata-c.class.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentMetadataTemplate](avplaybackuserinterfacecontentmetadatatemplate.md): A mutable template for configuring media metadata before creating immutable metadata objects.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
- [AVPlaybackUserInterfaceContentVideoProperties](avplaybackuserinterfacecontentvideoproperties.md): Properties specific to video content.
