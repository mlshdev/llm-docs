> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/portforname:host:](https://developer.apple.com/documentation/foundation/nssocketportnameserver/portforname:host:)

# portForName:host:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Looks up and returns the port registered under the specified name on a specified host.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (NSPort *) portForName:(NSString *) name host:(NSString *) host;
```

## Parameters

- `name`: The name of the desired port.
- `host`: The name of the host. `hostName` is an Internet domain name (for example, “`sales.anycorp.com`”). If `hostName` is `nil` or empty, the local host is checked.

<a id="return-value"></a>

## Return Value

The port associated with `portName` on the host `hostName`. Returns `nil` if no such port exists.

<a id="Discussion"></a>

## Discussion

Invokes [portForName:host:nameServerPortNumber:](portforname_host_nameserverportnumber_.md) with 0 as the name server port number.

## See Also

### Looking up Ports

- [portForName:](portforname_.md): Deprecated. Looks up and returns the port registered under the specified name on the local host.
- [portForName:host:nameServerPortNumber:](portforname_host_nameserverportnumber_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.
