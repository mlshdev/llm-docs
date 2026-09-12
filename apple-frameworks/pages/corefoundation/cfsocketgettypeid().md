> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketgettypeid()](https://developer.apple.com/documentation/corefoundation/cfsocketgettypeid())

# CFSocketGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFSocket opaque type.

## Declaration

```swift
func CFSocketGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFSocket opaque type.

## See Also

### Using Sockets

- [CFSocketConnectToAddress(\_:\_:\_:)](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketInvalidate(\_:)](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid(\_:)](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

# CFSocketGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFSocket opaque type.

## Declaration

```objectivec
extern CFTypeID CFSocketGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFSocket opaque type.

## See Also

### Using Sockets

- [CFSocketConnectToAddress](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketInvalidate](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.
