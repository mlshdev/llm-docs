> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/1546981-ethernet-bond-aggregation-status](https://developer.apple.com/documentation/systemconfiguration/1546981-ethernet-bond-aggregation-status)

# Ethernet Bond Aggregation Status

**Interface languages:** Swift, Objective-C

**Framework:** System Configuration  
**Kind:** API Collection

Ethernet bond aggregation status codes.

## Topics

### Constants

- [kSCBondStatusOK](kscbondstatusok.md): The status is valid (for example, enabled, active, running, and so on).
- [kSCBondStatusLinkInvalid](kscbondstatuslinkinvalid.md): The link state is not valid (such as down, half-duplex, or wrong speed).
- [kSCBondStatusNoPartner](kscbondstatusnopartner.md): The port on the switch to which the device is connected doesn’t seem to have 802.3ad Link Aggregation enabled.
- [kSCBondStatusNotInActiveGroup](kscbondstatusnotinactivegroup.md): Communication with a partner is occurring, but the link aggregation group is different from the one that is active.
- [kSCBondStatusUnknown](kscbondstatusunknown.md): Nonspecific failure.

## See Also

### Constants

- [Ethernet Bond Status Constants](ethernet-bond-status-constants.md): Ethernet bond status codes.
- [Network Interface Types](network-interface-types.md): Keys that identify network interface types.
- [Network Protocol Types](network-protocol-types.md): Keys that identify network protocol types.
