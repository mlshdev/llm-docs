> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.print](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.print)

# com.apple.security.print

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.7+

A Boolean value indicating whether your app may print a document.

## Details

`com.apple.security.print`

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, enable the App Sandbox capability in Xcode, and under Hardware, select Printing.

## See Also

### Device access

- [Audio Input Entitlement](com.apple.security.device.audio-input.md): A Boolean value that indicates whether the app may record audio using the built-in microphone and access audio input using Core Audio.
- [Camera entitlement](com.apple.security.device.camera.md): A Boolean value that indicates whether the app may interact with the built-in and external cameras, and capture movies and still images.
- [com.apple.security.device.microphone](com.apple.security.device.microphone.md): A Boolean value that indicates whether the app may use the microphone.
- [com.apple.security.device.usb](com.apple.security.device.usb.md): A Boolean value indicating whether your app may interact with USB devices.
- [com.apple.security.device.bluetooth](com.apple.security.device.bluetooth.md): A Boolean value indicating whether your app may interact with Bluetooth devices.
- [com.apple.security.smartcard](com.apple.security.smartcard.md): A Boolean that indicates whether your app has access to smart card slots and smart cards.
