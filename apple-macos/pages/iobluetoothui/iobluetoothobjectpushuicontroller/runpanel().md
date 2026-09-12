> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothobjectpushuicontroller/runpanel()](https://developer.apple.com/documentation/iobluetoothui/iobluetoothobjectpushuicontroller/runpanel())

# runPanel() (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the transfer UI as a panel with no modal session

## Declaration

```swift
func runPanel()
```

<a id="Discussion"></a>

## Discussion

Returns immediately. The object will callback over the delegate method (above) when the transfer is completed. If no delegate is set the object will release itself.

## See Also

### Instance Methods

- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice()](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle()](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress()](istransferinprogress%28%29.md): Gets state of the transfer
- [runModal()](runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [setIconImage(\_:)](seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [setTitle(\_:)](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop()](stop%28%29.md): Stops the transfer UI

# runPanel (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Runs the transfer UI as a panel with no modal session

## Declaration

```objectivec
- (void) runPanel;
```

<a id="Discussion"></a>

## Discussion

Returns immediately. The object will callback over the delegate method (above) when the transfer is completed. If no delegate is set the object will release itself.

## See Also

### Instance Methods

- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress](istransferinprogress%28%29.md): Gets state of the transfer
- [runModal](runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [setIconImage:](seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [setTitle:](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop](stop%28%29.md): Stops the transfer UI
