> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirereadquadletcommandinterface/1556027-setquads](https://developer.apple.com/documentation/iokit/iofirewirereadquadletcommandinterface/1556027-setquads)

# SetQuads

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set destination for read data

## Declaration

```objectivec
void (*SetQuads)(IOFireWireLibReadQuadletCommandRef self, UInt32 inQuads[], UInt32 inNumQuads);
```

## Parameters

- `self`: The command object interface of interest
- `inQuads`: An array of quadlets
- `inNumQuads`: Number of quadlet in 'inQuads'

## See Also

### Miscellaneous

- [Cancel](1555751-cancel.md): Cancel command execution
- [GetStatus](1555890-getstatus.md): Return command completion status.
- [GetTargetAddress](1555821-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](1555845-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](1555970-isexecuting.md): Is this command object currently executing?
- [SetCallback](1555924-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetGeneration](1555768-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetRefCon](1556073-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](1556064-settarget.md): Set command target address
- [Submit](1555710-submit.md)
- [SubmitWithRefconAndCallback](1555919-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
