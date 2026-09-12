> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updateactivityresponse](https://developer.apple.com/documentation/sirikitcloudmedia/updateactivityresponse)

# UpdateActivityResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Updates to the client’s queue and user activity in response to a report of playback progress.

## Declaration

```
object UpdateActivityResponse
```

## Properties

- `queue` — `Queue`: A sequence of playback content to replace or modify the client’s current playback queue.
- `userActivity` — `UserActivity`: A new user activity for the client to use in future requests to queue endpoints.

## See Also

### Playback Events

- [QueueActivityReportEvent](queueactivityreportevent.md): An event that occurs during content playback.
- [Report Playback Progress and Activity](updateactivity.md): Monitor progress through the playback queue.
- [UpdateActivityRequest](updateactivityrequest.md): A report of the client’s current playback state and recent user interaction, and an opportunity for your service to modify the client’s playback queue.
- [Process an Update Media Affinity Intent](updatemediaaffinity.md): Record the user’s preference for a specific media item or a broader category of media.
