> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol)

# DispatchSourceProtocol (Swift)

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a common set of properties and methods that are shared with all dispatch source types.

## Declaration

```swift
protocol DispatchSourceProtocol : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeSignalSource(signal:queue:)](dispatchsource/makesignalsource%28signal_queue_%29.md) method to create an object that adopts this protocol.

## Topics

### Activating, Suspending, and Resuming a Source

- [activate()](dispatchsourceprotocol/activate%28%29.md): Activates the dispatch source.
- [suspend()](dispatchsourceprotocol/suspend%28%29.md): Suspends the dispatch source.
- [resume()](dispatchsourceprotocol/resume%28%29.md): Resumes the dispatch source.

### Canceling a Dispatch Source

- [cancel()](dispatchsourceprotocol/cancel%28%29.md): Asynchronously cancels the dispatch source, preventing any further invocation of its event handler block.
- [isCancelled](dispatchsourceprotocol/iscancelled.md): Returns a Boolean indicating whether the given dispatch source has been canceled.
- [setCancelHandler(handler:)](dispatchsourceprotocol/setcancelhandler%28handler_%29.md): Sets the cancellation handler block for the dispatch source.
- [setCancelHandler(qos:flags:handler:)](dispatchsourceprotocol/setcancelhandler%28qos_flags_handler_%29.md): Sets the cancellation handler block for the dispatch source with the specified quality-of-service class and work item options.

### Installing Event Handlers

- [setEventHandler(handler:)](dispatchsourceprotocol/seteventhandler%28handler_%29.md): Sets the event handler work item for the dispatch source.
- [setEventHandler(qos:flags:handler:)](dispatchsourceprotocol/seteventhandler%28qos_flags_handler_%29.md)
- [setRegistrationHandler(handler:)](dispatchsourceprotocol/setregistrationhandler%28handler_%29.md): Sets the registration handler work item for the dispatch source.
- [setRegistrationHandler(qos:flags:handler:)](dispatchsourceprotocol/setregistrationhandler%28qos_flags_handler_%29.md)
- [DispatchSourceProtocol.DispatchSourceHandler](dispatchsourceprotocol/dispatchsourcehandler.md)

### Getting the Dispatch Source Attributes

- [handle](dispatchsourceprotocol/handle.md): Returns the underlying system handle associated with the specified dispatch source.
- [data](dispatchsourceprotocol/data.md): Returns pending data for the dispatch source.
- [mask](dispatchsourceprotocol/mask.md): Returns the mask of events monitored by the dispatch source.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [DispatchSourceFileSystemObject](dispatchsourcefilesystemobject.md)
- [DispatchSourceMachReceive](dispatchsourcemachreceive.md)
- [DispatchSourceMachSend](dispatchsourcemachsend.md)
- [DispatchSourceMemoryPressure](dispatchsourcememorypressure.md)
- [DispatchSourceProcess](dispatchsourceprocess.md)
- [DispatchSourceRead](dispatchsourceread.md)
- [DispatchSourceSignal](dispatchsourcesignal.md)
- [DispatchSourceTimer](dispatchsourcetimer.md)
- [DispatchSourceUserDataAdd](dispatchsourceuserdataadd.md)
- [DispatchSourceUserDataOr](dispatchsourceuserdataor.md)
- [DispatchSourceUserDataReplace](dispatchsourceuserdatareplace.md)
- [DispatchSourceWrite](dispatchsourcewrite.md)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### System Event Monitoring

- [DispatchSource](dispatchsource.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchIO](dispatchio.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchData](dispatchdata.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchDataIterator](dispatchdataiterator.md): A byte-by-byte iterator over the contents of a dispatch data object.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.

# OS_dispatch_source (Objective-C)

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a common set of properties and methods that are shared with all dispatch source types.

## Declaration

```objectivec
@protocol OS_dispatch_source <OS_dispatch_object>
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeSignalSource(signal:queue:)](dispatchsource/makesignalsource%28signal_queue_%29.md) method to create an object that adopts this protocol.

## Relationships

### Inherits From

- [OS_dispatch_object](os_dispatch_object.md)

## See Also

### System Event Monitoring

- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
