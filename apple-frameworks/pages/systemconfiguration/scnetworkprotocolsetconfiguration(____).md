> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkprotocolsetconfiguration(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkprotocolsetconfiguration(_:_:))

# SCNetworkProtocolSetConfiguration(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Stores the configuration settings for the specified network protocol.

## Declaration

```swift
func SCNetworkProtocolSetConfiguration(_ protocol: SCNetworkProtocol, _ config: CFDictionary?) -> Bool
```

## Parameters

- `protocol`: The network protocol.
- `config`: The configuration settings to store.

<a id="return-value"></a>

## Return Value

`TRUE` if the configuration was stored; `FALSE` if an error occurred.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration(\_:)](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled(\_:)](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType(\_:)](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID()](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetEnabled(\_:\_:)](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.

# SCNetworkProtocolSetConfiguration (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Stores the configuration settings for the specified network protocol.

## Declaration

```objectivec
Boolean SCNetworkProtocolSetConfiguration(SCNetworkProtocolRef protocol, CFDictionaryRef config);
```

## Parameters

- `protocol`: The network protocol.
- `config`: The configuration settings to store.

<a id="return-value"></a>

## Return Value

`TRUE` if the configuration was stored; `FALSE` if an error occurred.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetEnabled](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.
