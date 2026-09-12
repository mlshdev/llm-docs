> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/invocation](https://developer.apple.com/documentation/sirikitcloudmedia/invocation)

# Invocation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Properties that clients include in requests to all intent endpoints.

## Declaration

```
object Invocation
```

## Properties

- `method` — `string` (required): The action your service takes to process this intent.
- `params` — `Invocation.Params` (required): Additional properties specific to an invocation.
- `session` — `Session`: The client’s information about this series of requests and responses.

## Topics

### Accessing the Details of a Request

- [Invocation.Params](invocation/params-data.dictionary.md): The parameters of a client’s request.

## Relationships

### Inherited By

- [AddMediaIntentHandlingInvocation](addmediaintenthandlinginvocation.md)
- [PlayMediaIntentHandlingInvocation](playmediaintenthandlinginvocation.md)
- [UpdateMediaAffinityIntentHandlingInvocation](updatemediaaffinityintenthandlinginvocation.md)

## See Also

### Requests

- [Session](session.md): Information the client provides about a sequence of requests and responses to process an intent.
- [Constraints](constraints.md): Client-originated limitations on how to process a request, such as including explicit content and how much content the client device can receive in a response.
- [PlayerContext](playercontext.md): Information about the current playback content.
- [InvocationResponse](invocationresponse.md): Properties to include in responses from all intent endpoints.
