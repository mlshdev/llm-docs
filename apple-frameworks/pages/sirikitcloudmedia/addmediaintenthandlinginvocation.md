> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintenthandlinginvocation](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintenthandlinginvocation)

# AddMediaIntentHandlingInvocation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A request to process an add media intent.

## Declaration

```
object AddMediaIntentHandlingInvocation
```

## Properties

- `params` — `AddMediaIntentHandlingInvocation.Params` (required): The parameters of this request, including the add media intent.
- `method` — `string` (required): An action for your service to take to process this intent.
  **Allowed values:** `AddMediaIntentHandling.resolveMediaItems`, `AddMediaIntentHandling.resolveMediaDestination`, `AddMediaIntentHandling.confirm`, `AddMediaIntentHandling.handle`

## Topics

### Accessing the Intent

- [AddMediaIntentHandlingInvocation.Params](addmediaintenthandlinginvocation/params-data.dictionary.md): The parameters of an add media intent request.

## Relationships

### Inherits From

- [Invocation](invocation.md)

## See Also

### Processing an Add Media Intent

- [AddMediaIntent](addmediaintent.md): An object that describes the user’s request to add media items to their library or to a specific playlist.
- [AddMediaIntentHandlingInvocationResponse](addmediaintenthandlinginvocationresponse.md): The service’s response to a request to process an add media intent.
