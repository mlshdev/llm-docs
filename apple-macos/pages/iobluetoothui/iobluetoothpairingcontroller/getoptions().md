> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothpairingcontroller/getoptions()](https://developer.apple.com/documentation/iobluetoothui/iobluetoothpairingcontroller/getoptions())

# getOptions() (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Returns the option bits that control the panel’s behavior.

## Declaration

```swift
func getOptions() -> IOBluetoothServiceBrowserControllerOptions
```

<a id="return-value"></a>

## Return Value

Returns the option bits set by setOptions:

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID(\_:)](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs()](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText()](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getPrompt()](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults()](getresults%28%29.md): Returns an NSArray of the devices that were paired.
- [getSearchAttributes()](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](runmodal%28%29.md): Runs the pairing panel in a modal session to allow the user to select a Bluetooth device.
- [setDescriptionText(\_:)](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions(\_:)](setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt(\_:)](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle(\_:)](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

# getOptions (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Returns the option bits that control the panel’s behavior.

## Declaration

```objectivec
- (IOBluetoothServiceBrowserControllerOptions) getOptions;
```

<a id="return-value"></a>

## Return Value

Returns the option bits set by setOptions:

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID:](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getPrompt](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults](getresults%28%29.md): Returns an NSArray of the devices that were paired.
- [getSearchAttributes](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](runmodal%28%29.md): Runs the pairing panel in a modal session to allow the user to select a Bluetooth device.
- [setDescriptionText:](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions:](setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt:](setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes:](setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle:](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
