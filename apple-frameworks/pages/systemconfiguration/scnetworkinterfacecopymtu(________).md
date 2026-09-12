> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkinterfacecopymtu(_:_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkinterfacecopymtu(_:_:_:_:))

# SCNetworkInterfaceCopyMTU(\_:\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns the current MTU setting and the range of allowable values for the specified network interface.

## Declaration

```swift
func SCNetworkInterfaceCopyMTU(_ interface: SCNetworkInterface, _ mtu_cur: UnsafeMutablePointer<Int32>?, _ mtu_min: UnsafeMutablePointer<Int32>?, _ mtu_max: UnsafeMutablePointer<Int32>?) -> Bool
```

## Parameters

- `interface`: The network interface.
- `mtu_cur`: On output, the current MTU setting for the interface.
- `mtu_min`: On output, the minimum MTU setting for the interface. If negative, the minimum setting could not be determined.
- `mtu_max`: On output, the maximum MTU setting for the interface. If negative, the maximum setting could not be determined.

<a id="return-value"></a>

## Return Value

`TRUE` if the requested information has been returned.

## See Also

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll()](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMediaOptions(\_:\_:\_:\_:\_:)](scnetworkinterfacecopymediaoptions%28__________%29.md): Returns information media options for the specified network interface.
- [SCNetworkInterfaceCopyMediaSubTypeOptions(\_:\_:)](scnetworkinterfacecopymediasubtypeoptions%28____%29.md): Returns a list of available media options for the specified interface configuration options and subtype.
- [SCNetworkInterfaceCopyMediaSubTypes(\_:)](scnetworkinterfacecopymediasubtypes%28__%29.md): Returns a list of available media subtypes for the specified interface configuration options.
- [SCNetworkInterfaceCreateWithInterface(\_:\_:)](scnetworkinterfacecreatewithinterface%28____%29.md): Creates a new network interface layered on top of the specified interface.
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

# SCNetworkInterfaceCopyMTU (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns the current MTU setting and the range of allowable values for the specified network interface.

## Declaration

```objectivec
Boolean SCNetworkInterfaceCopyMTU(SCNetworkInterfaceRef interface, int *mtu_cur, int *mtu_min, int *mtu_max);
```

## Parameters

- `interface`: The network interface.
- `mtu_cur`: On output, the current MTU setting for the interface.
- `mtu_min`: On output, the minimum MTU setting for the interface. If negative, the minimum setting could not be determined.
- `mtu_max`: On output, the maximum MTU setting for the interface. If negative, the maximum setting could not be determined.

<a id="return-value"></a>

## Return Value

`TRUE` if the requested information has been returned.

## See Also

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMediaOptions](scnetworkinterfacecopymediaoptions%28__________%29.md): Returns information media options for the specified network interface.
- [SCNetworkInterfaceCopyMediaSubTypeOptions](scnetworkinterfacecopymediasubtypeoptions%28____%29.md): Returns a list of available media options for the specified interface configuration options and subtype.
- [SCNetworkInterfaceCopyMediaSubTypes](scnetworkinterfacecopymediasubtypes%28__%29.md): Returns a list of available media subtypes for the specified interface configuration options.
- [SCNetworkInterfaceCreateWithInterface](scnetworkinterfacecreatewithinterface%28____%29.md): Creates a new network interface layered on top of the specified interface.
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
