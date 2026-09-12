> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/environment](https://developer.apple.com/documentation/appstoreservernotifications/environment)

# environment

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The server environment, either sandbox or production.

## Declaration

```
string environment
```

## Possible Values

- `Sandbox`: Indicates that the notification applies to testing in the sandbox environment.
- `Production`: Indicates that the notification applies to the production environment.

<a id="Discussion"></a>

## Discussion

You receive notifications in the sandbox environment when you opt in to receive notifications in the sandbox environment and test your app in the sandbox environment. TestFlight also uses the sandbox environment to send notifications. To opt in to receive notifications, see [Enter a URL for App Store Server Notifications](https://help.apple.com/app-store-connect/#/dev0067a330b). For more information about testing, see [Testing at all stages of development with Xcode and the sandbox](../storekit/testing-at-all-stages-of-development-with-xcode-and-the-sandbox.md), and [Beta Testing Made Simple with TestFlight](https://developer.apple.com/testflight/).

## See Also

### App metadata and environment

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [bundleVersion](bundleversion.md): The version of the build that identifies an iteration of the bundle.
- [status](status.md): The status of an auto-renewable subscription at the time the App Store signs the notification.
