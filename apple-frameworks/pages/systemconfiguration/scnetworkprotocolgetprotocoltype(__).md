> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkprotocolgetprotocoltype(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkprotocolgetprotocoltype(_:))

# SCNetworkProtocolGetProtocolType(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the type of the specified network protocol.

## Declaration

```swift
func SCNetworkProtocolGetProtocolType(_ protocol: SCNetworkProtocol) -> CFString?
```

## Parameters

- `protocol`: The network protocol.

<a id="return-value"></a>

## Return Value

The protocol type.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration(\_:)](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled(\_:)](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetTypeID()](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration(\_:\_:)](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled(\_:\_:)](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.

# SCNetworkProtocolGetProtocolType (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the type of the specified network protocol.

## Declaration

```objectivec
CFStringRefSCNetworkProtocolGetProtocolType(SCNetworkProtocolRef protocol);
```

## Parameters

- `protocol`: The network protocol.

<a id="return-value"></a>

## Return Value

The protocol type.

## See Also

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetTypeID](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.
