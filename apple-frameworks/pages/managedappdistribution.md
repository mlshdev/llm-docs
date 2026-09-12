> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution](https://developer.apple.com/documentation/managedappdistribution)

# ManagedAppDistribution

**Framework:** ManagedAppDistribution  
**Kind:** Framework  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

Manage the distribution of apps within an organization.

<a id="Overview"></a>

## Overview

*Managed apps* are featured, downloadable apps that an enterprise, educational, or other institution provides to its employees or students. The Managed App Distribution framework allows developers of device management solutions to vend these managed apps. The framework verifies that someone initiated an app installation, provides status and download progress, and can launch the app once it’s downloaded.

> **Important**

> The [Managed App Installation UI](bundleresources/entitlements/com.apple.developer.managed-app-distribution.install-ui.md) entitlement is required to use this framework.

![An image of an iPhone showing an app with a banner image along the top of the screen. The middle of the screen contains two app banners, one top of the other. Each app banner contains a title, subtitle, and an install button.](https://developer.apple.com/images/com.apple.ManagedAppDistribution/managed-app-distribution@2x.png)

The Managed App Distribution framework works with declarative management to provide a list of managed apps that are assigned to a device. Your app can sort or filter the list of managed apps, and request a view from the Managed App Distribution framework to display. See [Integrating declarative management](devicemanagement/integrating-declarative-management.md) for more information.

## Topics

### Essentials

- [Fetching and displaying managed apps](managedappdistribution/fetching-and-displaying-managed-apps.md): Provide a consistent app presentation when displaying managed apps.
- [ManagedApp](managedappdistribution/managedapp.md): A representation of a managed app.
- [ManagedAppLibrary](managedappdistribution/managedapplibrary.md): A representation of a library of managed apps.

### App information

- [Platform](managedappdistribution/platform.md): The supported platform for the app.

### View creation

- [ManagedAppView](managedappdistribution/managedappview.md): A view that displays a managed app.
- [ManagedContentView](managedappdistribution/managedcontentview.md)
- [ManagedContentOfferState](managedappdistribution/managedcontentofferstate.md): The state for a managed content view offer.
- [ManagedContentStyle](managedappdistribution/managedcontentstyle.md): A type that applies a custom appearance to the managed content view.

### Errors

- [ManagedAppDistributionError](managedappdistribution/managedappdistributionerror.md): Codes that identify errors in Managed App Distribution.

### Classes

- [ManagedPackageLibrary](managedappdistribution/managedpackagelibrary.md): A representation of a library of managed packages.

### Structures

- [ManagedPackage](managedappdistribution/managedpackage.md): A representation of a managed package.
- [ManagedPackageView](managedappdistribution/managedpackageview.md): A view that displays information and controls for a managed software package.
