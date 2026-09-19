> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningrequest/confirmationcode

# confirmationCode (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.

## Declaration

```swift
var confirmationCode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [eid](eid.md): The provisioning request’s eUICC identifier (EID).
- [iccid](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [oid](oid.md): The provisioning request’s Object Identifier (OID).

# confirmationCode (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * confirmationCode;
```

<a id="Discussion"></a>

## Discussion

This property is optional.

## See Also

### Specifying Request Properties

- [address](address.md): The address of the carrier network’s eSIM server.
- [EID](eid.md): The provisioning request’s eUICC identifier (EID).
- [ICCID](iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [OID](oid.md): The provisioning request’s Object Identifier (OID).
