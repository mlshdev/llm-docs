> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconfiguration](https://developer.apple.com/documentation/systemconfiguration/scnetworkconfiguration)

# SCNetworkConfiguration (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCNetworkConfiguration` programming interface provides access to the stored network configuration. The functions include providing access to the network-capable devices on the system, the network sets, network services, and network protocols. Note that these functions follow Core Foundation function-name conventions. A function that has “Create” or “Copy” in its name returns a reference you must release with the [CFRelease](../corefoundation/cfrelease.md) function.

Note that when using the functions in this programming interface, you must call the [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md) function to ensure that your changes are committed to permanent storage.

## Topics

### Configuring Ethernet Bond Interfaces

- [SCBondInterfaceCopyAll(\_:)](scbondinterfacecopyall%28__%29.md): Returns all Ethernet bond interfaces on the system.
- [SCBondInterfaceCopyAvailableMemberInterfaces(\_:)](scbondinterfacecopyavailablememberinterfaces%28__%29.md): Returns all network capable devices on the system that can be added to an Ethernet bond interface.
- [SCBondInterfaceCopyStatus(\_:)](scbondinterfacecopystatus%28__%29.md): Returns the status of the specified Ethernet bond interface.
- [SCBondInterfaceCreate(\_:)](scbondinterfacecreate%28__%29.md): Creates a new Ethernet bond interface.
- [SCBondInterfaceGetMemberInterfaces(\_:)](scbondinterfacegetmemberinterfaces%28__%29.md): Returns the member interfaces for the specified Ethernet bond interface.
- [SCBondInterfaceGetOptions(\_:)](scbondinterfacegetoptions%28__%29.md): Returns the configuration settings associated with the specified Ethernet bond interface.
- [SCBondInterfaceRemove(\_:)](scbondinterfaceremove%28__%29.md): Removes the Ethernet bond interface from the configuration.
- [SCBondInterfaceSetLocalizedDisplayName(\_:\_:)](scbondinterfacesetlocalizeddisplayname%28____%29.md): Sets the localized display name for the specified Ethernet bond interface.
- [SCBondInterfaceSetMemberInterfaces(\_:\_:)](scbondinterfacesetmemberinterfaces%28____%29.md): Sets the member interfaces for the specified Ethernet bond interface.
- [SCBondInterfaceSetOptions(\_:\_:)](scbondinterfacesetoptions%28____%29.md): Sets the configuration settings for the specified Ethernet bond interface.
- [SCBondStatusGetInterfaceStatus(\_:\_:)](scbondstatusgetinterfacestatus%28____%29.md): Returns the status of the specified member interface of an Ethernet bond or the status of the bond as a whole.
- [SCBondStatusGetMemberInterfaces(\_:)](scbondstatusgetmemberinterfaces%28__%29.md): Returns the member interfaces that are represented with the Ethernet bond interface.
- [SCBondStatusGetTypeID()](scbondstatusgettypeid%28%29.md): Returns the type identifier of all `SCBondStatusRef` instances.

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll()](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMTU(\_:\_:\_:\_:)](scnetworkinterfacecopymtu%28________%29.md): Returns the current MTU setting and the range of allowable values for the specified network interface.
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
- [SCNetworkInterfaceGetTypeID()](scnetworkinterfacegettypeid%28%29.md): Returns the type identifier of all `SCNetworkInterface` instances.
- [SCNetworkInterfaceSetConfiguration(\_:\_:)](scnetworkinterfacesetconfiguration%28____%29.md): Stores the configuration settings for the specified interface.
- [SCNetworkInterfaceSetExtendedConfiguration(\_:\_:\_:)](scnetworkinterfacesetextendedconfiguration%28______%29.md): Stores the extended configuration settings for the specified interface.
- [SCNetworkInterfaceSetMTU(\_:\_:)](scnetworkinterfacesetmtu%28____%29.md): Sets the requested MTU setting for the specified network interface.
- [SCNetworkInterfaceSetMediaOptions(\_:\_:\_:)](scnetworkinterfacesetmediaoptions%28______%29.md): Sets the requested media subtype and options for the specified network interface.

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration(\_:)](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled(\_:)](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType(\_:)](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID()](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration(\_:\_:)](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled(\_:\_:)](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.

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
- [SCNetworkServiceRemoveProtocolType(\_:\_:)](scnetworkserviceremoveprotocoltype%28____%29.md): Removes the network protocol of the specified type from the specified service.
- [SCNetworkServiceSetEnabled(\_:\_:)](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName(\_:\_:)](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.

### Configuring Network Sets

- [SCNetworkSetAddService(\_:\_:)](scnetworksetaddservice%28____%29.md): Adds the specified network service to the specified set.
- [SCNetworkSetContainsInterface(\_:\_:)](scnetworksetcontainsinterface%28____%29.md): Returns a Boolean value indicating whether the specified interface is represented by at least one network service in the specified set.
- [SCNetworkSetCopy(\_:\_:)](scnetworksetcopy%28____%29.md): Returns the set with the specified identifier.
- [SCNetworkSetCopyAll(\_:)](scnetworksetcopyall%28__%29.md): Returns all available sets for the specified preferences session.
- [SCNetworkSetCopyCurrent(\_:)](scnetworksetcopycurrent%28__%29.md): Returns the current set.
- [SCNetworkSetCopyServices(\_:)](scnetworksetcopyservices%28__%29.md): Returns all network services associated with the specified set.
- [SCNetworkSetCreate(\_:)](scnetworksetcreate%28__%29.md): Creates a new set in the configuration.
- [SCNetworkSetGetName(\_:)](scnetworksetgetname%28__%29.md): Returns the user-specified name associated with the specified set.
- [SCNetworkSetGetServiceOrder(\_:)](scnetworksetgetserviceorder%28__%29.md): Returns the user-specified ordering of network services within the specified set.
- [SCNetworkSetGetSetID(\_:)](scnetworksetgetsetid%28__%29.md): Returns the identifier for the specified set.
- [SCNetworkSetGetTypeID()](scnetworksetgettypeid%28%29.md): Returns the type identifier of all `SCNetworkSet` instances.
- [SCNetworkSetRemove(\_:)](scnetworksetremove%28__%29.md): Removes the specified set from the configuration.
- [SCNetworkSetRemoveService(\_:\_:)](scnetworksetremoveservice%28____%29.md): Removes the specified network service from the specified set.
- [SCNetworkSetSetCurrent(\_:)](scnetworksetsetcurrent%28__%29.md): Specifies the set that should be the current set.
- [SCNetworkSetSetName(\_:\_:)](scnetworksetsetname%28____%29.md): Stores the user-specified name for the specified set.
- [SCNetworkSetSetServiceOrder(\_:\_:)](scnetworksetsetserviceorder%28____%29.md): Stores the user-specified ordering of network services for the specified set.

### Configuring VLAN Interfaces

- [SCVLANInterfaceCopyAll(\_:)](scvlaninterfacecopyall%28__%29.md): Returns all virtual LAN (VLAN) interfaces on the system.
- [SCVLANInterfaceCopyAvailablePhysicalInterfaces()](scvlaninterfacecopyavailablephysicalinterfaces%28%29.md): Returns the network capable devices on the system that can be associated with a virtual LAN (VLAN) interface.
- [SCVLANInterfaceCreate(\_:\_:\_:)](scvlaninterfacecreate%28______%29.md): Creates a new virtual LAN (VLAN) interface.
- [SCVLANInterfaceGetOptions(\_:)](scvlaninterfacegetoptions%28__%29.md): Returns the configuration settings associated with the virtual LAN (VLAN) interface.
- [SCVLANInterfaceGetPhysicalInterface(\_:)](scvlaninterfacegetphysicalinterface%28__%29.md): Returns the physical interface for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceGetTag(\_:)](scvlaninterfacegettag%28__%29.md): Returns the tag for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceRemove(\_:)](scvlaninterfaceremove%28__%29.md): Removes the virtual LAN (VLAN) interface from the configuration.
- [SCVLANInterfaceSetLocalizedDisplayName(\_:\_:)](scvlaninterfacesetlocalizeddisplayname%28____%29.md): Sets the localized display name for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceSetOptions(\_:\_:)](scvlaninterfacesetoptions%28____%29.md): Sets the specified configuration settings for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceSetPhysicalInterfaceAndTag(\_:\_:\_:)](scvlaninterfacesetphysicalinterfaceandtag%28______%29.md): Updates the specified virtual LAN (VLAN) interface with the specified information.

### Data Types

- [SCNetworkInterface](scnetworkinterface.md): The reference to an object that represents a network interface.
- [SCBondInterface](scbondinterface.md): The reference to an object that represents an Ethernet bond interface.
- [SCBondStatus](scbondstatus.md): The reference to an object that represents the status of an Ethernet bond interface.
- [SCVLANInterface](scvlaninterface.md): The reference to an object that represents a virtual LAN (VLAN) interface.
- [SCNetworkProtocol](scnetworkprotocol.md): The reference to an object that represents a network protocol.
- [SCNetworkService](scnetworkservice.md): The reference to an object that represents a network service.
- [SCNetworkSet](scnetworkset.md): The reference to an object that represents a network set.

### Constants

- [Ethernet Bond Aggregation Status](1546981-ethernet-bond-aggregation-status.md): Ethernet bond aggregation status codes.
- [Ethernet Bond Status Constants](ethernet-bond-status-constants.md): Ethernet bond status codes.
- [Network Interface Types](network-interface-types.md): Keys that identify network interface types.
- [Network Protocol Types](network-protocol-types.md): Keys that identify network protocol types.

## See Also

### Reference

- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetwork](scnetwork.md)
- [SCNetworkConnection](scnetworkconnection-g7e.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferences](scpreferences-ft8.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
- [SystemConfiguration Functions](systemconfiguration-functions.md)
- [SystemConfiguration Data Types](systemconfiguration-data-types.md)

# SCNetworkConfiguration (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCNetworkConfiguration` programming interface provides access to the stored network configuration. The functions include providing access to the network-capable devices on the system, the network sets, network services, and network protocols. Note that these functions follow Core Foundation function-name conventions. A function that has “Create” or “Copy” in its name returns a reference you must release with the [CFRelease](../corefoundation/cfrelease.md) function.

Note that when using the functions in this programming interface, you must call the [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md) function to ensure that your changes are committed to permanent storage.

## Topics

### Configuring Ethernet Bond Interfaces

- [SCBondInterfaceCopyAll](scbondinterfacecopyall%28__%29.md): Returns all Ethernet bond interfaces on the system.
- [SCBondInterfaceCopyAvailableMemberInterfaces](scbondinterfacecopyavailablememberinterfaces%28__%29.md): Returns all network capable devices on the system that can be added to an Ethernet bond interface.
- [SCBondInterfaceCopyStatus](scbondinterfacecopystatus%28__%29.md): Returns the status of the specified Ethernet bond interface.
- [SCBondInterfaceCreate](scbondinterfacecreate%28__%29.md): Creates a new Ethernet bond interface.
- [SCBondInterfaceGetMemberInterfaces](scbondinterfacegetmemberinterfaces%28__%29.md): Returns the member interfaces for the specified Ethernet bond interface.
- [SCBondInterfaceGetOptions](scbondinterfacegetoptions%28__%29.md): Returns the configuration settings associated with the specified Ethernet bond interface.
- [SCBondInterfaceRemove](scbondinterfaceremove%28__%29.md): Removes the Ethernet bond interface from the configuration.
- [SCBondInterfaceSetLocalizedDisplayName](scbondinterfacesetlocalizeddisplayname%28____%29.md): Sets the localized display name for the specified Ethernet bond interface.
- [SCBondInterfaceSetMemberInterfaces](scbondinterfacesetmemberinterfaces%28____%29.md): Sets the member interfaces for the specified Ethernet bond interface.
- [SCBondInterfaceSetOptions](scbondinterfacesetoptions%28____%29.md): Sets the configuration settings for the specified Ethernet bond interface.
- [SCBondStatusGetInterfaceStatus](scbondstatusgetinterfacestatus%28____%29.md): Returns the status of the specified member interface of an Ethernet bond or the status of the bond as a whole.
- [SCBondStatusGetMemberInterfaces](scbondstatusgetmemberinterfaces%28__%29.md): Returns the member interfaces that are represented with the Ethernet bond interface.
- [SCBondStatusGetTypeID](scbondstatusgettypeid%28%29.md): Returns the type identifier of all `SCBondStatusRef` instances.

### Configuring Network Interfaces

- [SCNetworkInterfaceCopyAll](scnetworkinterfacecopyall%28%29.md): Returns all network-capable interfaces on the system.
- [SCNetworkInterfaceCopyMTU](scnetworkinterfacecopymtu%28________%29.md): Returns the current MTU setting and the range of allowable values for the specified network interface.
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
- [SCNetworkInterfaceGetTypeID](scnetworkinterfacegettypeid%28%29.md): Returns the type identifier of all `SCNetworkInterface` instances.
- [SCNetworkInterfaceSetConfiguration](scnetworkinterfacesetconfiguration%28____%29.md): Stores the configuration settings for the specified interface.
- [SCNetworkInterfaceSetExtendedConfiguration](scnetworkinterfacesetextendedconfiguration%28______%29.md): Stores the extended configuration settings for the specified interface.
- [SCNetworkInterfaceSetMTU](scnetworkinterfacesetmtu%28____%29.md): Sets the requested MTU setting for the specified network interface.
- [SCNetworkInterfaceSetMediaOptions](scnetworkinterfacesetmediaoptions%28______%29.md): Sets the requested media subtype and options for the specified network interface.

### Configuring Network Protocols

- [SCNetworkProtocolGetConfiguration](scnetworkprotocolgetconfiguration%28__%29.md): Returns the configuration settings associated with the specified protocol.
- [SCNetworkProtocolGetEnabled](scnetworkprotocolgetenabled%28__%29.md): Returns a Boolean value indicating whether the specified protocol is enabled.
- [SCNetworkProtocolGetProtocolType](scnetworkprotocolgetprotocoltype%28__%29.md): Returns the type of the specified network protocol.
- [SCNetworkProtocolGetTypeID](scnetworkprotocolgettypeid%28%29.md): Returns the type identifier of all `SCNetworkProtocol` instances.
- [SCNetworkProtocolSetConfiguration](scnetworkprotocolsetconfiguration%28____%29.md): Stores the configuration settings for the specified network protocol.
- [SCNetworkProtocolSetEnabled](scnetworkprotocolsetenabled%28____%29.md): Enables or disables the specified protocol.

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
- [SCNetworkServiceRemoveProtocolType](scnetworkserviceremoveprotocoltype%28____%29.md): Removes the network protocol of the specified type from the specified service.
- [SCNetworkServiceSetEnabled](scnetworkservicesetenabled%28____%29.md): Enables or disables the specified service.
- [SCNetworkServiceSetName](scnetworkservicesetname%28____%29.md): Stores the user-specified name for the specified service.

### Configuring Network Sets

- [SCNetworkSetAddService](scnetworksetaddservice%28____%29.md): Adds the specified network service to the specified set.
- [SCNetworkSetContainsInterface](scnetworksetcontainsinterface%28____%29.md): Returns a Boolean value indicating whether the specified interface is represented by at least one network service in the specified set.
- [SCNetworkSetCopy](scnetworksetcopy%28____%29.md): Returns the set with the specified identifier.
- [SCNetworkSetCopyAll](scnetworksetcopyall%28__%29.md): Returns all available sets for the specified preferences session.
- [SCNetworkSetCopyCurrent](scnetworksetcopycurrent%28__%29.md): Returns the current set.
- [SCNetworkSetCopyServices](scnetworksetcopyservices%28__%29.md): Returns all network services associated with the specified set.
- [SCNetworkSetCreate](scnetworksetcreate%28__%29.md): Creates a new set in the configuration.
- [SCNetworkSetGetName](scnetworksetgetname%28__%29.md): Returns the user-specified name associated with the specified set.
- [SCNetworkSetGetServiceOrder](scnetworksetgetserviceorder%28__%29.md): Returns the user-specified ordering of network services within the specified set.
- [SCNetworkSetGetSetID](scnetworksetgetsetid%28__%29.md): Returns the identifier for the specified set.
- [SCNetworkSetGetTypeID](scnetworksetgettypeid%28%29.md): Returns the type identifier of all `SCNetworkSet` instances.
- [SCNetworkSetRemove](scnetworksetremove%28__%29.md): Removes the specified set from the configuration.
- [SCNetworkSetRemoveService](scnetworksetremoveservice%28____%29.md): Removes the specified network service from the specified set.
- [SCNetworkSetSetCurrent](scnetworksetsetcurrent%28__%29.md): Specifies the set that should be the current set.
- [SCNetworkSetSetName](scnetworksetsetname%28____%29.md): Stores the user-specified name for the specified set.
- [SCNetworkSetSetServiceOrder](scnetworksetsetserviceorder%28____%29.md): Stores the user-specified ordering of network services for the specified set.

### Configuring VLAN Interfaces

- [SCVLANInterfaceCopyAll](scvlaninterfacecopyall%28__%29.md): Returns all virtual LAN (VLAN) interfaces on the system.
- [SCVLANInterfaceCopyAvailablePhysicalInterfaces](scvlaninterfacecopyavailablephysicalinterfaces%28%29.md): Returns the network capable devices on the system that can be associated with a virtual LAN (VLAN) interface.
- [SCVLANInterfaceCreate](scvlaninterfacecreate%28______%29.md): Creates a new virtual LAN (VLAN) interface.
- [SCVLANInterfaceGetOptions](scvlaninterfacegetoptions%28__%29.md): Returns the configuration settings associated with the virtual LAN (VLAN) interface.
- [SCVLANInterfaceGetPhysicalInterface](scvlaninterfacegetphysicalinterface%28__%29.md): Returns the physical interface for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceGetTag](scvlaninterfacegettag%28__%29.md): Returns the tag for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceRemove](scvlaninterfaceremove%28__%29.md): Removes the virtual LAN (VLAN) interface from the configuration.
- [SCVLANInterfaceSetLocalizedDisplayName](scvlaninterfacesetlocalizeddisplayname%28____%29.md): Sets the localized display name for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceSetOptions](scvlaninterfacesetoptions%28____%29.md): Sets the specified configuration settings for the specified virtual LAN (VLAN) interface.
- [SCVLANInterfaceSetPhysicalInterfaceAndTag](scvlaninterfacesetphysicalinterfaceandtag%28______%29.md): Updates the specified virtual LAN (VLAN) interface with the specified information.

### Data Types

- [SCNetworkInterfaceRef](scnetworkinterface.md): The reference to an object that represents a network interface.
- [SCBondInterfaceRef](scbondinterface.md): The reference to an object that represents an Ethernet bond interface.
- [SCBondStatusRef](scbondstatus.md): The reference to an object that represents the status of an Ethernet bond interface.
- [SCVLANInterfaceRef](scvlaninterface.md): The reference to an object that represents a virtual LAN (VLAN) interface.
- [SCNetworkProtocolRef](scnetworkprotocol.md): The reference to an object that represents a network protocol.
- [SCNetworkServiceRef](scnetworkservice.md): The reference to an object that represents a network service.
- [SCNetworkSetRef](scnetworkset.md): The reference to an object that represents a network set.

### Constants

- [Ethernet Bond Aggregation Status](1546981-ethernet-bond-aggregation-status.md): Ethernet bond aggregation status codes.
- [Ethernet Bond Status Constants](ethernet-bond-status-constants.md): Ethernet bond status codes.
- [Network Interface Types](network-interface-types.md): Keys that identify network interface types.
- [Network Protocol Types](network-protocol-types.md): Keys that identify network protocol types.

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetwork](scnetwork.md)
- [SCNetworkConnection](scnetworkconnection-g7e.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferences](scpreferences-ft8.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
