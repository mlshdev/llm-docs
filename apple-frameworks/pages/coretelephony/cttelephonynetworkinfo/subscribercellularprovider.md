> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/subscribercellularprovider](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/subscribercellularprovider)

# subscriberCellularProvider (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Information about the user’s cellular service provider.

> Use [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md) instead.

## Declaration

```swift
var subscriberCellularProvider: CTCarrier? { get }
```

<a id="Discussion"></a>

## Discussion

A [CTCarrier](../ctcarrier.md) object that contains information about the user’s home cellular service provider. The home provider is the provider with whom the user has an account. This information is available immediately after you allocate and initialize the [CTTelephonyNetworkInfo](../cttelephonynetworkinfo.md) object.

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTRadioAccessTechnologyDidChange](../../foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

# subscriberCellularProvider (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Information about the user’s cellular service provider.

> Use [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md) instead.

## Declaration

```objectivec
@property (retain, readonly, nullable) CTCarrier * subscriberCellularProvider;
```

<a id="Discussion"></a>

## Discussion

A [CTCarrier](../ctcarrier.md) object that contains information about the user’s home cellular service provider. The home provider is the provider with whom the user has an account. This information is available immediately after you allocate and initialize the [CTTelephonyNetworkInfo](../cttelephonynetworkinfo.md) object.

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](../ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](../ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.
