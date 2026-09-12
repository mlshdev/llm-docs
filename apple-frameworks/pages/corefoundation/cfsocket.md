> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocket](https://developer.apple.com/documentation/corefoundation/cfsocket)

# CFSocket (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFSocket
```

<a id="Overview"></a>

## Overview

A CFSocket is a communications channel implemented with a BSD socket.

For most uses of this API, you will need to include three headers:

```objc
#import <CoreFoundation/CoreFoundation.h> #include <sys/socket.h> #include <netinet/in.h>
```

CFSocket can be created from scratch with [CFSocketCreate(\_:\_:\_:\_:\_:\_:\_:)](cfsocketcreate%28______________%29.md) and [CFSocketCreateWithSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcreatewithsocketsignature%28__________%29.md). CFSocket objects can also be created to wrap an existing BSD socket by calling [CFSocketCreateWithNative(\_:\_:\_:\_:\_:)](cfsocketcreatewithnative%28__________%29.md). Finally, you can create a CFSocket and connect simultaneously to a remote host by calling [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](cfsocketcreateconnectedtosocketsignature%28____________%29.md).

To listen for messages, you need to create a run loop source with [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md) and add it to a run loop with [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md). You can select the types of socket activities, such as connection attempts or data arrivals, that cause the source to fire and invoke your CFSocket’s callback function. To send data, you store the data in a CFData and call [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md).

Unlike Mach and message ports, sockets support communication over a network.

## Topics

### Creating Sockets

- [CFSocketCreate(\_:\_:\_:\_:\_:\_:\_:)](cfsocketcreate%28______________%29.md): Creates a CFSocket object of a specified protocol and type.
- [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](cfsocketcreateconnectedtosocketsignature%28____________%29.md): Creates a CFSocket object and opens a connection to a remote socket.
- [CFSocketCreateWithNative(\_:\_:\_:\_:\_:)](cfsocketcreatewithnative%28__________%29.md): Creates a CFSocket object for a pre-existing native socket.
- [CFSocketCreateWithSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcreatewithsocketsignature%28__________%29.md): Creates a CFSocket object using information from a CFSocketSignature structure.

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

### Using Sockets

- [CFSocketConnectToAddress(\_:\_:\_:)](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID()](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate(\_:)](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid(\_:)](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

### Callbacks

- [CFSocketCallBack](cfsocketcallback.md): Callback invoked when certain types of activity takes place on a CFSocket object.

### Data Types

- [CFSocketContext](cfsocketcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.
- [CFSocketNativeHandle](cfsocketnativehandle.md): Type for the platform-specific native socket handle.
- [CFSocketSignature](cfsocketsignature.md): A structure that fully specifies the communication protocol and connection address of a CFSocket object.

### Constants

- [CFSocketCallBackType](cfsocketcallbacktype.md): Types of socket activity that can cause the callback function of a CFSocket object to be called.
- [CFSocket Flags](1560944-cfsocket-flags.md): Flags that can be set on a CFSocket object to control its behavior.
- [CFSocketError](cfsocketerror.md): Error codes for many CFSocket functions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [CFNetwork Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/CFNetwork/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001132)

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

# CFSocketRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFSocket * CFSocketRef;
```

<a id="Overview"></a>

## Overview

A CFSocket is a communications channel implemented with a BSD socket.

For most uses of this API, you will need to include three headers:

```objc
#import <CoreFoundation/CoreFoundation.h> #include <sys/socket.h> #include <netinet/in.h>
```

CFSocket can be created from scratch with [CFSocketCreate](cfsocketcreate%28______________%29.md) and [CFSocketCreateWithSocketSignature](cfsocketcreatewithsocketsignature%28__________%29.md). CFSocket objects can also be created to wrap an existing BSD socket by calling [CFSocketCreateWithNative](cfsocketcreatewithnative%28__________%29.md). Finally, you can create a CFSocket and connect simultaneously to a remote host by calling [CFSocketCreateConnectedToSocketSignature](cfsocketcreateconnectedtosocketsignature%28____________%29.md).

To listen for messages, you need to create a run loop source with [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md) and add it to a run loop with [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md). You can select the types of socket activities, such as connection attempts or data arrivals, that cause the source to fire and invoke your CFSocket’s callback function. To send data, you store the data in a CFData and call [CFSocketSendData](cfsocketsenddata%28________%29.md).

Unlike Mach and message ports, sockets support communication over a network.

## Topics

### Creating Sockets

- [CFSocketCreate](cfsocketcreate%28______________%29.md): Creates a CFSocket object of a specified protocol and type.
- [CFSocketCreateConnectedToSocketSignature](cfsocketcreateconnectedtosocketsignature%28____________%29.md): Creates a CFSocket object and opens a connection to a remote socket.
- [CFSocketCreateWithNative](cfsocketcreatewithnative%28__________%29.md): Creates a CFSocket object for a pre-existing native socket.
- [CFSocketCreateWithSocketSignature](cfsocketcreatewithsocketsignature%28__________%29.md): Creates a CFSocket object using information from a CFSocketSignature structure.

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

### Using Sockets

- [CFSocketConnectToAddress](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

### Callbacks

- [CFSocketCallBack](cfsocketcallback.md): Callback invoked when certain types of activity takes place on a CFSocket object.

### Data Types

- [CFSocketContext](cfsocketcontext.md): A structure that contains program-defined data and callbacks with which you can configure a CFSocket object’s behavior.
- [CFSocketNativeHandle](cfsocketnativehandle.md): Type for the platform-specific native socket handle.
- [CFSocketSignature](cfsocketsignature.md): A structure that fully specifies the communication protocol and connection address of a CFSocket object.

### Constants

- [CFSocketCallBackType](cfsocketcallbacktype.md): Types of socket activity that can cause the callback function of a CFSocket object to be called.
- [CFSocket Flags](1560944-cfsocket-flags.md): Flags that can be set on a CFSocket object to control its behavior.
- [CFSocketError](cfsocketerror.md): Error codes for many CFSocket functions.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)
- [CFNetwork Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/CFNetwork/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001132)

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
