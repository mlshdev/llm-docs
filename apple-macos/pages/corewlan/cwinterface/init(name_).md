> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/init(name:)](https://developer.apple.com/documentation/corewlan/cwinterface/init(name:))

# init(name:) (Swift)

**Framework:** Core WLAN  
**Kind:** Initializer  
**Availability:** macOS 10.6+ (deprecated in 10.10)

An instance method for obtaining an CWInterface object.

> This method relies on direct access to system sockets, and therefore cannot be used in a sandboxed app. Use the [interface(withName:)](../cwwificlient/interface%28withname_%29.md) instance method of [CWWiFiClient](../cwwificlient.md) instead.

## Declaration

```swift
convenience init(name: String?)
```

## Parameters

- `name`: An NSString representing the BSD name of a WLAN interface.

<a id="return-value"></a>

## Return Value

An CWInterface object configured to control the named CoreWLAN interface.

<a id="Discussion"></a>

## Discussion

The interface name must be in the BSD name form (e.g. “en1”), and can be passed in explicitly or derived from the call to *+(NSString \*)supportedInterfaces*. If *name* is *nil*, the method returns an CWInterface object for the primary interface. This method is the designated initializer for the CWInterface class.

## See Also

### Getting an interface

- [init(interfaceName:)](init%28interfacename_%29.md): Deprecated. Convenience method for getting an CWInterface object with the specified name.

# interfaceWithName: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

An instance method for obtaining an CWInterface object.

> This method relies on direct access to system sockets, and therefore cannot be used in a sandboxed app. Use the [interfaceWithName:](../cwwificlient/interface%28withname_%29.md) instance method of [CWWiFiClient](../cwwificlient.md) instead.

## Declaration

```objectivec
+ (instancetype) interfaceWithName:(NSString *) name;
```

## Parameters

- `name`: An NSString representing the BSD name of a WLAN interface.

<a id="return-value"></a>

## Return Value

An CWInterface object configured to control the named CoreWLAN interface.

<a id="Discussion"></a>

## Discussion

The interface name must be in the BSD name form (e.g. “en1”), and can be passed in explicitly or derived from the call to *+(NSString \*)supportedInterfaces*. If *name* is *nil*, the method returns an CWInterface object for the primary interface. This method is the designated initializer for the CWInterface class.

## See Also

### Getting an interface

- [initWithInterfaceName:](init%28interfacename_%29.md): Deprecated. Convenience method for getting an CWInterface object with the specified name.
- [interface](interface.md): Deprecated. Convenience method for getting an CWInterface object for the default WLAN interface.
