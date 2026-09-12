> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinityintenthandlinginvocation](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintenthandlinginvocation)

# UpdateMediaAffinityIntentHandlingInvocation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A request to process an update media affinity intent.

## Declaration

```
object UpdateMediaAffinityIntentHandlingInvocation
```

## Properties

- `params` — `UpdateMediaAffinityIntentHandlingInvocation.Params` (required): The parameters of this request, including the update media affinity intent.
- `method` — `string` (required): The action for your service to take to process this intent.
  **Allowed values:** `UpdateMediaAffinityIntentHandling.resolveMediaItems`, `UpdateMediaAffinityIntentHandling.resolveAffinityType`, `UpdateMediaAffinityIntentHandling.handle`

## Topics

### Accessing the Intent

- [UpdateMediaAffinityIntentHandlingInvocation.Params](updatemediaaffinityintenthandlinginvocation/params-data.dictionary.md): The parameters of an update media affinity intent request.

## Relationships

### Inherits From

- [Invocation](invocation.md)

## See Also

### Processing an Update Media Affinity Intent

- [UpdateMediaAffinityIntent](updatemediaaffinityintent.md): An object that describes a user’s stated preference regarding media items.
- [UpdateMediaAffinityIntentHandlingInvocationResponse](updatemediaaffinityintenthandlinginvocationresponse.md): The service’s response to a request to process an update media affinity intent.
