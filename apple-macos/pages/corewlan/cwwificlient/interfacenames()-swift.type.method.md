> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/interfacenames()-swift.type.method](https://developer.apple.com/documentation/corewlan/cwwificlient/interfacenames()-swift.type.method)

# interfaceNames() (Swift)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.10+ (deprecated in 13.0)

Returns the list of the names of available Wi-Fi interfaces.

> Use -\[CWWiFiClient interfaceNames\] instead

## Declaration

```swift
class func interfaceNames() -> [String]?
```

<a id="return-value"></a>

## Return Value

An array of strings representing the names of the available Wi-Fi interfaces in the system. Any one of these names can be used with the [interface(withName:)](interface%28withname_%29.md) method to obtain a reference to the corresponding [CWInterface](../cwinterface.md) instance.

## See Also

### Getting Interfaces

- [interface()](interface%28%29.md): Returns the default Wi-Fi interface.
- [interface(withName:)](interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaces()](interfaces%28%29.md): Returns all available Wi-Fi interfaces.

# interfaceNames (Objective-C)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.10+ (deprecated in 13.0)

Returns the list of the names of available Wi-Fi interfaces.

> Use -\[CWWiFiClient interfaceNames\] instead

## Declaration

```objectivec
+ (NSArray<NSString *> *) interfaceNames;
```

<a id="return-value"></a>

## Return Value

An array of strings representing the names of the available Wi-Fi interfaces in the system. Any one of these names can be used with the [interfaceWithName:](interface%28withname_%29.md) method to obtain a reference to the corresponding [CWInterface](../cwinterface.md) instance.

## See Also

### Getting Interfaces

- [interface](interface%28%29.md): Returns the default Wi-Fi interface.
- [interfaceWithName:](interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaces](interfaces%28%29.md): Returns all available Wi-Fi interfaces.
