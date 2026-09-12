> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioatabuscommand/1811895-getcallbackptr](https://developer.apple.com/documentation/kernel/ioatabuscommand/1811895-getcallbackptr)

# getCallbackPtr

**Interface language:** Objective-C

**Framework:** Kernel

return the callback pointer

## Declaration

```objectivec
virtual IOATACompletionFunction* getCallbackPtr (
 void ); 
```

## See Also

### Miscellaneous

- [allocateCmd](1811850-allocatecmd.md): factory method to create an instance of this class used by subclasses of IOATADevice
- [executeCallback](1811860-executecallback.md): call the completion callback function
- [getBuffer](1811872-getbuffer.md): get pointer to the memory descriptor for this transaction
- [getByteCount](1811883-getbytecount.md): return the byte count for this transaction to transfer.
- [getFlags](1811906-getflags.md): return the flags for this command.
- [getOpcode](1811919-getopcode.md): return the command opcode
- [getPacketData](1811925-getpacketdata.md): return pointer to the array of packet data.
- [getPacketSize](1811935-getpacketsize.md): return the size of atapi packet if any.
- [getPosition](1811945-getposition.md): the position within the memory buffer for the transaction.
- [getRegMask](1811953-getregmask.md): get the register mask for desired regs
- [getTaskFilePtr](1811963-gettaskfileptr.md): return the taskfile structure pointer.
- [getTimeoutMS](1811972-gettimeoutms.md): return the timeout value for this command
- [getTransferChunkSize](1811979-gettransferchunksize.md): number of bytes between interrupts.
- [getUnit](1811986-getunit.md): return the unit id (0 primary, 1 secondary)
- [init](1811993-init.md): Zeroes all data, returns false if allocation fails. protected.
- [setActualTransfer](1811997-setactualtransfer.md): set the byte count of bytes actually transferred.
- [setCommandInUse](1812002-setcommandinuse.md): mark the command as being in progress.
- [setResult](1812006-setresult.md): set the result code
- [zeroCommand](1812011-zerocommand.md): set to blank state, call prior to re-use of this object
