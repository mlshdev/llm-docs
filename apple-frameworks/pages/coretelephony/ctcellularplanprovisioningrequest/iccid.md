> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioningrequest/iccid](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningrequest/iccid)

# iccid (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s Integrated Circuit Card Identifier (ICCID).

## Declaration

```swift
var iccid: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [eid](eid.md): The provisioning request’s eUICC identifier (EID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [oid](oid.md): The provisioning request’s Object Identifier (OID).

# ICCID (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s Integrated Circuit Card Identifier (ICCID).

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * ICCID;
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [EID](eid.md): The provisioning request’s eUICC identifier (EID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [OID](oid.md): The provisioning request’s Object Identifier (OID).
