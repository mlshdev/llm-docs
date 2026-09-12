> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/transferring-management-of-apps-to-declarative-management](https://developer.apple.com/documentation/devicemanagement/transferring-management-of-apps-to-declarative-management)

# Transferring management of apps to declarative management

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Article

Transition apps to declarative management.

<a id="overview"></a>

## Overview

A device management service can transfer management of an MDM-managed app to declarative management. With this feature, you can seamlessly transition to declarative management and not have to remove the app before managing it again.

<a id="Transfer-app-management"></a>

## Transfer app management

To transfer management of an existing MDM-managed app, a device management service provides a [AppManaged](appmanaged.md) configuration to the device. If the app is from the App Store, the service sets the configuration’s `AppStoreID` or `BundleID` key to match the app. If the app is an enterprise app, the service sets the configuration’s `ManifestURL` key to the same manifest document URL from the MDM [Install Application](install-application-command.md) command that installed the app. The device takes over management of the app when it applies the configuration.

MDM commands for installing, listing, and removing managed apps don’t operate on declarative managed apps, including those transferred from MDM. Instead, the device management service uses the [AppManaged](appmanaged.md) configuration to control app updates and removal. The service also subscribes to the [StatusAppManagedList](statusappmanagedlist.md) status item to receive reports on all declarative managed apps.

The device management service detects the app’s management transfer by subscribing to two status items: [StatusMDMApp](statusmdmapp.md), which reports MDM-managed app status, and [StatusAppManagedList](statusappmanagedlist.md), which reports declarative managed app status. When the transfer occurs, the managed app’s entry in [StatusMDMApp](statusmdmapp.md) indicates its removal, and a new entry for the app appears in [StatusAppManagedList](statusappmanagedlist.md).
