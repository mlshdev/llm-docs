> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508764-updateavccommandtimeout](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508764-updateavccommandtimeout)

# updateAVCCommandTimeout

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Updates an AVCCommand's timeout back to 10 seconds.

## Declaration

```objectivec
IOReturn (*updateAVCCommandTimeout)(void *self);
```

<a id="discussion"></a>

## Discussion

AVCCommands will time out after 10 seconds unless this function is called (from another thread) to update the command's timeout back to 10 seconds. This function is only available if the interface version is \> 2.
