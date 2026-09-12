> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportnameserver/removeportforname:](https://developer.apple.com/documentation/foundation/nsportnameserver/removeportforname:)

# removePortForName:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Unregisters the port for a given name on the local host.

## Declaration

```objectivec
- (BOOL) removePortForName:(NSString *) name;
```

## Parameters

- `name`: The name of the port to unregister.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the operation is successful, the port can no longer be looked up using the name `name`. Other applications that already have a reference to the port can continue to use it until it becomes invalid.

## See Also

### Registering Ports

- [registerPort:name:](registerport_name_.md): Deprecated. Makes a given port available on the network under a specified name.
