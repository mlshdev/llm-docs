> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller/browsedevicesassheetforwindow:options:window:](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller/browsedevicesassheetforwindow:options:window:)

# browseDevicesAsSheetForWindow:options:window:

**Interface language:** Objective-C

**Framework:** IOBluetooth UI  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

## Declaration

```objectivec
+ (IOReturn) browseDevicesAsSheetForWindow:(IOBluetoothSDPServiceRecord **) outRecord options:(IOBluetoothServiceBrowserControllerOptions) inOptions window:(NSWindow *) inWindow;
```

## Parameters

- `outRecord`: Pointer to a (IOBluetoothSDPServiceRecord \*) object. This will get allocated and returned to the client if the user selects a service.
- `inOptions`: For future expansion. Currently no options defined.
- `inWindow`: The window to be used as the anchor of the sheet.

<a id="return-value"></a>

## Return Value

IOReturn - \* kIOReturnSuccess - on successful completion. \* kCanceledErr - User canceled.

<a id="Discussion"></a>

## Discussion

This method will allocate and run the IOBluetoothServiceBrowserController browser window as a sheet for a window.

## See Also

### Type Methods

- [withServiceBrowserControllerRef:](withservicebrowsercontrollerref%28__%29.md): Method call to convert an IOBluetoothServiceBrowserControllerRef into an IOBluetoothServiceBrowserController \*.
- [browseDevices:options:](browsedevices_options_.md): Deprecated.
