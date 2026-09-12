> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketunregister(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketunregister(_:_:_:))

# CFSocketUnregister(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unregisters a value or socket signature with a CFSocket name server.

## Declaration

```swift
func CFSocketUnregister(_ nameServerSignature: UnsafePointer<CFSocketSignature>!, _ timeout: CFTimeInterval, _ name: CFString!) -> CFSocketError
```

## Parameters

- `nameServerSignature`: The socket signature for the name server. If `NULL`, this function contacts the default server, which is assumed to be a local process using TCP/IP to listen on the port number returned from [CFSocketGetDefaultNameRegistryPortNumber()](cfsocketgetdefaultnameregistryportnumber%28%29.md). If `nameServerSignature` is incomplete, the missing values are replaced with the default server’s values, if appropriate.
- `timeout`: The time to wait for the server to accept a connection and to reply to the registration request.
- `name`: The name of the property-list value or socket signature to unregister.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

The value being unregistered was previously registered with [CFSocketRegisterValue(\_:\_:\_:\_:)](cfsocketregistervalue%28________%29.md) or [CFSocketRegisterSocketSignature(\_:\_:\_:\_:)](cfsocketregistersocketsignature%28________%29.md).

## See Also

### Core Foundation Socket Name Server Utilities Miscellaneous Functions

- [CFSocketCopyRegisteredSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcopyregisteredsocketsignature%28__________%29.md): Returns a socket signature registered with a CFSocket name server.
- [CFSocketCopyRegisteredValue(\_:\_:\_:\_:\_:)](cfsocketcopyregisteredvalue%28__________%29.md): Returns a value registered with a CFSocket name server.
- [CFSocketGetDefaultNameRegistryPortNumber()](cfsocketgetdefaultnameregistryportnumber%28%29.md): Returns the default port number with which to connect to a CFSocket name server.
- [CFSocketRegisterSocketSignature(\_:\_:\_:\_:)](cfsocketregistersocketsignature%28________%29.md): Registers a socket signature with a CFSocket name server.
- [CFSocketRegisterValue(\_:\_:\_:\_:)](cfsocketregistervalue%28________%29.md): Registers a property-list value with a CFSocket name server.
- [CFSocketSetDefaultNameRegistryPortNumber(\_:)](cfsocketsetdefaultnameregistryportnumber%28__%29.md): Sets the default port number with which to connect to a CFSocket name server.

# CFSocketUnregister (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unregisters a value or socket signature with a CFSocket name server.

## Declaration

```objectivec
extern CFSocketError CFSocketUnregister(const CFSocketSignature *nameServerSignature, CFTimeInterval timeout, CFStringRef name);
```

## Parameters

- `nameServerSignature`: The socket signature for the name server. If `NULL`, this function contacts the default server, which is assumed to be a local process using TCP/IP to listen on the port number returned from [CFSocketGetDefaultNameRegistryPortNumber](cfsocketgetdefaultnameregistryportnumber%28%29.md). If `nameServerSignature` is incomplete, the missing values are replaced with the default server’s values, if appropriate.
- `timeout`: The time to wait for the server to accept a connection and to reply to the registration request.
- `name`: The name of the property-list value or socket signature to unregister.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

The value being unregistered was previously registered with [CFSocketRegisterValue](cfsocketregistervalue%28________%29.md) or [CFSocketRegisterSocketSignature](cfsocketregistersocketsignature%28________%29.md).

## See Also

### Core Foundation Socket Name Server Utilities Miscellaneous Functions

- [CFSocketCopyRegisteredSocketSignature](cfsocketcopyregisteredsocketsignature%28__________%29.md): Returns a socket signature registered with a CFSocket name server.
- [CFSocketCopyRegisteredValue](cfsocketcopyregisteredvalue%28__________%29.md): Returns a value registered with a CFSocket name server.
- [CFSocketGetDefaultNameRegistryPortNumber](cfsocketgetdefaultnameregistryportnumber%28%29.md): Returns the default port number with which to connect to a CFSocket name server.
- [CFSocketRegisterSocketSignature](cfsocketregistersocketsignature%28________%29.md): Registers a socket signature with a CFSocket name server.
- [CFSocketRegisterValue](cfsocketregistervalue%28________%29.md): Registers a property-list value with a CFSocket name server.
- [CFSocketSetDefaultNameRegistryPortNumber](cfsocketsetdefaultnameregistryportnumber%28__%29.md): Sets the default port number with which to connect to a CFSocket name server.
