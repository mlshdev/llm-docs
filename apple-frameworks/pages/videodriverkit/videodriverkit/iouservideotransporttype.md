> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideotransporttype](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideotransporttype)

# IOUserVideoTransportType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+

The transport type of a video stream.

## Declaration

```objectivec
enum IOUserVideoTransportType : uint32_t;
```

## Topics

### Protocol-based transport types

- [PCI](iouservideotransporttype/pci.md): The transport type identifier for video devices connected via the PCI bus.
- [USB](iouservideotransporttype/usb.md): The transport type identifier for video devices connected via USB.
- [FireWire](iouservideotransporttype/firewire.md): The transport type identifier for video devices connected via FireWire.
- [Bluetooth](iouservideotransporttype/bluetooth.md): The transport type identifier for video devices connected via Bluetooth Low Energy.
- [BluetoothLE](iouservideotransporttype/bluetoothle.md): The transport type identifier for video devices connected via Bluetooth.
- [HDMI](iouservideotransporttype/hdmi.md): The transport type identifier for video devices connected via HDMI.
- [DisplayPort](iouservideotransporttype/displayport.md): The transport type identifier for video devices connected via DisplayPort.
- [AirPlay](iouservideotransporttype/airplay.md): The transport type identifier for video devices connected via AirPlay.
- [AVB](iouservideotransporttype/avb.md): The transport type identifier for video devices connected via AVB.
- [Thunderbolt](iouservideotransporttype/thunderbolt.md): The transport type identifier for video devices connected via Thunderbolt.

### Other transport types

- [Unknown](iouservideotransporttype/unknown.md): The transport type identifier returned when a device doesn’t provide a transport type.
- [BuiltIn](iouservideotransporttype/builtin.md): The transport type identifier for video devices built into the system.

## See Also

### Working with transport types

- [GetTransportType](../iouservideobox/gettransporttype.md): Gets the transport type of the video box.
- [SetTransportType](../iouservideobox/settransporttype.md): Sets the transport type of the IOUserVideoBox.
