> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirecommandinterface/1555721-settimeoutduration](https://developer.apple.com/documentation/iokit/iofirewirecommandinterface/1555721-settimeoutduration)

# SetTimeoutDuration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the duration of the timeout for this command.

## Declaration

```objectivec
void (*SetTimeoutDuration)(IOFireWireLibCommandRef self, UInt32 duration);
```

## Parameters

- `self`: A reference to the command
- `duration`: A timeout value in microseconds

<a id="return_value"></a>

## Return Value

void

## See Also

### Miscellaneous

- [Cancel](1555777-cancel.md): Cancel command execution
- [GetAckCode](1555872-getackcode.md): Gets the most recently received ack code for this transaction.
- [GetBuffer](1555635-getbuffer.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
- [GetRefCon](1555913-getrefcon.md): Gets the refcon associated with this command
- [GetResponseCode](1556088-getresponsecode.md): Gets the most recently received response code for this transaction.
- [GetStatus](1555748-getstatus.md): Return command completion status.
- [GetTargetAddress](1555863-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](1555596-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](1556091-isexecuting.md): Is this command object currently executing?
- [SetBuffer](1555851-setbuffer.md): Set the buffer where read data should be stored.
- [SetCallback](1556068-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetFlags](1555656-setflags.md): Set flags governing this command's execution.
- [SetGeneration](1555934-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetMaxPacket](1555815-setmaxpacket.md): Set the maximum size in bytes of packets transferred by this command.
- [SetMaxPacketSpeed](1555772-setmaxpacketspeed.md): Gets the most recently received ack code for this transaction.
- [SetMaxRetryCount](1555707-setmaxretrycount.md): Sets the maximum number of retries for this command.
- [SetRefCon](1555804-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1556002-settarget.md): Set command target address
- [Submit](1556104-submit.md)
- [SubmitWithRefconAndCallback](1555644-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
