> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediacontrolactivity](https://developer.apple.com/documentation/sirikitcloudmedia/playmediacontrolactivity)

# PlayMediaControlActivity

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Options for reporting playback progress.

## Declaration

```
object PlayMediaControlActivity
```

## Properties

- `playElapsed` — `uint32`: The number of seconds the client plays a piece of content before sending a `local.playing.elapsed` event.
  **Minimum:** `5`
- `playElapsedInterval` — `uint32`: The number of seconds the client waits before sending a subsequent `local.playing.elapsed` event.
  **Minimum:** `5`
- `playPaused` — `uint32`: The minimum pause duration, in seconds, that the client reports.
  **Default:** `5`  
  **Minimum:** `5`  
  **Maximum:** `60`

<a id="Discussion"></a>

## Discussion

Provide these values in a [Queue](queue.md) to configure when the client sends requests to your [Report Playback Progress and Activity](updateactivity.md) endpoint.

If you specify both `playElapsedInterval` and `playElapsed`, the client sends the first report after it plays `playElapsed` seconds of content. Then it sends additional reports according to the `playElapsedInterval`, counting from the beginning of the content. For example, if you specify `45` for `playElapsed` and `30` for `playElapsedInterval`, the client sends reports after 45, 60, 90, and 120 seconds of playback.

If you specify `playElapsedInterval`, but not `playElapsed`, the client uses the `playElapsedInterval` for both.

## See Also

### Device Configuration

- [Configure Your Service Endpoints](configuration-resource.md): Provide configuration details for your media server’s endpoints to a HomePod speaker or an Apple TV.
- [ExtensionConfigTag](extensionconfigtag.md): A unique identifier for a specific media service configuration.
- [ExtensionConfig](extensionconfig.md): Instructions for accessing your media service’s endpoints.
