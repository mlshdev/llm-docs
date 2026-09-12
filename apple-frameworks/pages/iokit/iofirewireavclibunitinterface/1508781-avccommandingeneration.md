> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508781-avccommandingeneration](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508781-avccommandingeneration)

# AVCCommandInGeneration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends an AVC command to the device and returns the response.

## Declaration

```objectivec
IOReturn (*AVCCommandInGeneration)(void *self, UInt32 busGeneration, const UInt8 *command, UInt32 cmdLen, UInt8 *response, UInt32 *responseLen);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibUnitInterface.
- `busGeneration`: FireWire bus generation that the command is valid in.
- `command`: Pointer to command to send.
- `cmdLen`: Length (in bytes) of command.
- `response`: Pointer to place to store the response sent by the device.
- `responseLen`: Pointer to place to store the length of the response.

<a id="discussion"></a>

## Discussion

Sends an AVC command to the device and returns the response. The command must complete in the specified bus generation. This function is only available if the interface version is \> 1 (macOS 10.2.0 or later?). This function will block until the device returns a response or the kernel driver times out.
