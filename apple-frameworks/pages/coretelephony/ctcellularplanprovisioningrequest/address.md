> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioningrequest/address](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningrequest/address)

# address (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The address of the carrier network’s eSIM server.

## Declaration

```swift
var address: String { get set }
```

<a id="Discussion"></a>

## Discussion

The destination server must support the SMDP+ standard.

You must set this property for the request to be valid.

## See Also

### Specifying Request Properties

- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [eid](eid.md): The provisioning request’s eUICC identifier (EID).
- [iccid](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [oid](oid.md): The provisioning request’s Object Identifier (OID).

# address (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The address of the carrier network’s eSIM server.

## Declaration

```objectivec
@property (nonatomic, strong, nonnull) NSString * address;
```

<a id="Discussion"></a>

## Discussion

The destination server must support the SMDP+ standard.

You must set this property for the request to be valid.

## See Also

### Specifying Request Properties

- [confirmationCode](confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [EID](eid.md): The provisioning request’s eUICC identifier (EID).
- [ICCID](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [OID](oid.md): The provisioning request’s Object Identifier (OID).
