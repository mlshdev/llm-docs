> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/status](https://developer.apple.com/documentation/appstoreservernotifications/status)

# status

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.8+

The status of an auto-renewable subscription at the time the App Store signs the notification.

## Declaration

```
int32 status
```

## Possible Values

- `1`: The auto-renewable subscription is active.
- `2`: The auto-renewable subscription is expired.
- `3`: The auto-renewable subscription is in a billing retry period.
- `4`: The auto-renewable subscription is in a Billing Grace Period.
- `5`: The auto-renewable subscription is revoked. The App Store refunded the transaction or revoked it from Family Sharing.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

This status value is current as of the `signedDate` in the decoded payload, [responseBodyV2DecodedPayload](responsebodyv2decodedpayload.md).

## See Also

### App metadata and environment

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [bundleVersion](bundleversion.md): The version of the build that identifies an iteration of the bundle.
- [environment](environment.md): The server environment, either sandbox or production.
