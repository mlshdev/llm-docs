> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilter](https://developer.apple.com/documentation/networkextension/neurlfilter)

# NEURLFilter (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 19.0+ · iPadOS 19.0+ · Mac Catalyst 19.0+ · macOS 16.0+ · tvOS · visionOS · watchOS

A class used to voluntarily validate URLs for apps that don’t use WebKit or the URL session API.

## Declaration

```swift
class NEURLFilter
```

<a id="overview"></a>

## Overview

When using networking frameworks other than WebKit or Foundation’s [URLSession](../foundation/urlsession.md), use the `NEURLFilter` API to evaluate URLs before potentially connecting to a restricted or malicious site. Call the class method [verdict(for:)](neurlfilter/verdict%28for_%29.md) to check a URL and honor the “allow” or “deny” verdict. Don’t connect to any URL that receives a “deny” verdict.

## Topics

### Evaluating a URL

- [verdict(for:)](neurlfilter/verdict%28for_%29.md): Determines if accessing the specified URL is allowed or denied.
- [NEURLFilter.Verdict](neurlfilter/verdict.md): A verdict returned by a URL filter.

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

### URL filters

- [NEURLFilterManager](neurlfiltermanager.md): A class you use to configure and control a URL filter.
- [NEURLFilterControlProvider](neurlfiltercontrolprovider.md): A protocol that defines an object that’s responsible for fetching pre-filter data.
- [NEURLFilterControlProviderConfiguration](neurlfiltercontrolproviderconfiguration.md): A class that defines app extension configurations for the URL Filter control provider app extension.

# NEURLFilter (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A class used to voluntarily validate URLs for apps that don’t use WebKit or the URL session API.

## Declaration

```objectivec
@interface NEURLFilter : NSObject
```

<a id="overview"></a>

## Overview

When using networking frameworks other than WebKit or Foundation’s [NSURLSession](../foundation/urlsession.md), use the `NEURLFilter` API to evaluate URLs before potentially connecting to a restricted or malicious site. Call the class method [verdict(for:)](neurlfilter/verdict%28for_%29.md) to check a URL and honor the “allow” or “deny” verdict. Don’t connect to any URL that receives a “deny” verdict.

## Topics

### Evaluating a URL

- [verdictForURL:completionHandler:](neurlfilter/verdictforurl_completionhandler_.md): Determines if accessing the specified URL is allowed or denied.
- [NEURLFilterVerdict](neurlfilter/verdict.md): A verdict returned by a URL filter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
