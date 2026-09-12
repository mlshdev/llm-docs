> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/callback](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/callback)

# ASWebAuthenticationSession.Callback (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

An object for evaluating navigation events in an authentication session.

## Declaration

```swift
class Callback
```

<a id="overview"></a>

## Overview

When [ASWebAuthenticationSession](../aswebauthenticationsession.md) navigates to a matching URL, it passes the URL to the session completion handler.

> **Important**

> Your browser app needs to add [CallbackURLMatchingIsSupported](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/callbackurlmatchingissupported.md) with the value `YES` to the [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md) dictionary in your app’s information property list to use this API. If the system doesn’t find this key in the default browser app, it sends the request to Safari instead.

## Topics

### Creating callbacks

- [customScheme(\_:)](callback/customscheme%28__%29.md): Creates a callback object that matches against URLs with the given custom scheme.
- [https(host:path:)](callback/https%28host_path_%29.md): Creates a callback object that matches against HTTPS URLs with the given host and path.

### Evaluating URLs

- [matchesURL(\_:)](callback/matchesurl%28__%29.md): Checks whether a given URL matches the callback object.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a session

- [init(url:callback:completionHandler:)](init%28url_callback_completionhandler_%29-6nut7.md): Creates a web authentication session instance that uses a callback to evaluate a redirection URL.
- [ASWebAuthenticationSession.CompletionHandler](completionhandler.md): A completion handler for the web authentication session.

# ASWebAuthenticationSessionCallback (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

An object for evaluating navigation events in an authentication session.

## Declaration

```objectivec
@interface ASWebAuthenticationSessionCallback : NSObject
```

<a id="overview"></a>

## Overview

When [ASWebAuthenticationSession](../aswebauthenticationsession.md) navigates to a matching URL, it passes the URL to the session completion handler.

> **Important**

> Your browser app needs to add [CallbackURLMatchingIsSupported](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/callbackurlmatchingissupported.md) with the value `YES` to the [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md) dictionary in your app’s information property list to use this API. If the system doesn’t find this key in the default browser app, it sends the request to Safari instead.

## Topics

### Creating callbacks

- [callbackWithCustomScheme:](callback/customscheme%28__%29.md): Creates a callback object that matches against URLs with the given custom scheme.
- [callbackWithHTTPSHost:path:](callback/https%28host_path_%29.md): Creates a callback object that matches against HTTPS URLs with the given host and path.

### Evaluating URLs

- [matchesURL:](callback/matchesurl%28__%29.md): Checks whether a given URL matches the callback object.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Creating a session

- [initWithURL:callback:completionHandler:](init%28url_callback_completionhandler_%29-6nut7.md): Creates a web authentication session instance that uses a callback to evaluate a redirection URL.
- [ASWebAuthenticationSessionCompletionHandler](completionhandler.md): A completion handler for the web authentication session.
