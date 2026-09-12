> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwconfiguration/networkprofiles](https://developer.apple.com/documentation/corewlan/cwconfiguration/networkprofiles)

# networkProfiles (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of remembered CWNetworkProfile objects.

## Declaration

```swift
@NSCopying var networkProfiles: NSOrderedSet { get }
```

<a id="Discussion"></a>

## Discussion

The order of this array corresponds to the order in which the the CWNetworkProfile objects participate in the auto-join process.

## See Also

### Instance Properties

- [rememberJoinedNetworks](rememberjoinednetworks.md): AirPort client will remember all joined networks.
- [requireAdministratorForAssociation](requireadministratorforassociation.md): Require an administrator password to change networks.
- [requireAdministratorForIBSSMode](requireadministratorforibssmode.md): Require an administrator password to create a computer-to-computer network.
- [requireAdministratorForPower](requireadministratorforpower.md): Require an administrator password to change the interface power state.

# networkProfiles (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of remembered CWNetworkProfile objects.

## Declaration

```objectivec
@property (copy, readonly) NSOrderedSet<CWNetworkProfile *> * networkProfiles;
```

<a id="Discussion"></a>

## Discussion

The order of this array corresponds to the order in which the the CWNetworkProfile objects participate in the auto-join process.

## See Also

### Instance Properties

- [rememberJoinedNetworks](rememberjoinednetworks.md): AirPort client will remember all joined networks.
- [requireAdministratorForAssociation](requireadministratorforassociation.md): Require an administrator password to change networks.
- [requireAdministratorForIBSSMode](requireadministratorforibssmode.md): Require an administrator password to create a computer-to-computer network.
- [requireAdministratorForPower](requireadministratorforpower.md): Require an administrator password to change the interface power state.
