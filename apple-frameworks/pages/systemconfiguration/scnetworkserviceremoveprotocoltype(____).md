> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkserviceremoveprotocoltype(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkserviceremoveprotocoltype(_:_:))

# SCNetworkServiceRemoveProtocolType(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Removes the network protocol of the specified type from the specified service.

## Declaration

```swift
func SCNetworkServiceRemoveProtocolType(_ service: SCNetworkService, _ protocolType: CFString) -> Bool
```

## Parameters

- `service`: The network service.
- `protocolType`: The type of network protocol to remove from the service.

<a id="return-value"></a>

## Return Value

`TRUE` if the protocol was removed to the service; `FALSE` if the protocol was not configured or an error occurred.

## See Also

### Configuring Network Services

- [SCNetworkServiceAddProtocolType(\_:\_:)](scnetworkserviceaddprotocoltype%28____%29.md): Adds the network protocol of the specified type to the specified service.
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
- [SCNetworkServiceSetEnabled(\_:\_:)](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName(\_:\_:)](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.

# SCNetworkServiceRemoveProtocolType (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Removes the network protocol of the specified type from the specified service.

## Declaration

```objectivec
Boolean SCNetworkServiceRemoveProtocolType(SCNetworkServiceRef service, CFStringRef protocolType);
```

## Parameters

- `service`: The network service.
- `protocolType`: The type of network protocol to remove from the service.

<a id="return-value"></a>

## Return Value

`TRUE` if the protocol was removed to the service; `FALSE` if the protocol was not configured or an error occurred.

## See Also

### Configuring Network Services

- [SCNetworkServiceAddProtocolType](scnetworkserviceaddprotocoltype%28____%29.md): Adds the network protocol of the specified type to the specified service.
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
- [SCNetworkServiceSetEnabled](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.
