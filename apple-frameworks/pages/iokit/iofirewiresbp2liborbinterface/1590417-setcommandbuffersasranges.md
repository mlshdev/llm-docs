> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liborbinterface/1590417-setcommandbuffersasranges](https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590417-setcommandbuffersasranges)

# setCommandBuffersAsRanges

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a page table from a list of ranges.

## Declaration

```objectivec
IOReturn (*setCommandBuffersAsRanges)(void *self, FWSBP2VirtualRange *ranges, UInt32 withCount, UInt32 withDirection, UInt32 offset, UInt32 length);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.
- `ranges`: An array of ranges representing the data to be transfered.
- `withCount`: The number of ranges in the ranges array.
- `withDirection`: An IODirection indicating the direction of data transfer.
- `offset`: Offset in bytes into data to begin writing table at.
- `length`: Number of bytes of data to map from offset.

<a id="return_value"></a>

## Return Value

Returns KIOReturnSuccess if the page table was written successfully.

<a id="discussion"></a>

## Discussion

Creates a page table with the given parameters. Any addresses mapped by this method must remain valid until setCommandBuffers is called again or releaseCommandBuffers is called. The SBP2 services do not release references to the command buffers just because the command has completed.
