> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceseekcapabilities](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceseekcapabilities)

# AVPlaybackUserInterfaceSeekCapabilities (Swift)

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Describes navigation capabilities of the media source.

## Declaration

```swift
struct AVPlaybackUserInterfaceSeekCapabilities
```

<a id="overview"></a>

## Overview

This option set defines timeline navigation operations. Different content types and sources may have varying levels of navigation support based on technical limitations, licensing restrictions, or content type.

## Topics

### Initializers

- [init(rawValue:)](avplaybackuserinterfaceseekcapabilities/init%28rawvalue_%29.md)

### Type Properties

- [scanBackward](avplaybackuserinterfaceseekcapabilities/scanbackward.md): The source supports backward scanning at accelerated rates for rewind operations. Enables rapid reverse progression through content at speeds greater than normal playback.
- [scanForward](avplaybackuserinterfaceseekcapabilities/scanforward.md): The source supports forward scanning at accelerated rates for fast-forward operations. Enables rapid progression through content at speeds greater than normal playback.
- [seek](avplaybackuserinterfaceseekcapabilities/seek.md): The source supports seeking to specific time positions for precise navigation. Enables jumping directly to any arbitrary point within the seekable time ranges.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Playback

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-9he54.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.

# AVPlaybackUserInterfaceSeekCapabilities (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Describes navigation capabilities of the media source.

## Declaration

```objectivec
enum AVPlaybackUserInterfaceSeekCapabilities : NSUInteger;
```

<a id="overview"></a>

## Overview

This option set defines timeline navigation operations. Different content types and sources may have varying levels of navigation support based on technical limitations, licensing restrictions, or content type.

## Topics

### Enumeration Cases

- [AVPlaybackUserInterfaceSeekCapabilitiesNone](avplaybackuserinterfaceseekcapabilities/avplaybackuserinterfaceseekcapabilitiesnone.md): The source does not support any scanning or seeking operations.
- [AVPlaybackUserInterfaceSeekCapabilitiesScanBackward](avplaybackuserinterfaceseekcapabilities/scanbackward.md): The source supports backward scanning at accelerated rates for rewind operations. Enables rapid reverse progression through content at speeds greater than normal playback.
- [AVPlaybackUserInterfaceSeekCapabilitiesScanForward](avplaybackuserinterfaceseekcapabilities/scanforward.md): The source supports forward scanning at accelerated rates for fast-forward operations. Enables rapid progression through content at speeds greater than normal playback.
- [AVPlaybackUserInterfaceSeekCapabilitiesSeek](avplaybackuserinterfaceseekcapabilities/seek.md): The source supports seeking to specific time positions for precise navigation. Enables jumping directly to any arbitrary point within the seekable time ranges.

## See Also

### Playback

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-81n66.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.
