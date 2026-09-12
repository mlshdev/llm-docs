> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590532-setresponsebuffer](https://developer.apple.com/documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590532-setresponsebuffer)

# setResponseBuffer

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the response buffer for the management ORB.

## Declaration

```objectivec
IOReturn (*setResponseBuffer)(void *self, void *buf, UInt32 len);
```

## Parameters

- `self`: Pointer to a IOFireWireSBP2LibMgmtORBInterface.
- `buf`: backing store for buffer
- `len`: length of buffer.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on a success.

<a id="discussion"></a>

## Discussion

Sets the response buffer for the management ORB. kFWSBP2QueryLogins returns a response to its query and needs to write it somewhere. This routine allows you to specify the location.
