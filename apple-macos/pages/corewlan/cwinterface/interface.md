> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/interface](https://developer.apple.com/documentation/corewlan/cwinterface/interface)

# interface

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.10)

Convenience method for getting an CWInterface object for the default WLAN interface.

> This method relies on direct access to system sockets, and therefore cannot be used in a sandboxed app. Use the [interface](../cwwificlient/interface%28%29.md) instance method of [CWWiFiClient](../cwwificlient.md) instead.

## Declaration

```objectivec
+ (instancetype) interface;
```

<a id="return-value"></a>

## Return Value

An CWInterface object.

## See Also

### Getting an interface

- [initWithInterfaceName:](init%28interfacename_%29.md): Deprecated. Convenience method for getting an CWInterface object with the specified name.
- [interfaceWithName:](init%28name_%29.md): Deprecated. An instance method for obtaining an CWInterface object.
