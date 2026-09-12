> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkinterfacegetconfiguration(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkinterfacegetconfiguration(_:))

# SCNetworkInterfaceGetConfiguration(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the configuration settings associated with the specified interface.

## Declaration

```swift
func SCNetworkInterfaceGetConfiguration(_ interface: SCNetworkInterface) -> CFDictionary?
```

## Parameters

- `interface`: The network interface.

<a id="return-value"></a>

## Return Value

The configuration settings associated with the interface, or `NULL` if no configuration settings are associated with the interface or an error occurred.

## See Also

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll()](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMTU(\_:\_:\_:\_:)](scnetworkinterfacecopymtu%28________%29.md): Returns the current MTU setting and the range of allowable values for the specified network interface.
- [SCNetworkInterfaceCopyMediaOptions(\_:\_:\_:\_:\_:)](scnetworkinterfacecopymediaoptions%28__________%29.md): Returns information media options for the specified network interface.
- [SCNetworkInterfaceCopyMediaSubTypeOptions(\_:\_:)](scnetworkinterfacecopymediasubtypeoptions%28____%29.md): Returns a list of available media options for the specified interface configuration options and subtype.
- [SCNetworkInterfaceCopyMediaSubTypes(\_:)](scnetworkinterfacecopymediasubtypes%28__%29.md): Returns a list of available media subtypes for the specified interface configuration options.
- [SCNetworkInterfaceCreateWithInterface(\_:\_:)](scnetworkinterfacecreatewithinterface%28____%29.md): Creates a new network interface layered on top of the specified interface.
- [SCNetworkInterfaceForceConfigurationRefresh(\_:)](scnetworkinterfaceforceconfigurationrefresh%28__%29.md): Sends a notification to interested network configuration agents to immediately retry their configuration.
- [SCNetworkInterfaceGetBSDName(\_:)](scnetworkinterfacegetbsdname%28__%29.md): Returns the BSD interface or device name for the specified interface.
- [SCNetworkInterfaceGetExtendedConfiguration(\_:\_:)](scnetworkinterfacegetextendedconfiguration%28____%29.md): Returns the extended configuration settings associated with the specified interface.
- [SCNetworkInterfaceGetHardwareAddressString(\_:)](scnetworkinterfacegethardwareaddressstring%28__%29.md): Returns a displayable link layer address for the specified interface.
- [SCNetworkInterfaceGetInterface(\_:)](scnetworkinterfacegetinterface%28__%29.md): Returns the underlying interface, for layered network interfaces.
- [SCNetworkInterfaceGetInterfaceType(\_:)](scnetworkinterfacegetinterfacetype%28__%29.md): Returns the network interface type of the specified interface.
- [SCNetworkInterfaceGetLocalizedDisplayName(\_:)](scnetworkinterfacegetlocalizeddisplayname%28__%29.md): Returns the localized display name, such as “Ethernet” or “FireWire”, for the specified interface.
- [SCNetworkInterfaceGetSupportedInterfaceTypes(\_:)](scnetworkinterfacegetsupportedinterfacetypes%28__%29.md): Identifies all of the network interface types, such as PPP, that can be layered on top of the specified interface.
- [SCNetworkInterfaceGetSupportedProtocolTypes(\_:)](scnetworkinterfacegetsupportedprotocoltypes%28__%29.md): Identifies all of the network protocol types, such as IPv4 and IPv6, that can be layered on top of the specified interface.

# SCNetworkInterfaceGetConfiguration (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the configuration settings associated with the specified interface.

## Declaration

```objectivec
CFDictionaryRefSCNetworkInterfaceGetConfiguration(SCNetworkInterfaceRef interface);
```

## Parameters

- `interface`: The network interface.

<a id="return-value"></a>

## Return Value

The configuration settings associated with the interface, or `NULL` if no configuration settings are associated with the interface or an error occurred.

## See Also

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMTU](scnetworkinterfacecopymtu%28________%29.md): Returns the current MTU setting and the range of allowable values for the specified network interface.
- [SCNetworkInterfaceCopyMediaOptions](scnetworkinterfacecopymediaoptions%28__________%29.md): Returns information media options for the specified network interface.
- [SCNetworkInterfaceCopyMediaSubTypeOptions](scnetworkinterfacecopymediasubtypeoptions%28____%29.md): Returns a list of available media options for the specified interface configuration options and subtype.
- [SCNetworkInterfaceCopyMediaSubTypes](scnetworkinterfacecopymediasubtypes%28__%29.md): Returns a list of available media subtypes for the specified interface configuration options.
- [SCNetworkInterfaceCreateWithInterface](scnetworkinterfacecreatewithinterface%28____%29.md): Creates a new network interface layered on top of the specified interface.
- [SCNetworkInterfaceForceConfigurationRefresh](scnetworkinterfaceforceconfigurationrefresh%28__%29.md): Sends a notification to interested network configuration agents to immediately retry their configuration.
- [SCNetworkInterfaceGetBSDName](scnetworkinterfacegetbsdname%28__%29.md): Returns the BSD interface or device name for the specified interface.
- [SCNetworkInterfaceGetExtendedConfiguration](scnetworkinterfacegetextendedconfiguration%28____%29.md): Returns the extended configuration settings associated with the specified interface.
- [SCNetworkInterfaceGetHardwareAddressString](scnetworkinterfacegethardwareaddressstring%28__%29.md): Returns a displayable link layer address for the specified interface.
- [SCNetworkInterfaceGetInterface](scnetworkinterfacegetinterface%28__%29.md): Returns the underlying interface, for layered network interfaces.
- [SCNetworkInterfaceGetInterfaceType](scnetworkinterfacegetinterfacetype%28__%29.md): Returns the network interface type of the specified interface.
- [SCNetworkInterfaceGetLocalizedDisplayName](scnetworkinterfacegetlocalizeddisplayname%28__%29.md): Returns the localized display name, such as “Ethernet” or “FireWire”, for the specified interface.
- [SCNetworkInterfaceGetSupportedInterfaceTypes](scnetworkinterfacegetsupportedinterfacetypes%28__%29.md): Identifies all of the network interface types, such as PPP, that can be layered on top of the specified interface.
- [SCNetworkInterfaceGetSupportedProtocolTypes](scnetworkinterfacegetsupportedprotocoltypes%28__%29.md): Identifies all of the network protocol types, such as IPv4 and IPv6, that can be layered on top of the specified interface.
