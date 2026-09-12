> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource](https://developer.apple.com/documentation/dispatch/dispatchsource)

# DispatchSource

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.

## Declaration

```swift
class DispatchSource
```

<a id="overview"></a>

## Overview

Use the methods of this class to construct new dispatch sources of the appropriate types.

## Topics

### Managing Common Dispatch Source Properties

- [DispatchSourceProtocol](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.

### Creating a Timer Source

- [makeTimerSource(flags:queue:)](dispatchsource/maketimersource%28flags_queue_%29.md): Creates a new dispatch source object for monitoring timer events.
- [DispatchSourceTimer](dispatchsourcetimer.md): A dispatch source that submits the event handler block based on a timer.
- [DispatchSource.TimerFlags](dispatchsource/timerflags.md): Flags to use when configuring a timer dispatch source.

### Creating a File System Source

- [makeReadSource(fileDescriptor:queue:)](dispatchsource/makereadsource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for reading bytes from the specified file.
- [makeWriteSource(fileDescriptor:queue:)](dispatchsource/makewritesource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for writing data to the specified file.
- [makeFileSystemObjectSource(fileDescriptor:eventMask:queue:)](dispatchsource/makefilesystemobjectsource%28filedescriptor_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring file-system events.
- [DispatchSourceRead](dispatchsourceread.md): A dispatch source object for reading data from a file descriptor.
- [DispatchSourceWrite](dispatchsourcewrite.md): A dispatch source object for writing data to a file descriptor.
- [DispatchSourceFileSystemObject](dispatchsourcefilesystemobject.md): A dispatch source that monitors events associated with a file descriptor.
- [DispatchSource.FileSystemEvent](dispatchsource/filesystemevent.md): Events involving a change to a file system object.

### Creating a Process Source

- [makeProcessSource(identifier:eventMask:queue:)](dispatchsource/makeprocesssource%28identifier_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring the specified process.
- [DispatchSourceProcess](dispatchsourceprocess.md): A dispatch source that monitors an external process for events.
- [DispatchSource.ProcessEvent](dispatchsource/processevent.md): Events related to a process.

### Creating a Memory Pressure Source

- [makeMemoryPressureSource(eventMask:queue:)](dispatchsource/makememorypressuresource%28eventmask_queue_%29.md): Creates a new dispatch source object that monitors the system for changes in the memory pressure condition.
- [DispatchSourceMemoryPressure](dispatchsourcememorypressure.md): A dispatch source that monitors the system for changes in the memory pressure condition.
- [DispatchSource.MemoryPressureEvent](dispatchsource/memorypressureevent.md): Memory pressure events.

### Creating a Signal Source

- [makeSignalSource(signal:queue:)](dispatchsource/makesignalsource%28signal_queue_%29.md): Creates a new dispatch source object that monitors the arrival of a UNIX signal.
- [DispatchSourceSignal](dispatchsourcesignal.md): A dispatch source that monitors the current process for UNIX signals.

### Creating a Mach Port Source

- [makeMachReceiveSource(port:queue:)](dispatchsource/makemachreceivesource%28port_queue_%29.md): Creates a new dispatch source object for monitoring a Mach port for pending messages.
- [makeMachSendSource(port:eventMask:queue:)](dispatchsource/makemachsendsource%28port_eventmask_queue_%29.md): A dispatch source that monitors a Mach port for dead name notifications.
- [DispatchSourceMachReceive](dispatchsourcemachreceive.md): A dispatch source that monitors a Mach port for pending messages.
- [DispatchSourceMachSend](dispatchsourcemachsend.md): A dispatch source that monitors a Mach port for dead name notifications, indicating that a send right no longer has a corresponding receive right.
- [DispatchSource.MachSendEvent](dispatchsource/machsendevent.md): Mach-related events.

### Creating a Custom Source

- [makeUserDataAddSource(queue:)](dispatchsource/makeuserdataaddsource%28queue_%29.md): Creates a new dispatch source object that you use to coalesce custom app data using an AND operator.
- [makeUserDataOrSource(queue:)](dispatchsource/makeuserdataorsource%28queue_%29.md): Creates a new dispatch source object that you use to coalesce custom app data using an OR operator.
- [makeUserDataReplaceSource(queue:)](dispatchsource/makeuserdatareplacesource%28queue_%29.md): Creates a new dispatch source object that you use to track custom app data.
- [DispatchSourceUserDataAdd](dispatchsourceuserdataadd.md): A dispatch source that coalesces data you provide using an AND operation.
- [DispatchSourceUserDataOr](dispatchsourceuserdataor.md): A dispatch source that coalesces data you provide using an OR operation.
- [DispatchSourceUserDataReplace](dispatchsourceuserdatareplace.md): A dispatch source that replaces any pending data with the new value you provide.

## Relationships

### Inherits From

- [DispatchObject](dispatchobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DispatchSourceFileSystemObject](dispatchsourcefilesystemobject.md)
- [DispatchSourceMachReceive](dispatchsourcemachreceive.md)
- [DispatchSourceMachSend](dispatchsourcemachsend.md)
- [DispatchSourceMemoryPressure](dispatchsourcememorypressure.md)
- [DispatchSourceProcess](dispatchsourceprocess.md)
- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [DispatchSourceRead](dispatchsourceread.md)
- [DispatchSourceSignal](dispatchsourcesignal.md)
- [DispatchSourceTimer](dispatchsourcetimer.md)
- [DispatchSourceUserDataAdd](dispatchsourceuserdataadd.md)
- [DispatchSourceUserDataOr](dispatchsourceuserdataor.md)
- [DispatchSourceUserDataReplace](dispatchsourceuserdatareplace.md)
- [DispatchSourceWrite](dispatchsourcewrite.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### System Event Monitoring

- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchIO](dispatchio.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchData](dispatchdata.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchDataIterator](dispatchdataiterator.md): A byte-by-byte iterator over the contents of a dispatch data object.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchSourceProtocol](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.
