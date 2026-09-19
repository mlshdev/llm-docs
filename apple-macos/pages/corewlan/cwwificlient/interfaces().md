> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corewlan/cwwificlient/interfaces()

# interfaces() (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns all available Wi-Fi interfaces.

## Declaration

```swift
func interfaces() -> [CWInterface]?
```

<a id="return-value"></a>

## Return Value

An array of [CWInterface](../cwinterface.md) objects, representing all of the available Wi-Fi interfaces in the system.

## See Also

### Getting Interfaces

- [interface()](interface%28%29.md): Returns the default Wi-Fi interface.
- [interface(withName:)](interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaceNames()](interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.

# interfaces (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns all available Wi-Fi interfaces.

## Declaration

```objectivec
- (NSArray<CWInterface *> *) interfaces;
```

<a id="return-value"></a>

## Return Value

An array of [CWInterface](../cwinterface.md) objects, representing all of the available Wi-Fi interfaces in the system.

## See Also

### Getting Interfaces

- [interface](interface%28%29.md): Returns the default Wi-Fi interface.
- [interfaceWithName:](interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaceNames](interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.
