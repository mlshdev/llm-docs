> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestream](https://developer.apple.com/documentation/corefoundation/cfwritestream)

# CFWriteStream (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFWriteStream
```

<a id="Overview"></a>

## Overview

`CFWriteStream` provides an interface for writing a byte stream either synchronously or asynchronously. You can create streams that write bytes to a block of memory, a file, or a generic socket. All streams need to be opened, using [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md), before writing.

Use [CFReadStream](cfreadstream.md) for reading byte streams, and for the functions, such as [CFStreamCreatePairWithSocketToHost(\_:\_:\_:\_:\_:)](cfstreamcreatepairwithsockettohost%28__________%29.md), that create socket streams).

`CFWriteStream` is “toll-free bridged” with its Cocoa Foundation counterpart, [OutputStream](../foundation/outputstream.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSOutputStream *` parameter, you can pass in a `CFWriteStreamRef`, and in a function where you see a `CFWriteStreamRef` parameter, you can pass in an `NSOutputStream` instance. Note, however, that you may have either a delegate or callbacks but not both. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Write Stream

- [CFWriteStreamCreateWithAllocatedBuffers(\_:\_:)](cfwritestreamcreatewithallocatedbuffers%28____%29.md): Creates a writable stream for a growable block of memory.
- [CFWriteStreamCreateWithBuffer(\_:\_:\_:)](cfwritestreamcreatewithbuffer%28______%29.md): Creates a writable stream for a fixed-size block of memory.
- [CFWriteStreamCreateWithFile(\_:\_:)](cfwritestreamcreatewithfile%28____%29.md): Creates a writable stream for a file.

### Opening and Closing a Stream

- [CFWriteStreamClose(\_:)](cfwritestreamclose%28__%29.md): Closes a writable stream.
- [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md): Opens a stream for writing.

### Writing to a Stream

- [CFWriteStreamWrite(\_:\_:\_:)](cfwritestreamwrite%28______%29.md): Writes data to a writable stream.

### Scheduling a Write Stream

- [CFWriteStreamScheduleWithRunLoop(\_:\_:\_:)](cfwritestreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.
- [CFWriteStreamUnscheduleFromRunLoop(\_:\_:\_:)](cfwritestreamunschedulefromrunloop%28______%29.md): Removes a stream from a particular run loop.

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes(\_:)](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError(\_:)](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus(\_:)](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.

### Setting Stream Properties

- [CFWriteStreamSetClient(\_:\_:\_:\_:)](cfwritestreamsetclient%28________%29.md): Assigns a client to a stream, which receives callbacks when certain events occur.
- [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md): Sets the value of a property for a stream.

### Getting the CFWriteStream Type ID

- [CFWriteStreamGetTypeID()](cfwritestreamgettypeid%28%29.md): Returns the type identifier of all CFWriteStream objects.

### Callbacks

- [CFWriteStreamClientCallBack](cfwritestreamclientcallback.md): Callback invoked when certain types of activity takes place on a writable stream.

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

# CFWriteStreamRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFWriteStream * CFWriteStreamRef;
```

<a id="Overview"></a>

## Overview

`CFWriteStream` provides an interface for writing a byte stream either synchronously or asynchronously. You can create streams that write bytes to a block of memory, a file, or a generic socket. All streams need to be opened, using [CFWriteStreamOpen](cfwritestreamopen%28__%29.md), before writing.

Use [CFReadStreamRef](cfreadstream.md) for reading byte streams, and for the functions, such as [CFStreamCreatePairWithSocketToHost](cfstreamcreatepairwithsockettohost%28__________%29.md), that create socket streams).

`CFWriteStream` is “toll-free bridged” with its Cocoa Foundation counterpart, [NSOutputStream](../foundation/outputstream.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSOutputStream *` parameter, you can pass in a `CFWriteStreamRef`, and in a function where you see a `CFWriteStreamRef` parameter, you can pass in an `NSOutputStream` instance. Note, however, that you may have either a delegate or callbacks but not both. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Write Stream

- [CFWriteStreamCreateWithAllocatedBuffers](cfwritestreamcreatewithallocatedbuffers%28____%29.md): Creates a writable stream for a growable block of memory.
- [CFWriteStreamCreateWithBuffer](cfwritestreamcreatewithbuffer%28______%29.md): Creates a writable stream for a fixed-size block of memory.
- [CFWriteStreamCreateWithFile](cfwritestreamcreatewithfile%28____%29.md): Creates a writable stream for a file.

### Opening and Closing a Stream

- [CFWriteStreamClose](cfwritestreamclose%28__%29.md): Closes a writable stream.
- [CFWriteStreamOpen](cfwritestreamopen%28__%29.md): Opens a stream for writing.

### Writing to a Stream

- [CFWriteStreamWrite](cfwritestreamwrite%28______%29.md): Writes data to a writable stream.

### Scheduling a Write Stream

- [CFWriteStreamScheduleWithRunLoop](cfwritestreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.
- [CFWriteStreamUnscheduleFromRunLoop](cfwritestreamunschedulefromrunloop%28______%29.md): Removes a stream from a particular run loop.

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.

### Setting Stream Properties

- [CFWriteStreamSetClient](cfwritestreamsetclient%28________%29.md): Assigns a client to a stream, which receives callbacks when certain events occur.
- [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md): Sets the value of a property for a stream.

### Getting the CFWriteStream Type ID

- [CFWriteStreamGetTypeID](cfwritestreamgettypeid%28%29.md): Returns the type identifier of all CFWriteStream objects.

### Callbacks

- [CFWriteStreamClientCallBack](cfwritestreamclientcallback.md): Callback invoked when certain types of activity takes place on a writable stream.

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
