> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deploying-apps-with-declarative-management](https://developer.apple.com/documentation/devicemanagement/deploying-apps-with-declarative-management)

# Deploying apps with declarative management

**Interface language:** Data

**Framework:** Device Management

Use declarative app configurations to deploy managed apps to devices.

<a id="overview"></a>

## Overview

Device management services can install, manage, update, configure, and remove apps using the [AppManaged](appmanaged.md) configuration. Devices can report managed app status using the [StatusAppManagedList](statusappmanagedlist.md) status item.

If a device management service already manages an app using the [Install Application](install-application-command.md) or [Install Enterprise Application](install-enterprise-application-command.md) commands, it can convert the app to declarative app management.

In macOS, device management services can install, update, and remove packages using the [Package](package.md) configuration. A device management service can then manage apps that a package installs using an [AppManaged](appmanaged.md) configuration targeting the app. Devices can report package status using the [StatusPackageList](statuspackagelist.md) status item.

## Topics

### Install managed apps

- [Installing, managing, updating, and removing apps](installing-managing-updating-and-removing-apps.md): Use declarative management to handle all aspects of managing apps on devices.
- [Displaying managed apps and packages](displaying-managed-apps-and-packages.md): Use a management app to display managed apps and packages to the user.
- [Installing packages](installing-packages.md): Use declarative package management to install and remove packages in macOS.

### Configure managed apps

- [Configuring managed apps and extensions](configuring-managed-apps-and-extensions.md): Provide managed apps and extensions with app configuration and secrets.
- [Allowing and denying apps and binaries](allowing-and-denying-apps-and-binaries.md): Control what apps and binaries can run on supervised Apple devices.

### Monitor managed apps

- [Processing status for managed apps](processing-status-for-managed-apps.md): Process the status that declarative management reports for managed apps.

### Migrate to declarative app management

- [Transferring management of apps to declarative management](transferring-management-of-apps-to-declarative-management.md): Transition apps to declarative management.

## See Also

- [Installing provisioning profiles on devices](installing-provisioning-profiles-on-devices.md): Deploy provisioning profiles required to run enterprise apps on devices.
