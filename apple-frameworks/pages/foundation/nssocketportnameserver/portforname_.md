> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/portforname:](https://developer.apple.com/documentation/foundation/nssocketportnameserver/portforname:)

# portForName:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Looks up and returns the port registered under the specified name on the local host.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (NSPort *) portForName:(NSString *) name;
```

## Parameters

- `name`: The name of the desired port.

<a id="return-value"></a>

## Return Value

The port associated with `portName` on the local host. Returns `nil` if no such port exists.

<a id="Discussion"></a>

## Discussion

Invokes [portForName:host:nameServerPortNumber:](portforname_host_nameserverportnumber_.md) with `nil` as the host name and 0 as the name server port number.

## See Also

### Looking up Ports

- [portForName:host:](portforname_host_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.
- [portForName:host:nameServerPortNumber:](portforname_host_nameserverportnumber_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.
