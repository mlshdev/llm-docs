> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirereadquadletcommandinterface/1555970-isexecuting](https://developer.apple.com/documentation/iokit/iofirewirereadquadletcommandinterface/1555970-isexecuting)

# IsExecuting

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Is this command object currently executing?

## Declaration

```objectivec
const Boolean (*IsExecuting)(IOFireWireLibCommandRef self);
```

## Parameters

- `self`: The command object interface of interest

<a id="return_value"></a>

## Return Value

Returns true if the command object is executing.

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

- [Cancel](1555751-cancel.md): Cancel command execution
- [GetStatus](1555890-getstatus.md): Return command completion status.
- [GetTargetAddress](1555821-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](1555845-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [SetCallback](1555924-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetGeneration](1555768-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetQuads](1556027-setquads.md): Set destination for read data
- [SetRefCon](1556073-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1556064-settarget.md): Set command target address
- [Submit](1555710-submit.md)
- [SubmitWithRefconAndCallback](1555919-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
