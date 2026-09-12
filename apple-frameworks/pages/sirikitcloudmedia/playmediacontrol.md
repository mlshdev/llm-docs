> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediacontrol](https://developer.apple.com/documentation/sirikitcloudmedia/playmediacontrol)

# PlayMediaControl

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A configuration for permitted user interactions and other player behaviors during playback.

## Declaration

```
object PlayMediaControl
```

## Properties

- `scheme` — `PlayMediaControlScheme` (required): The base set of user controls to make available, and related content behaviors to use.
- `commands` — `PlayMediaControlCommandSet`: A set of commands and their desired availabilities to override the default behavior of the `scheme`.
- `activity` — `PlayMediaControlActivity`: A schedule for the client to report playback progress to the [Report Playback Progress and Activity](updateactivity.md) endpoint.

## See Also

### Customizing Playback Controls

- [QueueControlMapping](queuecontrolmapping.md): A dictionary of configuration names and the media controls they permit.
- [PlayMediaControlScheme](playmediacontrolscheme.md): Default playback controls and settings for common content types.
- [PlayMediaControlCommandSet](playmediacontrolcommandset.md): A set of modifications to apply to the default set of available playback controls.
