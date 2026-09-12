> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltercontrolprovider](https://developer.apple.com/documentation/networkextension/neurlfiltercontrolprovider)

# NEURLFilterControlProvider

**Framework:** Network Extension  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A protocol that defines an object that’s responsible for fetching pre-filter data.

## Declaration

```swift
protocol NEURLFilterControlProvider : AppExtension
```

<a id="overview"></a>

## Overview

Create a class that conforms to this protocol in your app extension, then provide the extension’s bundle identifier to the [NEURLFilterManager](neurlfiltermanager.md) in [setConfiguration(pirServerURL:pirPrivacyPassIssuerURL:pirAuthenticationToken:controlProviderBundleIdentifier:)](neurlfiltermanager/setconfiguration%28pirserverurl_pirprivacypassissuerurl_pirauthenticationtoken_controlproviderbundleidentifier_%29.md).

## Topics

### Starting and stopping the provider

- [start()](neurlfiltercontrolprovider/start%28%29.md): Prepares the filter to start, in response to a call from the framework.
- [stop(reason:)](neurlfiltercontrolprovider/stop%28reason_%29.md): Prepares the filter to stop, in response to a call from the framework.

### Fetching a prefilter

- [fetchPrefilter(existingPrefilterTag:)](neurlfiltercontrolprovider/fetchprefilter%28existingprefiltertag_%29.md): Fetches prefilter data, in response to a call from the framework.
- [NEURLFilterPrefilter](neurlfilterprefilter.md): A structure containing a prefilter returned by a filter control provider.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### URL filters

- [NEURLFilterManager](neurlfiltermanager.md): A class you use to configure and control a URL filter.
- [NEURLFilterControlProviderConfiguration](neurlfiltercontrolproviderconfiguration.md): A class that defines app extension configurations for the URL Filter control provider app extension.
- [NEURLFilter](neurlfilter.md): A class used to voluntarily validate URLs for apps that don’t use WebKit or the URL session API.
