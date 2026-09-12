> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirewritecommandinterface/1556074-setmaxpacket](https://developer.apple.com/documentation/iokit/iofirewirewritecommandinterface/1556074-setmaxpacket)

# SetMaxPacket

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set the maximum size in bytes of packets transferred by this command.

## Declaration

```objectivec
IOReturn (*SetMaxPacket)(IOFireWireLibCommandRef self, IOByteCount maxPacketSize);
```

## Parameters

- `self`: The command object interface of interest
- `maxPacketSize`: Size in bytes of largest packet that should be transferred by this command.

<a id="return_value"></a>

## Return Value

An IOReturn result code indicating whether or not the command was successfully submitted

<a id="discussion"></a>

## Discussion

Availability: (for interfaces obtained with ID)

|  |  |  |
| --- | --- | --- |
|  | `kIOFireWireAsyncStreamCommandInterfaceID` | YES |
|  | `kIOFireWireCompareSwapCommandInterfaceID` | NO |
|  | `kIOFireWireWriteQuadletCommandInterfaceID` | NO |
|  | `kIOFireWireReadQuadletCommandInterfaceID` | NO |
|  | `kIOFireWireWriteCommandInterfaceID_v2` | YES |
|  | `kIOFireWireWriteCommandInterfaceID` | NO |
|  | `kIOFireWireReadCommandInterfaceID_v2` | YES |
|  | `kIOFireWireReadCommandInterfaceID` | NO |

## See Also

### Miscellaneous

- [Cancel](1555937-cancel.md): Cancel command execution
- [GetAckCode](1555840-getackcode.md): Gets the most recently received ack code for this transaction.
- [GetBuffer](1556087-getbuffer.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
- [GetRefCon](1556025-getrefcon.md): Gets the refcon associated with this command
- [GetResponseCode](1555747-getresponsecode.md): Gets the most recently received response code for this transaction.
- [GetStatus](1555704-getstatus.md): Return command completion status.
- [GetTargetAddress](1555717-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](1555826-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](1556047-isexecuting.md): Is this command object currently executing?
- [SetBuffer](1555806-setbuffer.md): Set the buffer where read data should be stored.
- [SetCallback](1555617-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetFlags](1555905-setflags.md): Set flags governing this command's execution.
- [SetGeneration](1555808-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetMaxPacketSpeed](1555694-setmaxpacketspeed.md): Gets the most recently received ack code for this transaction.
- [SetMaxRetryCount](1556117-setmaxretrycount.md): Sets the maximum number of retries for this command.
- [SetRefCon](1555888-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1555875-settarget.md): Set command target address
- [SetTimeoutDuration](1555955-settimeoutduration.md): Sets the duration of the timeout for this command.
- [Submit](1555990-submit.md)
- [SubmitWithRefconAndCallback](1555927-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
