> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508792-avccommand](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508792-avccommand)

# AVCCommand

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends an AVC command to the device and returns the response.

## Declaration

```objectivec
IOReturn (*AVCCommand)(void *self, const UInt8 *command, UInt32 cmdLen, UInt8 *response, UInt32 *responseLen);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibUnitInterface.
- `command`: Pointer to command to send.
- `cmdLen`: Length (in bytes) of command.
- `response`: Pointer to place to store the response sent by the device.
- `responseLen`: Pointer to place to store the length of the response.

<a id="discussion"></a>

## Discussion

This function will block until the device returns a response or the kernel driver times out.
