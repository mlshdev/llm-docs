> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/interface()](https://developer.apple.com/documentation/corewlan/cwwificlient/interface())

# interface() (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the default Wi-Fi interface.

## Declaration

```swift
func interface() -> CWInterface?
```

<a id="return-value"></a>

## Return Value

The [CWInterface](../cwinterface.md) object that represents the default Wi-Fi interface.

## See Also

### Getting Interfaces

- [interface(withName:)](interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaces()](interfaces%28%29.md): Returns all available Wi-Fi interfaces.
- [interfaceNames()](interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.

# interface (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the default Wi-Fi interface.

## Declaration

```objectivec
- (CWInterface *) interface;
```

<a id="return-value"></a>

## Return Value

The [CWInterface](../cwinterface.md) object that represents the default Wi-Fi interface.

## See Also

### Getting Interfaces

- [interfaceWithName:](interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaces](interfaces%28%29.md): Returns all available Wi-Fi interfaces.
- [interfaceNames](interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.
