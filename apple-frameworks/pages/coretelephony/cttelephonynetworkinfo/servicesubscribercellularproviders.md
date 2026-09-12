> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/servicesubscribercellularproviders](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/servicesubscribercellularproviders)

# serviceSubscriberCellularProviders (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

A dictionary that contains carrier information about each service.

> Deprecated with no replacement

## Declaration

```swift
var serviceSubscriberCellularProviders: [String : CTCarrier]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys for the [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md) dictionary are [NSString](../../foundation/nsstring.md) objects, each of which represents a service. Each entry in the dictionary is a [CTCarrier](../ctcarrier.md) object, which contains information about the subscriber’s home cellular service provider.

> **Note**

>  In this context, the “home” provider is the one with which the user has a cellular plan, as opposed to a roaming provider.

Although the actual value of a key isn’t important, you can also use it to get the current radio access technology associated with the service. To do so, pass the key to the [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) dictionary.

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTRadioAccessTechnologyDidChange](../../foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

# serviceSubscriberCellularProviders (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

A dictionary that contains carrier information about each service.

> Deprecated with no replacement

## Declaration

```objectivec
@property (retain, readonly, nullable) NSDictionary<NSString *,CTCarrier *> * serviceSubscriberCellularProviders;
```

<a id="Discussion"></a>

## Discussion

The keys for the [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md) dictionary are [NSString](../../foundation/nsstring.md) objects, each of which represents a service. Each entry in the dictionary is a [CTCarrier](../ctcarrier.md) object, which contains information about the subscriber’s home cellular service provider.

> **Note**

>  In this context, the “home” provider is the one with which the user has a cellular plan, as opposed to a roaming provider.

Although the actual value of a key isn’t important, you can also use it to get the current radio access technology associated with the service. To do so, pass the key to the [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) dictionary.

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](../ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](../ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.
