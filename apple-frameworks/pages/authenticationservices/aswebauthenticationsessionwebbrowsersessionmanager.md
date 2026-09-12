> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager)

# ASWebAuthenticationSessionWebBrowserSessionManager (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 10.15+

A session manager that mediates sharing data between an app and a web browser.

## Declaration

```swift
class ASWebAuthenticationSessionWebBrowserSessionManager
```

<a id="overview"></a>

## Overview

You don’t create a session manager directly. Instead, use the [shared](aswebauthenticationsessionwebbrowsersessionmanager/shared.md) session manager to tell the system what instance within your web browser app handles authentication requests. Do this by assigning an instance of a class that adopts the [ASWebAuthenticationSessionWebBrowserSessionHandling](aswebauthenticationsessionwebbrowsersessionhandling.md) protocol to the shared manager’s [sessionHandler](aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler.md) property.

You can also use the shared managers [wasLaunchedByAuthenticationServices](aswebauthenticationsessionwebbrowsersessionmanager/waslaunchedbyauthenticationservices.md) property to determine if your web browser app was launched for the specific purpose of performing authentication.

## Topics

### Getting the Shared Manager

- [shared](aswebauthenticationsessionwebbrowsersessionmanager/shared.md): The shared manager for which a web browser acts as the session handler.

### Handling a Session Request

- [sessionHandler](aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler.md): A handler that a web browser provides to handle session requests from an app.
- [ASWebAuthenticationSessionWebBrowserSessionHandling](aswebauthenticationsessionwebbrowsersessionhandling.md): An interface that a session handler implements to handle login requests from an app.

### Querying the Manager

- [wasLaunchedByAuthenticationServices](aswebauthenticationsessionwebbrowsersessionmanager/waslaunchedbyauthenticationservices.md): A Boolean that indicates whether the session was launched by authentication services.

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

### Web authentication sessions

- [Authenticating a User Through a Web Service](authenticating-a-user-through-a-web-service.md): Use a web authentication session to authenticate a user in your app.
- [Securing Logins with iCloud Keychain Verification Codes](securing-logins-with-icloud-keychain-verification-codes.md): Use time-based codes generated on-device for a secure authentication experience.
- [ASWebAuthenticationSession](aswebauthenticationsession.md): A session that an app uses to authenticate a user through a web service.
- [WebAuthenticationSession](webauthenticationsession.md): A SwiftUI environment value that views use to authenticate someone using a web service.
- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md): Extend your web browser app to handle web authentication requests from other apps.
- [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md): A collection of keys that a browser app uses to declare its ability to handle authentication requests from other apps.

# ASWebAuthenticationSessionWebBrowserSessionManager (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 10.15+

A session manager that mediates sharing data between an app and a web browser.

## Declaration

```objectivec
@interface ASWebAuthenticationSessionWebBrowserSessionManager : NSObject
```

<a id="overview"></a>

## Overview

You don’t create a session manager directly. Instead, use the [sharedManager](aswebauthenticationsessionwebbrowsersessionmanager/shared.md) session manager to tell the system what instance within your web browser app handles authentication requests. Do this by assigning an instance of a class that adopts the [ASWebAuthenticationSessionWebBrowserSessionHandling](aswebauthenticationsessionwebbrowsersessionhandling.md) protocol to the shared manager’s [sessionHandler](aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler.md) property.

You can also use the shared managers [wasLaunchedByAuthenticationServices](aswebauthenticationsessionwebbrowsersessionmanager/waslaunchedbyauthenticationservices.md) property to determine if your web browser app was launched for the specific purpose of performing authentication.

## Topics

### Getting the Shared Manager

- [sharedManager](aswebauthenticationsessionwebbrowsersessionmanager/shared.md): The shared manager for which a web browser acts as the session handler.

### Handling a Session Request

- [sessionHandler](aswebauthenticationsessionwebbrowsersessionmanager/sessionhandler.md): A handler that a web browser provides to handle session requests from an app.
- [ASWebAuthenticationSessionWebBrowserSessionHandling](aswebauthenticationsessionwebbrowsersessionhandling.md): An interface that a session handler implements to handle login requests from an app.

### Querying the Manager

- [wasLaunchedByAuthenticationServices](aswebauthenticationsessionwebbrowsersessionmanager/waslaunchedbyauthenticationservices.md): A Boolean that indicates whether the session was launched by authentication services.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Web authentication sessions

- [Authenticating a User Through a Web Service](authenticating-a-user-through-a-web-service.md): Use a web authentication session to authenticate a user in your app.
- [Securing Logins with iCloud Keychain Verification Codes](securing-logins-with-icloud-keychain-verification-codes.md): Use time-based codes generated on-device for a secure authentication experience.
- [ASWebAuthenticationSession](aswebauthenticationsession.md): A session that an app uses to authenticate a user through a web service.
- [Supporting Single Sign-On in a Web Browser App](supporting-single-sign-on-in-a-web-browser-app.md): Extend your web browser app to handle web authentication requests from other apps.
- [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md): A collection of keys that a browser app uses to declare its ability to handle authentication requests from other apps.
