> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/testing-app-store-server-notifications](https://developer.apple.com/documentation/storekit/testing-app-store-server-notifications)

# Testing App Store server notifications

**Interface languages:** Swift, Objective-C

**Framework:** StoreKit  
**Kind:** Article

Confirm that App Store Server Notifications service responds properly in the sandbox environment.

<a id="overview"></a>

## Overview

If you enabled notifications from the App Store for your app, test your logic for transactions in the sandbox environment. To determine if a notification for a subscription event occurred in the test environment, check whether the value of the `environment` field equals `Sandbox` in the [data](../appstoreservernotifications/data.md) object of the App Store Server Notifications [responseBodyV2DecodedPayload](../appstoreservernotifications/responsebodyv2decodedpayload.md) object.

For more information about the App Store Server Notifications service, see [App Store Server Notifications](../appstoreservernotifications.md). To ask the App Store to send test notifications, and to get a history of notifications sent to your server, see [Request a Test Notification](../appstoreserverapi/request-a-test-notification.md) and [Get Notification History](../appstoreserverapi/get-notification-history.md) in the [App Store Server API](../appstoreserverapi.md).
