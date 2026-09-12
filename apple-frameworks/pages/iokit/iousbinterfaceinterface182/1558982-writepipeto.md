> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface182/1558982-writepipeto](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface182/1558982-writepipeto)

# WritePipeTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Performs an asynchronous write on a **BULK OUT** pipe, with specified timeout values.

## Declaration

```objectivec
IOReturn (*WritePipeTO)(void *self, UInt8 pipeRef, void *buf, UInt32 size, UInt32 noDataTimeout, UInt32 completionTimeout);
```

<a id="discussion"></a>

## Discussion

The interface must be open for the pipe to exist.

If a timeout is specified and the request times out, the driver may need to resynchronize the data toggle. See ClearPipeStall or ClearPipeStallBothEnds.
