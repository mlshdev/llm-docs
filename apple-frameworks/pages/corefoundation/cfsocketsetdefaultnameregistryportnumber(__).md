> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketsetdefaultnameregistryportnumber(_:)](https://developer.apple.com/documentation/corefoundation/cfsocketsetdefaultnameregistryportnumber(_:))

# CFSocketSetDefaultNameRegistryPortNumber(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the default port number with which to connect to a CFSocket name server.

## Declaration

```swift
func CFSocketSetDefaultNameRegistryPortNumber(_ port: UInt16)
```

## Parameters

- `port`: The port number to use to connect to the CFSocket name server.

<a id="Discussion"></a>

## Discussion

If you do not provide a name server signature or leave out the socket address in the signature when calling one of the name registry functions, such as [CFSocketRegisterSocketSignature(\_:\_:\_:\_:)](cfsocketregistersocketsignature%28________%29.md), `port` will be used for the connection.

## See Also

### Core Foundation Socket Name Server Utilities Miscellaneous Functions

- [CFSocketCopyRegisteredSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcopyregisteredsocketsignature%28__________%29.md): Returns a socket signature registered with a CFSocket name server.
- [CFSocketCopyRegisteredValue(\_:\_:\_:\_:\_:)](cfsocketcopyregisteredvalue%28__________%29.md): Returns a value registered with a CFSocket name server.
- [CFSocketGetDefaultNameRegistryPortNumber()](cfsocketgetdefaultnameregistryportnumber%28%29.md): Returns the default port number with which to connect to a CFSocket name server.
- [CFSocketRegisterSocketSignature(\_:\_:\_:\_:)](cfsocketregistersocketsignature%28________%29.md): Registers a socket signature with a CFSocket name server.
- [CFSocketRegisterValue(\_:\_:\_:\_:)](cfsocketregistervalue%28________%29.md): Registers a property-list value with a CFSocket name server.
- [CFSocketUnregister(\_:\_:\_:)](cfsocketunregister%28______%29.md): Unregisters a value or socket signature with a CFSocket name server.

# CFSocketSetDefaultNameRegistryPortNumber (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the default port number with which to connect to a CFSocket name server.

## Declaration

```objectivec
extern void CFSocketSetDefaultNameRegistryPortNumber(UInt16 port);
```

## Parameters

- `port`: The port number to use to connect to the CFSocket name server.

<a id="Discussion"></a>

## Discussion

If you do not provide a name server signature or leave out the socket address in the signature when calling one of the name registry functions, such as [CFSocketRegisterSocketSignature](cfsocketregistersocketsignature%28________%29.md), `port` will be used for the connection.

## See Also

### Core Foundation Socket Name Server Utilities Miscellaneous Functions

- [CFSocketCopyRegisteredSocketSignature](cfsocketcopyregisteredsocketsignature%28__________%29.md): Returns a socket signature registered with a CFSocket name server.
- [CFSocketCopyRegisteredValue](cfsocketcopyregisteredvalue%28__________%29.md): Returns a value registered with a CFSocket name server.
- [CFSocketGetDefaultNameRegistryPortNumber](cfsocketgetdefaultnameregistryportnumber%28%29.md): Returns the default port number with which to connect to a CFSocket name server.
- [CFSocketRegisterSocketSignature](cfsocketregistersocketsignature%28________%29.md): Registers a socket signature with a CFSocket name server.
- [CFSocketRegisterValue](cfsocketregistervalue%28________%29.md): Registers a property-list value with a CFSocket name server.
- [CFSocketUnregister](cfsocketunregister%28______%29.md): Unregisters a value or socket signature with a CFSocket name server.
