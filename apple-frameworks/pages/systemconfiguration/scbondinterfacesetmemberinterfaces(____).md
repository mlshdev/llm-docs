> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scbondinterfacesetmemberinterfaces(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scbondinterfacesetmemberinterfaces(_:_:))

# SCBondInterfaceSetMemberInterfaces(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.5+

Sets the member interfaces for the specified Ethernet bond interface.

## Declaration

```swift
func SCBondInterfaceSetMemberInterfaces(_ bond: SCBondInterface, _ members: CFArray) -> Bool
```

## Parameters

- `bond`: The Ethernet bond interface
- `members`: The desired member interfaces.

<a id="return-value"></a>

## Return Value

`TRUE` if the configuration was stored; `FALSE` if an error occurred.

## See Also

### Configuring Ethernet Bond Interfaces

- [SCBondInterfaceCopyAll(\_:)](scbondinterfacecopyall%28__%29.md): Returns all Ethernet bond interfaces on the system.
- [SCBondInterfaceCopyAvailableMemberInterfaces(\_:)](scbondinterfacecopyavailablememberinterfaces%28__%29.md): Returns all network capable devices on the system that can be added to an Ethernet bond interface.
- [SCBondInterfaceCopyStatus(\_:)](scbondinterfacecopystatus%28__%29.md): Returns the status of the specified Ethernet bond interface.
- [SCBondInterfaceCreate(\_:)](scbondinterfacecreate%28__%29.md): Creates a new Ethernet bond interface.
- [SCBondInterfaceGetMemberInterfaces(\_:)](scbondinterfacegetmemberinterfaces%28__%29.md): Returns the member interfaces for the specified Ethernet bond interface.
- [SCBondInterfaceGetOptions(\_:)](scbondinterfacegetoptions%28__%29.md): Returns the configuration settings associated with the specified Ethernet bond interface.
- [SCBondInterfaceRemove(\_:)](scbondinterfaceremove%28__%29.md): Removes the Ethernet bond interface from the configuration.
- [SCBondInterfaceSetLocalizedDisplayName(\_:\_:)](scbondinterfacesetlocalizeddisplayname%28____%29.md): Sets the localized display name for the specified Ethernet bond interface.
- [SCBondInterfaceSetOptions(\_:\_:)](scbondinterfacesetoptions%28____%29.md): Sets the configuration settings for the specified Ethernet bond interface.
- [SCBondStatusGetInterfaceStatus(\_:\_:)](scbondstatusgetinterfacestatus%28____%29.md): Returns the status of the specified member interface of an Ethernet bond or the status of the bond as a whole.
- [SCBondStatusGetMemberInterfaces(\_:)](scbondstatusgetmemberinterfaces%28__%29.md): Returns the member interfaces that are represented with the Ethernet bond interface.
- [SCBondStatusGetTypeID()](scbondstatusgettypeid%28%29.md): Returns the type identifier of all `SCBondStatusRef` instances.

# SCBondInterfaceSetMemberInterfaces (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.5+

Sets the member interfaces for the specified Ethernet bond interface.

## Declaration

```objectivec
Boolean SCBondInterfaceSetMemberInterfaces(SCBondInterfaceRef bond, CFArrayRef members);
```

## Parameters

- `bond`: The Ethernet bond interface
- `members`: The desired member interfaces.

<a id="return-value"></a>

## Return Value

`TRUE` if the configuration was stored; `FALSE` if an error occurred.

## See Also

### Configuring Ethernet Bond Interfaces

- [SCBondInterfaceCopyAll](scbondinterfacecopyall%28__%29.md): Returns all Ethernet bond interfaces on the system.
- [SCBondInterfaceCopyAvailableMemberInterfaces](scbondinterfacecopyavailablememberinterfaces%28__%29.md): Returns all network capable devices on the system that can be added to an Ethernet bond interface.
- [SCBondInterfaceCopyStatus](scbondinterfacecopystatus%28__%29.md): Returns the status of the specified Ethernet bond interface.
- [SCBondInterfaceCreate](scbondinterfacecreate%28__%29.md): Creates a new Ethernet bond interface.
- [SCBondInterfaceGetMemberInterfaces](scbondinterfacegetmemberinterfaces%28__%29.md): Returns the member interfaces for the specified Ethernet bond interface.
- [SCBondInterfaceGetOptions](scbondinterfacegetoptions%28__%29.md): Returns the configuration settings associated with the specified Ethernet bond interface.
- [SCBondInterfaceRemove](scbondinterfaceremove%28__%29.md): Removes the Ethernet bond interface from the configuration.
- [SCBondInterfaceSetLocalizedDisplayName](scbondinterfacesetlocalizeddisplayname%28____%29.md): Sets the localized display name for the specified Ethernet bond interface.
- [SCBondInterfaceSetOptions](scbondinterfacesetoptions%28____%29.md): Sets the configuration settings for the specified Ethernet bond interface.
- [SCBondStatusGetInterfaceStatus](scbondstatusgetinterfacestatus%28____%29.md): Returns the status of the specified member interface of an Ethernet bond or the status of the bond as a whole.
- [SCBondStatusGetMemberInterfaces](scbondstatusgetmemberinterfaces%28__%29.md): Returns the member interfaces that are represented with the Ethernet bond interface.
- [SCBondStatusGetTypeID](scbondstatusgettypeid%28%29.md): Returns the type identifier of all `SCBondStatusRef` instances.
