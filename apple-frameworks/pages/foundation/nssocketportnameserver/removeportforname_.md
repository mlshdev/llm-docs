> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/removeportforname:](https://developer.apple.com/documentation/foundation/nssocketportnameserver/removeportforname:)

# removePortForName:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Unregisters the port for a given name on the local host.

> Apple discourages the use of this symbol.

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

If the operation is successful, the port can no longer be looked up using the name `portName`. Other applications that already have a reference to the port can continue to use it until it becomes invalid.

## See Also

### Registering and Removing Ports

- [registerPort:name:](registerport_name_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.
- [registerPort:name:nameServerPortNumber:](registerport_name_nameserverportnumber_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.
