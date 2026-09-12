> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/interface(withname:)](https://developer.apple.com/documentation/corewlan/cwwificlient/interface(withname:))

# interface(withName:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the Wi-Fi interface with the given name.

## Declaration

```swift
func interface(withName interfaceName: String?) -> CWInterface?
```

## Parameters

- `interfaceName`: The name of an available Wi-Fi interface. Use the [interfaceNames()](interfacenames%28%29-swift.type.method.md) class method to obtain a list of valid interface names.

<a id="return-value"></a>

## Return Value

The [CWInterface](../cwinterface.md) object bound to the given interface name, or the default interface if no name is specified.

## See Also

### Getting Interfaces

- [interface()](interface%28%29.md): Returns the default Wi-Fi interface.
- [interfaces()](interfaces%28%29.md): Returns all available Wi-Fi interfaces.
- [interfaceNames()](interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.

# interfaceWithName: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the Wi-Fi interface with the given name.

## Declaration

```objectivec
- (CWInterface *) interfaceWithName:(NSString *) interfaceName;
```

## Parameters

- `interfaceName`: The name of an available Wi-Fi interface. Use the [interfaceNames](interfacenames%28%29-swift.type.method.md) class method to obtain a list of valid interface names.

<a id="return-value"></a>

## Return Value

The [CWInterface](../cwinterface.md) object bound to the given interface name, or the default interface if no name is specified.

## See Also

### Getting Interfaces

- [interface](interface%28%29.md): Returns the default Wi-Fi interface.
- [interfaces](interfaces%28%29.md): Returns all available Wi-Fi interfaces.
- [interfaceNames](interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.
