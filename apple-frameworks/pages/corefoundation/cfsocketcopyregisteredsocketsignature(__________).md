> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcopyregisteredsocketsignature(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketcopyregisteredsocketsignature(_:_:_:_:_:))

# CFSocketCopyRegisteredSocketSignature(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a socket signature registered with a CFSocket name server.

## Declaration

```swift
func CFSocketCopyRegisteredSocketSignature(_ nameServerSignature: UnsafePointer<CFSocketSignature>!, _ timeout: CFTimeInterval, _ name: CFString!, _ signature: UnsafeMutablePointer<CFSocketSignature>!, _ nameServerAddress: UnsafeMutablePointer<Unmanaged<CFData>?>!) -> CFSocketError
```

## Parameters

- `nameServerSignature`: The socket signature for the name server. If `NULL`, this function contacts the default server, which is assumed to be a local process using TCP/IP to listen on the port number returned from [CFSocketGetDefaultNameRegistryPortNumber()](cfsocketgetdefaultnameregistryportnumber%28%29.md). If `nameServerSignature` is incomplete, the missing values are replaced with the default server’s values, if appropriate.
- `timeout`: The time to wait for the server to accept a connection and to reply to the registration request.
- `name`: The name of the registered socket signature to retrieve.
- `signature`: A pointer to a [CFSocketSignature](cfsocketsignature.md) structure into which the retrieved socket signature is copied.
- `nameServerAddress`: A pointer to a CFData object into which the name server’s address is copied. Pass `NULL` if you do not want the server’s address.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

Once you have the socket signature, you can open a connection to that socket with [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](cfsocketcreateconnectedtosocketsignature%28____________%29.md).

## See Also

### Core Foundation Socket Name Server Utilities Miscellaneous Functions

- [CFSocketCopyRegisteredValue(\_:\_:\_:\_:\_:)](cfsocketcopyregisteredvalue%28__________%29.md): Returns a value registered with a CFSocket name server.
- [CFSocketGetDefaultNameRegistryPortNumber()](cfsocketgetdefaultnameregistryportnumber%28%29.md): Returns the default port number with which to connect to a CFSocket name server.
- [CFSocketRegisterSocketSignature(\_:\_:\_:\_:)](cfsocketregistersocketsignature%28________%29.md): Registers a socket signature with a CFSocket name server.
- [CFSocketRegisterValue(\_:\_:\_:\_:)](cfsocketregistervalue%28________%29.md): Registers a property-list value with a CFSocket name server.
- [CFSocketSetDefaultNameRegistryPortNumber(\_:)](cfsocketsetdefaultnameregistryportnumber%28__%29.md): Sets the default port number with which to connect to a CFSocket name server.
- [CFSocketUnregister(\_:\_:\_:)](cfsocketunregister%28______%29.md): Unregisters a value or socket signature with a CFSocket name server.

# CFSocketCopyRegisteredSocketSignature (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a socket signature registered with a CFSocket name server.

## Declaration

```objectivec
extern CFSocketError CFSocketCopyRegisteredSocketSignature(const CFSocketSignature *nameServerSignature, CFTimeInterval timeout, CFStringRef name, CFSocketSignature *signature, CFDataRef*nameServerAddress);
```

## Parameters

- `nameServerSignature`: The socket signature for the name server. If `NULL`, this function contacts the default server, which is assumed to be a local process using TCP/IP to listen on the port number returned from [CFSocketGetDefaultNameRegistryPortNumber](cfsocketgetdefaultnameregistryportnumber%28%29.md). If `nameServerSignature` is incomplete, the missing values are replaced with the default server’s values, if appropriate.
- `timeout`: The time to wait for the server to accept a connection and to reply to the registration request.
- `name`: The name of the registered socket signature to retrieve.
- `signature`: A pointer to a [CFSocketSignature](cfsocketsignature.md) structure into which the retrieved socket signature is copied.
- `nameServerAddress`: A pointer to a CFData object into which the name server’s address is copied. Pass `NULL` if you do not want the server’s address.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

Once you have the socket signature, you can open a connection to that socket with [CFSocketCreateConnectedToSocketSignature](cfsocketcreateconnectedtosocketsignature%28____________%29.md).

## See Also

### Core Foundation Socket Name Server Utilities Miscellaneous Functions

- [CFSocketCopyRegisteredValue](cfsocketcopyregisteredvalue%28__________%29.md): Returns a value registered with a CFSocket name server.
- [CFSocketGetDefaultNameRegistryPortNumber](cfsocketgetdefaultnameregistryportnumber%28%29.md): Returns the default port number with which to connect to a CFSocket name server.
- [CFSocketRegisterSocketSignature](cfsocketregistersocketsignature%28________%29.md): Registers a socket signature with a CFSocket name server.
- [CFSocketRegisterValue](cfsocketregistervalue%28________%29.md): Registers a property-list value with a CFSocket name server.
- [CFSocketSetDefaultNameRegistryPortNumber](cfsocketsetdefaultnameregistryportnumber%28__%29.md): Sets the default port number with which to connect to a CFSocket name server.
- [CFSocketUnregister](cfsocketunregister%28______%29.md): Unregisters a value or socket signature with a CFSocket name server.
