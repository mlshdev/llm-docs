> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/currentradioaccesstechnology](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/currentradioaccesstechnology)

# currentRadioAccessTechnology (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The current radio access technology registered with the device.

> Use [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) instead.

## Declaration

```swift
var currentRadioAccessTechnology: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the device isn’t registered on any network, this property is `nil`.

## See Also

### Deprecated

- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTRadioAccessTechnologyDidChange](../../foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

# currentRadioAccessTechnology (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The current radio access technology registered with the device.

> Use [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) instead.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * currentRadioAccessTechnology;
```

<a id="Discussion"></a>

## Discussion

If the device isn’t registered on any network, this property is `nil`.

## See Also

### Deprecated

- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](../ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](../ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.
