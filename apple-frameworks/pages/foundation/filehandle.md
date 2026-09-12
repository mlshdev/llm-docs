> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle](https://developer.apple.com/documentation/foundation/filehandle)

# FileHandle (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object-oriented wrapper for a file descriptor.

## Declaration

```swift
class FileHandle
```

## Mentioned In

- [About Apple File System](about-apple-file-system.md)

<a id="overview"></a>

## Overview

You use file handle objects to access data associated with files, sockets, pipes, and devices. For files, you can read, write, and seek within the file. For sockets, pipes, and devices, you can use a file handle object to monitor the device and process data asynchronously.

Most creation methods for [FileHandle](filehandle.md) cause the file handle object to take ownership of the associated file descriptor. This means that the file handle object both creates the file descriptor and is responsible for closing it later, usually when the system deallocates the file handle object. If you want to use a file handle object with a file descriptor that you created, use the [init(fileDescriptor:)](filehandle/init%28filedescriptor_%29.md) method or use the [init(fileDescriptor:closeOnDealloc:)](filehandle/init%28filedescriptor_closeondealloc_%29.md) method and pass [false](https://developer.apple.com/documentation/swift/false) for the `flag` parameter.

<a id="Run-Loop-Considerations"></a>

### Run Loop Considerations

When using a file handle object to communicate asynchronously with a socket, you must initiate the corresponding operations from a thread with an active run loop. Although the read, accept, and wait operations themselves are performed asynchronously on background threads, the file handle uses a run loop source to monitor the operations and notify your code appropriately. Therefore, you must call those methods from your application’s main thread or from any thread where you’ve configured a run loop and are using it to process events.

## Topics

### Creating a file handle

- [init(fileDescriptor:)](filehandle/init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [init(fileDescriptor:closeOnDealloc:)](filehandle/init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [init(forReadingAtPath:)](filehandle/init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [init(forReadingFromURL:)](filehandle/init%28forreadingfromurl_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forWritingAtPath:)](filehandle/init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [init(forWritingToURL:)](filehandle/init%28forwritingtourl_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.
- [init(forUpdatingAtPath:)](filehandle/init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [init(forUpdatingURL:)](filehandle/init%28forupdatingurl_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [init(coder:)](filehandle/init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.

### Getting a file handle

- [standardError](filehandle/standarderror.md): The file handle associated with the standard error file.
- [standardInput](filehandle/standardinput.md): The file handle associated with the standard input file.
- [standardOutput](filehandle/standardoutput.md): The file handle associated with the standard output file.
- [nullDevice](filehandle/nulldevice.md): The file handle associated with a null device.

### Getting a file descriptor

- [fileDescriptor](filehandle/filedescriptor.md): The POSIX file descriptor associated with the receiver.

### Reading from a file handle asynchronously

- [bytes](filehandle/bytes.md): The file’s contents, as an asynchronous sequence of bytes.
- [FileHandle.AsyncBytes](filehandle/asyncbytes.md): An asynchronous sequence of bytes.

### Reading from a file handle synchronously

- [availableData](filehandle/availabledata.md): The data currently available in the receiver.
- [readToEnd()](filehandle/readtoend%28%29.md): Reads the available data synchronously up to the end of file or maximum number of bytes.
- [read(upToCount:)](filehandle/read%28uptocount_%29.md): Reads data synchronously up to the specified number of bytes.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify()](filehandle/acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotify(forModes:)](filehandle/acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify()](filehandle/readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotify(forModes:)](filehandle/readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](filehandle/readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify(forModes:)](filehandle/readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](filehandle/waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotify(forModes:)](filehandle/waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

### Writing to a file handle

- [write(contentsOf:)](filehandle/write%28contentsof_%29.md): Writes the specified data synchronously to the file handle.

### Seeking within a file

- [offset()](filehandle/offset%28%29.md): Gets the position of the file pointer within the file.
- [seekToEnd()](filehandle/seektoend%28%29.md): Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toOffset:)](filehandle/seek%28tooffset_%29.md): Moves the file pointer to the specified offset within the file.

### Operating on a file

- [close()](filehandle/close%28%29.md): Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronize()](filehandle/synchronize%28%29.md): Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.
- [truncate(atOffset:)](filehandle/truncate%28atoffset_%29.md): Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

### Monitoring for readability and writability

- [readabilityHandler](filehandle/readabilityhandler.md): The block to use for reading the contents of the file handle asynchronously.
- [writeabilityHandler](filehandle/writeabilityhandler.md): The block to use for writing the contents of the file handle asynchronously.

### Working with constants

- [Keys for Notification UserInfo Dictionary](keys-for-notification-userinfo-dictionary.md): Strings that the system uses as keys in a userinfo dictionary during a file handle notification.
- [Exception Names](exception-names.md): Constant that defines the name of a file operation exception.

### Working with notifications

- [NSFileHandleConnectionAccepted](nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleDataAvailable](nsnotification/name-swift.struct/nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [readCompletionNotification](filehandle/readcompletionnotification.md): Posted when the file handle reads the data currently available in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletion](nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.

### Working with notification messages

- [FileHandle.ConnectionAcceptedMessage](filehandle/connectionacceptedmessage.md): A message a file handle sends when it creates a socket connection between two processes and creates a file handle for one end of the connection.
- [FileHandle.DataAvailableMessage](filehandle/dataavailablemessage.md): A message a file handle sends when it determines data is available for reading from a file or communications channel.
- [FileHandle.ReadCompletionMessage](filehandle/readcompletionmessage.md): A message a file handle sends when it reads the data currently available in a file or a communication channel.
- [FileHandle.ReadToEndOfFileCompletionMessage](filehandle/readtoendoffilecompletionmessage.md): A message a file handle sends when it reads all data in a file, or another process in a communication channel signals the end of the data.

### Deprecated

- [readDataToEndOfFile()](filehandle/readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readData(ofLength:)](filehandle/readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [write(\_:)](filehandle/write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](filehandle/offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile()](filehandle/seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toFileOffset:)](filehandle/seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile()](filehandle/closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile()](filehandle/synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFile(atOffset:)](filehandle/truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

### Initializers

- [init(forReadingFrom:)](filehandle/init%28forreadingfrom_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forUpdating:)](filehandle/init%28forupdating_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [init(forWritingTo:)](filehandle/init%28forwritingto_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.

### Default Implementations

- [FileHandle Implementations](filehandle/filehandle-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managed file access

- [NSFileSecurity](nsfilesecurity.md): A stub class that encapsulates security information about a file.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [FileWrapper](filewrapper.md): A representation of a node (a file, directory, or symbolic link) in the file system.

# NSFileHandle (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object-oriented wrapper for a file descriptor.

## Declaration

```objectivec
@interface NSFileHandle : NSObject
```

## Mentioned In

- [About Apple File System](about-apple-file-system.md)

<a id="overview"></a>

## Overview

You use file handle objects to access data associated with files, sockets, pipes, and devices. For files, you can read, write, and seek within the file. For sockets, pipes, and devices, you can use a file handle object to monitor the device and process data asynchronously.

Most creation methods for [NSFileHandle](filehandle.md) cause the file handle object to take ownership of the associated file descriptor. This means that the file handle object both creates the file descriptor and is responsible for closing it later, usually when the system deallocates the file handle object. If you want to use a file handle object with a file descriptor that you created, use the [initWithFileDescriptor:](filehandle/init%28filedescriptor_%29.md) method or use the [initWithFileDescriptor:closeOnDealloc:](filehandle/init%28filedescriptor_closeondealloc_%29.md) method and pass [false](https://developer.apple.com/documentation/swift/false) for the `flag` parameter.

<a id="Run-Loop-Considerations"></a>

### Run Loop Considerations

When using a file handle object to communicate asynchronously with a socket, you must initiate the corresponding operations from a thread with an active run loop. Although the read, accept, and wait operations themselves are performed asynchronously on background threads, the file handle uses a run loop source to monitor the operations and notify your code appropriately. Therefore, you must call those methods from your application’s main thread or from any thread where you’ve configured a run loop and are using it to process events.

## Topics

### Creating a file handle

- [initWithFileDescriptor:](filehandle/init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [initWithFileDescriptor:closeOnDealloc:](filehandle/init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [fileHandleForReadingAtPath:](filehandle/init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [fileHandleForWritingAtPath:](filehandle/init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [fileHandleForUpdatingAtPath:](filehandle/init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [initWithCoder:](filehandle/init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.

### Getting a file handle

- [fileHandleWithStandardError](filehandle/standarderror.md): The file handle associated with the standard error file.
- [fileHandleWithStandardInput](filehandle/standardinput.md): The file handle associated with the standard input file.
- [fileHandleWithStandardOutput](filehandle/standardoutput.md): The file handle associated with the standard output file.
- [fileHandleWithNullDevice](filehandle/nulldevice.md): The file handle associated with a null device.

### Getting a file descriptor

- [fileDescriptor](filehandle/filedescriptor.md): The POSIX file descriptor associated with the receiver.

### Reading from a file handle synchronously

- [availableData](filehandle/availabledata.md): The data currently available in the receiver.
- [readDataToEndOfFileAndReturnError:](nsfilehandle/readdatatoendoffileandreturnerror_.md): Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readDataUpToLength:error:](nsfilehandle/readdatauptolength_error_.md): Reads data synchronously up to the specified number of bytes.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify](filehandle/acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotifyForModes:](filehandle/acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify](filehandle/readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotifyForModes:](filehandle/readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](filehandle/readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotifyForModes:](filehandle/readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](filehandle/waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotifyForModes:](filehandle/waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

### Writing to a file handle

- [writeData:error:](nsfilehandle/writedata_error_.md): Writes the specified data synchronously to the file handle.

### Seeking within a file

- [getOffset:error:](nsfilehandle/getoffset_error_.md): Get the current position of the file pointer within the file.
- [seekToEndReturningOffset:error:](nsfilehandle/seektoendreturningoffset_error_.md): Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seekToOffset:error:](filehandle/seek%28tooffset_%29.md): Moves the file pointer to the specified offset within the file.

### Operating on a file

- [closeAndReturnError:](filehandle/close%28%29.md): Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeAndReturnError:](filehandle/synchronize%28%29.md): Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.
- [truncateAtOffset:error:](filehandle/truncate%28atoffset_%29.md): Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

### Monitoring for readability and writability

- [readabilityHandler](filehandle/readabilityhandler.md): The block to use for reading the contents of the file handle asynchronously.
- [writeabilityHandler](filehandle/writeabilityhandler.md): The block to use for writing the contents of the file handle asynchronously.

### Working with constants

- [Keys for Notification UserInfo Dictionary](keys-for-notification-userinfo-dictionary.md): Strings that the system uses as keys in a userinfo dictionary during a file handle notification.
- [Exception Names](exception-names.md): Constant that defines the name of a file operation exception.

### Working with notifications

- [NSFileHandleConnectionAcceptedNotification](nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleDataAvailableNotification](nsnotification/name-swift.struct/nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [NSFileHandleReadCompletionNotification](filehandle/readcompletionnotification.md): Posted when the file handle reads the data currently available in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletionNotification](nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.

### Deprecated

- [readDataToEndOfFile](filehandle/readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readDataOfLength:](filehandle/readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [writeData:](filehandle/write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](filehandle/offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile](filehandle/seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seekToFileOffset:](filehandle/seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile](filehandle/closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile](filehandle/synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFileAtOffset:](filehandle/truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

### Type Methods

- [fileHandleForReadingFromURL:error:](filehandle/init%28forreadingfrom_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [fileHandleForUpdatingURL:error:](filehandle/init%28forupdating_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [fileHandleForWritingToURL:error:](filehandle/init%28forwritingto_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Managed file access

- [NSFileSecurity](nsfilesecurity.md): A stub class that encapsulates security information about a file.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [NSFileWrapper](filewrapper.md): A representation of a node (a file, directory, or symbolic link) in the file system.
