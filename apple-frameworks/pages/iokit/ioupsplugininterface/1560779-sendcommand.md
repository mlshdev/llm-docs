> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioupsplugininterface/1560779-sendcommand](https://developer.apple.com/documentation/iokit/ioupsplugininterface/1560779-sendcommand)

# sendCommand

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Send a command to the UPS.

## Declaration

```objectivec
IOReturn (*sendCommand)(void *thisPointer, CFDictionaryRef command);
```

## Parameters

- `thisPointer`: The UPS Interface to use.
- `command`: CFDictionaryRef that contains the command.

<a id="return_value"></a>

## Return Value

An IOReturn error code.

<a id="discussion"></a>

## Discussion

Command keys are defined in IOPSKeys.h and begin with kIOPSCommand. An error should be returned if your device does not know how to respond to a command.
