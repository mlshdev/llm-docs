> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirewritequadletcommandinterface/1555831-getstatus](https://developer.apple.com/documentation/iokit/iofirewirewritequadletcommandinterface/1555831-getstatus)

# GetStatus

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Return command completion status.

## Declaration

```objectivec
IOReturn (*GetStatus)(IOFireWireLibCommandRef self);
```

## Parameters

- `self`: The command object interface of interest

<a id="return_value"></a>

## Return Value

An IOReturn error code indicating the completion error (if any) returned the last time this command object was executed

<a id="discussion"></a>

## Discussion

Availability: (for interfaces obtained with ID)

|  |  |  |
| --- | --- | --- |
|  | `kIOFireWireAsyncStreamCommandInterfaceID` | YES |
|  | `kIOFireWireCompareSwapCommandInterfaceID` | YES |
|  | `kIOFireWireWriteQuadletCommandInterfaceID` | YES |
|  | `kIOFireWireReadQuadletCommandInterfaceID` | YES |
|  | `kIOFireWireWriteCommandInterfaceID_v2` | YES |
|  | `kIOFireWireWriteCommandInterfaceID` | YES |
|  | `kIOFireWireReadCommandInterfaceID_v2` | YES |
|  | `kIOFireWireReadCommandInterfaceID` | YES |

## See Also

### Miscellaneous

- [Cancel](1555764-cancel.md): Cancel command execution
- [GetTargetAddress](1555908-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](1556096-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](1555679-isexecuting.md): Is this command object currently executing?
- [SetCallback](1556106-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetGeneration](1555786-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetQuads](1555636-setquads.md)
- [SetRefCon](1555925-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1555597-settarget.md): Set command target address
- [Submit](1555782-submit.md)
- [SubmitWithRefconAndCallback](1555841-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
