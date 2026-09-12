> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkprotocolsetenabled(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkprotocolsetenabled(_:_:))

# SCNetworkProtocolSetEnabled(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Enables or disables the specified protocol.

## Declaration

```swift
func SCNetworkProtocolSetEnabled(_ protocol: SCNetworkProtocol, _ enabled: Bool) -> Bool
```

## Parameters

- `protocol`: The network protocol to enable or disable.
- `enabled`: `TRUE` if the protocol should be enabled.

<a id="return-value"></a>

## Return Value

`TRUE` if the enabled status was saved; `FALSE` if an error occurred.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration(\_:)](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled(\_:)](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType(\_:)](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID()](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration(\_:\_:)](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.

# SCNetworkProtocolSetEnabled (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Enables or disables the specified protocol.

## Declaration

```objectivec
Boolean SCNetworkProtocolSetEnabled(SCNetworkProtocolRef protocol, Boolean enabled);
```

## Parameters

- `protocol`: The network protocol to enable or disable.
- `enabled`: `TRUE` if the protocol should be enabled.

<a id="return-value"></a>

## Return Value

`TRUE` if the enabled status was saved; `FALSE` if an error occurred.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
