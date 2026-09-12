> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setuppaneldeviceselectionchanged(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setuppaneldeviceselectionchanged(_:))

# setupPanelDeviceSelectionChanged(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent by the default notification center when the device selection in the panel has changed.

## Declaration

```swift
func setupPanelDeviceSelectionChanged(_ aNotification: Notification!)
```

## Parameters

- `aNotification`: Notification object. This is always `DRSetupPanelDeviceSelectionChangedNotification`.

<a id="discussion"></a>

## Discussion

You can retrieve the `DRSetupPanel` object in question by sending `NSNotification` object to `aNotification`. The userInfo dictionary contains the single key DRSetupPanelSelectedDeviceKey whose value is the `DRDevice` object that is currently selected.

# setupPanelDeviceSelectionChanged: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent by the default notification center when the device selection in the panel has changed.

## Declaration

```objectivec
- (void) setupPanelDeviceSelectionChanged:(NSNotification *) aNotification;
```

## Parameters

- `aNotification`: Notification object. This is always `DRSetupPanelDeviceSelectionChangedNotification`.

<a id="discussion"></a>

## Discussion

You can retrieve the `DRSetupPanel` object in question by sending `NSNotification` object to `aNotification`. The userInfo dictionary contains the single key DRSetupPanelSelectedDeviceKey whose value is the `DRDevice` object that is currently selected.
