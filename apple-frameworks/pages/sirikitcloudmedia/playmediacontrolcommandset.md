> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediacontrolcommandset](https://developer.apple.com/documentation/sirikitcloudmedia/playmediacontrolcommandset)

# PlayMediaControlCommandSet

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A set of modifications to apply to the default set of available playback controls.

## Declaration

```
object PlayMediaControlCommandSet
```

## Properties

- `nextTrack` — `boolean`: Move to the next track while playing content.
- `previousTrack` — `boolean`: Move to the beginning of the current track, or to the previous track, while playing content.
- `skipForward` — `boolean`: Move forward by a number of seconds.
- `skipBackward` — `boolean`: Move backward by a number of seconds.
- `preferSkipForward` — `boolean`: Display a skip forward control in the remote UI instead of a next track control when the `skipForward` control is available.
- `preferSkipBackward` — `boolean`: Display a skip backward control in the remote UI instead of a next track control when the `skipBackward` control is available.
- `seekToPlaybackPosition` — `boolean`: Scrub to any point in the content.
- `likeTrack` — `boolean`: Like the current content.
- `dislikeTrack` — `boolean`: Express dislike for the current content.
- `bookmarkTrack` — `boolean`: Save the current content for later.

<a id="Discussion"></a>

## Discussion

Provide `true` to enable a control that isn’t available by default in the current [PlayMediaControlScheme](playmediacontrolscheme.md), and `false` to disable a control that’s available by default in the `PlayMediaControlScheme`. Omit entries for any controls that need to respect the default behavior of the current scheme.

When the user interacts with these controls, the client sends that information to the [Report Playback Progress and Activity](updateactivity.md) endpoint. This is separate from the user telling Siri they like some content, which the client sends to the [Process an Update Media Affinity Intent](updatemediaaffinity.md) endpoint.

## See Also

### Customizing Playback Controls

- [QueueControlMapping](queuecontrolmapping.md): A dictionary of configuration names and the media controls they permit.
- [PlayMediaControl](playmediacontrol.md): A configuration for permitted user interactions and other player behaviors during playback.
- [PlayMediaControlScheme](playmediacontrolscheme.md): Default playback controls and settings for common content types.
