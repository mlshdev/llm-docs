> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothdeviceselectorcontroller/addalloweduuidarray(_:)](https://developer.apple.com/documentation/iobluetoothui/iobluetoothdeviceselectorcontroller/addalloweduuidarray(_:))

# addAllowedUUIDArray(\_:) (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.

## Declaration

```swift
func addAllowedUUIDArray(_ allowedUUIDArray: [Any]!)
```

## Parameters

- `allowedUUIDArray`: An NSArray of UUIDs that all must be present in a device for it to be selectable.

<a id="Discussion"></a>

## Discussion

The user’s device selection gets validated against the UUIDs passed to -addAllowedUUID: addAllowedUUIDArray:. Each call to those methods essentially adds a filter that the selected device gets validated with. If any of the filters match, the device is considered valid. If they all fail, the device is not valid and the user is presented with an error code that the device does not support the required services. The UUID passed to -addAllowedUUID: is the only UUID that must be present in the device’s SDP service records. Alternatively, all of the UUIDs in the UUID array passed to -addAllowedUUIDArray must be present.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID(\_:)](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the device selector panel as a sheet on the target window.
- [clearAllowedUUIDs()](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getCancel()](getcancel%28%29.md): Returns the title of the default/cancel button in the device selector panel.
- [getDescriptionText()](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getHeader()](getheader%28%29.md): Returns the header text that appears in the device selector panel.
- [getOptions()](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults()](getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes()](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](runmodal%28%29.md): Runs the device selector panel in a modal session to allow the user to select a Bluetooth device.
- [setCancel(\_:)](setcancel%28__%29.md): Sets the title of the default/cancel button in the device selector panel.
- [setDescriptionText(\_:)](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setHeader(\_:)](setheader%28__%29.md): Sets the header text that appears in the device selector panel.

# addAllowedUUIDArray: (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.

## Declaration

```objectivec
- (void) addAllowedUUIDArray:(NSArray *) allowedUUIDArray;
```

## Parameters

- `allowedUUIDArray`: An NSArray of UUIDs that all must be present in a device for it to be selectable.

<a id="Discussion"></a>

## Discussion

The user’s device selection gets validated against the UUIDs passed to -addAllowedUUID: addAllowedUUIDArray:. Each call to those methods essentially adds a filter that the selected device gets validated with. If any of the filters match, the device is considered valid. If they all fail, the device is not valid and the user is presented with an error code that the device does not support the required services. The UUID passed to -addAllowedUUID: is the only UUID that must be present in the device’s SDP service records. Alternatively, all of the UUIDs in the UUID array passed to -addAllowedUUIDArray must be present.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Instance Methods

- [addAllowedUUID:](addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the device selector panel as a sheet on the target window.
- [clearAllowedUUIDs](clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getCancel](getcancel%28%29.md): Returns the title of the default/cancel button in the device selector panel.
- [getDescriptionText](getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getHeader](getheader%28%29.md): Returns the header text that appears in the device selector panel.
- [getOptions](getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt](getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults](getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes](getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](runmodal%28%29.md): Runs the device selector panel in a modal session to allow the user to select a Bluetooth device.
- [setCancel:](setcancel%28__%29.md): Sets the title of the default/cancel button in the device selector panel.
- [setDescriptionText:](setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setHeader:](setheader%28__%29.md): Sets the header text that appears in the device selector panel.
