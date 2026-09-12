> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/init(interfacename:)](https://developer.apple.com/documentation/corewlan/cwinterface/init(interfacename:))

# init(interfaceName:) (Swift)

**Framework:** Core WLAN  
**Kind:** Initializer  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Convenience method for getting an CWInterface object with the specified name.

> This method relies on direct access to system sockets, and therefore cannot be used in a sandboxed app. Use the [interface(withName:)](../cwwificlient/interface%28withname_%29.md) instance method of [CWWiFiClient](../cwwificlient.md) instead.

## Declaration

```swift
init(interfaceName name: String?)
```

## Parameters

- `name`: An NSString representing the BSD name of a WLAN interface.

<a id="return-value"></a>

## Return Value

An CWInterface object configured to control the named CoreWLAN interface.

<a id="Discussion"></a>

## Discussion

The interface name must be in the BSD name form (e.g. “en1”), and can be passed in explicitly or derived from the call to *+(NSString \*)supportedInterfaces*. If *name* is *nil*, the method returns an CWInterface object for the primary interface.

## See Also

### Getting an interface

- [init(name:)](init%28name_%29.md): Deprecated. An instance method for obtaining an CWInterface object.

# initWithInterfaceName: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Convenience method for getting an CWInterface object with the specified name.

> This method relies on direct access to system sockets, and therefore cannot be used in a sandboxed app. Use the [interfaceWithName:](../cwwificlient/interface%28withname_%29.md) instance method of [CWWiFiClient](../cwwificlient.md) instead.

## Declaration

```objectivec
- (instancetype) initWithInterfaceName:(NSString *) name;
```

## Parameters

- `name`: An NSString representing the BSD name of a WLAN interface.

<a id="return-value"></a>

## Return Value

An CWInterface object configured to control the named CoreWLAN interface.

<a id="Discussion"></a>

## Discussion

The interface name must be in the BSD name form (e.g. “en1”), and can be passed in explicitly or derived from the call to *+(NSString \*)supportedInterfaces*. If *name* is *nil*, the method returns an CWInterface object for the primary interface.

## See Also

### Getting an interface

- [interface](interface.md): Deprecated. Convenience method for getting an CWInterface object for the default WLAN interface.
- [interfaceWithName:](init%28name_%29.md): Deprecated. An instance method for obtaining an CWInterface object.
