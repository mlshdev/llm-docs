> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkprotocolgetconfiguration(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkprotocolgetconfiguration(_:))

# SCNetworkProtocolGetConfiguration(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the configuration settings associated with the specified protocol.

## Declaration

```swift
func SCNetworkProtocolGetConfiguration(_ protocol: SCNetworkProtocol) -> CFDictionary?
```

## Parameters

- `protocol`: The network protocol.

<a id="return-value"></a>

## Return Value

The configuration settings associated with the protocol, or `NULL` if no configuration settings are associated with the protocol or an error occurred.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetEnabled(\_:)](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType(\_:)](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID()](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration(\_:\_:)](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled(\_:\_:)](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.

# SCNetworkProtocolGetConfiguration (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the configuration settings associated with the specified protocol.

## Declaration

```objectivec
CFDictionaryRefSCNetworkProtocolGetConfiguration(SCNetworkProtocolRef protocol);
```

## Parameters

- `protocol`: The network protocol.

<a id="return-value"></a>

## Return Value

The configuration settings associated with the protocol, or `NULL` if no configuration settings are associated with the protocol or an error occurred.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetEnabled](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.
