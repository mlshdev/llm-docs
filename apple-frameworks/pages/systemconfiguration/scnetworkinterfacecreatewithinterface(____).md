> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkinterfacecreatewithinterface(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkinterfacecreatewithinterface(_:_:))

# SCNetworkInterfaceCreateWithInterface(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a new network interface layered on top of the specified interface.

## Declaration

```swift
func SCNetworkInterfaceCreateWithInterface(_ interface: SCNetworkInterface, _ interfaceType: CFString) -> SCNetworkInterface?
```

## Parameters

- `interface`: The network interface.
- `interfaceType`: The type of interface to layer on top of the network interface specified in `interface`.

<a id="return-value"></a>

## Return Value

A reference to the new network interface. You must release the returned value.

<a id="Discussion"></a>

## Discussion

You can use this function to create a “PPP” interface on top of a “modem.”

## See Also

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll()](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMTU(\_:\_:\_:\_:)](scnetworkinterfacecopymtu%28________%29.md): Returns the current MTU setting and the range of allowable values for the specified network interface.
- [SCNetworkInterfaceCopyMediaOptions(\_:\_:\_:\_:\_:)](scnetworkinterfacecopymediaoptions%28__________%29.md): Returns information media options for the specified network interface.
- [SCNetworkInterfaceCopyMediaSubTypeOptions(\_:\_:)](scnetworkinterfacecopymediasubtypeoptions%28____%29.md): Returns a list of available media options for the specified interface configuration options and subtype.
- [SCNetworkInterfaceCopyMediaSubTypes(\_:)](scnetworkinterfacecopymediasubtypes%28__%29.md): Returns a list of available media subtypes for the specified interface configuration options.
- [SCNetworkInterfaceForceConfigurationRefresh(\_:)](scnetworkinterfaceforceconfigurationrefresh%28__%29.md): Sends a notification to interested network configuration agents to immediately retry their configuration.
- [SCNetworkInterfaceGetBSDName(\_:)](scnetworkinterfacegetbsdname%28__%29.md): Returns the BSD interface or device name for the specified interface.
- [SCNetworkInterfaceGetConfiguration(\_:)](scnetworkinterfacegetconfiguration%28__%29.md): Returns the configuration settings associated with the specified interface.
- [SCNetworkInterfaceGetExtendedConfiguration(\_:\_:)](scnetworkinterfacegetextendedconfiguration%28____%29.md): Returns the extended configuration settings associated with the specified interface.
- [SCNetworkInterfaceGetHardwareAddressString(\_:)](scnetworkinterfacegethardwareaddressstring%28__%29.md): Returns a displayable link layer address for the specified interface.
- [SCNetworkInterfaceGetInterface(\_:)](scnetworkinterfacegetinterface%28__%29.md): Returns the underlying interface, for layered network interfaces.
- [SCNetworkInterfaceGetInterfaceType(\_:)](scnetworkinterfacegetinterfacetype%28__%29.md): Returns the network interface type of the specified interface.
- [SCNetworkInterfaceGetLocalizedDisplayName(\_:)](scnetworkinterfacegetlocalizeddisplayname%28__%29.md): Returns the localized display name, such as “Ethernet” or “FireWire”, for the specified interface.
- [SCNetworkInterfaceGetSupportedInterfaceTypes(\_:)](scnetworkinterfacegetsupportedinterfacetypes%28__%29.md): Identifies all of the network interface types, such as PPP, that can be layered on top of the specified interface.
- [SCNetworkInterfaceGetSupportedProtocolTypes(\_:)](scnetworkinterfacegetsupportedprotocoltypes%28__%29.md): Identifies all of the network protocol types, such as IPv4 and IPv6, that can be layered on top of the specified interface.

# SCNetworkInterfaceCreateWithInterface (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a new network interface layered on top of the specified interface.

## Declaration

```objectivec
SCNetworkInterfaceRefSCNetworkInterfaceCreateWithInterface(SCNetworkInterfaceRef interface, CFStringRef interfaceType);
```

## Parameters

- `interface`: The network interface.
- `interfaceType`: The type of interface to layer on top of the network interface specified in `interface`.

<a id="return-value"></a>

## Return Value

A reference to the new network interface. You must release the returned value.

<a id="Discussion"></a>

## Discussion

You can use this function to create a “PPP” interface on top of a “modem.”

## See Also

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMTU](scnetworkinterfacecopymtu%28________%29.md): Returns the current MTU setting and the range of allowable values for the specified network interface.
- [SCNetworkInterfaceCopyMediaOptions](scnetworkinterfacecopymediaoptions%28__________%29.md): Returns information media options for the specified network interface.
- [SCNetworkInterfaceCopyMediaSubTypeOptions](scnetworkinterfacecopymediasubtypeoptions%28____%29.md): Returns a list of available media options for the specified interface configuration options and subtype.
- [SCNetworkInterfaceCopyMediaSubTypes](scnetworkinterfacecopymediasubtypes%28__%29.md): Returns a list of available media subtypes for the specified interface configuration options.
- [SCNetworkInterfaceForceConfigurationRefresh](scnetworkinterfaceforceconfigurationrefresh%28__%29.md): Sends a notification to interested network configuration agents to immediately retry their configuration.
- [SCNetworkInterfaceGetBSDName](scnetworkinterfacegetbsdname%28__%29.md): Returns the BSD interface or device name for the specified interface.
- [SCNetworkInterfaceGetConfiguration](scnetworkinterfacegetconfiguration%28__%29.md): Returns the configuration settings associated with the specified interface.
- [SCNetworkInterfaceGetExtendedConfiguration](scnetworkinterfacegetextendedconfiguration%28____%29.md): Returns the extended configuration settings associated with the specified interface.
- [SCNetworkInterfaceGetHardwareAddressString](scnetworkinterfacegethardwareaddressstring%28__%29.md): Returns a displayable link layer address for the specified interface.
- [SCNetworkInterfaceGetInterface](scnetworkinterfacegetinterface%28__%29.md): Returns the underlying interface, for layered network interfaces.
- [SCNetworkInterfaceGetInterfaceType](scnetworkinterfacegetinterfacetype%28__%29.md): Returns the network interface type of the specified interface.
- [SCNetworkInterfaceGetLocalizedDisplayName](scnetworkinterfacegetlocalizeddisplayname%28__%29.md): Returns the localized display name, such as “Ethernet” or “FireWire”, for the specified interface.
- [SCNetworkInterfaceGetSupportedInterfaceTypes](scnetworkinterfacegetsupportedinterfacetypes%28__%29.md): Identifies all of the network interface types, such as PPP, that can be layered on top of the specified interface.
- [SCNetworkInterfaceGetSupportedProtocolTypes](scnetworkinterfacegetsupportedprotocoltypes%28__%29.md): Identifies all of the network protocol types, such as IPv4 and IPv6, that can be layered on top of the specified interface.
