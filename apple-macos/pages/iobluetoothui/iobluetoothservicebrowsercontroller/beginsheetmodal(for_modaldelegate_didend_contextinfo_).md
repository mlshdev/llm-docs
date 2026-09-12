> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller/beginsheetmodal(for:modaldelegate:didend:contextinfo:)](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller/beginsheetmodal(for:modaldelegate:didend:contextinfo:))

# beginSheetModal(for:modalDelegate:didEnd:contextInfo:) (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the service browser panel as a sheet on the target window.

## Declaration

```swift
func beginSheetModal(for sheetWindow: NSWindow!, modalDelegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!) -> IOReturn
```

## Parameters

- `sheetWindow`: NSWindow to attach the service browser panel to as a sheet.
- `modalDelegate`: Delegate object that gets sent the didEndSelector when the sheet modal session is finished.
- `didEndSelector`: Selector sent to the modalDelegate when the sheet modal session is finished.
- `contextInfo`: User-definied value passed to the modalDelegate in the didEndSelector.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the sheet modal session was started.

<a id="Discussion"></a>

## Discussion

This function works the same way as -\[NSApplication beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:\]. The didEndSelector has a similar prototype as in NSApplication except that the first argument is the IOBluetoothServiceBrowserController object instead of the window: -(void)sheetDidEnd:(IOBluetoothServiceBrowserController \*)controller returnCode:(int)returnCode contextInfo:(void \*)contextInfo. The returnCode parameter will either be kIOBluetoothUISuccess or kIOBluetoothUIUserCancelledErr as described in -runModal.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID(\_:)](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs()](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText()](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions()](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getRef()](getref%28%29.md): Returns an IOBluetoothServiceBrowserControllerRef representation of the target IOBluetoothServiceBrowserController object.
- [getResults()](getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes()](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](runmodal%28%29.md): Runs the service browser panel in a modal session to allow the user to select a service on a Bluetooth device.
- [setDescriptionText(\_:)](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions(\_:)](setoptions%28__%29.md): Modify the options for the window controller.
- [setPrompt(\_:)](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.

# beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the service browser panel as a sheet on the target window.

## Declaration

```objectivec
- (IOReturn) beginSheetModalForWindow:(NSWindow *) sheetWindow modalDelegate:(id) modalDelegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `sheetWindow`: NSWindow to attach the service browser panel to as a sheet.
- `modalDelegate`: Delegate object that gets sent the didEndSelector when the sheet modal session is finished.
- `didEndSelector`: Selector sent to the modalDelegate when the sheet modal session is finished.
- `contextInfo`: User-definied value passed to the modalDelegate in the didEndSelector.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the sheet modal session was started.

<a id="Discussion"></a>

## Discussion

This function works the same way as -\[NSApplication beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:\]. The didEndSelector has a similar prototype as in NSApplication except that the first argument is the IOBluetoothServiceBrowserController object instead of the window: -(void)sheetDidEnd:(IOBluetoothServiceBrowserController \*)controller returnCode:(int)returnCode contextInfo:(void \*)contextInfo. The returnCode parameter will either be kIOBluetoothUISuccess or kIOBluetoothUIUserCancelledErr as described in -runModal.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID:](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
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
- [setSearchAttributes:](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
