> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothobjectpushuicontroller/settitle(_:)](https://developer.apple.com/documentation/iobluetoothui/iobluetoothobjectpushuicontroller/settitle(_:))

# setTitle(\_:) (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sets the title of the panel when not run as a sheet.

## Declaration

```swift
func setTitle(_ windowTitle: String!)
```

## Parameters

- `windowTitle`: Title of the device selector panel.

<a id="Discussion"></a>

## Discussion

The panel title should be localized for best user experience.

## See Also

### Instance Methods

- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice()](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle()](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress()](istransferinprogress%28%29.md): Gets state of the transfer
- [runModal()](runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [runPanel()](runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setIconImage(\_:)](seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [stop()](stop%28%29.md): Stops the transfer UI

# setTitle: (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Sets the title of the panel when not run as a sheet.

## Declaration

```objectivec
- (void) setTitle:(NSString *) windowTitle;
```

## Parameters

- `windowTitle`: Title of the device selector panel.

<a id="Discussion"></a>

## Discussion

The panel title should be localized for best user experience.

## See Also

### Instance Methods

- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress](istransferinprogress%28%29.md): Gets state of the transfer
- [runModal](runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [runPanel](runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setIconImage:](seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [stop](stop%28%29.md): Stops the transfer UI
