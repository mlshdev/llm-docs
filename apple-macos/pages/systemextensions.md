> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions](https://developer.apple.com/documentation/systemextensions)

# System Extensions (Swift)

**Framework:** System Extensions  
**Kind:** Framework  
**Availability:** macOS 10.15+

Install and manage user space code that extends the capabilities of macOS.

## Mentioned In

- [Implementing drivers, system extensions, and kexts](systemextensions/implementing-drivers-system-extensions-and-kexts.md)

<a id="overview"></a>

## Overview

Extend the capabilities of macOS by installing and managing system extensions—drivers and other low-level code—in user space rather than in the kernel. By running in user space, system extensions can’t compromise the security or stability of macOS. The system grants these extensions a high level of privilege, so they can perform the kinds of tasks previously reserved for kernel extensions (KEXTs).

You use frameworks like [DriverKit](https://developer.apple.com/documentation/driverkit), [Endpoint Security](endpointsecurity.md), and [Network Extension](https://developer.apple.com/documentation/networkextension) to write your system extension, and you package the extension in your app bundle. At runtime, use the SystemExtensions framework to install or update the extension on the user’s system. Once installed, an extension remains available for all users on the system. Users can disable the extension by deleting the app, which deletes the extension.

<a id="Configure-the-system-extension-and-the-host-app"></a>

### Configure the system extension and the host app

To successfully activate your extension, you must adhere to the following rules:

- The extension must match your bundle identifier, excluding file extension. For example, a DriverKit extension with bundle identifier `com.example.usbdriver` must use the filename `com.example.usbdriver.dext`. Similarly, a NetworkExtension extension with bundle identifier `com.example.networkextension` must use the filename `com.example.networkextension.systemextension`.
- You must use the same Team ID when signing the extension that you use for signing your app, unless the extension has the `com.apple.developer.system-extension.redistributable` entitlement.
- You must either distribute your app and extension through the Mac App Store, or notarize them. See [Notarizing macOS software before distribution](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution) to learn more about notarization.

## Topics

### Essentials

- [Implementing drivers, system extensions, and kexts](systemextensions/implementing-drivers-system-extensions-and-kexts.md): Create drivers and system extensions to communicate with hardware and provide low-level services, and only use kernel extensions for a few tasks.
- [Debugging and testing system extensions](https://developer.apple.com/documentation/driverkit/debugging-and-testing-system-extensions): Debug your system extensions by temporarily disabling the security checks that macOS performs during the installation process.
- [System Extension Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.install): A Boolean value that indicates whether your app has permission to activate or deactivate system extensions.

### Usage descriptions

- [NSSystemExtensionUsageDescriptionKey](systemextensions/nssystemextensionusagedescriptionkey.md): A message that tells the user why the app is trying to install a system extension bundle.
- [OSBundleUsageDescriptionKey](systemextensions/osbundleusagedescriptionkey.md): A message that tells the user why the app is trying to install a driver extension bundle.

### Extension activation and deactivation

- [Installing System Extensions and Drivers](systemextensions/installing-system-extensions-and-drivers.md): Activate system extensions and drivers to make them available to the system, and update or deactivate them as needed.
- [OSSystemExtensionManager](systemextensions/ossystemextensionmanager.md): A type that facilitates activation and deactivation of system extensions.
- [OSSystemExtensionRequest](systemextensions/ossystemextensionrequest.md): A request to activate or deactivate a system extension.
- [System Extension Redistributable Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable): A Boolean value that indicates whether other development teams may distribute a system extension you create.

### Errors

- [OSSystemExtensionError](systemextensions/ossystemextensionerror.md): An error that describes a failed extension manager request.
- [OSSystemExtensionError.Code](systemextensions/ossystemextensionerror/code.md): Error codes for system extensions.
- [OSSystemExtensionErrorDomain](systemextensions/ossystemextensionerrordomain.md): The error domain identifying system extension errors.

### Reference

- [SystemExtensions Constants](systemextensions/systemextensions-constants.md)

### Classes

- [OSSystemExtensionInfo](systemextensions/ossystemextensioninfo.md)
- [OSSystemExtensionsWorkspace](systemextensions/ossystemextensionsworkspace.md)

### Protocols

- [OSSystemExtensionsWorkspaceObserver](systemextensions/ossystemextensionsworkspaceobserver.md)

# System Extensions (Objective-C)

**Framework:** System Extensions  
**Kind:** Framework  
**Availability:** macOS 10.15+

Install and manage user space code that extends the capabilities of macOS.

## Mentioned In

- [Implementing drivers, system extensions, and kexts](systemextensions/implementing-drivers-system-extensions-and-kexts.md)

<a id="overview"></a>

## Overview

Extend the capabilities of macOS by installing and managing system extensions—drivers and other low-level code—in user space rather than in the kernel. By running in user space, system extensions can’t compromise the security or stability of macOS. The system grants these extensions a high level of privilege, so they can perform the kinds of tasks previously reserved for kernel extensions (KEXTs).

You use frameworks like [DriverKit](https://developer.apple.com/documentation/driverkit), [Endpoint Security](endpointsecurity.md), and [Network Extension](https://developer.apple.com/documentation/networkextension) to write your system extension, and you package the extension in your app bundle. At runtime, use the SystemExtensions framework to install or update the extension on the user’s system. Once installed, an extension remains available for all users on the system. Users can disable the extension by deleting the app, which deletes the extension.

<a id="Configure-the-system-extension-and-the-host-app"></a>

### Configure the system extension and the host app

To successfully activate your extension, you must adhere to the following rules:

- The extension must match your bundle identifier, excluding file extension. For example, a DriverKit extension with bundle identifier `com.example.usbdriver` must use the filename `com.example.usbdriver.dext`. Similarly, a NetworkExtension extension with bundle identifier `com.example.networkextension` must use the filename `com.example.networkextension.systemextension`.
- You must use the same Team ID when signing the extension that you use for signing your app, unless the extension has the `com.apple.developer.system-extension.redistributable` entitlement.
- You must either distribute your app and extension through the Mac App Store, or notarize them. See [Notarizing macOS software before distribution](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution) to learn more about notarization.

## Topics

### Essentials

- [Implementing drivers, system extensions, and kexts](systemextensions/implementing-drivers-system-extensions-and-kexts.md): Create drivers and system extensions to communicate with hardware and provide low-level services, and only use kernel extensions for a few tasks.
- [Debugging and testing system extensions](https://developer.apple.com/documentation/driverkit/debugging-and-testing-system-extensions): Debug your system extensions by temporarily disabling the security checks that macOS performs during the installation process.
- [System Extension Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.install): A Boolean value that indicates whether your app has permission to activate or deactivate system extensions.

### Usage descriptions

- [NSSystemExtensionUsageDescriptionKey](systemextensions/nssystemextensionusagedescriptionkey.md): A message that tells the user why the app is trying to install a system extension bundle.
- [OSBundleUsageDescriptionKey](systemextensions/osbundleusagedescriptionkey.md): A message that tells the user why the app is trying to install a driver extension bundle.

### Extension activation and deactivation

- [Installing System Extensions and Drivers](systemextensions/installing-system-extensions-and-drivers.md): Activate system extensions and drivers to make them available to the system, and update or deactivate them as needed.
- [OSSystemExtensionManager](systemextensions/ossystemextensionmanager.md): A type that facilitates activation and deactivation of system extensions.
- [OSSystemExtensionRequest](systemextensions/ossystemextensionrequest.md): A request to activate or deactivate a system extension.
- [System Extension Redistributable Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable): A Boolean value that indicates whether other development teams may distribute a system extension you create.

### Errors

- [OSSystemExtensionErrorCode](systemextensions/ossystemextensionerror/code.md): Error codes for system extensions.
- [OSSystemExtensionErrorDomain](systemextensions/ossystemextensionerrordomain.md): The error domain identifying system extension errors.

### Reference

- [SystemExtensions Constants](systemextensions/systemextensions-constants.md)

### Classes

- [OSSystemExtensionInfo](systemextensions/ossystemextensioninfo.md)
- [OSSystemExtensionsWorkspace](systemextensions/ossystemextensionsworkspace.md)

### Protocols

- [OSSystemExtensionsWorkspaceObserver](systemextensions/ossystemextensionsworkspaceobserver.md)
