> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/registerport:name:nameserverportnumber:](https://developer.apple.com/documentation/foundation/nssocketportnameserver/registerport:name:nameserverportnumber:)

# registerPort:name:nameServerPortNumber:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Registers a given port as a network service with the specified name in the local domain.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (BOOL) registerPort:(NSPort *) port name:(NSString *) name nameServerPortNumber:(uint16_t) portNumber;
```

## Parameters

- `port`: The port to make available.
- `name`: The name for the port.
- `portNumber`: The `portNumber` parameter is ignored.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If your application has already registered a port under the name `portName`, this method replaces it with `port`.

If the local domain already has a port named `portName` registered, this method could return [true](https://developer.apple.com/documentation/swift/true) before the name collision is detected. To detect a potential name collision, you can invoke [portForName:host:](portforname_host_.md) with a `host` argument of `@"*"` to test if `portName` is already taken. This, however, leaves a race condition wherein another process can register a port under `portName` after [portForName:host:](portforname_host_.md) returns but before you register `port`. If this is an unacceptable risk for your application, you can also invoke [portForName:host:](portforname_host_.md) some finite time after registering your port to test if you get the same port back.

## See Also

### Related Documentation

- [portForName:host:nameServerPortNumber:](portforname_host_nameserverportnumber_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.

### Registering and Removing Ports

- [registerPort:name:](registerport_name_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.
- [removePortForName:](removeportforname_.md): Deprecated. Unregisters the port for a given name on the local host.
