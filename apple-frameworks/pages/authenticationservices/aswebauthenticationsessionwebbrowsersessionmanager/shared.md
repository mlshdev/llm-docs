> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager/shared](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager/shared)

# shared (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** macOS 10.15+

The shared manager for which a web browser acts as the session handler.

## Declaration

```swift
class var shared: ASWebAuthenticationSessionWebBrowserSessionManager { get }
```

<a id="Discussion"></a>

## Discussion

Use this singleton when supporting single sign-on (SSO) in a web browser app. Make the web browser adopt the [ASWebAuthenticationSessionWebBrowserSessionHandling](../aswebauthenticationsessionwebbrowsersessionhandling.md) protocol, and set it as the shared manager’s [sessionHandler](sessionhandler.md). This allows your browser app to receive and process [ASWebAuthenticationSessionRequest](../aswebauthenticationsessionrequest.md) instances from other apps.

# sharedManager (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** macOS 10.15+

The shared manager for which a web browser acts as the session handler.

## Declaration

```objectivec
@property (class, nonatomic, readonly) ASWebAuthenticationSessionWebBrowserSessionManager * sharedManager;
```

<a id="Discussion"></a>

## Discussion

Use this singleton when supporting single sign-on (SSO) in a web browser app. Make the web browser adopt the [ASWebAuthenticationSessionWebBrowserSessionHandling](../aswebauthenticationsessionwebbrowsersessionhandling.md) protocol, and set it as the shared manager’s [sessionHandler](sessionhandler.md). This allows your browser app to receive and process [ASWebAuthenticationSessionRequest](../aswebauthenticationsessionrequest.md) instances from other apps.
