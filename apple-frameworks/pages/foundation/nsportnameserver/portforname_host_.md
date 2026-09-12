> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportnameserver/portforname:host:](https://developer.apple.com/documentation/foundation/nsportnameserver/portforname:host:)

# portForName:host:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Looks up and returns the port registered under the specified name on a specified host.

## Declaration

```objectivec
- (NSPort *) portForName:(NSString *) name host:(NSString *) host;
```

## Parameters

- `name`: The name of the desired port.
- `host`: The name of the host. `host` is an Internet domain name (for example, “`sales.anycorp.com`”). If `host` is `nil` or empty, the local host is checked.

<a id="return-value"></a>

## Return Value

The port associated with `name` on the host `host`. Returns `nil` if no such port exists.

## See Also

### Looking up Ports

- [portForName:](portforname_.md): Deprecated. Looks up and returns the port registered under the specified name on the local host.
