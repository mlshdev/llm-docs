> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkserviceaddprotocoltype(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkserviceaddprotocoltype(_:_:))

# SCNetworkServiceAddProtocolType(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Adds the network protocol of the specified type to the specified service.

## Declaration

```swift
func SCNetworkServiceAddProtocolType(_ service: SCNetworkService, _ protocolType: CFString) -> Bool
```

## Parameters

- `service`: The network service.
- `protocolType`: The type of network protocol to add to the service.

<a id="return-value"></a>

## Return Value

`TRUE` if the protocol was added to the service; `FALSE` if the protocol was already present or an error occurred.

<a id="Discussion"></a>

## Discussion

The protocol configuration is set to default values that are appropriate for the interface associated with the service.

## See Also

### Configuring Network Services

- [SCNetworkServiceCopy(\_:\_:)](scnetworkservicecopy%28____%29.md): Returns the network service with the specified identifier.
- [SCNetworkServiceCopyAll(\_:)](scnetworkservicecopyall%28__%29.md): Returns all available network services for the specified preferences.
- [SCNetworkServiceCopyProtocol(\_:\_:)](scnetworkservicecopyprotocol%28____%29.md): Returns the network protocol of the specified type for the specified service.
- [SCNetworkServiceCopyProtocols(\_:)](scnetworkservicecopyprotocols%28__%29.md): Returns all network protocols associated with the specified service.
- [SCNetworkServiceCreate(\_:\_:)](scnetworkservicecreate%28____%29.md): Creates a new network service for the specified interface in the configuration.
- [SCNetworkServiceEstablishDefaultConfiguration(\_:)](scnetworkserviceestablishdefaultconfiguration%28__%29.md): Establishes the default configuration for the specified network service.
- [SCNetworkServiceGetEnabled(\_:)](scnetworkservicegetenabled%28__%29.md): Returns a Boolean value indicating whether the specified service is enabled.
- [SCNetworkServiceGetInterface(\_:)](scnetworkservicegetinterface%28__%29.md): Returns the network interface associated with the specified service.
- [SCNetworkServiceGetName(\_:)](scnetworkservicegetname%28__%29.md): Returns the user-specified name associated with the specified service.
- [SCNetworkServiceGetServiceID(\_:)](scnetworkservicegetserviceid%28__%29.md): Returns the identifier for the specified service.
- [SCNetworkServiceGetTypeID()](scnetworkservicegettypeid%28%29.md): Returns the type identifier of all `SCNetworkService` instances.
- [SCNetworkServiceRemove(\_:)](scnetworkserviceremove%28__%29.md): Removes the specified network service from the configuration.
- [SCNetworkServiceRemoveProtocolType(\_:\_:)](scnetworkserviceremoveprotocoltype%28____%29.md): Removes the network protocol of the specified type from the specified service.
- [SCNetworkServiceSetEnabled(\_:\_:)](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName(\_:\_:)](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.

# SCNetworkServiceAddProtocolType (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Adds the network protocol of the specified type to the specified service.

## Declaration

```objectivec
Boolean SCNetworkServiceAddProtocolType(SCNetworkServiceRef service, CFStringRef protocolType);
```

## Parameters

- `service`: The network service.
- `protocolType`: The type of network protocol to add to the service.

<a id="return-value"></a>

## Return Value

`TRUE` if the protocol was added to the service; `FALSE` if the protocol was already present or an error occurred.

<a id="Discussion"></a>

## Discussion

The protocol configuration is set to default values that are appropriate for the interface associated with the service.

## See Also

### Configuring Network Services

- [SCNetworkServiceCopy](scnetworkservicecopy%28____%29.md): Returns the network service with the specified identifier.
- [SCNetworkServiceCopyAll](scnetworkservicecopyall%28__%29.md): Returns all available network services for the specified preferences.
- [SCNetworkServiceCopyProtocol](scnetworkservicecopyprotocol%28____%29.md): Returns the network protocol of the specified type for the specified service.
- [SCNetworkServiceCopyProtocols](scnetworkservicecopyprotocols%28__%29.md): Returns all network protocols associated with the specified service.
- [SCNetworkServiceCreate](scnetworkservicecreate%28____%29.md): Creates a new network service for the specified interface in the configuration.
- [SCNetworkServiceEstablishDefaultConfiguration](scnetworkserviceestablishdefaultconfiguration%28__%29.md): Establishes the default configuration for the specified network service.
- [SCNetworkServiceGetEnabled](scnetworkservicegetenabled%28__%29.md): Returns a Boolean value indicating whether the specified service is enabled.
- [SCNetworkServiceGetInterface](scnetworkservicegetinterface%28__%29.md): Returns the network interface associated with the specified service.
- [SCNetworkServiceGetName](scnetworkservicegetname%28__%29.md): Returns the user-specified name associated with the specified service.
- [SCNetworkServiceGetServiceID](scnetworkservicegetserviceid%28__%29.md): Returns the identifier for the specified service.
- [SCNetworkServiceGetTypeID](scnetworkservicegettypeid%28%29.md): Returns the type identifier of all `SCNetworkService` instances.
- [SCNetworkServiceRemove](scnetworkserviceremove%28__%29.md): Removes the specified network service from the configuration.
- [SCNetworkServiceRemoveProtocolType](scnetworkserviceremoveprotocoltype%28____%29.md): Removes the network protocol of the specified type from the specified service.
- [SCNetworkServiceSetEnabled](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.
