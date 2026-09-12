> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liborbinterface/1590526-setcommandblock](https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590526-setcommandblock)

# setCommandBlock

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the command block portion of the ORB.

## Declaration

```objectivec
IOReturn (*setCommandBlock)(void *self, void *buffer, UInt32 length);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.
- `buffer`: Pointer to buffer to copy command block from.
- `length`: Number of bytes of data to copy.

<a id="return_value"></a>

## Return Value

Returns KIOReturnSuccess if the command block was updated successfully.

<a id="discussion"></a>

## Discussion

Copys the data provided in the buffer to the command block portion of the ORB.
