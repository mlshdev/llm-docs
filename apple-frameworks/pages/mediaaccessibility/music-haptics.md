> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/music-haptics](https://developer.apple.com/documentation/mediaaccessibility/music-haptics)

# Music Haptics (Swift)

**Framework:** Media Accessibility  
**Kind:** API Collection

Play haptic tracks along with known music tracks.

<a id="Overview"></a>

## Overview

Music Haptics is an accessibility feature that allows a person to indicate that they want to play haptic tracks along with known music tracks. This feature allows people who are deaf or hard of hearing to enjoy music through tactile feedback. A person can turn on this feature in Settings \> Accessibility \> Music Haptics. If you play music in your app, you can support haptic feedback for known songs.

<a id="Support-Music-Haptics"></a>

### Support Music Haptics

To support Music Haptics in your app:

- Add the [MusicHapticsSupported](../bundleresources/information-property-list/musichapticssupported.md) key to your app’s `Info.plist` and set its value to `YES`.
- Check whether Music Haptics is on using [isActive](mamusichapticsmanager/isactive.md) on the [shared](mamusichapticsmanager/shared.md) instance of [MAMusicHapticsManager](mamusichapticsmanager.md).
- Register for the [activeStatusDidChangeNotification](mamusichapticsmanager/activestatusdidchangenotification.md) notification to listen for changes in the Music Haptics setting.
- Supply a known song’s International Standard Recording Code (ISRC) as part of the [nowPlayingInfo](../mediaplayer/mpnowplayinginfocenter/nowplayinginfo.md) dictionary of [MPNowPlayingInfoCenter](../mediaplayer/mpnowplayinginfocenter.md), using the key [MPNowPlayingInfoPropertyInternationalStandardRecordingCode](../mediaplayer/mpnowplayinginfopropertyinternationalstandardrecordingcode.md). For more information about becoming the Now Playing app, refer to [Becoming a now playable app](../mediaplayer/becoming-a-now-playable-app.md).

<a id="Indicate-haptic-playback-status"></a>

### Indicate haptic playback status

To indicate the status of haptic playback for Music Haptics, you can use the following symbols:

| Symbol name | Status | API |
| --- | --- | --- |
| `"apple.haptics.and.music.note"` | Active | [isActive](mamusichapticsmanager/isactive.md) is `true` |
| `"apple.haptics.and.music.note.slash"` | Paused | [isActive](mamusichapticsmanager/isactive.md) is `false` |
| `"apple.haptics.and.exclamationmark.triangle"` | Unavailable | [checkHapticTrackAvailabilityForMedia(matchingCode:completionHandler:)](mamusichapticsmanager/checkhaptictrackavailabilityformedia%28matchingcode_completionhandler_%29.md) is `false` |

For more details about using these symbols, refer to the [SF Symbols](https://developer.apple.com/sf-symbols/) app.

## Topics

### Music Haptics

- [MAMusicHapticsManager](mamusichapticsmanager.md): A class that reports information about the Music Haptics feature.

## See Also

### Features

- [Captions](captions.md): Coordinate the presentation of closed-captioned data for your app’s media files.
- [Flashing lights](flashing-lights.md): Detect, mitigate, and inform people about flashing lights in media content.

# Music Haptics (Objective-C)

**Framework:** Media Accessibility  
**Kind:** API Collection

Play haptic tracks along with known music tracks.

<a id="Overview"></a>

## Overview

Music Haptics is an accessibility feature that allows a person to indicate that they want to play haptic tracks along with known music tracks. This feature allows people who are deaf or hard of hearing to enjoy music through tactile feedback. A person can turn on this feature in Settings \> Accessibility \> Music Haptics. If you play music in your app, you can support haptic feedback for known songs.

<a id="Support-Music-Haptics"></a>

### Support Music Haptics

To support Music Haptics in your app:

- Add the [MusicHapticsSupported](../bundleresources/information-property-list/musichapticssupported.md) key to your app’s `Info.plist` and set its value to `YES`.
- Check whether Music Haptics is on using [isActive](mamusichapticsmanager/isactive.md) on the [sharedManager](mamusichapticsmanager/shared.md) instance of [MAMusicHapticsManager](mamusichapticsmanager.md).
- Register for the [MAMusicHapticsManagerActiveStatusDidChangeNotification](mamusichapticsmanager/activestatusdidchangenotification.md) notification to listen for changes in the Music Haptics setting.
- Supply a known song’s International Standard Recording Code (ISRC) as part of the [nowPlayingInfo](../mediaplayer/mpnowplayinginfocenter/nowplayinginfo.md) dictionary of [MPNowPlayingInfoCenter](../mediaplayer/mpnowplayinginfocenter.md), using the key [MPNowPlayingInfoPropertyInternationalStandardRecordingCode](../mediaplayer/mpnowplayinginfopropertyinternationalstandardrecordingcode.md). For more information about becoming the Now Playing app, refer to [Becoming a now playable app](../mediaplayer/becoming-a-now-playable-app.md).

<a id="Indicate-haptic-playback-status"></a>

### Indicate haptic playback status

To indicate the status of haptic playback for Music Haptics, you can use the following symbols:

| Symbol name | Status | API |
| --- | --- | --- |
| `"apple.haptics.and.music.note"` | Active | [isActive](mamusichapticsmanager/isactive.md) is `true` |
| `"apple.haptics.and.music.note.slash"` | Paused | [isActive](mamusichapticsmanager/isactive.md) is `false` |
| `"apple.haptics.and.exclamationmark.triangle"` | Unavailable | [checkHapticTrackAvailabilityForMediaMatchingCode:completionHandler:](mamusichapticsmanager/checkhaptictrackavailabilityformedia%28matchingcode_completionhandler_%29.md) is `false` |

For more details about using these symbols, refer to the [SF Symbols](https://developer.apple.com/sf-symbols/) app.

## Topics

### Music Haptics

- [MAMusicHapticsManager](mamusichapticsmanager.md): A class that reports information about the Music Haptics feature.

## See Also

### Features

- [Captions](captions.md): Coordinate the presentation of closed-captioned data for your app’s media files.
- [Flashing lights](flashing-lights.md): Detect, mitigate, and inform people about flashing lights in media content.
