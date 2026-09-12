> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmessageport](https://developer.apple.com/documentation/corefoundation/cfmessageport)

# CFMessagePort (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMessagePort
```

<a id="Overview"></a>

## Overview

CFMessagePort objects provide a communications channel that can transmit arbitrary data between multiple threads or processes on the local machine.

You create a local message port with [CFMessagePortCreateLocal(\_:\_:\_:\_:\_:)](cfmessageportcreatelocal%28__________%29.md) and make it available to other processes by giving it a name, either when you create it or later with [CFMessagePortSetName(\_:\_:)](cfmessageportsetname%28____%29.md). Other processes then connect to it using [CFMessagePortCreateRemote(\_:\_:)](cfmessageportcreateremote%28____%29.md), specifying the name of the port.

To listen for messages, you need to create a run loop source with [CFMessagePortCreateRunLoopSource(\_:\_:\_:)](cfmessageportcreaterunloopsource%28______%29.md) and add it to a run loop with [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md).

> **Important**

>  If you want to tear down the connection, you must invalidate the port (using [CFMessagePortInvalidate(\_:)](cfmessageportinvalidate%28__%29.md)) before releasing the runloop source and the message port object.

Your message port’s callback function will be called when a message arrives. To send data, you store the data in a CFData object and call [CFMessagePortSendRequest(\_:\_:\_:\_:\_:\_:\_:)](cfmessageportsendrequest%28______________%29.md). You can optionally have the function wait for a reply and return the reply in another CFData object.

Message ports only support communication on the local machine. For network communication, you have to use a [CFSocket](cfsocket.md) object.

## Topics

### Creating a CFMessagePort Object

- [CFMessagePortCreateLocal(\_:\_:\_:\_:\_:)](cfmessageportcreatelocal%28__________%29.md): Returns a local CFMessagePort object.
- [CFMessagePortCreateRemote(\_:\_:)](cfmessageportcreateremote%28____%29.md): Returns a CFMessagePort object connected to a remote port.

### Configuring a CFMessagePort Object

- [CFMessagePortCreateRunLoopSource(\_:\_:\_:)](cfmessageportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMessagePort object.
- [CFMessagePortSetInvalidationCallBack(\_:\_:)](cfmessageportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMessagePort object is invalidated.
- [CFMessagePortSetName(\_:\_:)](cfmessageportsetname%28____%29.md): Sets the name of a local CFMessagePort object.

### Using a Message Port

- [CFMessagePortInvalidate(\_:)](cfmessageportinvalidate%28__%29.md): Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.
- [CFMessagePortSendRequest(\_:\_:\_:\_:\_:\_:\_:)](cfmessageportsendrequest%28______________%29.md): Sends a message to a remote CFMessagePort object.
- [CFMessagePortSetDispatchQueue(\_:\_:)](cfmessageportsetdispatchqueue%28____%29.md): Schedules callbacks for the specified message port on the specified dispatch queue.

### Examining a Message Port

- [CFMessagePortGetContext(\_:\_:)](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetInvalidationCallBack(\_:)](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortGetName(\_:)](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote(\_:)](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid(\_:)](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

### Getting the CFMessagePort Type ID

- [CFMessagePortGetTypeID()](cfmessageportgettypeid%28%29.md): Returns the type identifier for the CFMessagePort opaque type.

### Callbacks

- [CFMessagePortCallBack](cfmessageportcallback.md): Callback invoked to process a message received on a CFMessagePort object.
- [CFMessagePortInvalidationCallBack](cfmessageportinvalidationcallback.md): Callback invoked when a CFMessagePort object is invalidated.

### Data Types

- [CFMessagePortContext](cfmessageportcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFMessagePort object’s behavior.

### Constants

- [CFMessagePortSendRequest Error Codes](1561514-cfmessageportsendrequest-error-c.md): Error codes for `CFMessagePortSendRequest`.

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

# CFMessagePortRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFMessagePort * CFMessagePortRef;
```

<a id="Overview"></a>

## Overview

CFMessagePort objects provide a communications channel that can transmit arbitrary data between multiple threads or processes on the local machine.

You create a local message port with [CFMessagePortCreateLocal](cfmessageportcreatelocal%28__________%29.md) and make it available to other processes by giving it a name, either when you create it or later with [CFMessagePortSetName](cfmessageportsetname%28____%29.md). Other processes then connect to it using [CFMessagePortCreateRemote](cfmessageportcreateremote%28____%29.md), specifying the name of the port.

To listen for messages, you need to create a run loop source with [CFMessagePortCreateRunLoopSource](cfmessageportcreaterunloopsource%28______%29.md) and add it to a run loop with [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md).

> **Important**

>  If you want to tear down the connection, you must invalidate the port (using [CFMessagePortInvalidate](cfmessageportinvalidate%28__%29.md)) before releasing the runloop source and the message port object.

Your message port’s callback function will be called when a message arrives. To send data, you store the data in a CFData object and call [CFMessagePortSendRequest](cfmessageportsendrequest%28______________%29.md). You can optionally have the function wait for a reply and return the reply in another CFData object.

Message ports only support communication on the local machine. For network communication, you have to use a [CFSocketRef](cfsocket.md) object.

## Topics

### Creating a CFMessagePort Object

- [CFMessagePortCreateLocal](cfmessageportcreatelocal%28__________%29.md): Returns a local CFMessagePort object.
- [CFMessagePortCreateRemote](cfmessageportcreateremote%28____%29.md): Returns a CFMessagePort object connected to a remote port.

### Configuring a CFMessagePort Object

- [CFMessagePortCreateRunLoopSource](cfmessageportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMessagePort object.
- [CFMessagePortSetInvalidationCallBack](cfmessageportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMessagePort object is invalidated.
- [CFMessagePortSetName](cfmessageportsetname%28____%29.md): Sets the name of a local CFMessagePort object.

### Using a Message Port

- [CFMessagePortInvalidate](cfmessageportinvalidate%28__%29.md): Invalidates a CFMessagePort object, stopping it from receiving or sending any more messages.
- [CFMessagePortSendRequest](cfmessageportsendrequest%28______________%29.md): Sends a message to a remote CFMessagePort object.
- [CFMessagePortSetDispatchQueue](cfmessageportsetdispatchqueue%28____%29.md): Schedules callbacks for the specified message port on the specified dispatch queue.

### Examining a Message Port

- [CFMessagePortGetContext](cfmessageportgetcontext%28____%29.md): Returns the context information for a CFMessagePort object.
- [CFMessagePortGetInvalidationCallBack](cfmessageportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMessagePort object.
- [CFMessagePortGetName](cfmessageportgetname%28__%29.md): Returns the name with which a CFMessagePort object is registered.
- [CFMessagePortIsRemote](cfmessageportisremote%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object represents a remote port.
- [CFMessagePortIsValid](cfmessageportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMessagePort object is valid and able to send or receive messages.

### Getting the CFMessagePort Type ID

- [CFMessagePortGetTypeID](cfmessageportgettypeid%28%29.md): Returns the type identifier for the CFMessagePort opaque type.

### Callbacks

- [CFMessagePortCallBack](cfmessageportcallback.md): Callback invoked to process a message received on a CFMessagePort object.
- [CFMessagePortInvalidationCallBack](cfmessageportinvalidationcallback.md): Callback invoked when a CFMessagePort object is invalidated.

### Data Types

- [CFMessagePortContext](cfmessageportcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFMessagePort object’s behavior.

### Constants

- [CFMessagePortSendRequest Error Codes](1561514-cfmessageportsendrequest-error-c.md): Error codes for `CFMessagePortSendRequest`.

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
