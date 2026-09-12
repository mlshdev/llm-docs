> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetanotification](https://developer.apple.com/documentation/appstoreconnectapi/buildbetanotification)

# BuildBetaNotification

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A push notification sent to eligible TestFlight testers when a new build is available to install.

## Declaration

```
object BuildBetaNotification
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `buildBetaNotifications`

## See Also

### Objects

- [BuildBetaNotificationCreateRequest](buildbetanotificationcreaterequest.md): The request body you use to create a Build Beta Notification.
- [BuildBetaNotificationResponse](buildbetanotificationresponse.md): The response body for the endpoint that sends a beta test notification for a build.
