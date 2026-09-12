> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstream](https://developer.apple.com/documentation/corefoundation/cfreadstream)

# CFReadStream (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFReadStream
```

<a id="Overview"></a>

## Overview

`CFReadStream` provides an interface for reading a byte stream either synchronously or asynchronously. You can create streams that read bytes from a block of memory, a file, or a generic socket. All streams need to be opened, using [CFReadStreamOpen(\_:)](cfreadstreamopen%28__%29.md), before reading.

Use [CFWriteStream](cfwritestream.md) for writing byte streams. The CFNetwork framework defines an additional type of stream for reading responses to HTTP requests.

CFReadStream is “toll-free bridged” with its Cocoa Foundation counterpart, [InputStream](../foundation/inputstream.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSInputStream *` parameter, you can pass in a CFReadStreamRef, and in a function where you see a CFReadStreamRef parameter, you can pass in an `NSInputStream` instance. Note, however, that you may have either a delegate or callbacks but not both. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Read Stream

- [CFReadStreamCreateWithBytesNoCopy(\_:\_:\_:\_:)](cfreadstreamcreatewithbytesnocopy%28________%29.md): Creates a readable stream for a block of memory.
- [CFReadStreamCreateWithFile(\_:\_:)](cfreadstreamcreatewithfile%28____%29.md): Creates a readable stream for a file.

### Opening and Closing a Read Stream

- [CFReadStreamClose(\_:)](cfreadstreamclose%28__%29.md): Closes a readable stream.
- [CFReadStreamOpen(\_:)](cfreadstreamopen%28__%29.md): Opens a stream for reading.

### Reading from a Stream

- [CFReadStreamRead(\_:\_:\_:)](cfreadstreamread%28______%29.md): Reads data from a readable stream.

### Scheduling a Read Stream

- [CFReadStreamScheduleWithRunLoop(\_:\_:\_:)](cfreadstreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.
- [CFReadStreamUnscheduleFromRunLoop(\_:\_:\_:)](cfreadstreamunschedulefromrunloop%28______%29.md): Removes a read stream from a given run loop.

### Examining Stream Properties

- [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer(\_:\_:\_:)](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError(\_:)](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus(\_:)](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable(\_:)](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

### Setting Stream Properties

- [CFReadStreamSetClient(\_:\_:\_:\_:)](cfreadstreamsetclient%28________%29.md): Assigns a client to a stream, which receives callbacks when certain events occur.
- [CFReadStreamSetProperty(\_:\_:\_:)](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.

### Getting the CFReadStream Type ID

- [CFReadStreamGetTypeID()](cfreadstreamgettypeid%28%29.md): Returns the type identifier the `CFReadStream` opaque type.

### Callbacks

- [CFReadStreamClientCallBack](cfreadstreamclientcallback.md): Callback invoked when certain types of activity takes place on a readable stream.

### Data Types

- [CFStreamClientContext](cfstreamclientcontext.md): A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

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

# CFReadStreamRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFReadStream * CFReadStreamRef;
```

<a id="Overview"></a>

## Overview

`CFReadStream` provides an interface for reading a byte stream either synchronously or asynchronously. You can create streams that read bytes from a block of memory, a file, or a generic socket. All streams need to be opened, using [CFReadStreamOpen](cfreadstreamopen%28__%29.md), before reading.

Use [CFWriteStreamRef](cfwritestream.md) for writing byte streams. The CFNetwork framework defines an additional type of stream for reading responses to HTTP requests.

CFReadStream is “toll-free bridged” with its Cocoa Foundation counterpart, [NSInputStream](../foundation/inputstream.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSInputStream *` parameter, you can pass in a CFReadStreamRef, and in a function where you see a CFReadStreamRef parameter, you can pass in an `NSInputStream` instance. Note, however, that you may have either a delegate or callbacks but not both. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Read Stream

- [CFReadStreamCreateWithBytesNoCopy](cfreadstreamcreatewithbytesnocopy%28________%29.md): Creates a readable stream for a block of memory.
- [CFReadStreamCreateWithFile](cfreadstreamcreatewithfile%28____%29.md): Creates a readable stream for a file.

### Opening and Closing a Read Stream

- [CFReadStreamClose](cfreadstreamclose%28__%29.md): Closes a readable stream.
- [CFReadStreamOpen](cfreadstreamopen%28__%29.md): Opens a stream for reading.

### Reading from a Stream

- [CFReadStreamRead](cfreadstreamread%28______%29.md): Reads data from a readable stream.

### Scheduling a Read Stream

- [CFReadStreamScheduleWithRunLoop](cfreadstreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.
- [CFReadStreamUnscheduleFromRunLoop](cfreadstreamunschedulefromrunloop%28______%29.md): Removes a read stream from a given run loop.

### Examining Stream Properties

- [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

### Setting Stream Properties

- [CFReadStreamSetClient](cfreadstreamsetclient%28________%29.md): Assigns a client to a stream, which receives callbacks when certain events occur.
- [CFReadStreamSetProperty](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.

### Getting the CFReadStream Type ID

- [CFReadStreamGetTypeID](cfreadstreamgettypeid%28%29.md): Returns the type identifier the `CFReadStream` opaque type.

### Callbacks

- [CFReadStreamClientCallBack](cfreadstreamclientcallback.md): Callback invoked when certain types of activity takes place on a readable stream.

### Data Types

- [CFStreamClientContext](cfstreamclientcontext.md): A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

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
