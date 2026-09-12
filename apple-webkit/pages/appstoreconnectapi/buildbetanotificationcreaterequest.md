> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetanotificationcreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/buildbetanotificationcreaterequest)

# BuildBetaNotificationCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to create a Build Beta Notification.

## Declaration

```
object BuildBetaNotificationCreateRequest
```

## Properties

- `data` — `BuildBetaNotificationCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BuildBetaNotificationCreateRequest.Data](buildbetanotificationcreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BuildBetaNotification](buildbetanotification.md): A push notification sent to eligible TestFlight testers when a new build is available to install.
- [BuildBetaNotificationResponse](buildbetanotificationresponse.md): The response body for the endpoint that sends a beta test notification for a build.
