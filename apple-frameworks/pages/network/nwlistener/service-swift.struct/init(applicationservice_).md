> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/service-swift.struct/init(applicationservice:)](https://developer.apple.com/documentation/network/nwlistener/service-swift.struct/init(applicationservice:))

# init(applicationService:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a listener for apps that listen for connections from a network device picker.

## Declaration

```swift
init(applicationService: String)
```

## Parameters

- `applicationService`: The name of the application service. This must match the name passed to the network device picker.

<a id="Discussion"></a>

## Discussion

Use this initializer to setup a listener for application services.

Apps that register as advertising an application service should always have a listener waiting for a local connection. The system launches your app when the user selects the current device in a [DevicePicker](../../../devicediscoveryui/devicepicker.md) or [DDDevicePickerViewController](../../../devicediscoveryui/dddevicepickerviewcontroller.md). Create the listener as soon as your app launches, so that your app can connect with the requesting device.
