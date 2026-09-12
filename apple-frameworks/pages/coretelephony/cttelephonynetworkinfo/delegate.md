> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/delegate](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/delegate)

# delegate (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object that the system notifies when the data service identifier changes.

## Declaration

```swift
weak var delegate: (any CTTelephonyNetworkInfoDelegate)? { get set }
```

## See Also

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [CTTelephonyNetworkInfoDelegate](../cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](../radio-access-technology-constants.md): Constants that describe the current radio access technology.

# delegate (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object that the system notifies when the data service identifier changes.

## Declaration

```objectivec
@property (weak, readwrite, nullable) id<CTTelephonyNetworkInfoDelegate> delegate;
```

## See Also

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [CTTelephonyNetworkInfoDelegate](../cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](../radio-access-technology-constants.md): Constants that describe the current radio access technology.
