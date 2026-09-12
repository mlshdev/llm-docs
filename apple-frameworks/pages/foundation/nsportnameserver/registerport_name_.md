> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportnameserver/registerport:name:](https://developer.apple.com/documentation/foundation/nsportnameserver/registerport:name:)

# registerPort:name:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Makes a given port available on the network under a specified name.

## Declaration

```objectivec
- (BOOL) registerPort:(NSPort *) port name:(NSString *) name;
```

## Parameters

- `port`: The port to make available.
- `name`: The name for the port.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise (for example, if another `NSPort` object  has already been registered under `name`).

<a id="Discussion"></a>

## Discussion

A port can be registered under multiple names. If it is, it must be unregistered for each name with [removePortForName:](removeportforname_.md) to make it completely unavailable.

## See Also

### Registering Ports

- [removePortForName:](removeportforname_.md): Deprecated. Unregisters the port for a given name on the local host.
