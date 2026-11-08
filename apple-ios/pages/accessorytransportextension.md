> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension

# Accessory Transport Extension

**Framework:** Accessory Transport Extension  
**Kind:** Framework  
**Availability:** iOS 26.2+

Transfer data securely to connected accessories that you develop.

<a id="overview"></a>

## Overview

Use the Accessory Transport Extension framework to securely transfer information to an accessory that you develop. First, establish a connection with your accessory using [AccessorySetupKit](accessorysetupkit.md). Then, implement extensions for the features your app needs. The number and type of extensions, and their data semantics, depend on your app’s and accessory’s use case.

The framework carries each kind of data between your accessory and your app as a *feature* — for example, notification forwarding, [LiveActivityForwarding](accessoryliveactivities/liveactivityforwarding.md), [AudioAccessoryHeadTracking](audioaccessorykit/audioaccessoryheadtracking.md), or background work with [AccessoryWorker](accessorytransportextension/accessoryworker.md). The framework defines the set of features; your app declares the ones it supports in its data provider extension. For more information, see [Accessory features](accessorytransportextension/accessory-features.md).

> **Important**

> This framework is available only for iOS. The framework ignores calls for apps built with Mac Catalyst, and iOS apps that run on visionOS or on Mac computers with Apple silicon.
>
> You can develop and test an app that uses this framework on devices in any region. Customer installations of your app can only use the framework on devices located in the EU that are signed in with an Apple Account with an EU country or region.

<a id="Share-a-Wi-Fi-network-with-an-accessory"></a>

## Share a Wi-Fi network with an accessory

Implement the [AccessoryTransportAppExtension](accessorytransportextension/accessorytransportappextension.md) protocol in an extension to share Wi-Fi networks with your accessory. The system calls your extension’s [accept(sessionRequest:)](accessorytransportextension/accessorytransportappextension/accept%28sessionrequest_%29.md) method when it’s ready to start. After accepting the session request, your extension connects to the accessory using [ASAccessorySession](accessorysetupkit/asaccessorysession.md) and delivers Wi-Fi network data using [WINetworkSharingProvider](wifiinfrastructure/winetworksharingprovider.md).

<a id="Forward-notifications-and-Live-Activities-to-an-accessory"></a>

## Forward notifications and Live Activities to an accessory

Using this framework along with [Accessory Notifications](accessorynotifications.md), your app can receive iOS system notifications to send alerts to people on a connected accessory that you develop. Implement three extensions to maintain security and encapsulation:

1. [AccessoryDataProvider](accessorytransportextension/accessorydataprovider.md) receives and curates the content of a given notification.
2. The system encrypts the notification data using keys you provide in your [AccessoryTransportSecurity](accessorytransportextension/accessorytransportsecurity.md) extension.
3. The system delivers the encrypted data to your [AccessoryTransportAppExtension](accessorytransportextension/accessorytransportappextension.md) for transmission to the accessory.

Your transport extension sends the encrypted data to your accessory, but can’t decipher the notification’s content.

[Accessory Live Activities](accessoryliveactivities.md) forwarding uses the same three extensions. Add the [LiveActivityForwarding](accessoryliveactivities/liveactivityforwarding.md) capability to the [AccessoryDataProvider](accessorytransportextension/accessorydataprovider.md) extension you already implement for notifications, and Live Activity updates and alerts travel the same encrypted path to your accessory.

<a id="Run-tasks-in-the-background"></a>

## Run tasks in the background

With [AccessoryWorker](accessorytransportextension/accessoryworker.md), your app can exchange information with your accessory in the background without waiting for a person to open your app. If someone adjusts a setting on the accessory, for instance, that change reaches the iPhone quietly. When the person opens the companion app, the UI can reflect what happened on the accessory right away.

Your app defines the purpose of the exchanged data and its format; the system carries the data between your extensions in the background. When your accessory has something to report, your transport extension receives the update and passes it to your data provider extension, which saves the result for the companion app to read at next launch.

## Topics

### Wi-Fi network sharing

- [AccessoryTransportAppExtension](accessorytransportextension/accessorytransportappextension.md): A protocol for an extension that transmits data to an accessory you develop.
- [AccessoryTransportExtensionConfiguration](accessorytransportextension/accessorytransportextensionconfiguration.md): An interface that enables you to configure and manage communication between your extension and the system.
- [AccessoryTransportSession](accessorytransportextension/accessorytransportsession.md): A class that manages a transport session between the extension and the system.
- [Wi-Fi Infrastructure](wifiinfrastructure.md): Share Wi-Fi network credentials securely between devices and connected accessories.

### Notification and Live Activity forwarding

- [Receiving iOS notifications on an accessory](accessorytransportextension/receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [Receiving Live Activity updates and alerts on an accessory](accessoryliveactivities/receiving-live-activities-on-an-accessory.md): Enable your accessory to receive forwarded Live Activities by updating your data provider extension.
- [Forwarding notifications to your accessory using the internet transport type](accessorytransportextension/forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md): Send notification data to your accessory over the internet when Bluetooth connectivity is unavailable.
- [AccessoryDataProvider](accessorytransportextension/accessorydataprovider.md): A protocol for an extension that provides your accessory’s data for one or more of the framework’s features.
- [AccessoryDataProviderConfiguration](accessorytransportextension/accessorydataproviderconfiguration.md): A protocol that configures and manages communication between the extension and the system.
- [AccessoryTransportSecurity](accessorytransportextension/accessorytransportsecurity.md): A protocol for an extension that handles cryptographic key exchange with your accessory.
- [AccessoryTransportSecurityConfiguration](accessorytransportextension/accessorytransportsecurityconfiguration.md): A protocol that configures and manages communication between your security extension and the system.
- [Accessory Notifications](accessorynotifications.md): Receive forwarded iOS system notifications on an accessory that you develop.
- [Accessory Live Activities](accessoryliveactivities.md): Forward Live Activity alerts from iPhone to an accessory you develop.

### Transport messaging and security

- [AccessoryMessage](accessorytransportextension/accessorymessage.md): A structure that represents a message to send to an accessory.
- [AccessorySecuritySession](accessorytransportextension/accessorysecuritysession.md): A class that manages a security session between the extension and the system.
- [TransportMessage](accessorytransportextension/transportmessage.md): A structure that represents a message for transmission between the system and an accessory.
- [SecurityMessage](accessorytransportextension/securitymessage.md): A structure that carries key material for a secure channel between the system and an accessory.
- [AccessoryTransport](accessorytransportextension/accessorytransport.md): Transport methods for communicating with an accessory.

### Feature catalog

- [Accessory features](accessorytransportextension/accessory-features.md): Declare and handle the features that carry data between your accessory and your app.

### Background work

- [Sending data to an accessory in the background](accessorytransportextension/sending-data-to-an-accessory-in-the-background.md): Move data between your accessory and your app when a person’s device is asleep or your app is in the background.
- [AccessoryWorker](accessorytransportextension/accessoryworker.md): Beta. A feature that carries data between your data provider and transport extensions.
- [AccessoryGPUWorker](accessorytransportextension/accessorygpuworker.md): Beta. A feature for GPU work that carries data between your data provider and transport extensions.

### Protocols

- [AccessoryFeatureAuthorizing](accessorytransportextension/accessoryfeatureauthorizing.md): Beta. A feature that is authorized separately on each accessory.
