> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/protocolexceptioninvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/protocolexceptioninvocationresponse)

# ProtocolExceptionInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A response object that indicates when the service fails to process the client’s request.

## Declaration

```
object ProtocolExceptionInvocationResponse
```

## Properties

- `exception` — `ProtocolException` (required): The reason your service can’t provide a response.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `ProtocolException`

<a id="Discussion"></a>

## Discussion

When your service receives a well-formed request, but it can’t fulfill the intent, use an [IntentResponse](intentresponse.md) or [IntentResolutionResult](intentresolutionresult.md) instead of a `ProtocolExceptionInvocationResponse`. Those objects allow the client to provide more specific information to the user about errors that occur.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Exceptions

- [ProtocolException](protocolexception.md): An exception response from a media service.
- [ProtocolExceptionReason](protocolexceptionreason.md): Categories of exceptions a service can encounter.
