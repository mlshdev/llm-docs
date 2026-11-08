> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorydataprovider

# AccessoryDataProvider

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol for an extension that provides your accessory’s data for one or more of the framework’s features.

## Declaration

```swift
protocol AccessoryDataProvider : AppExtension, Sendable where Self.Configuration : AccessoryDataProviderConfiguration
```

## Mentioned In

- [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md)
- [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md)
- [Forwarding notifications to your accessory using the internet transport type](forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="overview"></a>

## Overview

Implement this protocol in an extension with an `EXExtensionPointIdentifier` value of `com.apple.accessory-data-provider` to support features such as forwarding iOS system notifications, forwarding Live Activities, or running your own background work on an accessory that you develop. The extension runs in a sandboxed environment and communicates with the system through the extension’s configuration object ([AccessoryDataProviderConfiguration](accessorydataproviderconfiguration.md)). For more information about features, see [Accessory features](accessory-features.md).

> **Important**

> The system requires your app extension to have the [com.apple.developer.accessory-data-provider](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.accessory-data-provider) entitlement to use this protocol.

<a id="Add-the-necessary-target-configuration"></a>

## Add the necessary target configuration

In your extension’s target properties, include the `EXCapabilities` key with a value for each feature you support. For example, an extension that forwards iOS system notifications sets this value to `AccessoryNotifications.NotificationsForwarding`:

```xml
<plist>
    <dict>
        <key>EXAppExtensionAttributes</key>
        <dict>
            <key>EXExtensionPointIdentifier</key>
            <string>com.apple.accessory-data-provider</string>
            <key>EXCapabilities</key>
            <array>
                <string>AccessoryNotifications.NotificationsForwarding</string>
            </array>
        </dict>
    </dict>
</plist>
```

<a id="Implement-the-extension-point"></a>

## Implement the extension point

In your extension’s Swift code, implement the protocol and declare each feature you support in the `extensionPoint` body. The following example declares the [NotificationsForwarding](../accessorynotifications/notificationsforwarding.md) feature with a handler that conforms to [NotificationsForwarding.AccessoryNotificationsHandler](../accessorynotifications/notificationsforwarding/accessorynotificationshandler.md); other features, such as [AccessoryWorker](accessoryworker.md), [LiveActivityForwarding](../accessoryliveactivities/liveactivityforwarding.md), or [AudioAccessoryHeadTracking](../audioaccessorykit/audioaccessoryheadtracking.md), follow the same strategy with their own handler type:

```swift
@main
struct DataProvider: AccessoryDataProvider {
    var extensionPoint: AppExtensionPoint {
        Identifier("com.apple.accessory-data-provider")
        Implementing {
            NotificationsForwarding {
                MyNotificationsHandler()
            }
        }
    }
}

class MyNotificationsHandler: AccessoryNotificationsHandler {
    // Your extension's implementation.
}
```

<a id="Share-data-between-the-app-and-the-extension"></a>

## Share data between the app and the extension

Configure a shared app group so your companion app can provide information to the extension. The extension has read-only access to the shared container, with one exception: [AccessoryWorker](accessoryworker.md) has write access, so it can save information for your companion app to read the next time it launches. The system groups the features your extension declares into separate sandboxed processes by feature, and only the process hosting [AccessoryWorker](accessoryworker.md) has this exception; [AccessoryGPUWorker](accessorygpuworker.md) and every other feature are read-only, even when your extension target declares both. Use the shared container to store:

- Authentication tokens for your private servers
- Accessory-specific preferences (max payload size, content filtering)
- Device-specific configuration

```swift
// In the companion app, write to the shared container.
let sharedDefaults = UserDefaults(suiteName: "group.com.yourcompany.accessoryapp")
sharedDefaults?.set(authToken, forKey: "ServerAuthToken")

// In the extension, read from the shared container.
let sharedDefaults = UserDefaults(suiteName: "group.com.yourcompany.accessoryapp")
let authToken = sharedDefaults?.string(forKey: "ServerAuthToken")
```

For more information, see [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md) and [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md).

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification and Live Activity forwarding

- [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [Receiving Live Activity updates and alerts on an accessory](../accessoryliveactivities/receiving-live-activities-on-an-accessory.md): Enable your accessory to receive forwarded Live Activities by updating your data provider extension.
- [Forwarding notifications to your accessory using the internet transport type](forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md): Send notification data to your accessory over the internet when Bluetooth connectivity is unavailable.
- [AccessoryDataProviderConfiguration](accessorydataproviderconfiguration.md): A protocol that configures and manages communication between the extension and the system.
- [AccessoryTransportSecurity](accessorytransportsecurity.md): A protocol for an extension that handles cryptographic key exchange with your accessory.
- [AccessoryTransportSecurityConfiguration](accessorytransportsecurityconfiguration.md): A protocol that configures and manages communication between your security extension and the system.
- [Accessory Notifications](../accessorynotifications.md): Receive forwarded iOS system notifications on an accessory that you develop.
- [Accessory Live Activities](../accessoryliveactivities.md): Forward Live Activity alerts from iPhone to an accessory you develop.
