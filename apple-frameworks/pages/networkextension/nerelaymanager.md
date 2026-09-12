> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager](https://developer.apple.com/documentation/networkextension/nerelaymanager)

# NERelayManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object you use to create and manage a network relay configuration.

## Declaration

```swift
class NERelayManager
```

<a id="overview"></a>

## Overview

When your app starts up, access the shared instance of the relay manager, and load existing settings from the preferences using [loadFromPreferences(completionHandler:)](nerelaymanager/loadfrompreferences%28completionhandler_%29.md). You can define your relay server configuration, and persist it by calling [saveToPreferences(completionHandler:)](nerelaymanager/savetopreferences%28completionhandler_%29.md).

## Topics

### Managing relay configurations

- [shared()](nerelaymanager/shared%28%29.md): Access the single instance of a network relay manager.
- [loadFromPreferences(completionHandler:)](nerelaymanager/loadfrompreferences%28completionhandler_%29.md): Load your relay configuration from the system networking preferences.
- [saveToPreferences(completionHandler:)](nerelaymanager/savetopreferences%28completionhandler_%29.md): Save your relay configuration to the system networking preferences.
- [removeFromPreferences(completionHandler:)](nerelaymanager/removefrompreferences%28completionhandler_%29.md): Remove your relay configuration from the system networking preferences.

### Accessing relay configuration properties

- [isEnabled](nerelaymanager/isenabled.md): A Boolean used to toggle the enabled state of the relay configuration.
- [relays](nerelaymanager/relays.md): An array of one or two relay server configurations. If multiple relays are configured, application traffic routes through both of them in the order they appear in the array.
- [matchDomains](nerelaymanager/matchdomains.md): A list of domain strings used to determine which connections will use the relay configuration contained in this object.
- [excludedDomains](nerelaymanager/excludeddomains.md): A list of domain strings used to determine which connections won’t use the relay configuration contained in this object.
- [localizedDescription](nerelaymanager/localizeddescription.md): A string that contains the display name of the relay configuration.
- [onDemandRules](nerelaymanager/ondemandrules.md): An array of rules you use to determine which networks the relay uses.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.

### Loading previously-used managers

- [loadAllManagersFromPreferences(completionHandler:)](nerelaymanager/loadallmanagersfrompreferences%28completionhandler_%29.md): Asynchronously reads all the relay configurations previously created and saved by the calling app.

### Handling errors

- [NERelayErrorDomain](nerelayerrordomain.md): The domain for errors resulting from calls to the relay manager.
- [NERelayManagerError](nerelaymanagererror.md): Error codes specific to relay managers.

### Instance Properties

- [excludedFQDNs](nerelaymanager/excludedfqdns.md)
- [isDNSFailoverAllowed](nerelaymanager/isdnsfailoverallowed.md)
- [isUIToggleEnabled](nerelaymanager/isuitoggleenabled.md)
- [matchFQDNs](nerelaymanager/matchfqdns.md)

### Instance Methods

- [getLastClientErrors(\_:completionHandler:)](nerelaymanager/getlastclienterrors%28__completionhandler_%29.md)

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

### Relay configuration

- [NERelay](nerelay.md): A single relay server configuration that you can chain together with other relays.

# NERelayManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object you use to create and manage a network relay configuration.

## Declaration

```objectivec
@interface NERelayManager : NSObject
```

<a id="overview"></a>

## Overview

When your app starts up, access the shared instance of the relay manager, and load existing settings from the preferences using [loadFromPreferencesWithCompletionHandler:](nerelaymanager/loadfrompreferences%28completionhandler_%29.md). You can define your relay server configuration, and persist it by calling [saveToPreferencesWithCompletionHandler:](nerelaymanager/savetopreferences%28completionhandler_%29.md).

## Topics

### Managing relay configurations

- [sharedManager](nerelaymanager/shared%28%29.md): Access the single instance of a network relay manager.
- [loadFromPreferencesWithCompletionHandler:](nerelaymanager/loadfrompreferences%28completionhandler_%29.md): Load your relay configuration from the system networking preferences.
- [saveToPreferencesWithCompletionHandler:](nerelaymanager/savetopreferences%28completionhandler_%29.md): Save your relay configuration to the system networking preferences.
- [removeFromPreferencesWithCompletionHandler:](nerelaymanager/removefrompreferences%28completionhandler_%29.md): Remove your relay configuration from the system networking preferences.

### Accessing relay configuration properties

- [enabled](nerelaymanager/isenabled.md): A Boolean used to toggle the enabled state of the relay configuration.
- [relays](nerelaymanager/relays.md): An array of one or two relay server configurations. If multiple relays are configured, application traffic routes through both of them in the order they appear in the array.
- [matchDomains](nerelaymanager/matchdomains.md): A list of domain strings used to determine which connections will use the relay configuration contained in this object.
- [excludedDomains](nerelaymanager/excludeddomains.md): A list of domain strings used to determine which connections won’t use the relay configuration contained in this object.
- [localizedDescription](nerelaymanager/localizeddescription.md): A string that contains the display name of the relay configuration.
- [onDemandRules](nerelaymanager/ondemandrules.md): An array of rules you use to determine which networks the relay uses.
- [NEOnDemandRule](neondemandrule.md): A base class shared by all VPN On Demand rules.

### Loading previously-used managers

- [loadAllManagersFromPreferencesWithCompletionHandler:](nerelaymanager/loadallmanagersfrompreferences%28completionhandler_%29.md): Asynchronously reads all the relay configurations previously created and saved by the calling app.

### Handling errors

- [NERelayErrorDomain](nerelayerrordomain.md): The domain for errors resulting from calls to the relay manager.
- [NERelayManagerError](nerelaymanagererror.md): Error codes specific to relay managers.

### Instance Properties

- [excludedFQDNs](nerelaymanager/excludedfqdns.md)
- [allowDNSFailover](nerelaymanager/isdnsfailoverallowed.md)
- [UIToggleEnabled](nerelaymanager/isuitoggleenabled.md)
- [matchFQDNs](nerelaymanager/matchfqdns.md)

### Instance Methods

- [getLastClientErrors:completionHandler:](nerelaymanager/getlastclienterrors%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Relay configuration

- [NERelay](nerelay.md): A single relay server configuration that you can chain together with other relays.
