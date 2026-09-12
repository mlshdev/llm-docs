> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobserver](https://developer.apple.com/documentation/corefoundation/cfrunloopobserver)

# CFRunLoopObserver (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFRunLoopObserver
```

<a id="Overview"></a>

## Overview

A CFRunLoopObserver provides a general means to receive callbacks at different points within a running run loop. In contrast to sources, which fire when an asynchronous event occurs, and timers, which fire when a particular time passes, observers fire at special locations within the execution of the run loop, such as before sources are processed or before the run loop goes to sleep, waiting for an event to occur. Observers can be either one-time events or repeated every time through the run loop’s loop.

Each run loop observer can be registered in only one run loop at a time, although it can be added to multiple run loop modes within that run loop.

## Topics

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler(\_:\_:\_:\_:\_:)](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate(\_:\_:\_:\_:\_:\_:)](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat(\_:)](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities(\_:)](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext(\_:\_:)](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetOrder(\_:)](cfrunloopobservergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID()](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverInvalidate(\_:)](cfrunloopobserverinvalidate%28__%29.md): Invalidates a CFRunLoopObserver object, stopping it from ever firing again.
- [CFRunLoopObserverIsValid(\_:)](cfrunloopobserverisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.

### Callbacks

- [CFRunLoopObserverCallBack](cfrunloopobservercallback.md): Callback invoked when a CFRunLoopObserver object is fired.

### Data Types

- [CFRunLoopObserverContext](cfrunloopobservercontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopObserver object’s behavior.

### Constants

- [CFRunLoopActivity](cfrunloopactivity.md): Run loop activity stages in which run loop observers can be scheduled.

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

# CFRunLoopObserverRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFRunLoopObserver * CFRunLoopObserverRef;
```

<a id="Overview"></a>

## Overview

A CFRunLoopObserver provides a general means to receive callbacks at different points within a running run loop. In contrast to sources, which fire when an asynchronous event occurs, and timers, which fire when a particular time passes, observers fire at special locations within the execution of the run loop, such as before sources are processed or before the run loop goes to sleep, waiting for an event to occur. Observers can be either one-time events or repeated every time through the run loop’s loop.

Each run loop observer can be registered in only one run loop at a time, although it can be added to multiple run loop modes within that run loop.

## Topics

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetOrder](cfrunloopobservergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverInvalidate](cfrunloopobserverinvalidate%28__%29.md): Invalidates a CFRunLoopObserver object, stopping it from ever firing again.
- [CFRunLoopObserverIsValid](cfrunloopobserverisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.

### Callbacks

- [CFRunLoopObserverCallBack](cfrunloopobservercallback.md): Callback invoked when a CFRunLoopObserver object is fired.

### Data Types

- [CFRunLoopObserverContext](cfrunloopobservercontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFRunLoopObserver object’s behavior.

### Constants

- [CFRunLoopActivity](cfrunloopactivity.md): Run loop activity stages in which run loop observers can be scheduled.

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
