> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediaaffinitytype](https://developer.apple.com/documentation/sirikitcloudmedia/mediaaffinitytype)

# MediaAffinityType

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

A preference or dislike for a media item.

## Declaration

```
string MediaAffinityType
```

## Possible Values

- `like`: The user likes the media item.
- `dislike`: The user dislikes the media item.
- `unknown`: An unspecified preference.

## See Also

### Discerning Like or Dislike

- [UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse](updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse.md): Your service’s response to a request that expresses a preference or dislike for a media item.
- [MediaAffinityTypeResolutionResult](mediaaffinitytyperesolutionresult.md): A media affinity that matches an update media affinity intent, or information about why your service can’t determine the media affinity.
