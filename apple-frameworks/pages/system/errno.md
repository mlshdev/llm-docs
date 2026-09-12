> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno](https://developer.apple.com/documentation/system/errno)

# Errno

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An error number used by system calls to communicate what kind of error occurred.

## Declaration

```swift
@frozen struct Errno
```

## Topics

### File and Directory Errors

- [attributeNotFound](errno/attributenotfound.md): Attribute not found.
- [badFileDescriptor](errno/badfiledescriptor.md): Bad file descriptor.
- [fileExists](errno/fileexists.md): File exists.
- [fileTooLarge](errno/filetoolarge.md): The file is too large.
- [improperLink](errno/improperlink.md): Improper link.
- [isDirectory](errno/isdirectory.md): Is a directory.
- [noLocks](errno/nolocks.md): No locks available.
- [noSuchFileOrDirectory](errno/nosuchfileordirectory.md): No such file or directory.
- [notDirectory](errno/notdirectory.md): Not a directory.
- [permissionDenied](errno/permissiondenied.md): Permission denied.
- [textFileBusy](errno/textfilebusy.md): Text file busy.

### File System Errors

- [badFileTypeOrFormat](errno/badfiletypeorformat.md): Inappropriate file type or format.
- [directoryNotEmpty](errno/directorynotempty.md): Directory not empty.
- [diskQuotaExceeded](errno/diskquotaexceeded.md): Disk quota exceeded.
- [noSpace](errno/nospace.md): Device out of space.
- [readOnlyFileSystem](errno/readonlyfilesystem.md): Read-only file system.
- [tooManyLinks](errno/toomanylinks.md): Too many links.
- [tooManyOpenFilesInSystem](errno/toomanyopenfilesinsystem.md): The system has too many open files.
- [tooManyOpenFiles](errno/toomanyopenfiles.md): This process has too many open files.

### NFS Errors

- [authenticationError](errno/authenticationerror.md): Authentication error.
- [needAuthenticator](errno/needauthenticator.md): Need authenticator.
- [staleNFSFileHandle](errno/stalenfsfilehandle.md): Stale NFS file handle.

### Device Errors

- [deviceError](errno/deviceerror.md): Device error.
- [devicePowerIsOff](errno/devicepowerisoff.md): Device power is off.
- [inappropriateIOCTLForDevice](errno/inappropriateioctlfordevice.md): Inappropriate control function.
- [ioError](errno/ioerror.md): Input/output error.
- [noSuchAddressOrDevice](errno/nosuchaddressordevice.md): No such device or address.
- [notBlockDevice](errno/notblockdevice.md): Not a block device.
- [operationNotSupportedByDevice](errno/operationnotsupportedbydevice.md): Operation not supported by device.

### Path Errors

- [fileNameTooLong](errno/filenametoolong.md): The file name is too long.
- [tooManyRemoteLevels](errno/toomanyremotelevels.md): Too many levels of remote in path.
- [tooManySymbolicLinkLevels](errno/toomanysymboliclinklevels.md): Too many levels of symbolic links.

### Pipe Errors

- [brokenPipe](errno/brokenpipe.md): Broken pipe.
- [illegalSeek](errno/illegalseek.md): Illegal seek.

### Runtime Errors

- [deadlock](errno/deadlock.md): Resource deadlock avoided.
- [noMemory](errno/nomemory.md): Can’t allocate memory.
- [wouldBlock](errno/wouldblock.md): Operation would block.

### Math Errors

- [outOfDomain](errno/outofdomain.md): Numerical argument out of domain.
- [outOfRange](errno/outofrange.md): Numerical result out of range.
- [overflow](errno/overflow.md): Value too large to be stored in data type.

### Executable File Errors

- [badCPUType](errno/badcputype.md): Bad CPU type in executable.
- [badExecutable](errno/badexecutable.md): Bad executable or shared library.
- [execFormatError](errno/execformaterror.md): Executable format error.
- [malformedMachO](errno/malformedmacho.md): Malformed Mach-O file.
- [sharedLibraryVersionMismatch](errno/sharedlibraryversionmismatch.md): Shared library version mismatch.

### Network Errors

- [connectionAbort](errno/connectionabort.md): Software caused a connection abort.
- [connectionRefused](errno/connectionrefused.md): Connection refused.
- [connectionReset](errno/connectionreset.md): Connection reset by peer.
- [hostIsDown](errno/hostisdown.md): The host is down.
- [messageTooLong](errno/messagetoolong.md): Message too long.
- [networkDown](errno/networkdown.md): Network is down.
- [networkReset](errno/networkreset.md): Network dropped connection on reset.
- [networkUnreachable](errno/networkunreachable.md): Network is unreachable.
- [noBufferSpace](errno/nobufferspace.md): No buffer space available.
- [noRouteToHost](errno/noroutetohost.md): No route to host.
- [notSupported](errno/notsupported.md): Not supported.
- [timedOut](errno/timedout.md): Operation timed out.

### Network Protocol Errors

- [protocolError](errno/protocolerror.md): Protocol error.
- [protocolFamilyNotSupported](errno/protocolfamilynotsupported.md): Protocol family not supported.
- [protocolNotAvailable](errno/protocolnotavailable.md): Protocol not available.
- [protocolNotSupported](errno/protocolnotsupported.md): Protocol not supported.
- [protocolWrongTypeForSocket](errno/protocolwrongtypeforsocket.md): Protocol wrong for socket type.

### Network Address Errors

- [addressFamilyNotSupported](errno/addressfamilynotsupported.md): The address family isn’t supported by the protocol family.
- [addressInUse](errno/addressinuse.md): Address already in use.
- [addressNotAvailable](errno/addressnotavailable.md): Can’t assign the requested address.
- [addressRequired](errno/addressrequired.md): Destination address required.

### Network Socket Errors

- [notSocket](errno/notsocket.md): A socket operation was performed on something that isn’t a socket.
- [notSupportedOnSocket](errno/notsupportedonsocket.md): Operation not supported on socket.
- [socketIsConnected](errno/socketisconnected.md): Socket is already connected.
- [socketNotConnected](errno/socketnotconnected.md): Socket is not connected.
- [socketShutdown](errno/socketshutdown.md): Can’t send after socket shutdown.
- [socketTypeNotSupported](errno/sockettypenotsupported.md): Socket type not supported.

### RPC Errors

- [rpcProcedureUnavailable](errno/rpcprocedureunavailable.md): Bad procedure for program.
- [rpcProgramUnavailable](errno/rpcprogramunavailable.md): The remote procedure call (RPC) program isn’t available.
- [rpcProgramVersionMismatch](errno/rpcprogramversionmismatch.md): The version of the remote procedure call (RPC) program is incorrect.
- [rpcUnsuccessful](errno/rpcunsuccessful.md): The structure of the remote procedure call (RPC) is bad.
- [rpcVersionMismatch](errno/rpcversionmismatch.md): The version of the remote procedure call (RPC) is incorrect.

### Process Errors

- [argListTooLong](errno/arglisttoolong.md): The argument list is too long.
- [identifierRemoved](errno/identifierremoved.md): Identifier removed.
- [noChildProcess](errno/nochildprocess.md): No child processes.
- [noSuchProcess](errno/nosuchprocess.md): No such process.
- [previousOwnerDied](errno/previousownerdied.md): Previous pthread mutex owner died.
- [tooManyProcesses](errno/toomanyprocesses.md): Too many processes.

### System Call Errors

- [alreadyInProcess](errno/alreadyinprocess.md): Operation already in progress.
- [badAddress](errno/badaddress.md): Bad address.
- [interrupted](errno/interrupted.md): Interrupted function call.
- [invalidArgument](errno/invalidargument.md): Invalid argument.
- [noFunction](errno/nofunction.md): Function not implemented.
- [nowInProgress](errno/nowinprogress.md): Operation now in progress.
- [resourceBusy](errno/resourcebusy.md): Resource busy.
- [resourceTemporarilyUnavailable](errno/resourcetemporarilyunavailable.md): Resource temporarily unavailable.

### General Errors

- [badMessage](errno/badmessage.md): Bad message.
- [canceled](errno/canceled.md): Operation canceled.
- [illegalByteSequence](errno/illegalbytesequence.md): Illegal byte sequence.
- [noData](errno/nodata.md): No message available.
- [noMessage](errno/nomessage.md): No message of desired type.
- [noSuchPolicy](errno/nosuchpolicy.md): No such policy registered.
- [notPermitted](errno/notpermitted.md): Operation not permitted.
- [notRecoverable](errno/notrecoverable.md): State not recoverable.
- [outputQueueFull](errno/outputqueuefull.md): Interface output queue is full.
- [tooManyReferences](errno/toomanyreferences.md): Too many references: can’t splice.
- [tooManyUsers](errno/toomanyusers.md): Too many users.

### Reserved

- [lastErrnoValue](errno/lasterrnovalue.md): The largest valid error.
- [multiHop](errno/multihop.md): Reserved.
- [noLink](errno/nolink.md): Reserved.
- [noStreamResources](errno/nostreamresources.md): Reserved.
- [notStream](errno/notstream.md): Reserved.
- [notUsed](errno/notused.md): Error. Not used.
- [timeout](errno/timeout.md): Reserved.

### Interacting with C APIs

- [init(rawValue:)](errno/init%28rawvalue_%29.md): Creates a strongly typed error number from a raw C error number.
- [rawValue](errno/rawvalue.md): The raw C error number.

### Debugging

- [description](errno/description.md): A textual representation of the most recent error returned by a system call.
- [debugDescription](errno/debugdescription.md): A textual representation, suitable for debugging, of the most recent error returned by a system call.

### Comparing Errors

- [~=(\_:\_:)](errno/~=%28____%29.md)

### Default Implementations

- [CustomDebugStringConvertible Implementations](errno/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](errno/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
