> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/hardware_families/usb/building_a_simple_usb_driver](https://developer.apple.com/documentation/kernel/hardware_families/usb/building_a_simple_usb_driver)

# Building a Simple USB Driver

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Sample Code  
**Availability:** macOS 10.15+ · Xcode 12.0+

Set up and load a driver that logs output to the Console app.

<a id="overview"></a>

## Overview

This code project builds a simple USB driver. The driver logs events to the Console and responds to interrupts, such as when the user inserts or removes a device. Because it is a template driver with limited functionality, it can be used as a starting point for a more sophisticated driver.

<a id="3696665"></a>

### Configure the Sample Code Project

To run the sample code project in Xcode, make sure to use macOS 10.15.5 or later and Xcode 11.5 or later.

For the driver to load, System Integrity Protection (SIP) must be off. For more information on this process, see [Disabling and Enabling System Integrity Protection](https://developer.apple.com/documentation/security/disabling-and-enabling-system-integrity-protection).

<a id="3696666"></a>

### Select a USB Test Device

This sample USB driver works by detecting when a USB device is plugged into a Mac and logging the event. The test device should be unsupported under macOS; otherwise, an existing driver will take precedence, recognize the device, and preempt this sample driver.

The driver detects the device based on a number of critiera inside of the Info.plist’s `IOKitPersonalities > SimpleUSBInterfaceDriver` section, including configuration value, interface number, product identifier, and vendor identifier.

The sample driver requires the following command to find criteria that matches the keys in the Info.plist file for a selected USB device plugged into a Mac:

<a id="3696658"></a>

**Listing 1**

```swift
ioreg -w0 -rc IOUSBHostInterface -l
```

WIth the device’s parmeters identified and placed in the Info.plist file, the driver loads and intializes the device upon insertion.

<a id="3696667"></a>

### Build and Load the Driver

At build time, Xcode runs the “Launch Terminal” run script build phase, which launches the Terminal app in the directory where the newly-built driver resides.

The following commands copy the the driver into the home folder, change the current directory to that location, set ownership and permissions, and load the driver.

<a id="3696660"></a>

**Listing 2**

```swift
sudo cp -R SimpleUSBInterfaceDriver.kext ~
cd ~
sudo chown -R root:wheel SimpleUSBInterfaceDriver.kext
sudo chmod -R 755 SimpleUSBInterfaceDriver.kext
sudo kextload SimpleUSBInterfaceDriver.kext
```

The kernel loads the driver and communicates the status through the logging system. The Console app shows the logging messages.

<a id="3696668"></a>

### Unload the Driver

When testing completes, the following command directs the kernel to unload the driver:

<a id="3696662"></a>

**Listing 3**

```swift
sudo kextunload SimpleUSBInterfaceDriver.kext
```

It is important to re-enable SIP once driver testing completes. Failure to re-enable SIP leaves the computer vulnerable to malicious code. See [Disabling and Enabling System Integrity Protection](https://developer.apple.com/documentation/security/disabling-and-enabling-system-integrity-protection) for more information.

## See Also

### Device Communication

- [IOUSBHostIOSourceClientRecordLink](../../iousbhostiosourceclientrecordlink.md): A structure that represents a USB host input/output source client record entry.
- [IOUSBHostIOSourceClientRecordList](../../iousbhostiosourceclientrecordlist.md): A structure that represents a list of USB host input/output source client records.
