> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/registerport:name:](https://developer.apple.com/documentation/foundation/nssocketportnameserver/registerport:name:)

# registerPort:name:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Registers a given port as a network service with the specified name in the local domain.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (BOOL) registerPort:(NSPort *) port name:(NSString *) name;
```

## Parameters

- `port`: The port to make available.
- `name`: The name for the port.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Invokes [registerPort:name:nameServerPortNumber:](registerport_name_nameserverportnumber_.md) with 0 as the name server port number.

## See Also

### Registering and Removing Ports

- [registerPort:name:nameServerPortNumber:](registerport_name_nameserverportnumber_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.
- [removePortForName:](removeportforname_.md): Deprecated. Unregisters the port for a given name on the local host.
