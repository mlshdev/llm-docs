> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/devicepickersupportedaction](https://developer.apple.com/documentation/devicediscoveryui/devicepickersupportedaction)

# DevicePickerSupportedAction

**Framework:** DeviceDiscoveryUI  
**Kind:** Structure  
**Availability:** tvOS 16.0+

An environment value that indicates whether the current device supports device discovery.

## Declaration

```swift
struct DevicePickerSupportedAction
```

<a id="overview"></a>

## Overview

Access the action using the `.devicePickerSupports` key. Then call it as a function, passing the same browse descriptor and parameters you use to search for devices.

```swift
struct SettingsView: View {

    @Environment{\.devicePickerSupports} var myDevicePickerSupports
    @Binding var showDevicePicker: Bool

    var body: some View {
        if myDevicePickerSupports(.applicationService("MyAppService"),
                                  parameters: { .applicationService }) {
            Button("Select A Device") {
                // Display a device picker.
                showDevicePicker = true
            }
        }
    }
}
```

## Topics

### Checking for support

- [callAsFunction(\_:parameters:)](devicepickersupportedaction/callasfunction%28__parameters_%29.md): Returns a Boolean value that indicates whether the current device supports device discovery.

## See Also

### Pairing with nearby devices

- [DevicePicker](devicepicker.md): A SwiftUI view that displays other devices on the network, and creates an encrypted connection to a copy of your app running on that device.
- [DDDevicePickerViewController](dddevicepickerviewcontroller.md): A UIKit view that displays other devices on the network, and creates an encrypted connection to a copy of your app running on that device.
- [Connecting a tvOS app to other devices over the local network](connecting-a-tvos-app-to-other-devices-over-the-local-network.md): Display a view in your tvOS app that lists available iOS, iPadOS, and watchOS devices that the user can connect to over their local network.
