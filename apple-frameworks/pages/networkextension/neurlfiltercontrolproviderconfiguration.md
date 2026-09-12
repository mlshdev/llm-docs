> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltercontrolproviderconfiguration](https://developer.apple.com/documentation/networkextension/neurlfiltercontrolproviderconfiguration)

# NEURLFilterControlProviderConfiguration

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A class that defines app extension configurations for the URL Filter control provider app extension.

## Declaration

```swift
@MainActor @preconcurrency class NEURLFilterControlProviderConfiguration
```

<a id="overview"></a>

## Overview

[NEURLFilterControlProvider](neurlfiltercontrolprovider.md) uses this class to conform to the [ExtensionKit](../extensionkit.md) framework. Your extension doesn’t need to use this class directly.

## Relationships

### Inherits From

- [NEAppExtensionConfiguration](neappextensionconfiguration.md)

### Conforms To

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### URL filters

- [NEURLFilterManager](neurlfiltermanager.md): A class you use to configure and control a URL filter.
- [NEURLFilterControlProvider](neurlfiltercontrolprovider.md): A protocol that defines an object that’s responsible for fetching pre-filter data.
- [NEURLFilter](neurlfilter.md): A class used to voluntarily validate URLs for apps that don’t use WebKit or the URL session API.
