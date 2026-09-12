> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetanotificationresponse](https://developer.apple.com/documentation/appstoreconnectapi/buildbetanotificationresponse)

# BuildBetaNotificationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for the endpoint that sends a beta test notification for a build.

## Declaration

```
object BuildBetaNotificationResponse
```

## Properties

- `data` — `BuildBetaNotification` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Related Documentation

- [Send notification of an available build](post-v1-buildbetanotifications.md): Send a notification to all assigned beta testers that a build is available for testing.

### Objects

- [BuildBetaNotification](buildbetanotification.md): A push notification sent to eligible TestFlight testers when a new build is available to install.
- [BuildBetaNotificationCreateRequest](buildbetanotificationcreaterequest.md): The request body you use to create a Build Beta Notification.
