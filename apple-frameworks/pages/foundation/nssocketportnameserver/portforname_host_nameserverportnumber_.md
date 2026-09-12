> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/portforname:host:nameserverportnumber:](https://developer.apple.com/documentation/foundation/nssocketportnameserver/portforname:host:nameserverportnumber:)

# portForName:host:nameServerPortNumber:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Looks up and returns the port registered under the specified name on a specified host.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (NSPort *) portForName:(NSString *) name host:(NSString *) host nameServerPortNumber:(uint16_t) portNumber;
```

## Parameters

- `name`: The name of the desired port.
- `host`: The name of the host. `hostName` is an Internet domain name (for example, “`sales.anycorp.com`”) or IP address (IPv4 or IPv6). If `hostName` is `nil` or empty, the local host is checked. If `hostName` is `@”*”`, all hosts on the local network are checked.
- `portNumber`: The `portNumber` parameter is ignored.

<a id="return-value"></a>

## Return Value

The port associated with `portName` on the host `hostName`. Returns `nil` if no such port exists.

## See Also

### Related Documentation

- [registerPort:name:nameServerPortNumber:](registerport_name_nameserverportnumber_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.

### Looking up Ports

- [portForName:](portforname_.md): Deprecated. Looks up and returns the port registered under the specified name on the local host.
- [portForName:host:](portforname_host_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.
