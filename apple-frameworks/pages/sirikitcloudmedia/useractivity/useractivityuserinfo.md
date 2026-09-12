> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/useractivity/useractivityuserinfo](https://developer.apple.com/documentation/sirikitcloudmedia/useractivity/useractivityuserinfo)

# UserActivity.UserActivityUserInfo

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A dictionary that contains service-specific state information necessary to continue an activity in a separate request.

## Declaration

```
object UserActivity.UserActivityUserInfo
```

<a id="Discussion"></a>

## Discussion

Customize the contents of this dictionary with information your service needs to continue a playback activity. Limit the size of this object to 8 kilobytes. The client doesn’t preserve the order of sets or dictionary keys, and may minimize or remove optional whitespace. The client may apply Unicode canonicalization rules to keys or values.
