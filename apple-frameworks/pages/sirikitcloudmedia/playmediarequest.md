> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediarequest](https://developer.apple.com/documentation/sirikitcloudmedia/playmediarequest)

# PlayMediaRequest

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A request for a media playback queue.

## Declaration

```
object PlayMediaRequest
```

## Properties

- `constraints` — `Constraints` (required): Limitations on the type and quantity of content the client can receive.
- `userActivity` — `UserActivity` (required): A description of the playback queue. Your service provides the [UserActivity](useractivity.md) after it successfully handles a play media intent.
- `version` — `string` (required): The version of the `SiriKitMediaAPI` library the client uses.
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`
