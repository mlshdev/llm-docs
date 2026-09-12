> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/subscribercellularproviderdidupdatenotifier](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/subscribercellularproviderdidupdatenotifier)

# subscriberCellularProviderDidUpdateNotifier (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A block dispatched when the user’s cellular service provider information changes.

> Use [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md) instead.

## Declaration

```swift
var subscriberCellularProviderDidUpdateNotifier: ((CTCarrier) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

This block executes on the default priority global dispatch queue when the user’s cellular provider information changes. This occurs, for example, if a user swaps the device’s SIM card with one from another provider, while your app is running.

To handle changes in cellular service provider information, define a block in your app and assign it to this property. Implement the block to support being called from any context.

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTRadioAccessTechnologyDidChange](../../foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

# subscriberCellularProviderDidUpdateNotifier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A block dispatched when the user’s cellular service provider information changes.

> Use [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(CTCarrier *) subscriberCellularProviderDidUpdateNotifier;
```

<a id="Discussion"></a>

## Discussion

This block executes on the default priority global dispatch queue when the user’s cellular provider information changes. This occurs, for example, if a user swaps the device’s SIM card with one from another provider, while your app is running.

To handle changes in cellular service provider information, define a block in your app and assign it to this property. Implement the block to support being called from any context.

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](../ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](../ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.
