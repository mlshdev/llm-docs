> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirereadcommandinterface/1555676-submitwithrefconandcallback](https://developer.apple.com/documentation/iokit/iofirewirereadcommandinterface/1555676-submitwithrefconandcallback)

# SubmitWithRefconAndCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set the command refCon value and callback handler, and submit the command to FireWire for execution.

## Declaration

```objectivec
IOReturn (*SubmitWithRefconAndCallback)(IOFireWireLibCommandRef self, void *refCon, IOFireWireLibCommandCallback inCallback);
```

## Parameters

- `self`: The command object interface of interest

<a id="return_value"></a>

## Return Value

An IOReturn result code indicating whether or not the command was successfully submitted

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

- [Cancel](1555587-cancel.md): Cancel command execution
- [GetAckCode](1556017-getackcode.md): Gets the most recently received ack code for this transaction.
- [GetBuffer](1555699-getbuffer.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
- [GetRefCon](1555957-getrefcon.md): Gets the refcon associated with this command
- [GetResponseCode](1556034-getresponsecode.md): Gets the most recently received response code for this transaction.
- [GetStatus](1556001-getstatus.md): Return command completion status.
- [GetTargetAddress](1555897-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](1555817-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](1555640-isexecuting.md): Is this command object currently executing?
- [SetBuffer](1555692-setbuffer.md): Set the buffer where read data should be stored.
- [SetCallback](1555912-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetFlags](1555950-setflags.md): Set flags governing this command's execution.
- [SetGeneration](1556039-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetMaxPacket](1555978-setmaxpacket.md): Set the maximum size in bytes of packets transferred by this command.
- [SetMaxPacketSpeed](1555778-setmaxpacketspeed.md): Gets the most recently received ack code for this transaction.
- [SetMaxRetryCount](1555735-setmaxretrycount.md): Sets the maximum number of retries for this command.
- [SetRefCon](1555802-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1556021-settarget.md): Set command target address
- [SetTimeoutDuration](1555994-settimeoutduration.md): Sets the duration of the timeout for this command.
- [Submit](1555629-submit.md)
