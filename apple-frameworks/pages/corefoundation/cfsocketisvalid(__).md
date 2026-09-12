> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cfsocketisvalid(_:))

# CFSocketIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.

## Declaration

```swift
func CFSocketIsValid(_ s: CFSocket!) -> Bool
```

## Parameters

- `s`: The CFSocket object to examine.

<a id="return-value"></a>

## Return Value

`true` if `s` can be used for communication, otherwise `false`.

## See Also

### Using Sockets

- [CFSocketConnectToAddress(\_:\_:\_:)](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID()](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate(\_:)](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

# CFSocketIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.

## Declaration

```objectivec
extern Boolean CFSocketIsValid(CFSocketRef s);
```

## Parameters

- `s`: The CFSocket object to examine.

<a id="return-value"></a>

## Return Value

`true` if `s` can be used for communication, otherwise `false`.

## See Also

### Using Sockets

- [CFSocketConnectToAddress](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketSendData](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.
