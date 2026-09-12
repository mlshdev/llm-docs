> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanagererror](https://developer.apple.com/documentation/networkextension/nednsproxymanagererror)

# NEDNSProxyManagerError (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The possible DNS proxy manager errors.

## Declaration

```swift
enum NEDNSProxyManagerError
```

<a id="overview"></a>

## Overview

These errors appear as the parameter in the completion handler of the methods that you use to manage DNS proxy configuration: [loadFromPreferences(completionHandler:)](nednsproxymanager/loadfrompreferences%28completionhandler_%29.md), [removeFromPreferences(completionHandler:)](nednsproxymanager/removefrompreferences%28completionhandler_%29.md), and [saveToPreferences(completionHandler:)](nednsproxymanager/savetopreferences%28completionhandler_%29.md).

## Topics

### Enumeration Cases

- [NEDNSProxyManagerError.configurationInvalid](nednsproxymanagererror/configurationinvalid.md): Invalid DNS proxy configuration that cannot be stored.
- [NEDNSProxyManagerError.configurationDisabled](nednsproxymanagererror/configurationdisabled.md): Disabled DNS proxy configuration.
- [NEDNSProxyManagerError.configurationStale](nednsproxymanagererror/configurationstale.md): Outdated DNS proxy configuration that needs to be loaded.
- [NEDNSProxyManagerError.configurationCannotBeRemoved](nednsproxymanagererror/configurationcannotberemoved.md): Unremovable DNS proxy configuration.

### Initializers

- [init(rawValue:)](nednsproxymanagererror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NEDNSProxyErrorDomain](nednsproxyerrordomain.md): The DNS proxy error domain.

# NEDNSProxyManagerError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The possible DNS proxy manager errors.

## Declaration

```objectivec
enum NEDNSProxyManagerError : NSInteger;
```

<a id="overview"></a>

## Overview

These errors appear as the parameter in the completion handler of the methods that you use to manage DNS proxy configuration: [loadFromPreferencesWithCompletionHandler:](nednsproxymanager/loadfrompreferences%28completionhandler_%29.md), [removeFromPreferencesWithCompletionHandler:](nednsproxymanager/removefrompreferences%28completionhandler_%29.md), and [saveToPreferencesWithCompletionHandler:](nednsproxymanager/savetopreferences%28completionhandler_%29.md).

## Topics

### Enumeration Cases

- [NEDNSProxyManagerErrorConfigurationInvalid](nednsproxymanagererror/configurationinvalid.md): Invalid DNS proxy configuration that cannot be stored.
- [NEDNSProxyManagerErrorConfigurationDisabled](nednsproxymanagererror/configurationdisabled.md): Disabled DNS proxy configuration.
- [NEDNSProxyManagerErrorConfigurationStale](nednsproxymanagererror/configurationstale.md): Outdated DNS proxy configuration that needs to be loaded.
- [NEDNSProxyManagerErrorConfigurationCannotBeRemoved](nednsproxymanagererror/configurationcannotberemoved.md): Unremovable DNS proxy configuration.

## See Also

### Errors

- [NEDNSProxyErrorDomain](nednsproxyerrordomain.md): The DNS proxy error domain.
