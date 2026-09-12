> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioningrequest/eid](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningrequest/eid)

# eid (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s eUICC identifier (EID).

## Declaration

```swift
var eid: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [iccid](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [oid](oid.md): The provisioning request’s Object Identifier (OID).

# EID (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s eUICC identifier (EID).

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * EID;
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [ICCID](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [OID](oid.md): The provisioning request’s Object Identifier (OID).
