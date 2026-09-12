> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothpairingcontroller/getresults()](https://developer.apple.com/documentation/iobluetoothui/iobluetoothpairingcontroller/getresults())

# getResults() (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Returns an NSArray of the devices that were paired.

## Declaration

```swift
func getResults() -> [Any]!
```

<a id="return-value"></a>

## Return Value

Returns an NSArray of IOBluetoothDevice objects of devices that were paired. If the user cancelled the panel, nil will be returned.

<a id="Discussion"></a>

## Discussion

There will only be results if the panel has been run, the user has successfully made a selection, that selection has been validated and the selected device paired. If kIOBluetoothUISuccess was returned for the session, there should be valid results. Currently only a single device is allowed to be selected, so the results array will only contain one object. However in the future multiple selection may be supported.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID(\_:)](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs()](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText()](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions()](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getSearchAttributes()](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](runmodal%28%29.md): Runs the pairing panel in a modal session to allow the user to select a Bluetooth device.
- [setDescriptionText(\_:)](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions(\_:)](setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt(\_:)](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle(\_:)](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

# getResults (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Returns an NSArray of the devices that were paired.

## Declaration

```objectivec
- (NSArray *) getResults;
```

<a id="return-value"></a>

## Return Value

Returns an NSArray of IOBluetoothDevice objects of devices that were paired. If the user cancelled the panel, nil will be returned.

<a id="Discussion"></a>

## Discussion

There will only be results if the panel has been run, the user has successfully made a selection, that selection has been validated and the selected device paired. If kIOBluetoothUISuccess was returned for the session, there should be valid results. Currently only a single device is allowed to be selected, so the results array will only contain one object. However in the future multiple selection may be supported.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID:](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getSearchAttributes](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](runmodal%28%29.md): Runs the pairing panel in a modal session to allow the user to select a Bluetooth device.
- [setDescriptionText:](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions:](setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt:](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes:](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle:](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
