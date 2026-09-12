> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/build-beta-notifications](https://developer.apple.com/documentation/appstoreconnectapi/build-beta-notifications)

# Build Beta Notifications

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Requests to send notifications to all assigned testers that builds are ready for testing.

<a id="overview"></a>

## Overview

You use a `buildBetaNotifications` resource to manually notify all assigned beta testers that a build is available for testing.

## Topics

### Sending Notifications

- [Send notification of an available build](post-v1-buildbetanotifications.md): Send a notification to all assigned beta testers that a build is available for testing.

### Objects

- [BuildBetaNotification](buildbetanotification.md): A push notification sent to eligible TestFlight testers when a new build is available to install.
- [BuildBetaNotificationCreateRequest](buildbetanotificationcreaterequest.md): The request body you use to create a Build Beta Notification.
- [BuildBetaNotificationResponse](buildbetanotificationresponse.md): The response body for the endpoint that sends a beta test notification for a build.

## See Also

### Build Resources

- [Builds](builds.md): Manage builds for testers and submit builds for review.
- [Build Beta Details](build-beta-details.md): TestFlight-specific information about beta builds.
- [Beta Build Localizations](beta-build-localizations.md): Beta test information about builds, specific to a locale.
