> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/servicesubscribercellularprovidersdidupdatenotifier](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/servicesubscribercellularprovidersdidupdatenotifier)

# serviceSubscriberCellularProvidersDidUpdateNotifier (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

A block dispatched when there are updates to the user’s cellular provider information for any service.

> Deprecated with no replacement

## Declaration

```swift
var serviceSubscriberCellularProvidersDidUpdateNotifier: ((String) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block object executes on the default priority global dispatch queue when the user’s cellular provider information changes. This occurs, for example, if a user swaps the device’s SIM card with one from another provider, while your app is running.

To handle changes in cellular service provider information, define a block in your app and assign it to this property. Implement the block to support being called from any context. To get the new information, use the [NSString](../../foundation/nsstring.md) (which contains the identifier of the service whose information has changed) as the key into [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md).

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [CTRadioAccessTechnologyDidChange](../../foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

# serviceSubscriberCellularProvidersDidUpdateNotifier (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0)

A block dispatched when there are updates to the user’s cellular provider information for any service.

> Deprecated with no replacement

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^serviceSubscriberCellularProvidersDidUpdateNotifier)(NSString *);
```

<a id="Discussion"></a>

## Discussion

The block object executes on the default priority global dispatch queue when the user’s cellular provider information changes. This occurs, for example, if a user swaps the device’s SIM card with one from another provider, while your app is running.

To handle changes in cellular service provider information, define a block in your app and assign it to this property. Implement the block to support being called from any context. To get the new information, use the [NSString](../../foundation/nsstring.md) (which contains the identifier of the service whose information has changed) as the key into [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md).

## See Also

### Deprecated

- [currentRadioAccessTechnology](currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](../ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](../ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.
