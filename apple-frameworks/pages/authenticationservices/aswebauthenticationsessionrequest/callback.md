> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/callback](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/callback)

# callback (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.4+ · macOS 14.4+

The callback to listen for, which completes the request.

## Declaration

```swift
var callback: ASWebAuthenticationSession.Callback? { get }
```

<a id="discussion"></a>

## Discussion

You create a callback with the type methods [customScheme(\_:)](../aswebauthenticationsession/callback/customscheme%28__%29.md) or [https(host:path:)](../aswebauthenticationsession/callback/https%28host_path_%29.md).

Use this callback to check all main frame URLs that load during the request. When it matches, invoke [complete(withCallbackURL:)](complete%28withcallbackurl_%29.md) with that URL.

> **Important**

> Your browser app needs to add [CallbackURLMatchingIsSupported](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/callbackurlmatchingissupported.md) with the value `YES` to the [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md) dictionary in your app’s information property list to use this API. If the system doesn’t find this key in the default browser app, it sends the request to Safari instead.

## See Also

### Finishing a request

- [ASWebAuthenticationSession.Callback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [complete(withCallbackURL:)](complete%28withcallbackurl_%29.md): Indicates that the browser successfully completed the authentication attempt.
- [cancelWithError(\_:)](cancelwitherror%28__%29.md): Indicates that the browser canceled the authentication attempt.

# callback (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.4+ · macOS 14.4+

The callback to listen for, which completes the request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ASWebAuthenticationSessionCallback * callback;
```

<a id="discussion"></a>

## Discussion

You create a callback with the type methods [callbackWithCustomScheme:](../aswebauthenticationsession/callback/customscheme%28__%29.md) or [callbackWithHTTPSHost:path:](../aswebauthenticationsession/callback/https%28host_path_%29.md).

Use this callback to check all main frame URLs that load during the request. When it matches, invoke [completeWithCallbackURL:](complete%28withcallbackurl_%29.md) with that URL.

> **Important**

> Your browser app needs to add [CallbackURLMatchingIsSupported](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities/callbackurlmatchingissupported.md) with the value `YES` to the [ASWebAuthenticationSessionWebBrowserSupportCapabilities](../../bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md) dictionary in your app’s information property list to use this API. If the system doesn’t find this key in the default browser app, it sends the request to Safari instead.

## See Also

### Finishing a request

- [ASWebAuthenticationSessionCallback](../aswebauthenticationsession/callback.md): An object for evaluating navigation events in an authentication session.
- [completeWithCallbackURL:](complete%28withcallbackurl_%29.md): Indicates that the browser successfully completed the authentication attempt.
- [cancelWithError:](cancelwitherror%28__%29.md): Indicates that the browser canceled the authentication attempt.
