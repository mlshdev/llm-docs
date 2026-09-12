> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/readrssi(fordevicecomplete:device:info:error:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/readrssi(fordevicecomplete:device:info:error:))

# readRSSI(forDeviceComplete:device:info:error:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
func readRSSI(forDeviceComplete controller: Any!, device: IOBluetoothDevice!, info: UnsafeMutablePointer<BluetoothHCIRSSIInfo>!, error: IOReturn)
```

## Parameters

- `controller`: Controller object that sent this delegate message.
- `device`: The `IOBluetooth` device.
- `info`: A pointer to the info.

<a id="Discussion"></a>

## Discussion

This delegate gets invoked when an RSSI command complete event occurs. This could occur because you invoked it by issuing a `-readRSSIForDevice:` command, or someone else did from another app on the same controller.

# readRSSIForDeviceComplete:device:info:error: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) readRSSIForDeviceComplete:(id) controller device:(IOBluetoothDevice *) device info:(BluetoothHCIRSSIInfo *) info error:(IOReturn) error;
```

## Parameters

- `controller`: Controller object that sent this delegate message.
- `device`: The `IOBluetooth` device.
- `info`: A pointer to the info.

<a id="Discussion"></a>

## Discussion

This delegate gets invoked when an RSSI command complete event occurs. This could occur because you invoked it by issuing a `-readRSSIForDevice:` command, or someone else did from another app on the same controller.
