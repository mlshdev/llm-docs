> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioningrequest/oid](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningrequest/oid)

# oid (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s Object Identifier (OID).

## Declaration

```swift
var oid: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [eid](eid.md): The provisioning request’s eUICC identifier (EID).
- [iccid](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).

# OID (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s Object Identifier (OID).

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * OID;
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [EID](eid.md): The provisioning request’s eUICC identifier (EID).
- [ICCID](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
