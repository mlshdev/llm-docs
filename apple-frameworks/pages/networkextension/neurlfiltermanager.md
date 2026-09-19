> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager

# NEURLFilterManager

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A class you use to configure and control a URL filter.

## Declaration

```swift
class NEURLFilterManager
```

<a id="overview"></a>

## Overview

The system performs URL filtering on your behalf according to your configuration and URL data set. The system filters all URL requests initiated with the [WebKit](https://developer.apple.com/documentation/webkit) and [URLSession](../foundation/urlsession.md) APIs.

During URL filtering, the system performs sub-URL generation to enumurate all possible sub-URLs for the URL in question. For example, this URL:

```
https://www.sub1.example.com/a/b/c?id=123#fragment
```

Parses into the following sub-URLs:

- `example.com`
- `example.com/`
- `example.com/a`
- `example.com/a/`
- `example.com/a/b`
- `example.com/a/b/`
- `example.com/a/b/c`
- `example.com/a/b/c/`
- `example.com/a/b/c/?id=123`
- `example.com/a/b/c/?id=123#fragment`
- `example.com/a/b/c?id=123`
- `example.com/a/b/c?id=123#fragment`
- `example.com:443`
- `example.com:443/`
- `example.com:443/a`
- `example.com:443/a/`
- `example.com:443/a/b`
- `example.com:443/a/b/`
- `example.com:443/a/b/c`
- `example.com:443/a/b/c/`
- `example.com:443/a/b/c/?id=123`
- `example.com:443/a/b/c/?id=123#fragment`
- `example.com:443/a/b/c?id=123`
- `example.com:443/a/b/c?id=123#fragment`
- `sub1.example.com`
- `sub1.example.com/`
- `sub1.example.com/a`
- `sub1.example.com/a/`
- `sub1.example.com/a/b`
- `sub1.example.com/a/b/`
- `sub1.example.com/a/b/c`
- `sub1.example.com/a/b/c/`
- `sub1.example.com/a/b/c/?id=123`
- `sub1.example.com/a/b/c/?id=123#fragment`
- `sub1.example.com/a/b/c?id=123`
- `sub1.example.com/a/b/c?id=123#fragment`
- `sub1.example.com:443`
- `sub1.example.com:443/`
- `sub1.example.com:443/a`
- `sub1.example.com:443/a/`
- `sub1.example.com:443/a/b`
- `sub1.example.com:443/a/b/`
- `sub1.example.com:443/a/b/c`
- `sub1.example.com:443/a/b/c/`
- `sub1.example.com:443/a/b/c/?id=123`
- `sub1.example.com:443/a/b/c/?id=123#fragment`
- `sub1.example.com:443/a/b/c?id=123`
- `sub1.example.com:443/a/b/c?id=123#fragment`

The manager matches each of these sub-URLs against your Bloom filter and then against the PIR URL database if there’s a Bloom filter match. The verdict determines if the app blocks the requested URL. Note that the manager Punycodes the requested URL before parsing; be sure to Punycode your own URL dataset before constructing your Bloom filter and PIR database.

Neither the Bloom filter nor PIR supports wildcards or regular expressions. For a more flexible URL matching solution, use the [urlParsingConfiguration](neurlfiltermanager/urlparsingconfiguration.md) property to select the URL components, including the scheme, domain, path, query, and fragment, that you want to include in the parsing results. You can also use the [urlParsingRegularExpression](neurlfiltermanager/urlparsingregularexpression.md) property to implement custom parsing.

Instances of this class are thread-safe.

<a id="Configure-the-PIR-server"></a>

## Configure the PIR server

URL filtering requires that your app’s information property list contain a top-level `NSPIRConfiguration` dictionary. The dictionary includes two keys:

- **`PIRServerURL`**: (Required) The URL of the PIR server. The value of this key is equivalent to the [pirServerURL](neurlfiltermanager/pirserverurl.md) property.
- **`PrivacyPassIssuerURL`**: (Optional) The URL of the Privacy Pass Issuer. The value of this key is equivalent to the [pirPrivacyPassIssuerURL](neurlfiltermanager/pirprivacypassissuerurl.md) property. If absent, the `PrivacyPassIssuerURL` defaults to the value of `PIRServerURL`.

An `NSPIRConfiguration` dictionary may look like this example:

```xml
<key>NSPIRConfiguration</key>
<dict>
    <key>PIRServerURL</key>
    <string>https://pir.example.com</string>
    <key>PrivacyPassIssuerURL</key>
    <string>https://issuer.example.com</string>
</dict>
```

See the [PIRService - NEURLFilter](https://swiftpackageindex.com/apple/pir-service-example/main/documentation/pirservice#NEURLFilter) documentation for updated security guidance to configure your PIR server to support a URL filter.

## Topics

### Obtaining the shared instance

- [shared](neurlfiltermanager/shared.md): The shared filter manager instance your app uses to manage URL filters.

### Working with a Private Information Retrieval server

- [pirAuthenticationToken](neurlfiltermanager/pirauthenticationtoken.md): A PIR per-user authentication token string.
- [refreshPIRParameters()](neurlfiltermanager/refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [resetPIRCache()](neurlfiltermanager/resetpircache%28%29.md): Resets the PIR on-device cache.
- [pirServerURL](neurlfiltermanager/pirserverurl.md): Deprecated. A URL that contains the domain name of the PIR server.
- [pirPrivacyPassIssuerURL](neurlfiltermanager/pirprivacypassissuerurl.md): Deprecated. A URL that contains the domain name of Privacy Pass issuer.

### Working with the filter configuration

- [setConfiguration(pirServerURL:pirPrivacyPassIssuerURL:pirAuthenticationToken:controlProviderBundleIdentifier:)](neurlfiltermanager/setconfiguration%28pirserverurl_pirprivacypassissuerurl_pirauthenticationtoken_controlproviderbundleidentifier_%29.md): Sets a URL filter configuration with the required PIR server attributes and app extension information.
- [loadFromPreferences()](neurlfiltermanager/loadfrompreferences%28%29.md): Loads the current URL filter configuration from the caller’s URL filter preferences.
- [saveToPreferences()](neurlfiltermanager/savetopreferences%28%29.md): Saves the URL filter configuration in the caller’s URL filter preferences.
- [removeFromPreferences()](neurlfiltermanager/removefrompreferences%28%29.md): Removes the URL filter configuration from the caller’s URL filter preferences.
- [handleConfigChange()](neurlfiltermanager/handleconfigchange%28%29.md): Sets up an observer for the filter configuration change notification and models it as an asynchronous sequence.

### Customizing filter parsing behavior

- [urlParsingConfiguration](neurlfiltermanager/urlparsingconfiguration.md): A property to configure the filter’s parser behavior.
- [NEURLFilterManager.ParsingConfiguration](neurlfiltermanager/parsingconfiguration.md): A type to configure the filter’s parser behavior.
- [urlParsingRegularExpression](neurlfiltermanager/urlparsingregularexpression.md): A regular expression used for advanced URL parsing.
- [setURLParsingRegularExpression(\_:)](neurlfiltermanager/seturlparsingregularexpression%28__%29.md): Sets a regular expression for use in URL parsing.

### Working with filter statuses

- [status](neurlfiltermanager/status-swift.property.md): The current status of the URL filter.
- [handleStatusChange()](neurlfiltermanager/handlestatuschange%28%29.md): Sets up an observer for the status notification and models it as an asynchronous sequence.
- [NEURLFilterManager.Status](neurlfiltermanager/status-swift.enum.md): An enumeration of URL filter status codes.

### Managing filter life cycle

- [isEnabled](neurlfiltermanager/isenabled.md): A Boolean value that toggles the enabled status of the URL filter.
- [shouldFailClosed](neurlfiltermanager/shouldfailclosed.md): A Boolean value that determines how the filter behaves if it fails to make a filtering decision.
- [prefilterFetchInterval](neurlfiltermanager/prefilterfetchinterval.md): The time interval at which the the filter control provider app extension runs.

### Producing filtering reports

- [reportEndpoint](neurlfiltermanager/reportendpoint.md): The endpoint that the filter manager sends blocked URL reports to.
- [reportFormat](neurlfiltermanager/reportformat-swift.property.md): The format the manager uses to send blocked URL reports.
- [NEURLFilterManager.ReportFormat](neurlfiltermanager/reportformat-swift.enum.md): An enumertion of report format types used when reporting blocked URLs.
- [reportInterval](neurlfiltermanager/reportinterval.md): The time interval (in seconds) at which the system sends reports of blocked URLs.

### Identifying app and extension bundles

- [appBundleIdentifier](neurlfiltermanager/appbundleidentifier.md): The bundle identifier of the URL filter app.
- [controlProviderBundleIdentifier](neurlfiltermanager/controlproviderbundleidentifier.md): The bundle identifier of the filter controller provider app extension.

### Handling errors

- [lastDisconnectError](neurlfiltermanager/lastdisconnecterror.md): The most recent error that caused the URL Filter to stop.
- [NEURLFilterManager.Error](neurlfiltermanager/error.md): An enumeration of URL filter error codes

### Describing the filter

- [localizedDescription](neurlfiltermanager/localizeddescription.md): A string containing a description of the URL filter.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### URL filters

- [NEURLFilterControlProvider](neurlfiltercontrolprovider.md): A protocol that defines an object that’s responsible for fetching pre-filter data.
- [NEURLFilterControlProviderConfiguration](neurlfiltercontrolproviderconfiguration.md): A class that defines app extension configurations for the URL Filter control provider app extension.
- [NEURLFilter](neurlfilter.md): A class used to voluntarily validate URLs for apps that don’t use WebKit or the URL session API.
