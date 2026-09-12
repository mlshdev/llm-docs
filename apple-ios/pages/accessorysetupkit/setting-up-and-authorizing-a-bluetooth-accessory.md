> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/setting-up-and-authorizing-a-bluetooth-accessory](https://developer.apple.com/documentation/accessorysetupkit/setting-up-and-authorizing-a-bluetooth-accessory)

# Setting up and authorizing a Bluetooth accessory

**Interface languages:** Swift, Objective-C

**Framework:** AccessorySetupKit  
**Kind:** Sample Code  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Xcode 16.0+

Discover, select, and set up a specific Bluetooth accessory without requesting permission to use Bluetooth.

<a id="Overview"></a>

## Overview

This sample project uses two app targets to demonstrate how to use AccessorySetupKit. `ASKSampleAccessory` simulates Bluetooth dice, while `ASKSample` highlights how to use AccessorySetupKit to onboard the accessory.

The `ASKSample` target uses AccessorySetupKit to authorize the use of a Bluetooth dice accessory and receive roll results. When you tap the “Add Dice” button, the app searches for dice and presents the set up AccessorySetupKit UI. AccessorySetupKit then authorizes and grants the app access to that accessory. After authorization, you can connect to the accessory and receive roll results until you decide to disconnect or remove authorization altogether.

> **Note**

> This sample code project is associated with WWDC24 session [10203: Meet AccessorySetupKit](https://developer.apple.com/wwdc24/10203/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

Because this sample app relies on using Bluetooth to connect with the accessory functionality, you can’t run this sample in Simulator — you’ll need to run it on a device. To run this sample, you’ll need the following:

- An Apple Developer profile.
- Two devices running iOS 18 or iPadOS 18 or later.

<a id="Using-the-applications"></a>

### Using the applications

1. Run the two targets on separate devices.
2. In `ASKSampleAccessory`, tap “Power On”.
3. In `ASKSample`, tap “Add Dice” and authorize the accessory using the AccessorySetupKit UI.

The accessory is now authorized for use in the app.

## See Also

### Essentials

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md): Detect nearby accessories and facilitate their setup.
- [ASAccessorySession](asaccessorysession.md): A class to coordinate accessory discovery.
