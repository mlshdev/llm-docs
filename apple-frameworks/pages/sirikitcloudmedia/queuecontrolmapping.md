> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/queuecontrolmapping](https://developer.apple.com/documentation/sirikitcloudmedia/queuecontrolmapping)

# QueueControlMapping

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A dictionary of configuration names and the media controls they permit.

## Declaration

```
object QueueControlMapping
```

## Properties

- `default` — `PlayMediaControl` (required): The default playback control configuration to use for content that doesn’t specify a different control scheme.
- `Any Key` — `PlayMediaControl`: A playback control configuration with a name you define that [Content](content.md) objects can refer to.

## See Also

### Customizing Playback Controls

- [PlayMediaControl](playmediacontrol.md): A configuration for permitted user interactions and other player behaviors during playback.
- [PlayMediaControlScheme](playmediacontrolscheme.md): Default playback controls and settings for common content types.
- [PlayMediaControlCommandSet](playmediacontrolcommandset.md): A set of modifications to apply to the default set of available playback controls.
