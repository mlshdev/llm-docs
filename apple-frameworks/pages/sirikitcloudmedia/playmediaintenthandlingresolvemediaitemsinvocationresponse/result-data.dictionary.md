> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlingresolvemediaitemsinvocationresponse/result-data.dictionary

# PlayMediaIntentHandlingResolveMediaItemsInvocationResponse.Result

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The results of resolving the media items in an intent to play media.

## Declaration

```
object PlayMediaIntentHandlingResolveMediaItemsInvocationResponse.Result
```

## Properties

- `resolutionResult` — `[PlayMediaMediaItemResolutionResult]` (required): A collection of media items that fulfill the intent, or information about why your service can’t provide media items.
