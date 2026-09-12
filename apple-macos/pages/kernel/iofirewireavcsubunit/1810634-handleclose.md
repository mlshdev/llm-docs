> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavcsubunit/1810634-handleclose](https://developer.apple.com/documentation/kernel/iofirewireavcsubunit/1810634-handleclose)

# handleClose

**Interface language:** Objective-C

**Framework:** Kernel

Overrideable method to control the open / close behaviour of an IOService.

## Declaration

```objectivec
virtual void handleClose(
 IOService *forClient, 
 IOOptionBitsoptions ); 
```

## Parameters

- `forClient`: Designates the client of the provider requesting the close.
- `options`: Options for the close, may be interpreted by the implementor of handleOpen.

<a id="overview"></a>

## Overview

See IOService for discussion.

## See Also

### Miscellaneous

- [AVCCommand](1810566-avccommand.md): Sends an AVC command to the device and stores the response.
- [AVCCommandInGeneration](1810598-avccommandingeneration.md): Sends an AVC command to the device and stores the response. The command must complete in the specified FireWire bus generation otherwise kIOFireWireBusReset is returned.
- [handleOpen](1810680-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1810716-matchpropertytable.md): Matching language support Match on the following properties of the sub unit: Vendor_ID GUID SubUnit_Type
- [updateAVCCommandTimeout](1810751-updateavccommandtimeout.md): By default, AVCCommands timeout 10 seconds after receiving an Interim response. This function resets the timeout of the current command to 10 seconds from the current time. Call this repeatedly for AVC commands that take a very long time to execute to prevent premature timeout.
