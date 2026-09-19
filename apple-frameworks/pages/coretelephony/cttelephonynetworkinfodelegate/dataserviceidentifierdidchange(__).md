> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfodelegate/dataserviceidentifierdidchange(_:)

# dataServiceIdentifierDidChange(\_:) (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Informs the delegate when the identifier changes for the service that’s currently providing data.

## Declaration

```swift
optional func dataServiceIdentifierDidChange(_ identifier: String)
```

## Parameters

- `identifier`: The identifier of the service that’s currently providing data. Use this identifier as the key in [serviceCurrentRadioAccessTechnology](../cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md) to get the value of the new radio access technology for the service.

# dataServiceIdentifierDidChange: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Informs the delegate when the identifier changes for the service that’s currently providing data.

## Declaration

```objectivec
- (void) dataServiceIdentifierDidChange:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier of the service that’s currently providing data. Use this identifier as the key in [serviceCurrentRadioAccessTechnology](../cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md) to get the value of the new radio access technology for the service.
