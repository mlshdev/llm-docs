> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updateactivityrequest](https://developer.apple.com/documentation/sirikitcloudmedia/updateactivityrequest)

# UpdateActivityRequest

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A report of the client’s current playback state and recent user interaction, and an opportunity for your service to modify the client’s playback queue.

## Declaration

```
object UpdateActivityRequest
```

## Properties

- `constraints` — `Constraints`: Limitations on the type and quantity of content to provide in a [Queue](queue.md).
- `nowPlaying` — `PlayerContext`: The content the client is playing.
- `previouslyPlaying` — `PlayerContext`: The content the client plays before the current content.
- `report` — `QueueActivityReportEvent` (required): The most-recent control the user interacts with, or the natural transition that occurs most recently.
- `timestamp` — `date-time` (required): The date and time of the reported event.
- `userActivity` — `UserActivity` (required): A description of the playback queue the client is playing.
- `version` — `string` (required): The version of the `SiriKitMediaAPI` library the client uses.
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`
- `contentFailure` — `ContentFailure`:

## See Also

### Playback Events

- [QueueActivityReportEvent](queueactivityreportevent.md): An event that occurs during content playback.
- [Report Playback Progress and Activity](updateactivity.md): Monitor progress through the playback queue.
- [UpdateActivityResponse](updateactivityresponse.md): Updates to the client’s queue and user activity in response to a report of playback progress.
- [Process an Update Media Affinity Intent](updatemediaaffinity.md): Record the user’s preference for a specific media item or a broader category of media.
