> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediamediaitemresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/playmediamediaitemresolutionresult)

# PlayMediaMediaItemResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media item that matches a play media intent, or information about why your service can’t provide a media item.

## Declaration

```
object PlayMediaMediaItemResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `PlayMediaMediaItemResolutionResult`
- `success` — `PlayMediaMediaItemResolutionResult.Success`: A media item that successfully matches the intent.
- `confirmationRequired` — `PlayMediaMediaItemResolutionResult.ConfirmationRequired`: A media item for the user to confirm as a match.
- `disambiguation` — `PlayMediaMediaItemResolutionResult.Disambiguation`: Multiple media items for the user to choose from.
- `unsupported` — `PlayMediaMediaItemResolutionResult.Unsupported`: Information about why your service can’t resolve the media item.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `unsupported` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Specifying a Result

- [PlayMediaMediaItemResolutionResult.Success](playmediamediaitemresolutionresult/success-data.dictionary.md): A media item that successfully matches the intent.
- [PlayMediaMediaItemResolutionResult.Unsupported](playmediamediaitemresolutionresult/unsupported-data.dictionary.md): The reason your service can’t play the requested media item.
- [PlayMediaMediaItemResolutionResult.Disambiguation](playmediamediaitemresolutionresult/disambiguation-data.dictionary.md): A result that requires the user to choose from multiple media items before proceeding.
- [PlayMediaMediaItemResolutionResult.ConfirmationRequired](playmediamediaitemresolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media item before proceeding.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Resolving a Media Item

- [PlayMediaIntentHandlingResolveMediaItemsInvocationResponse](playmediaintenthandlingresolvemediaitemsinvocationresponse.md): Your service’s response to a request to resolve media items in a play media intent.
- [PlayMediaMediaItemUnsupportedReason](playmediamediaitemunsupportedreason.md): Reasons the media service can’t play the media item.
