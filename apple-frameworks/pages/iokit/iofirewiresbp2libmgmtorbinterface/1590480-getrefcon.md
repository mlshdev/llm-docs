> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590480-getrefcon](https://developer.apple.com/documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590480-getrefcon)

# getRefCon

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the current function of the management ORB.

## Declaration

```objectivec
void *(*getRefCon)(void *self);
```

## Parameters

- `self`: Pointer to a IOFireWireSBP2LibMgmtORBInterface.

<a id="return_value"></a>

## Return Value

Returns the function of the management ORB.

<a id="discussion"></a>

## Discussion

Returns the function of the management ORB. This is the same value that was set with setCommandFunction.
