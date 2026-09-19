> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideotransporttype

# IOUserVideoTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

The transport type of a video stream.

## Declaration

```objectivec
enum IOUserVideoTransportType : uint32_t;
```

## Topics

### Protocol-based transport types

- [PCI](iouservideotransporttype/pci.md): Beta. The transport type identifier for video devices connected via the PCI bus.
- [USB](iouservideotransporttype/usb.md): Beta. The transport type identifier for video devices connected via USB.
- [FireWire](iouservideotransporttype/firewire.md): Beta. The transport type identifier for video devices connected via FireWire.
- [Bluetooth](iouservideotransporttype/bluetooth.md): Beta. The transport type identifier for video devices connected via Bluetooth Low Energy.
- [BluetoothLE](iouservideotransporttype/bluetoothle.md): Beta. The transport type identifier for video devices connected via Bluetooth.
- [HDMI](iouservideotransporttype/hdmi.md): Beta. The transport type identifier for video devices connected via HDMI.
- [DisplayPort](iouservideotransporttype/displayport.md): Beta. The transport type identifier for video devices connected via DisplayPort.
- [AirPlay](iouservideotransporttype/airplay.md): Beta. The transport type identifier for video devices connected via AirPlay.
- [AVB](iouservideotransporttype/avb.md): Beta. The transport type identifier for video devices connected via AVB.
- [Thunderbolt](iouservideotransporttype/thunderbolt.md): Beta. The transport type identifier for video devices connected via Thunderbolt.

### Other transport types

- [Unknown](iouservideotransporttype/unknown.md): Beta. The transport type identifier returned when a device doesn’t provide a transport type.
- [BuiltIn](iouservideotransporttype/builtin.md): Beta. The transport type identifier for video devices built into the system.

## See Also

### Working with transport types

- [GetTransportType](../iouservideobox/gettransporttype.md): Beta. Gets the transport type of the video box.
- [SetTransportType](../iouservideobox/settransporttype.md): Beta. Sets the transport type of the IOUserVideoBox.
