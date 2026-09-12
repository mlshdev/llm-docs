> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkprotocolgetenabled(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkprotocolgetenabled(_:))

# SCNetworkProtocolGetEnabled(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns a Boolean value indicating whether the specified protocol is enabled.

## Declaration

```swift
func SCNetworkProtocolGetEnabled(_ protocol: SCNetworkProtocol) -> Bool
```

## Parameters

- `protocol`: The network protocol.

<a id="return-value"></a>

## Return Value

`TRUE` if the protocol is enabled; otherwise, `FALSE`.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration(\_:)](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetProtocolType(\_:)](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID()](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration(\_:\_:)](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled(\_:\_:)](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.

# SCNetworkProtocolGetEnabled (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns a Boolean value indicating whether the specified protocol is enabled.

## Declaration

```objectivec
Boolean SCNetworkProtocolGetEnabled(SCNetworkProtocolRef protocol);
```

## Parameters

- `protocol`: The network protocol.

<a id="return-value"></a>

## Return Value

`TRUE` if the protocol is enabled; otherwise, `FALSE`.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetProtocolType](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.
