> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/activatedevice(_:session:for:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/activatedevice(_:session:for:))

# activateDevice(\_:session:for:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user activates a device via a user interface.

## Declaration

```swift
@MainActor func activateDevice(_ device: MediaOutputDevice, session: MediaOutputSession, for deviceFeatures: MediaOutputDevice.Capabilities)
```

## Parameters

- `device`: The device to activate.
- `session`: The session associated with the activation.
- `deviceFeatures`: The capabilities requested for this activation.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

If the device requires additional user authentication, call [requestPairingCode(for:session:reason:authorizationMethod:)](../mediadeviceroutingmanager/requestpairingcode%28for_session_reason_authorizationmethod_%29.md). The system will report user input via [connectUsingPairingCode(\_:to:session:)](connectusingpairingcode%28__to_session_%29.md).

If the authorization fails, or the connection to the device fails, call [failedToActivateDevice(\_:session:error:)](../mediadeviceroutingmanager/failedtoactivatedevice%28__session_error_%29.md).

If the activation is successful, call [activatedDevice(\_:session:)](../mediadeviceroutingmanager/activateddevice%28__session_%29.md).

> **Note**

> Once a device is activated, the extension will be restricted on the local area network and will only be permitted to connect to the device(s) that were activated as defined by the [networkEndpoints](../mediaoutputdevice/networkendpoints.md) property.  Additionally upon device activation, your extension will lose access to Bluetooth and be granted access to reach out to the internet domains that have been declared in the `MDRequestedDomains` of the extension’s Info.plist

<a id="Declaring-Domains"></a>

## Declaring Domains

Declare the domains your extension may need to connect to in your extension’s Info.plist using `MDRequestedDomains`. The type must conform to an array of strings:

```xml
<key>EXAppExtensionAttributes</key>
<dict>
    <key>MDRequestedDomains</key>
        <array>
            <string>https://www.apple.com</string>
            <string>https://www.icloud.com</string>
        </array>
</dict>
```

<a id="Grouping"></a>

## Grouping

If the extension receives multiple activations, then the associated [MediaOutputDevice](../mediaoutputdevice.md) instances should be grouped together. If the devices are already members of a group, then those groups should now be considered grouped together. [updateDevices(\_:)](../mediadeviceroutingmanager/updatedevices%28__%29.md) should be called to update the state of group information.
