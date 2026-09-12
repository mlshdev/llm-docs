> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloop](https://developer.apple.com/documentation/corefoundation/cfrunloop)

# CFRunLoop (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFRunLoop
```

<a id="Overview"></a>

## Overview

A CFRunLoop object monitors sources of input to a task and dispatches control when they become ready for processing. Examples of input sources might include user input devices, network connections, periodic or time-delayed events, and asynchronous callbacks.

Three types of objects can be monitored by a run loop: sources ([CFRunLoopSource](cfrunloopsource.md)), timers ([CFRunLoopTimer](cfrunlooptimer.md)), and observers ([CFRunLoopObserver](cfrunloopobserver.md)). To receive callbacks when these objects need processing, you must first place these objects into a run loop with [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md), [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md), or [CFRunLoopAddObserver(\_:\_:\_:)](cfrunloopaddobserver%28______%29.md). You can later remove an object from the run loop (or invalidate it) to stop receiving its callback.

Each source, timer, and observer added to a run loop must be associated with one or more run loop modes. Modes determine what events are processed by the run loop during a given iteration. Each time the run loop executes, it does so in a specific mode. While in that mode, the run loop processes only the events associated with sources, timers, and observers associated with that mode. You assign most sources to the default run loop mode (designated by the [defaultMode](cfrunloopmode/defaultmode.md) constant), which is used to process events when the application (or thread) is idle. However, the system defines other modes and may execute the run loop in those other modes to limit which sources, timers, and observers are processed. Because run-loop modes are simply specified as strings, you can also define your own custom modes to limit the processing of events

Core Foundation defines a special pseudo-mode, called the common modes, that allow you to associate more than one mode with a given source, timer, or observer. To specify the common modes, use the [commonModes](cfrunloopmode/commonmodes.md) constant for the mode when configuring the object. Each run loop has its own independent set of common modes and the default mode ([defaultMode](cfrunloopmode/defaultmode.md)) is always a member of the set. To add a mode to the set of common modes, use the [CFRunLoopAddCommonMode(\_:\_:)](cfrunloopaddcommonmode%28____%29.md) function.

There is exactly one run loop per thread. You neither create nor destroy a thread’s run loop. Core Foundation automatically creates it for you as needed. You obtain the current thread’s run loop with [CFRunLoopGetCurrent()](cfrunloopgetcurrent%28%29.md). Call [CFRunLoopRun()](cfrunlooprun%28%29.md) to run the current thread’s run loop in the default mode until the run loop is stopped with [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md). You can also call [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md) to run the current thread’s run loop in a specified mode for a set period of time (or until the run loop is stopped). A run loop can only run if the requested mode has at least one source or timer to monitor.

Run loops can be run recursively. You can call [CFRunLoopRun()](cfrunlooprun%28%29.md) or [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md) from within any run loop callout and create nested run loop activations on the current thread’s call stack. You are not restricted in which modes you can run from within a callout. You can create another run loop activation running in any available run loop mode, including any modes already running higher in the call stack.

Cocoa applications build upon CFRunLoop to implement their own higher-level event loop. When writing an application, you can add your sources, timers, and observers to their run loop objects and modes. Your objects will then get monitored as part of the regular application event loop. Use the [getCFRunLoop()](../foundation/runloop/getcfrunloop%28%29.md) method of [RunLoop](../foundation/runloop.md) to obtain the corresponding [CFRunLoop](cfrunloop.md) type. In Carbon applications, use the `GetCFRunLoopFromEventLoop` function.

For more information about how run loops behave, see [Run Loops](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html#//apple_ref/doc/uid/10000057i-CH16) in [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

## Topics

### Getting a Run Loop

- [CFRunLoopGetCurrent()](cfrunloopgetcurrent%28%29.md): Returns the CFRunLoop object for the current thread.
- [CFRunLoopGetMain()](cfrunloopgetmain%28%29.md): Returns the main CFRunLoop object.

### Starting and Stopping a Run Loop

- [CFRunLoopRun()](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting(\_:)](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.

### Managing Sources

- [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md): Adds a CFRunLoopSource object to a run loop mode.
- [CFRunLoopContainsSource(\_:\_:\_:)](cfrunloopcontainssource%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.
- [CFRunLoopRemoveSource(\_:\_:\_:)](cfrunloopremovesource%28______%29.md): Removes a CFRunLoopSource object from a run loop mode.

### Managing Observers

- [CFRunLoopAddObserver(\_:\_:\_:)](cfrunloopaddobserver%28______%29.md): Adds a CFRunLoopObserver object to a run loop mode.
- [CFRunLoopContainsObserver(\_:\_:\_:)](cfrunloopcontainsobserver%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.
- [CFRunLoopRemoveObserver(\_:\_:\_:)](cfrunloopremoveobserver%28______%29.md): Removes a CFRunLoopObserver object from a run loop mode.

### Managing Run Loop Modes

- [CFRunLoopAddCommonMode(\_:\_:)](cfrunloopaddcommonmode%28____%29.md): Adds a mode to the set of run loop common modes.
- [CFRunLoopCopyAllModes(\_:)](cfrunloopcopyallmodes%28__%29.md): Returns an array that contains all the defined modes for a CFRunLoop object.
- [CFRunLoopCopyCurrentMode(\_:)](cfrunloopcopycurrentmode%28__%29.md): Returns the name of the mode in which a given run loop is currently running.

### Managing Timers

- [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopGetNextTimerFireDate(\_:\_:)](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopRemoveTimer(\_:\_:\_:)](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
- [CFRunLoopContainsTimer(\_:\_:\_:)](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

### Scheduling Blocks

- [CFRunLoopPerformBlock(\_:\_:\_:)](cfrunloopperformblock%28______%29.md): Enqueues a block object on a given runloop to be executed as the runloop cycles in specified modes.

### Getting the CFRunLoop Type ID

- [CFRunLoopGetTypeID()](cfrunloopgettypeid%28%29.md): Returns the type identifier for the CFRunLoop opaque type.

### Constants

- [CFRunLoopRunInMode Exit Codes](cfrunloopruninmode_exit_codes.md): Return codes for `CFRunLoopRunInMode`, identifying the reason the run loop exited.
- [Common Mode Flag](common-mode-flag.md): A run loop pseudo-mode that manages objects monitored in the “common” modes.
- [Default Run Loop Mode](default-run-loop-mode.md): Default run loop mode.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFRunLoopRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFRunLoop * CFRunLoopRef;
```

<a id="Overview"></a>

## Overview

A CFRunLoop object monitors sources of input to a task and dispatches control when they become ready for processing. Examples of input sources might include user input devices, network connections, periodic or time-delayed events, and asynchronous callbacks.

Three types of objects can be monitored by a run loop: sources ([CFRunLoopSourceRef](cfrunloopsource.md)), timers ([CFRunLoopTimerRef](cfrunlooptimer.md)), and observers ([CFRunLoopObserverRef](cfrunloopobserver.md)). To receive callbacks when these objects need processing, you must first place these objects into a run loop with [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md), [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md), or [CFRunLoopAddObserver](cfrunloopaddobserver%28______%29.md). You can later remove an object from the run loop (or invalidate it) to stop receiving its callback.

Each source, timer, and observer added to a run loop must be associated with one or more run loop modes. Modes determine what events are processed by the run loop during a given iteration. Each time the run loop executes, it does so in a specific mode. While in that mode, the run loop processes only the events associated with sources, timers, and observers associated with that mode. You assign most sources to the default run loop mode (designated by the [kCFRunLoopDefaultMode](cfrunloopmode/defaultmode.md) constant), which is used to process events when the application (or thread) is idle. However, the system defines other modes and may execute the run loop in those other modes to limit which sources, timers, and observers are processed. Because run-loop modes are simply specified as strings, you can also define your own custom modes to limit the processing of events

Core Foundation defines a special pseudo-mode, called the common modes, that allow you to associate more than one mode with a given source, timer, or observer. To specify the common modes, use the [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) constant for the mode when configuring the object. Each run loop has its own independent set of common modes and the default mode ([kCFRunLoopDefaultMode](cfrunloopmode/defaultmode.md)) is always a member of the set. To add a mode to the set of common modes, use the [CFRunLoopAddCommonMode](cfrunloopaddcommonmode%28____%29.md) function.

There is exactly one run loop per thread. You neither create nor destroy a thread’s run loop. Core Foundation automatically creates it for you as needed. You obtain the current thread’s run loop with [CFRunLoopGetCurrent](cfrunloopgetcurrent%28%29.md). Call [CFRunLoopRun](cfrunlooprun%28%29.md) to run the current thread’s run loop in the default mode until the run loop is stopped with [CFRunLoopStop](cfrunloopstop%28__%29.md). You can also call [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md) to run the current thread’s run loop in a specified mode for a set period of time (or until the run loop is stopped). A run loop can only run if the requested mode has at least one source or timer to monitor.

Run loops can be run recursively. You can call [CFRunLoopRun](cfrunlooprun%28%29.md) or [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md) from within any run loop callout and create nested run loop activations on the current thread’s call stack. You are not restricted in which modes you can run from within a callout. You can create another run loop activation running in any available run loop mode, including any modes already running higher in the call stack.

Cocoa applications build upon CFRunLoop to implement their own higher-level event loop. When writing an application, you can add your sources, timers, and observers to their run loop objects and modes. Your objects will then get monitored as part of the regular application event loop. Use the [getCFRunLoop](../foundation/runloop/getcfrunloop%28%29.md) method of [NSRunLoop](../foundation/runloop.md) to obtain the corresponding [CFRunLoopRef](cfrunloop.md) type. In Carbon applications, use the `GetCFRunLoopFromEventLoop` function.

For more information about how run loops behave, see [Run Loops](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html#//apple_ref/doc/uid/10000057i-CH16) in [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

## Topics

### Getting a Run Loop

- [CFRunLoopGetCurrent](cfrunloopgetcurrent%28%29.md): Returns the CFRunLoop object for the current thread.
- [CFRunLoopGetMain](cfrunloopgetmain%28%29.md): Returns the main CFRunLoop object.

### Starting and Stopping a Run Loop

- [CFRunLoopRun](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.

### Managing Sources

- [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md): Adds a CFRunLoopSource object to a run loop mode.
- [CFRunLoopContainsSource](cfrunloopcontainssource%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.
- [CFRunLoopRemoveSource](cfrunloopremovesource%28______%29.md): Removes a CFRunLoopSource object from a run loop mode.

### Managing Observers

- [CFRunLoopAddObserver](cfrunloopaddobserver%28______%29.md): Adds a CFRunLoopObserver object to a run loop mode.
- [CFRunLoopContainsObserver](cfrunloopcontainsobserver%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.
- [CFRunLoopRemoveObserver](cfrunloopremoveobserver%28______%29.md): Removes a CFRunLoopObserver object from a run loop mode.

### Managing Run Loop Modes

- [CFRunLoopAddCommonMode](cfrunloopaddcommonmode%28____%29.md): Adds a mode to the set of run loop common modes.
- [CFRunLoopCopyAllModes](cfrunloopcopyallmodes%28__%29.md): Returns an array that contains all the defined modes for a CFRunLoop object.
- [CFRunLoopCopyCurrentMode](cfrunloopcopycurrentmode%28__%29.md): Returns the name of the mode in which a given run loop is currently running.

### Managing Timers

- [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopGetNextTimerFireDate](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopRemoveTimer](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
- [CFRunLoopContainsTimer](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

### Scheduling Blocks

- [CFRunLoopPerformBlock](cfrunloopperformblock%28______%29.md): Enqueues a block object on a given runloop to be executed as the runloop cycles in specified modes.

### Getting the CFRunLoop Type ID

- [CFRunLoopGetTypeID](cfrunloopgettypeid%28%29.md): Returns the type identifier for the CFRunLoop opaque type.

### Constants

- [CFRunLoopRunInMode Exit Codes](cfrunloopruninmode_exit_codes.md): Return codes for `CFRunLoopRunInMode`, identifying the reason the run loop exited.
- [Common Mode Flag](common-mode-flag.md): A run loop pseudo-mode that manages objects monitored in the “common” modes.
- [Default Run Loop Mode](default-run-loop-mode.md): Default run loop mode.

## See Also

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
