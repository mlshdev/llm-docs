> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothobjectpushuicontroller/seticonimage(_:)](https://developer.apple.com/documentation/iobluetoothui/iobluetoothobjectpushuicontroller/seticonimage(_:))

# setIconImage(\_:) (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Manually sets the icon used in the panel.

## Declaration

```swift
func setIconImage(_ image: NSImage!)
```

## Parameters

- `image`: Image to use as the icon.

<a id="Discussion"></a>

## Discussion

The panel icon should be set to the icon of the calling application. If not set, the panel will try to load up the correct icon for the target device, and will default to the icon of the running application on fail.

## See Also

### Instance Methods

- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice()](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle()](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress()](istransferinprogress%28%29.md): Gets state of the transfer
- [runModal()](runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [runPanel()](runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setTitle(\_:)](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop()](stop%28%29.md): Stops the transfer UI

# setIconImage: (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Manually sets the icon used in the panel.

## Declaration

```objectivec
- (void) setIconImage:(NSImage *) image;
```

## Parameters

- `image`: Image to use as the icon.

<a id="Discussion"></a>

## Discussion

The panel icon should be set to the icon of the calling application. If not set, the panel will try to load up the correct icon for the target device, and will default to the icon of the running application on fail.

## See Also

### Instance Methods

- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice](getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle](gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress](istransferinprogress%28%29.md): Gets state of the transfer
- [runModal](runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [runPanel](runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setTitle:](settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop](stop%28%29.md): Stops the transfer UI
