> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfodelegate](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfodelegate)

# CTTelephonyNetworkInfoDelegate (Swift)

**Framework:** Core Telephony  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The methods that the system invokes when data service changes occur.

## Declaration

```swift
protocol CTTelephonyNetworkInfoDelegate : NSObjectProtocol
```

## Topics

### Responding to Data Service Changes

- [dataServiceIdentifierDidChange(\_:)](cttelephonynetworkinfodelegate/dataserviceidentifierdidchange%28__%29.md): Informs the delegate when the identifier changes for the service that’s currently providing data.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](cttelephonynetworkinfo/dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [delegate](cttelephonynetworkinfo/delegate.md): An object that the system notifies when the data service identifier changes.
- [serviceCurrentRadioAccessTechnology](cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](radio-access-technology-constants.md): Constants that describe the current radio access technology.

# CTTelephonyNetworkInfoDelegate (Objective-C)

**Framework:** Core Telephony  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The methods that the system invokes when data service changes occur.

## Declaration

```objectivec
@protocol CTTelephonyNetworkInfoDelegate <NSObject>
```

## Topics

### Responding to Data Service Changes

- [dataServiceIdentifierDidChange:](cttelephonynetworkinfodelegate/dataserviceidentifierdidchange%28__%29.md): Informs the delegate when the identifier changes for the service that’s currently providing data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](cttelephonynetworkinfo/dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [delegate](cttelephonynetworkinfo/delegate.md): An object that the system notifies when the data service identifier changes.
- [serviceCurrentRadioAccessTechnology](cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](radio-access-technology-constants.md): Constants that describe the current radio access technology.
