> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/servicecurrentradioaccesstechnology](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/servicecurrentradioaccesstechnology)

# serviceCurrentRadioAccessTechnology (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A dictionary containing the current radio access technology registered to each service.

## Declaration

```swift
var serviceCurrentRadioAccessTechnology: [String : String]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys for the [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) dictionary are [NSString](../../foundation/nsstring.md) objects, each of which represents a service. The entry associated with a key is `nil` if the service is not registered on any network.

Although the actual value of a key isn’t important, you can also use it to get the carrier information associated with the service. To do so, pass the key to the [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md) dictionary.

## See Also

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [delegate](delegate.md): An object that the system notifies when the data service identifier changes.
- [CTTelephonyNetworkInfoDelegate](../cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [Radio Access Technology Constants](../radio-access-technology-constants.md): Constants that describe the current radio access technology.

# serviceCurrentRadioAccessTechnology (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A dictionary containing the current radio access technology registered to each service.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSDictionary<NSString *,NSString *> * serviceCurrentRadioAccessTechnology;
```

<a id="Discussion"></a>

## Discussion

The keys for the [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) dictionary are [NSString](../../foundation/nsstring.md) objects, each of which represents a service. The entry associated with a key is `nil` if the service is not registered on any network.

Although the actual value of a key isn’t important, you can also use it to get the carrier information associated with the service. To do so, pass the key to the [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md) dictionary.

## See Also

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [delegate](delegate.md): An object that the system notifies when the data service identifier changes.
- [CTTelephonyNetworkInfoDelegate](../cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [Radio Access Technology Constants](../radio-access-technology-constants.md): Constants that describe the current radio access technology.
