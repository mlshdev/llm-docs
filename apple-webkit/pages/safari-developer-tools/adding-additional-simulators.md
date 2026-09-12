> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/safari-developer-tools/adding-additional-simulators](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)

# Adding additional simulators

**Framework:** Safari Developer Features  
**Kind:** Article

Add simulators for different devices and iOS versions to use for web development.

<a id="Overview"></a>

## Overview

A Simulator runtime is an OS package that Simulator loads when booting a device, which is specific to a particular OS and version. Simulator runtimes are then used by numerous different Simulators with different device types, like iPhone 16 or iPad Pro.

If you want to test on another platform or OS version, you need to add the Simulator runtime for that platform, and then create a new Simulator.

<a id="Install-and-uninstall-Simulator-runtimes"></a>

## Install and uninstall Simulator runtimes

<a id="Adding-a-Simulator-runtime"></a>

### Adding a Simulator runtime

1. In Xcode, from the menu bar, choose **Xcode** \> **Settings…**.
2. Go to the **Components** tab.
3. The Platform Support section shows the latest versions of available platform and Simulator runtimes. Click the **Get** button next to the one you need.
4. If you need a previously released Simulator runtime, click the Add button (**+**) in the lower left corner, and then select a platform to view a list of available versions.
5. Select a version and click **Download & Install**.

<a id="Removing-a-Simulator-runtime"></a>

### Removing a Simulator runtime

To recover storage space from unused Simulator runtimes:

1. In Xcode, from the menu bar, choose **Xcode** \> **Settings…**.
2. Go to the **Components** tab.
3. Select the Simulator runtime you wish to remove.
4. Click the Delete button (**–**) in the lower left corner.
5. Click **Delete** in the confirmation dialog.

<a id="Add-and-remove-Simulators"></a>

## Add and remove Simulators

<a id="Adding-a-Simulator"></a>

### Adding a Simulator

1. In Xcode, from the menu bar, choose **Window** \> **Devices and Simulators**.
2. Choose **Simulators** at the top of the sidebar.
3. Click the Add button (**+**) in the lower left corner.
4. Choose a **Device Type** and **OS Version** for your simulator, and optionally provide it with a name.
5. Click **Create** to create the new simulator.

<a id="Removing-a-Simulator"></a>

### Removing a Simulator

1. In Xcode, from the menu bar, choose **Window** \> **Devices and Simulators**.
2. Choose **Simulators** at the top of the sidebar.
3. Control-click on the Simulator you wish to remove.
4. Choose **Delete** from the pop-up menu.
5. Click **Delete** in the confirmation dialog.

> **Tip**

> Simulators can also be [managed from the terminal](https://developer.apple.com/documentation/xcode/installing-additional-simulator-runtimes#Install-and-manage-Simulator-runtimes-from-the-command-line).

## See Also

### Simulators

- [Installing Xcode and Simulators](installing-xcode-and-simulators.md): Install simulators to use for web development.
