> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager](https://developer.apple.com/documentation/networkextension/nednssettingsmanager)

# NEDNSSettingsManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An object you use to create and manage a DNS settings configuration.

## Declaration

```swift
class NEDNSSettingsManager
```

<a id="overview"></a>

## Overview

When your app starts up, access the shared instance of the DNS settings manager, and load existing settings from the preferences using [loadFromPreferences(completionHandler:)](nednssettingsmanager/loadfrompreferences%28completionhandler_%29.md). You can define your DNS server configuration, and persist it by calling [saveToPreferences(completionHandler:)](nednssettingsmanager/savetopreferences%28completionhandler_%29.md).

In order to use your DNS settings, the user needs to enable it in the Settings app on iOS or in System Preferences on macOS.

## Topics

### Managing DNS configurations

- [shared()](nednssettingsmanager/shared%28%29.md): Access the single instance of a DNS settings manager.
- [loadFromPreferences(completionHandler:)](nednssettingsmanager/loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [saveToPreferences(completionHandler:)](nednssettingsmanager/savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
- [removeFromPreferences(completionHandler:)](nednssettingsmanager/removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.

### Accessing DNS configuration properties

- [isEnabled](nednssettingsmanager/isenabled.md): A Boolean you use to query the enabled state of the DNS settings configuration.
- [dnsSettings](nednssettingsmanager/dnssettings.md): An object that contains the configuration settings for a DNS server.
- [localizedDescription](nednssettingsmanager/localizeddescription.md): A string that contains the display name of the DNS settings configuration.
- [onDemandRules](nednssettingsmanager/ondemandrules.md): A list of ordered rules that defines the networks on which the DNS settings will apply.

### Handling errors

- [NEDNSSettingsErrorDomain](nednssettingserrordomain.md): The domain for errors resulting from calls to the DNS settings manager.
- [NEDNSSettingsManagerError](nednssettingsmanagererror.md): Error codes specific to DNS managers.

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

### DNS configuration

- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md): The DNS resolver settings for a DNS-over-HTTPS server.
- [NEDNSOverTLSSettings](nednsovertlssettings.md): The DNS resolver settings for a DNS-over-TLS server.

# NEDNSSettingsManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An object you use to create and manage a DNS settings configuration.

## Declaration

```objectivec
@interface NEDNSSettingsManager : NSObject
```

<a id="overview"></a>

## Overview

When your app starts up, access the shared instance of the DNS settings manager, and load existing settings from the preferences using [loadFromPreferencesWithCompletionHandler:](nednssettingsmanager/loadfrompreferences%28completionhandler_%29.md). You can define your DNS server configuration, and persist it by calling [saveToPreferencesWithCompletionHandler:](nednssettingsmanager/savetopreferences%28completionhandler_%29.md).

In order to use your DNS settings, the user needs to enable it in the Settings app on iOS or in System Preferences on macOS.

## Topics

### Managing DNS configurations

- [sharedManager](nednssettingsmanager/shared%28%29.md): Access the single instance of a DNS settings manager.
- [loadFromPreferencesWithCompletionHandler:](nednssettingsmanager/loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [saveToPreferencesWithCompletionHandler:](nednssettingsmanager/savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
- [removeFromPreferencesWithCompletionHandler:](nednssettingsmanager/removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.

### Accessing DNS configuration properties

- [enabled](nednssettingsmanager/isenabled.md): A Boolean you use to query the enabled state of the DNS settings configuration.
- [dnsSettings](nednssettingsmanager/dnssettings.md): An object that contains the configuration settings for a DNS server.
- [localizedDescription](nednssettingsmanager/localizeddescription.md): A string that contains the display name of the DNS settings configuration.
- [onDemandRules](nednssettingsmanager/ondemandrules.md): A list of ordered rules that defines the networks on which the DNS settings will apply.

### Handling errors

- [NEDNSSettingsErrorDomain](nednssettingserrordomain.md): The domain for errors resulting from calls to the DNS settings manager.
- [NEDNSSettingsManagerError](nednssettingsmanagererror.md): Error codes specific to DNS managers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### DNS configuration

- [NEDNSOverHTTPSSettings](nednsoverhttpssettings.md): The DNS resolver settings for a DNS-over-HTTPS server.
- [NEDNSOverTLSSettings](nednsovertlssettings.md): The DNS resolver settings for a DNS-over-TLS server.
