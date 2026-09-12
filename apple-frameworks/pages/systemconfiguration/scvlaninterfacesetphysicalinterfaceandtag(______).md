> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scvlaninterfacesetphysicalinterfaceandtag(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scvlaninterfacesetphysicalinterfaceandtag(_:_:_:))

# SCVLANInterfaceSetPhysicalInterfaceAndTag(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.5+

Updates the specified virtual LAN (VLAN) interface with the specified information.

## Declaration

```swift
func SCVLANInterfaceSetPhysicalInterfaceAndTag(_ vlan: SCVLANInterface, _ physical: SCNetworkInterface, _ tag: CFNumber) -> Bool
```

## Parameters

- `vlan`: The VLAN interface to update.
- `physical`: The physical interface to associate with the VLAN interface.
- `tag`: The tag to associate with the VLAN interface. This value must be between 1 and 4094.

<a id="return-value"></a>

## Return Value

`TRUE` if the configuration was stored; `FALSE` if an error occurred.

## See Also

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

# SCVLANInterfaceSetPhysicalInterfaceAndTag (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.5+

Updates the specified virtual LAN (VLAN) interface with the specified information.

## Declaration

```objectivec
Boolean SCVLANInterfaceSetPhysicalInterfaceAndTag(SCVLANInterfaceRef vlan, SCNetworkInterfaceRef physical, CFNumberRef tag);
```

## Parameters

- `vlan`: The VLAN interface to update.
- `physical`: The physical interface to associate with the VLAN interface.
- `tag`: The tag to associate with the VLAN interface. This value must be between 1 and 4094.

<a id="return-value"></a>

## Return Value

`TRUE` if the configuration was stored; `FALSE` if an error occurred.

## See Also

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
