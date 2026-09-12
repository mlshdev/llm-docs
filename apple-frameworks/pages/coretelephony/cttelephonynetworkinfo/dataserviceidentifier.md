> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/dataserviceidentifier](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/dataserviceidentifier)

# dataServiceIdentifier (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The identifier of the service that’s currently providing data.

## Declaration

```swift
var dataServiceIdentifier: String? { get }
```

## See Also

### Getting Information About the Cellular Service Provider

- [delegate](delegate.md): An object that the system notifies when the data service identifier changes.
- [CTTelephonyNetworkInfoDelegate](../cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](../radio-access-technology-constants.md): Constants that describe the current radio access technology.

# dataServiceIdentifier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The identifier of the service that’s currently providing data.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * dataServiceIdentifier;
```

## See Also

### Getting Information About the Cellular Service Provider

- [delegate](delegate.md): An object that the system notifies when the data service identifier changes.
- [CTTelephonyNetworkInfoDelegate](../cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](../radio-access-technology-constants.md): Constants that describe the current radio access technology.
