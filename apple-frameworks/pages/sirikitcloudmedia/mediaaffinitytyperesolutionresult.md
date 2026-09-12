> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediaaffinitytyperesolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/mediaaffinitytyperesolutionresult)

# MediaAffinityTypeResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A media affinity that matches an update media affinity intent, or information about why your service can’t determine the media affinity.

## Declaration

```
object MediaAffinityTypeResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `MediaAffinityTypeResolutionResult`
- `success` — `MediaAffinityTypeResolutionResult.Success`: A media affinity that matches the intent.
- `confirmationRequired` — `MediaAffinityTypeResolutionResult.ConfirmationRequired`: A media affinity for the user to confirm or reject before proceeding.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `needsValue` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Specifying the Result

- [MediaAffinityTypeResolutionResult.ConfirmationRequired](mediaaffinitytyperesolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the media affinity before proceeding.
- [MediaAffinityTypeResolutionResult.Success](mediaaffinitytyperesolutionresult/success-data.dictionary.md): A media affinity that successfully matches the intent.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Discerning Like or Dislike

- [MediaAffinityType](mediaaffinitytype.md): A preference or dislike for a media item.
- [UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse](updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse.md): Your service’s response to a request that expresses a preference or dislike for a media item.
