> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller/browsedevices:options:](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller/browsedevices:options:)

# browseDevices:options:

**Interface language:** Objective-C

**Framework:** IOBluetooth UI  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

## Declaration

```objectivec
+ (IOReturn) browseDevices:(IOBluetoothSDPServiceRecord **) outRecord options:(IOBluetoothServiceBrowserControllerOptions) inOptions;
```

## Parameters

- `outRecord`: Pointer to a (IOBluetoothSDPServiceRecord \*) object. This will get allocated and returned to the client if the user selects a service.
- `inOptions`: For future expansion. Currently no options defined.

<a id="return-value"></a>

## Return Value

IOReturn - \* kIOReturnSuccess - on successful completion. \* kCanceledErr - User canceled.

<a id="Discussion"></a>

## Discussion

This method allocates and runs the browser window as a modal window waiting for the user to either select a service, or cancel the browser window.

## See Also

### Type Methods

- [withServiceBrowserControllerRef:](withservicebrowsercontrollerref%28__%29.md): Method call to convert an IOBluetoothServiceBrowserControllerRef into an IOBluetoothServiceBrowserController \*.
- [browseDevicesAsSheetForWindow:options:window:](browsedevicesassheetforwindow_options_window_.md): Deprecated.
