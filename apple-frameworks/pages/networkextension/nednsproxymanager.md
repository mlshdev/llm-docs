> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager](https://developer.apple.com/documentation/networkextension/nednsproxymanager)

# NEDNSProxyManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object to create and manage an DNS proxy provider’s configuration.

## Declaration

```swift
class NEDNSProxyManager
```

<a id="overview"></a>

## Overview

A DNS proxy allows your app to intercept all DNS traffic generated on a device. You can use this capability to provide services like DNS traffic encryption, typically by redirecting DNS traffic to your own server. You usually do this in the context of managed devices, such as those owned by a school or an enterprise.

You create a DNS proxy as an app extension based on a custom subclass of the [NEDNSProxyProvider](nednsproxyprovider.md) class. You enable and configure this proxy from within your app using the singleton proxy manager instance provided by the [shared()](nednsproxymanager/shared%28%29.md) type method of the [NEDNSProxyManager](nednsproxymanager.md) class. For example, for a proxy that performs a simple redirect, you can use the proxy manager to define and dynamically configure the destination IP address of the redirected traffic.

Instances of the proxy manager are thread safe.

> **Important**

>  To use the [NEDNSProxyManager](nednsproxymanager.md) class, you must enable the Network Extensions capability in Xcode and select the DNS Proxy capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

## Topics

### Managing the DNS proxy configuration

- [shared()](nednsproxymanager/shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [loadFromPreferences(completionHandler:)](nednsproxymanager/loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [saveToPreferences(completionHandler:)](nednsproxymanager/savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
- [removeFromPreferences(completionHandler:)](nednsproxymanager/removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

### Accessing DNS proxy configuration properties

- [isEnabled](nednsproxymanager/isenabled.md): The status of a DNS proxy.
- [providerProtocol](nednsproxymanager/providerprotocol.md): The provider-specific portion of the DNS proxy configuration.
- [localizedDescription](nednsproxymanager/localizeddescription.md): A description of the DNS proxy.

### Notifications

- [NEDNSProxyConfigurationDidChange](../foundation/nsnotification/name-swift.struct/nednsproxyconfigurationdidchange.md): A notification that is posted when the DNS proxy configuration changes.

### Errors

- [NEDNSProxyErrorDomain](nednsproxyerrordomain.md): The DNS proxy error domain.
- [NEDNSProxyManagerError](nednsproxymanagererror.md): The possible DNS proxy manager errors.

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

### Configuration

- [NEDNSProxyProviderProtocol](nednsproxyproviderprotocol.md): Configuration parameters for a DNS proxy.

# NEDNSProxyManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object to create and manage an DNS proxy provider’s configuration.

## Declaration

```objectivec
@interface NEDNSProxyManager : NSObject
```

<a id="overview"></a>

## Overview

A DNS proxy allows your app to intercept all DNS traffic generated on a device. You can use this capability to provide services like DNS traffic encryption, typically by redirecting DNS traffic to your own server. You usually do this in the context of managed devices, such as those owned by a school or an enterprise.

You create a DNS proxy as an app extension based on a custom subclass of the [NEDNSProxyProvider](nednsproxyprovider.md) class. You enable and configure this proxy from within your app using the singleton proxy manager instance provided by the [sharedManager](nednsproxymanager/shared%28%29.md) type method of the [NEDNSProxyManager](nednsproxymanager.md) class. For example, for a proxy that performs a simple redirect, you can use the proxy manager to define and dynamically configure the destination IP address of the redirected traffic.

Instances of the proxy manager are thread safe.

> **Important**

>  To use the [NEDNSProxyManager](nednsproxymanager.md) class, you must enable the Network Extensions capability in Xcode and select the DNS Proxy capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

## Topics

### Managing the DNS proxy configuration

- [sharedManager](nednsproxymanager/shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [loadFromPreferencesWithCompletionHandler:](nednsproxymanager/loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [saveToPreferencesWithCompletionHandler:](nednsproxymanager/savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
- [removeFromPreferencesWithCompletionHandler:](nednsproxymanager/removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

### Accessing DNS proxy configuration properties

- [enabled](nednsproxymanager/isenabled.md): The status of a DNS proxy.
- [providerProtocol](nednsproxymanager/providerprotocol.md): The provider-specific portion of the DNS proxy configuration.
- [localizedDescription](nednsproxymanager/localizeddescription.md): A description of the DNS proxy.

### Notifications

- [NEDNSProxyConfigurationDidChangeNotification](nednsproxyconfigurationdidchangenotification.md): A notification that is posted when the DNS proxy configuration changes.

### Errors

- [NEDNSProxyErrorDomain](nednsproxyerrordomain.md): The DNS proxy error domain.
- [NEDNSProxyManagerError](nednsproxymanagererror.md): The possible DNS proxy manager errors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuration

- [NEDNSProxyProviderProtocol](nednsproxyproviderprotocol.md): Configuration parameters for a DNS proxy.
