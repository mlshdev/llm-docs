> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop](https://developer.apple.com/documentation/foundation/runloop)

# RunLoop (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The programmatic interface to objects that manage input sources.

## Declaration

```swift
class RunLoop
```

## Mentioned In

- [Processing URL session data task results with Combine](processing-url-session-data-task-results-with-combine.md)

<a id="overview"></a>

## Overview

A [RunLoop](runloop.md) object processes input for sources, such as mouse and keyboard events from the window system and [Port](port.md) objects. A [RunLoop](runloop.md) object also processes [Timer](timer.md) events.

Your application neither creates nor explicitly manages [RunLoop](runloop.md) objects. The system creates a [RunLoop](runloop.md) object as needed for each [Thread](thread.md) object, including the application’s main thread. If you need to access the current thread’s run loop, use the class method [current](runloop/current.md).

Note that from the perspective of [RunLoop](runloop.md), [Timer](timer.md) objects aren’t “input”—they’re a special type, and they don’t cause the run loop to return when they fire.

> **Warning**

>  The [RunLoop](runloop.md) class is generally not thread-safe, and you must call its methods only within the context of the current thread. Don’t call the methods of a [RunLoop](runloop.md) object running in a different thread, which might cause unexpected results.

## Topics

### Accessing Run Loops and Modes

- [current](runloop/current.md): Returns the run loop for the current thread.
- [currentMode](runloop/currentmode.md): The receiver’s current input mode.
- [limitDate(forMode:)](runloop/limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [main](runloop/main.md): Returns the run loop of the main thread.
- [getCFRunLoop()](runloop/getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [RunLoop.Mode](runloop/mode.md): Modes that a run loop operates in.

### Managing Timers

- [add(\_:forMode:)](runloop/add%28__formode_%29-392ag.md): Registers a given timer with a given input mode.

### Managing Ports

- [add(\_:forMode:)](runloop/add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.
- [remove(\_:forMode:)](runloop/remove%28__formode_%29.md): Removes a port from the specified input mode of the run loop.

### Running a Loop

- [run()](runloop/run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.
- [run(mode:before:)](runloop/run%28mode_before_%29.md): Runs the loop once, blocking for input in the specified mode until a given date.
- [run(until:)](runloop/run%28until_%29.md): Runs the loop until the specified date, during which time it processes data from all attached input sources.
- [acceptInput(forMode:before:)](runloop/acceptinput%28formode_before_%29.md): Runs the loop once or until the specified date, accepting input only for the specified mode.

### Scheduling and Canceling Tasks

- [perform(\_:)](runloop/perform%28__%29.md): Schedules a block that the run loop invokes.
- [perform(inModes:block:)](runloop/perform%28inmodes_block_%29.md): Schedules a block that the run loop invokes when it’s running in any of the specified modes.
- [perform(\_:target:argument:order:modes:)](runloop/perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerform(\_:target:argument:)](runloop/cancelperform%28__target_argument_%29.md): Cancels the sending of a previously scheduled message.
- [cancelPerformSelectors(withTarget:)](runloop/cancelperformselectors%28withtarget_%29.md): Cancels all outstanding ordered performs scheduled with a given target.

### Scheduling Combine Publishers

- [schedule(options:\_:)](runloop/schedule%28options___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
- [schedule(after:tolerance:options:\_:)](runloop/schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, using the specified tolerance and options.
- [schedule(after:interval:tolerance:options:\_:)](runloop/schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, using the specified tolerance and options.
- [minimumTolerance](runloop/minimumtolerance.md): The minimum tolerance the run loop scheduler allows.
- [now](runloop/now.md): The run loop scheduler’s definition of the current moment in time.
- [RunLoop.SchedulerTimeType](runloop/schedulertimetype.md): The scheduler time type that the run loop uses.
- [RunLoop.SchedulerOptions](runloop/scheduleroptions.md): A set of options that affect the operation of the run loop scheduler.

### Default Implementations

- [Scheduler Implementations](runloop/scheduler-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Scheduler](../combine/scheduler.md)

## See Also

### Run Loop Scheduling

- [Timer](timer.md): A timer that fires after a certain time interval has elapsed, sending a specified message to a target object.

# NSRunLoop (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The programmatic interface to objects that manage input sources.

## Declaration

```objectivec
@interface NSRunLoop : NSObject
```

## Mentioned In

- [Processing URL session data task results with Combine](processing-url-session-data-task-results-with-combine.md)

<a id="overview"></a>

## Overview

A [NSRunLoop](runloop.md) object processes input for sources, such as mouse and keyboard events from the window system and [NSPort](port.md) objects. A [NSRunLoop](runloop.md) object also processes [NSTimer](timer.md) events.

Your application neither creates nor explicitly manages [NSRunLoop](runloop.md) objects. The system creates a [NSRunLoop](runloop.md) object as needed for each [NSThread](thread.md) object, including the application’s main thread. If you need to access the current thread’s run loop, use the class method [currentRunLoop](runloop/current.md).

Note that from the perspective of [NSRunLoop](runloop.md), [NSTimer](timer.md) objects aren’t “input”—they’re a special type, and they don’t cause the run loop to return when they fire.

> **Warning**

>  The [NSRunLoop](runloop.md) class is generally not thread-safe, and you must call its methods only within the context of the current thread. Don’t call the methods of a [NSRunLoop](runloop.md) object running in a different thread, which might cause unexpected results.

## Topics

### Accessing Run Loops and Modes

- [currentRunLoop](runloop/current.md): Returns the run loop for the current thread.
- [currentMode](runloop/currentmode.md): The receiver’s current input mode.
- [limitDateForMode:](runloop/limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [mainRunLoop](runloop/main.md): Returns the run loop of the main thread.
- [getCFRunLoop](runloop/getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [NSRunLoopMode](runloop/mode.md): Modes that a run loop operates in.

### Managing Timers

- [addTimer:forMode:](runloop/add%28__formode_%29-392ag.md): Registers a given timer with a given input mode.

### Managing Ports

- [addPort:forMode:](runloop/add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.
- [removePort:forMode:](runloop/remove%28__formode_%29.md): Removes a port from the specified input mode of the run loop.

### Configuring as Server Process

- [configureAsServer](nsrunloop/configureasserver.md): Deprecated. Deprecated. Does nothing.

### Running a Loop

- [run](runloop/run%28%29.md): Puts the receiver into a permanent loop, during which time it processes data from all attached input sources.
- [runMode:beforeDate:](runloop/run%28mode_before_%29.md): Runs the loop once, blocking for input in the specified mode until a given date.
- [runUntilDate:](runloop/run%28until_%29.md): Runs the loop until the specified date, during which time it processes data from all attached input sources.
- [acceptInputForMode:beforeDate:](runloop/acceptinput%28formode_before_%29.md): Runs the loop once or until the specified date, accepting input only for the specified mode.

### Scheduling and Canceling Tasks

- [performBlock:](runloop/perform%28__%29.md): Schedules a block that the run loop invokes.
- [performInModes:block:](runloop/perform%28inmodes_block_%29.md): Schedules a block that the run loop invokes when it’s running in any of the specified modes.
- [performSelector:target:argument:order:modes:](runloop/perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerformSelector:target:argument:](runloop/cancelperform%28__target_argument_%29.md): Cancels the sending of a previously scheduled message.
- [cancelPerformSelectorsWithTarget:](runloop/cancelperformselectors%28withtarget_%29.md): Cancels all outstanding ordered performs scheduled with a given target.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Run Loop Scheduling

- [NSTimer](timer.md): A timer that fires after a certain time interval has elapsed, sending a specified message to a target object.
