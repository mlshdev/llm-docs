> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirecompareswapcommandinterface/1555789-gettargetaddress](https://developer.apple.com/documentation/iokit/iofirewirecompareswapcommandinterface/1555789-gettargetaddress)

# GetTargetAddress

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Get command target address.

## Declaration

```objectivec
void (*GetTargetAddress)(IOFireWireLibCommandRef self, FWAddress *outAddr);
```

## Parameters

- `self`: The command object interface of interest
- `outAddr`: A pointer to an FWAddress to contain the function result.

<a id="discussion"></a>

## Discussion

Availability: (for interfaces obtained with ID)

|  |  |  |
| --- | --- | --- |
|  | `kIOFireWireAsyncStreamCommandInterfaceID` | NO |
|  | `kIOFireWireCompareSwapCommandInterfaceID` | YES |
|  | `kIOFireWireWriteQuadletCommandInterfaceID` | YES |
|  | `kIOFireWireReadQuadletCommandInterfaceID` | YES |
|  | `kIOFireWireWriteCommandInterfaceID_v2` | YES |
|  | `kIOFireWireWriteCommandInterfaceID` | YES |
|  | `kIOFireWireReadCommandInterfaceID_v2` | YES |
|  | `kIOFireWireReadCommandInterfaceID` | YES |

## See Also

### Miscellaneous

- [Cancel](1556061-cancel.md): Cancel command execution
- [DidLock](1556007-didlock.md): Was the last lock operation successful?
- [GetStatus](1555930-getstatus.md): Return command completion status.
- [GetTransferredBytes](1555667-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](1556082-isexecuting.md): Is this command object currently executing?
- [Locked](1555630-locked.md): Get the 32-bit value returned on the last compare swap operation.
- [Locked64](1555657-locked64.md): Get the 64-bit value returned on the last compare swap operation.
- [SetCallback](1555948-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetFlags](1555745-setflags.md): Set flags governing this command's execution.
- [SetGeneration](1555712-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetRefCon](1555702-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1556016-settarget.md): Set command target address
- [SetValues](1555784-setvalues.md): Set values for 32-bit compare swap operation. Calling this function will make the command object perform 32-bit compare swap transactions on the bus. To perform 64-bit compare swap operations, use the SetValues64() call, below.
- [SetValues64](1555877-setvalues64.md): Set values for 64-bit compare swap operation. Calling this function will make the command object perform 64-bit compare swap transactions on the bus. To perform 32-bit compare swap operations, use the SetValues() call, above.
- [Submit](1555647-submit.md)
- [SubmitWithRefconAndCallback](1555675-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
