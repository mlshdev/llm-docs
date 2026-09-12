> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/sharing-wi-fi-network-credentials](https://developer.apple.com/documentation/wifiinfrastructure/sharing-wi-fi-network-credentials)

# Sharing Wi-Fi network credentials

**Framework:** Wi-Fi Infrastructure  
**Kind:** Sample Code  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · Xcode 26.2+

Use Wi-Fi Infrastructure to automatically share Wi-Fi network credentials after establishing a Bluetooth connection.

<a id="Overview"></a>

## Overview

This sample project uses two app targets to demonstrate using [AccessorySetupKit](../accessorysetupkit.md) with [Wi-Fi Infrastructure](../wifiinfrastructure.md) to share Wi-Fi credentials with a Bluetooth accessory. The `ASKSampleWiFiAccessory` app target simulates a Bluetooth accessory that can receive Wi-Fi credentials, while the `WiFiNetworkSharingSample` app target demonstrates how to pair with the accessory and share network information.

The `ASKSampleWiFiAccessory` target simulates a Bluetooth dice accessory that advertises itself for pairing, receives Wi-Fi network credentials from the paired device, and sends dice roll results back over Bluetooth.

The `WiFiNetworkSharingSample` target uses AccessorySetupKit to discover and set up a Bluetooth dice accessory. After establishing the Bluetooth connection, Wi-Fi Infrastructure automatically requests authorization to share the device’s Wi-Fi network credentials with the Bluetooth accessory over the secure Bluetooth connection. After the Bluetooth accessory is connected to the Wi-Fi network, you can receive dice roll results from the accessory until you disconnect or remove authorization.

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

Because this sample app relies on using Bluetooth to connect with the accessory functionality, you can’t run this sample in Simulator — you’ll need to run it on a device. To run this sample, you’ll need the following:

- An Apple Developer account
- Two devices running iOS 26.2 or iPadOS 26.2 or later that are connected to the same Wi-Fi network

Because this sample has two targets, use the following steps to run this sample:

1. Run both targets on separate devices connected to the same Wi-Fi network.
2. Open the ASKSampleWiFiAccessory app and tap Power On.
3. On the other device, open the WiFiNetworkSharingSample app, then tap Add Dice to discover and pair with the accessory using AccessorySetupKit.
4. Tap Connect to enable Wi-Fi network sharing. This authorizes the accessory to receive Wi-Fi network credentials. It also establishes the Bluetooth connection for the device running ASKSampleWiFiAccessory to start sending dice roll results.

## See Also

### Essentials

- [com.apple.developer.wifi-infrastructure](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.wifi-infrastructure): The entitlement the system requires for an app to use the Wi-Fi Infrastructure framework.
