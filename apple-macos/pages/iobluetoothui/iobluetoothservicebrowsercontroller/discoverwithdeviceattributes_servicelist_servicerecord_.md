> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller/discoverwithdeviceattributes:servicelist:servicerecord:](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller/discoverwithdeviceattributes:servicelist:servicerecord:)

# discoverWithDeviceAttributes:serviceList:serviceRecord:

**Interface language:** Objective-C

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Invoke an already created window controller to display, and run the modal dialog.

## Declaration

```objectivec
- (IOReturn) discoverWithDeviceAttributes:(IOBluetoothDeviceSearchAttributes *) deviceAttributes serviceList:(NSArray *) serviceArray serviceRecord:(IOBluetoothSDPServiceRecord **) outRecord;
```

## Parameters

- `serviceArray`: A NSArray of valid UUIDs to allow. The array should contain NSData objects specifying the UUID to allow. We currently only support 16-bit short UUID forms, but will allow for any of the 16, 32 or full 128-bit UUID forms.
- `outRecord`: Pointer to a (IOBluetoothSDPServiceRecord \*) object. This will get allocated and returned to the client if the user selects a service.

<a id="return-value"></a>

## Return Value

IOReturn - \* kIOReturnSuccess - on successful completion. \* kCanceledErr - User canceled.

<a id="Discussion"></a>

## Discussion

This method will run the IOBluetoothServiceBrowserController browser window as a sheet for the window passed to it in sheetWindow.

## See Also

### Instance Methods

- [addAllowedUUID:](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the service browser panel as a sheet on the target window.
- [clearAllowedUUIDs](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getServiceBrowserControllerRef](getref%28%29.md): Returns an IOBluetoothServiceBrowserControllerRef representation of the target IOBluetoothServiceBrowserController object.
- [getResults](getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](runmodal%28%29.md): Runs the service browser panel in a modal session to allow the user to select a service on a Bluetooth device.
- [setDescriptionText:](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions:](setoptions%28__%29.md): Modify the options for the window controller.
- [setPrompt:](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
