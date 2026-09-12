> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590549-setcommandfunction](https://developer.apple.com/documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590549-setcommandfunction)

# setCommandFunction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the function of the management ORB.

## Declaration

```objectivec
IOReturn (*setCommandFunction)(void *self, UInt32 function);
```

## Parameters

- `self`: Pointer to a IOFireWireSBP2LibMgmtORBInterface.
- `function`: a value indicating the desired management function.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if function was a legal function.

<a id="discussion"></a>

## Discussion

Sets the the function of the management ORB. Legal values are kFWSBP2QueryLogins, kFWSBP2AbortTask, kFWSBP2AbortTaskSet, kFWSBP2LogicalUnitReset, and kFWSBP2TargetReset.
