> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachport](https://developer.apple.com/documentation/corefoundation/cfmachport)

# CFMachPort (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMachPort
```

<a id="Overview"></a>

## Overview

A CFMachPort object is a wrapper for a native Mach port (`mach_port_t`). Mach ports are the native communication channel for the macOS kernel.

CFMachPort does not provide a function to send messages, so you primarily use a CFMachPort object if you need to listen to a Mach port that you obtained by other means. You can get a callback when a message arrives on the port or when the port becomes invalid, such as when the native port dies.

To listen for messages you need to create a run loop source with [CFMachPortCreateRunLoopSource(\_:\_:\_:)](cfmachportcreaterunloopsource%28______%29.md) and add it to a run loop with [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md).

> **Important**

>  If you want to tear down the connection, you must invalidate the port (using [CFMachPortInvalidate(\_:)](cfmachportinvalidate%28__%29.md)) before releasing the runloop source and the Mach port object.

To send data, you must use the Mach APIs with the native Mach port, which is not described here. Alternatively, you can use a [CFMessagePort](cfmessageport.md) object, which can send arbitrary data.

Mach ports only support communication on the local machine. For network communication, you have to use a [CFSocket](cfsocket.md) object.

## Topics

### Creating a CFMachPort Object

- [CFMachPortCreate(\_:\_:\_:\_:)](cfmachportcreate%28________%29.md): Creates a CFMachPort object with a new Mach port.
- [CFMachPortCreateWithPort(\_:\_:\_:\_:\_:)](cfmachportcreatewithport%28__________%29.md): Creates a CFMachPort object for a pre-existing native Mach port.

### Configuring a CFMachPort Object

- [CFMachPortInvalidate(\_:)](cfmachportinvalidate%28__%29.md): Invalidates a CFMachPort object, stopping it from receiving any more messages.
- [CFMachPortCreateRunLoopSource(\_:\_:\_:)](cfmachportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMachPort object.
- [CFMachPortSetInvalidationCallBack(\_:\_:)](cfmachportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMachPort object is invalidated.

### Examining a CFMachPort Object

- [CFMachPortGetContext(\_:\_:)](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetInvalidationCallBack(\_:)](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortGetPort(\_:)](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
- [CFMachPortIsValid(\_:)](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

### Getting the CFMachPort Type ID

- [CFMachPortGetTypeID()](cfmachportgettypeid%28%29.md): Returns the type identifier for the CFMachPort opaque type.

### Callbacks

- [CFMachPortCallBack](cfmachportcallback.md): Callback invoked to process a message received on a CFMachPort object.
- [CFMachPortInvalidationCallBack](cfmachportinvalidationcallback.md): Callback invoked when a CFMachPort object is invalidated.

### Data Types

- [CFMachPortContext](cfmachportcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFMachPort object’s behavior.

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

# CFMachPortRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFMachPort * CFMachPortRef;
```

<a id="Overview"></a>

## Overview

A CFMachPort object is a wrapper for a native Mach port (`mach_port_t`). Mach ports are the native communication channel for the macOS kernel.

CFMachPort does not provide a function to send messages, so you primarily use a CFMachPort object if you need to listen to a Mach port that you obtained by other means. You can get a callback when a message arrives on the port or when the port becomes invalid, such as when the native port dies.

To listen for messages you need to create a run loop source with [CFMachPortCreateRunLoopSource](cfmachportcreaterunloopsource%28______%29.md) and add it to a run loop with [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md).

> **Important**

>  If you want to tear down the connection, you must invalidate the port (using [CFMachPortInvalidate](cfmachportinvalidate%28__%29.md)) before releasing the runloop source and the Mach port object.

To send data, you must use the Mach APIs with the native Mach port, which is not described here. Alternatively, you can use a [CFMessagePortRef](cfmessageport.md) object, which can send arbitrary data.

Mach ports only support communication on the local machine. For network communication, you have to use a [CFSocketRef](cfsocket.md) object.

## Topics

### Creating a CFMachPort Object

- [CFMachPortCreate](cfmachportcreate%28________%29.md): Creates a CFMachPort object with a new Mach port.
- [CFMachPortCreateWithPort](cfmachportcreatewithport%28__________%29.md): Creates a CFMachPort object for a pre-existing native Mach port.

### Configuring a CFMachPort Object

- [CFMachPortInvalidate](cfmachportinvalidate%28__%29.md): Invalidates a CFMachPort object, stopping it from receiving any more messages.
- [CFMachPortCreateRunLoopSource](cfmachportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMachPort object.
- [CFMachPortSetInvalidationCallBack](cfmachportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMachPort object is invalidated.

### Examining a CFMachPort Object

- [CFMachPortGetContext](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetInvalidationCallBack](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortGetPort](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
- [CFMachPortIsValid](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

### Getting the CFMachPort Type ID

- [CFMachPortGetTypeID](cfmachportgettypeid%28%29.md): Returns the type identifier for the CFMachPort opaque type.

### Callbacks

- [CFMachPortCallBack](cfmachportcallback.md): Callback invoked to process a message received on a CFMachPort object.
- [CFMachPortInvalidationCallBack](cfmachportinvalidationcallback.md): Callback invoked when a CFMachPort object is invalidated.

### Data Types

- [CFMachPortContext](cfmachportcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFMachPort object’s behavior.

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
