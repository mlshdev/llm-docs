> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo)

# CTTelephonyNetworkInfo (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

An object that provides notifications of changes to the user’s cellular service provider.

## Declaration

```swift
class CTTelephonyNetworkInfo
```

<a id="overview"></a>

## Overview

Your app should be able to handle changes to the user’s cellular service provider. For example, the user could swap the device’s SIM card with one from another provider while your app is running.

This class also gives you access to the [CTCarrier](ctcarrier.md) object, which contains information about the user’s home cellular service provider.

## Topics

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](cttelephonynetworkinfo/dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [delegate](cttelephonynetworkinfo/delegate.md): An object that the system notifies when the data service identifier changes.
- [CTTelephonyNetworkInfoDelegate](cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [serviceCurrentRadioAccessTechnology](cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](radio-access-technology-constants.md): Constants that describe the current radio access technology.

### Deprecated

- [currentRadioAccessTechnology](cttelephonynetworkinfo/currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](cttelephonynetworkinfo/subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](cttelephonynetworkinfo/subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](cttelephonynetworkinfo/servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](cttelephonynetworkinfo/servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTRadioAccessTechnologyDidChange](../foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

### Structures

- [CTTelephonyNetworkInfo.RadioAccessTechnologyDidChangeMessage](cttelephonynetworkinfo/radioaccesstechnologydidchangemessage.md): A message that posts when the radio access technology changes for one of the services.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Service information

- [iPhone quick switch](iphone-quick-switch.md): Enable seamless app transition between multiple iPhones.

# CTTelephonyNetworkInfo (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

An object that provides notifications of changes to the user’s cellular service provider.

## Declaration

```objectivec
@interface CTTelephonyNetworkInfo : NSObject
```

<a id="overview"></a>

## Overview

Your app should be able to handle changes to the user’s cellular service provider. For example, the user could swap the device’s SIM card with one from another provider while your app is running.

This class also gives you access to the [CTCarrier](ctcarrier.md) object, which contains information about the user’s home cellular service provider.

## Topics

### Getting Information About the Cellular Service Provider

- [dataServiceIdentifier](cttelephonynetworkinfo/dataserviceidentifier.md): The identifier of the service that’s currently providing data.
- [delegate](cttelephonynetworkinfo/delegate.md): An object that the system notifies when the data service identifier changes.
- [CTTelephonyNetworkInfoDelegate](cttelephonynetworkinfodelegate.md): The methods that the system invokes when data service changes occur.
- [serviceCurrentRadioAccessTechnology](cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md): A dictionary containing the current radio access technology registered to each service.
- [Radio Access Technology Constants](radio-access-technology-constants.md): Constants that describe the current radio access technology.

### Deprecated

- [currentRadioAccessTechnology](cttelephonynetworkinfo/currentradioaccesstechnology.md): Deprecated. The current radio access technology registered with the device.
- [subscriberCellularProvider](cttelephonynetworkinfo/subscribercellularprovider.md): Deprecated. Information about the user’s cellular service provider.
- [subscriberCellularProviderDidUpdateNotifier](cttelephonynetworkinfo/subscribercellularproviderdidupdatenotifier.md): Deprecated. A block dispatched when the user’s cellular service provider information changes.
- [serviceSubscriberCellularProviders](cttelephonynetworkinfo/servicesubscribercellularproviders.md): Deprecated. A dictionary that contains carrier information about each service.
- [serviceSubscriberCellularProvidersDidUpdateNotifier](cttelephonynetworkinfo/servicesubscribercellularprovidersdidupdatenotifier.md): Deprecated. A block dispatched when there are updates to the user’s cellular provider information for any service.
- [CTServiceRadioAccessTechnologyDidChangeNotification](ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Service information

- [iPhone quick switch](iphone-quick-switch.md): Enable seamless app transition between multiple iPhones.
