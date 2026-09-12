> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkserviceremove(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkserviceremove(_:))

# SCNetworkServiceRemove(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Removes the specified network service from the configuration.

## Declaration

```swift
func SCNetworkServiceRemove(_ service: SCNetworkService) -> Bool
```

## Parameters

- `service`: The network service to remove.

<a id="return-value"></a>

## Return Value

`TRUE` if the service was removed; `FALSE` if an error occurred.

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
- [SCNetworkServiceRemoveProtocolType(\_:\_:)](scnetworkserviceremoveprotocoltype%28____%29.md): Removes the network protocol of the specified type from the specified service.
- [SCNetworkServiceSetEnabled(\_:\_:)](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName(\_:\_:)](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.

# SCNetworkServiceRemove (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Removes the specified network service from the configuration.

## Declaration

```objectivec
Boolean SCNetworkServiceRemove(SCNetworkServiceRef service);
```

## Parameters

- `service`: The network service to remove.

<a id="return-value"></a>

## Return Value

`TRUE` if the service was removed; `FALSE` if an error occurred.

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
- [SCNetworkServiceRemoveProtocolType](scnetworkserviceremoveprotocoltype%28____%29.md): Removes the network protocol of the specified type from the specified service.
- [SCNetworkServiceSetEnabled](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.
