> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirereadcommandinterface/1555778-setmaxpacketspeed](https://developer.apple.com/documentation/iokit/iofirewirereadcommandinterface/1555778-setmaxpacketspeed)

# SetMaxPacketSpeed

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Gets the most recently received ack code for this transaction.

## Declaration

```objectivec
void (*SetMaxPacketSpeed)(IOFireWireLibCommandRef self, IOFWSpeed speed);
```

## Parameters

- `self`: A reference to the command
- `speed`: the desired maximum packet speed

<a id="return_value"></a>

## Return Value

void

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
- [SetMaxRetryCount](1555735-setmaxretrycount.md): Sets the maximum number of retries for this command.
- [SetRefCon](1555802-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1556021-settarget.md): Set command target address
- [SetTimeoutDuration](1555994-settimeoutduration.md): Sets the duration of the timeout for this command.
- [Submit](1555629-submit.md)
- [SubmitWithRefconAndCallback](1555676-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
