> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/booleanresolutionresult](https://developer.apple.com/documentation/sirikitcloudmedia/booleanresolutionresult)

# BooleanResolutionResult

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A Boolean value that matches an intent parameter, or information about why your service can’t determine the value.

## Declaration

```
object BooleanResolutionResult
```

## Properties

- `class` — `string`: The specific type of result.
  **Allowed values:** `BooleanResolutionResult`
- `success` — `BooleanResolutionResult.Success`: A Boolean value that matches the intent.
- `confirmationRequired` — `BooleanResolutionResult.ConfirmationRequired`: A Boolean value for the user to confirm or reject before proceeding.

<a id="Discussion"></a>

## Discussion

Only provide one of the optional properties. If a client receives a result with more than one outcome, such as `needsValue` and `success`, it arbitrarily chooses one and ignores the rest.

## Topics

### Providing a Result

- [BooleanResolutionResult.ConfirmationRequired](booleanresolutionresult/confirmationrequired-data.dictionary.md): A result that requires the user to confirm the Boolean value before proceeding.
- [BooleanResolutionResult.Success](booleanresolutionresult/success-data.dictionary.md): A Boolean value that successfully matches the intent.

## Relationships

### Inherits From

- [IntentResolutionResult](intentresolutionresult.md)

## See Also

### Intents

- [Intent](intent.md): A user request for your service to fulfill.
- [IntentResponse](intentresponse.md): Your service’s response to an intent.
- [UserActivity](useractivity.md): The context for playing a media queue.
- [IntentResolutionResult](intentresolutionresult.md): An object that matches a parameter of an intent, or information about why your service can’t determine a value for the parameter.
