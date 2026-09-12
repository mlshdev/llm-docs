> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager](https://developer.apple.com/documentation/networkextension/neapppushmanager)

# NEAppPushManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that configures a push provider and manages its life cycle.

## Declaration

```swift
class NEAppPushManager
```

## Mentioned In

- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md)

<a id="overview"></a>

## Overview

Your app can create as many [NEAppPushManager](neapppushmanager.md) instances as you need. Load your managers from the persistent store and set up their delegates immediately after the app launches, so they’re ready to handle incoming calls.

## Topics

### Matching Wi-Fi networks

- [matchSSIDs](neapppushmanager/matchssids.md): An array of Wi-Fi SSID strings that the system matches for local push activation.
- [matchPrivateLTENetworks](neapppushmanager/matchprivateltenetworks.md): An array of private LTE networks that the system matches for local push activation.
- [NEPrivateLTENetwork](neprivateltenetwork.md): The parameters of a private LTE network.

### Persisting manager settings

- [loadFromPreferences(completionHandler:)](neapppushmanager/loadfrompreferences%28completionhandler_%29.md): Loads the manager’s saved configuration from the persistent store.
- [loadAllFromPreferences(completionHandler:)](neapppushmanager/loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [saveToPreferences(completionHandler:)](neapppushmanager/savetopreferences%28completionhandler_%29.md): Saves the manager’s configuration in the persistent store.
- [removeFromPreferences(completionHandler:)](neapppushmanager/removefrompreferences%28completionhandler_%29.md): Removes the manager’s configuration from the persistent store.

### Working with a delegate

- [delegate](neapppushmanager/delegate.md): A delegate that receives incoming call information from the provider.
- [NEAppPushDelegate](neapppushdelegate.md): A protocol that defines how an app push manager instance interacts with the framework.

### Inspecting manager properties

- [isActive](neapppushmanager/isactive.md): A Boolean value that indicates whether a configuration is in use.
- [isEnabled](neapppushmanager/isenabled.md): A property you use to toggle enabling the configuration.
- [localizedDescription](neapppushmanager/localizeddescription.md): A string that contains the localized description of the app push manager.

### Inspecting provider properties

- [providerConfiguration](neapppushmanager/providerconfiguration.md): A dictionary that contains vendor-specific key-value pairs, that you use to configure a provider.
- [providerBundleIdentifier](neapppushmanager/providerbundleidentifier.md): A string that contains the bundle identifier of the push provider.

### Operating over Ethernet

- [matchEthernet](neapppushmanager/matchethernet.md): A property that indicates Ethernet support for Local Push Connectivity.

### Supporting 3GPP Mission Critical Services

- [matchMissionCriticalService](neapppushmanager/matchmissioncriticalservice.md): A property that indicates support for Mission Critical Services.

### Handling errors

- [NEAppPushManagerError](neapppushmanagererror-swift.struct.md): An error that the push manager encounters.
- [NEAppPushErrorDomain](neapppusherrordomain.md): The error domain string for local push errors.
- [NEAppPushManagerError.Code](neapppushmanagererror-swift.struct/code.md): Error codes that the local push API declares.

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

### Essentials

- [NEAppPushProvider](neapppushprovider.md): An object that creates and maintains a persistent network connection to a local push server.
- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md): Implement your Local Push Connectivity app to ensure delivery of notifications.
- [Receiving Voice and Text Communications on a Local Network](receiving-voice-and-text-communications-on-a-local-network.md): Provide voice and text communication on a local network isolated from Apple Push Notification service by adopting Local Push Connectivity.

# NEAppPushManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that configures a push provider and manages its life cycle.

## Declaration

```objectivec
@interface NEAppPushManager : NSObject
```

## Mentioned In

- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md)

<a id="overview"></a>

## Overview

Your app can create as many [NEAppPushManager](neapppushmanager.md) instances as you need. Load your managers from the persistent store and set up their delegates immediately after the app launches, so they’re ready to handle incoming calls.

## Topics

### Matching Wi-Fi networks

- [matchSSIDs](neapppushmanager/matchssids.md): An array of Wi-Fi SSID strings that the system matches for local push activation.
- [matchPrivateLTENetworks](neapppushmanager/matchprivateltenetworks.md): An array of private LTE networks that the system matches for local push activation.
- [NEPrivateLTENetwork](neprivateltenetwork.md): The parameters of a private LTE network.

### Persisting manager settings

- [loadFromPreferencesWithCompletionHandler:](neapppushmanager/loadfrompreferences%28completionhandler_%29.md): Loads the manager’s saved configuration from the persistent store.
- [loadAllFromPreferencesWithCompletionHandler:](neapppushmanager/loadallfrompreferences%28completionhandler_%29.md): Loads all saved manager configurations asynchronously.
- [saveToPreferencesWithCompletionHandler:](neapppushmanager/savetopreferences%28completionhandler_%29.md): Saves the manager’s configuration in the persistent store.
- [removeFromPreferencesWithCompletionHandler:](neapppushmanager/removefrompreferences%28completionhandler_%29.md): Removes the manager’s configuration from the persistent store.

### Working with a delegate

- [delegate](neapppushmanager/delegate.md): A delegate that receives incoming call information from the provider.
- [NEAppPushDelegate](neapppushdelegate.md): A protocol that defines how an app push manager instance interacts with the framework.

### Inspecting manager properties

- [active](neapppushmanager/isactive.md): A Boolean value that indicates whether a configuration is in use.
- [enabled](neapppushmanager/isenabled.md): A property you use to toggle enabling the configuration.
- [localizedDescription](neapppushmanager/localizeddescription.md): A string that contains the localized description of the app push manager.

### Inspecting provider properties

- [providerConfiguration](neapppushmanager/providerconfiguration.md): A dictionary that contains vendor-specific key-value pairs, that you use to configure a provider.
- [providerBundleIdentifier](neapppushmanager/providerbundleidentifier.md): A string that contains the bundle identifier of the push provider.

### Operating over Ethernet

- [matchEthernet](neapppushmanager/matchethernet.md): A property that indicates Ethernet support for Local Push Connectivity.

### Supporting 3GPP Mission Critical Services

- [matchMissionCriticalService](neapppushmanager/matchmissioncriticalservice.md): A property that indicates support for Mission Critical Services.

### Handling errors

- [NEAppPushErrorDomain](neapppusherrordomain.md): The error domain string for local push errors.
- [NEAppPushManagerError](neapppushmanagererror-swift.struct/code.md): Error codes that the local push API declares.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [NEAppPushProvider](neapppushprovider.md): An object that creates and maintains a persistent network connection to a local push server.
- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md): Implement your Local Push Connectivity app to ensure delivery of notifications.
