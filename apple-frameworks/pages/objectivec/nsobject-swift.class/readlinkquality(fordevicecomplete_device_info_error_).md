> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/readlinkquality(fordevicecomplete:device:info:error:)

# readLinkQuality(forDeviceComplete:device:info:error:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
func readLinkQuality(forDeviceComplete controller: Any!, device: IOBluetoothDevice!, info: UnsafeMutablePointer<BluetoothHCILinkQualityInfo>!, error: IOReturn)
```

## Parameters

- `controller`: Controller object that sent this delegate message.
- `device`: The `IOBluetooth` device.
- `info`: A pointer to the info.

<a id="Discussion"></a>

## Discussion

This delegate gets invoked when an read link quality command complete event occurs. This could occur because you invoked it by issuing a `-readLinkQualityForDevice:` command, or someone else did from another app on the same controller.

# readLinkQualityForDeviceComplete:device:info:error: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) readLinkQualityForDeviceComplete:(id) controller device:(IOBluetoothDevice *) device info:(BluetoothHCILinkQualityInfo *) info error:(IOReturn) error;
```

## Parameters

- `controller`: Controller object that sent this delegate message.
- `device`: The `IOBluetooth` device.
- `info`: A pointer to the info.

<a id="Discussion"></a>

## Discussion

This delegate gets invoked when an read link quality command complete event occurs. This could occur because you invoked it by issuing a `-readLinkQualityForDevice:` command, or someone else did from another app on the same controller.
