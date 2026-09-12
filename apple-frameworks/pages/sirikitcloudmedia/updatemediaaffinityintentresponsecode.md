> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinityintentresponsecode](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintentresponsecode)

# UpdateMediaAffinityIntentResponseCode

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Codes your service can return when handling an update media affinity intent.

## Declaration

```
string UpdateMediaAffinityIntentResponseCode
```

## Possible Values

- `success`: Your service successfully updates information about the media affinity.
- `inProgress`: Your service is handling the intent, but it may take some time.
- `failureRequiringAppLaunch`: The user needs to launch your app on their iOS device to resolve a problem.
- `failure`: A failure occurs while handling the intent.
- `unspecified`: An unspecified response code.

## See Also

### Handling an Update Media Affinity Intent

- [UpdateMediaAffinityIntentHandlingHandleInvocationResponse](updatemediaaffinityintenthandlinghandleinvocationresponse.md): Your service’s response to a request to handle a fully resolved update media affinity intent.
- [UpdateMediaAffinityIntentResponse](updatemediaaffinityintentresponse.md): A structure that contains a response code indicating how your service handles an update media affinity intent.
