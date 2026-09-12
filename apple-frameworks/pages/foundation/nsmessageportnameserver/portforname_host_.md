> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmessageportnameserver/portforname:host:](https://developer.apple.com/documentation/foundation/nsmessageportnameserver/portforname:host:)

# portForName:host:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the `NSPort` object registered under a given name on the local host.

## Declaration

```objectivec
- (NSPort *) portForName:(NSString *) name host:(NSString *) host;
```

## Parameters

- `name`: The port name.
- `host`: The host name. Because `NSMessagePortNameServer` is a local-only server, `host` must be the empty string or `nil`.

<a id="return-value"></a>

## Return Value

The `NSPort` object registered under a given name on the local host. Returns `nil` if a port named `name` does not exist.

## See Also

### Getting Ports By Name

- [portForName:](portforname_.md): Deprecated. Returns the `NSPort` object registered under a given name on the local host.
