> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller/runmodal()](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller/runmodal())

# runModal() (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the service browser panel in a modal session to allow the user to select a service on a Bluetooth device.

## Declaration

```swift
func runModal() -> Int32
```

<a id="return-value"></a>

## Return Value

Returns kIOBluetoothUISuccess if a successful, validated service selection was made by the user. Returns kIOBluetoothUIUserCanceledErr if the user cancelled the panel. These return values are the same as NSRunStoppedResponse and NSRunAbortedResponse respectively. They are the standard values used in a modal session.

<a id="Discussion"></a>

## Discussion

The controller will use the panel attributes to filter what devices the user sees. The allowed UUIDs will be used to validate the selection the user makes. The user will only be able to select services that match the allowed UUIDs. Only when a selection has been validated (or the panel cancelled), will this method return.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID(\_:)](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the service browser panel as a sheet on the target window.
- [clearAllowedUUIDs()](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText()](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions()](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getRef()](getref%28%29.md): Returns an IOBluetoothServiceBrowserControllerRef representation of the target IOBluetoothServiceBrowserController object.
- [getResults()](getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes()](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](gettitle%28%29.md): Returns the title of the device selector panel.
- [setDescriptionText(\_:)](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions(\_:)](setoptions%28__%29.md): Modify the options for the window controller.
- [setPrompt(\_:)](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.

# runModal (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the service browser panel in a modal session to allow the user to select a service on a Bluetooth device.

## Declaration

```objectivec
- (int) runModal;
```

<a id="return-value"></a>

## Return Value

Returns kIOBluetoothUISuccess if a successful, validated service selection was made by the user. Returns kIOBluetoothUIUserCanceledErr if the user cancelled the panel. These return values are the same as NSRunStoppedResponse and NSRunAbortedResponse respectively. They are the standard values used in a modal session.

<a id="Discussion"></a>

## Discussion

The controller will use the panel attributes to filter what devices the user sees. The allowed UUIDs will be used to validate the selection the user makes. The user will only be able to select services that match the allowed UUIDs. Only when a selection has been validated (or the panel cancelled), will this method return.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

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
- [setDescriptionText:](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions:](setoptions%28__%29.md): Modify the options for the window controller.
- [setPrompt:](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes:](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
