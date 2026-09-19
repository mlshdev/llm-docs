> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/ikesecurityassociationparameters

# ikeSecurityAssociationParameters (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md) object containing the parameters for the initial IKE security association to be negotiated with the IKEv2 server.

## Declaration

```swift
var ikeSecurityAssociationParameters: NEVPNIKEv2SecurityAssociationParameters { get }
```

## See Also

### Accessing IKEv2 Security Association parameters

- [childSecurityAssociationParameters](childsecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md) object containing the parameters for the child IPSec security associations to be negotiated for each IKEv2 policy.
- [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md): Parameters for an IKEv2 Security Association.

# IKESecurityAssociationParameters (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md) object containing the parameters for the initial IKE security association to be negotiated with the IKEv2 server.

## Declaration

```objectivec
@property (readonly) NEVPNIKEv2SecurityAssociationParameters * IKESecurityAssociationParameters;
```

## See Also

### Accessing IKEv2 Security Association parameters

- [childSecurityAssociationParameters](childsecurityassociationparameters.md): An [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md) object containing the parameters for the child IPSec security associations to be negotiated for each IKEv2 policy.
- [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md): Parameters for an IKEv2 Security Association.
