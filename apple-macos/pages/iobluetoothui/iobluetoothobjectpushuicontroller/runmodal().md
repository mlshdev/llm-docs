> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothobjectpushuicontroller/runmodal()](https://developer.apple.com/documentation/iobluetoothui/iobluetoothobjectpushuicontroller/runmodal())

# runModal() (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the transfer UI panel in a modal session

## Declaration

```swift
func runModal()
```

<a id="Discussion"></a>

## Discussion

Returns when the modal session has ended. This object will call back over the delegate method (above) when the transfer is complete. Users should release the object then. If no delegate is set the object will release itself.

## See Also

### Instance Methods

- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice()](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle()](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress()](istransferinprogress%28%29.md): Gets state of the transfer
- [runPanel()](runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setIconImage(\_:)](seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [setTitle(\_:)](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop()](stop%28%29.md): Stops the transfer UI

# runModal (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the transfer UI panel in a modal session

## Declaration

```objectivec
- (void) runModal;
```

<a id="Discussion"></a>

## Discussion

Returns when the modal session has ended. This object will call back over the delegate method (above) when the transfer is complete. Users should release the object then. If no delegate is set the object will release itself.

## See Also

### Instance Methods

- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress](istransferinprogress%28%29.md): Gets state of the transfer
- [runPanel](runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setIconImage:](seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [setTitle:](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop](stop%28%29.md): Stops the transfer UI
