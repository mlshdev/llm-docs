> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590471-setcommandtimeout

# setCommandTimeout

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the timeout of the ORB.

## Declaration

```objectivec
void (*setCommandTimeout)(void *self, UInt32 timeout);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.
- `timeout`: The timeout duration in milliseconds.

<a id="discussion"></a>

## Discussion

This sets the timeout for the ORB in milliseconds. Note that ORBs without timeouts can be "lost." You will obviously not recieve timeout notification for timeouts of zero. But perhaps less obviously you will not recieve orb reset notification, which is really a sort of accelerated timeout notification for bus reset situations.
