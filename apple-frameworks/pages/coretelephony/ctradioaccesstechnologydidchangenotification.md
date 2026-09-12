> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctradioaccesstechnologydidchangenotification](https://developer.apple.com/documentation/coretelephony/ctradioaccesstechnologydidchangenotification)

# CTRadioAccessTechnologyDidChangeNotification

**Interface language:** Objective-C

**Framework:** Core Telephony  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the notification indicating that the radio access technology changed for one of the services.

## Declaration

```objectivec
extern NSString * const CTRadioAccessTechnologyDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../foundation/nsnotification/object.md) is an [NSString](../foundation/nsstring.md) that represents the service identifier of the service whose radio access technology has changed. Use this string as the key in [serviceCurrentRadioAccessTechnology](cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md) to get the value of the new radio access technology for the service.

## See Also

### Deprecated

- [currentRadioAccessTechnology](cttelephonynetworkinfo/currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](cttelephonynetworkinfo/subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](cttelephonynetworkinfo/subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](cttelephonynetworkinfo/servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](cttelephonynetworkinfo/servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](ctserviceradioaccesstechnologydidchangenotification.md)
