> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/adding-the-virtualization-entitlement-to-your-project](https://developer.apple.com/documentation/virtualization/adding-the-virtualization-entitlement-to-your-project)

# Adding the Virtualization Entitlement to Your Project

**Interface languages:** Swift, Objective-C

**Framework:** Virtualization  
**Kind:** Article

Configure your project to use the Virtualization framework.

<a id="overview"></a>

## Overview

To use the Virtualization APIs, a process must have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

Do the following to add this entitlement to your app:

1. In your project’s “Signing & Capabilities” panel, turn on the App Sandbox. This creates a new entitlement file in your project with the same name as the app target.
2. Select the entitlements file.
3. Click the Add button (+) to add a new property to the entitlements file.
4. Select “Virtualization” from the new property’s type popup menu.
5. Set its value to `YES`.
6. Unless your app requires it in support of another capability, you can remove the app sandbox entitlement key that Xcode creates by default by selecting it and clicking the Remove button (-).

The entitlements file resembles the example settings shown below:

![A screenshot that shows an entitlements file with the settings that allow the use of Virtualization framework.](https://developer.apple.com/images/com.apple.virtualization/media-4056508@2x.png)

## See Also

### Essentials

- [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization): A Boolean value that indicates whether your app can use the Virtualization framework.
- [Using iCloud with macOS virtual machines](using-icloud-with-macos-virtual-machines.md): Access iCloud from macOS guest virtual machines.
