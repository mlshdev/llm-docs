> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/additionalheaderfields](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/additionalheaderfields)

# additionalHeaderFields (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.4+ · macOS 14.4+

Additional headers to send when loading the initial URL.

## Declaration

```swift
var additionalHeaderFields: [String : String]? { get }
```

<a id="discussion"></a>

## Discussion

Apply these headers only to the initial page, and don’t overwrite any headers that the browser usually sends.

This example shows the call to the [begin(\_:)](../aswebauthenticationsessionwebbrowsersessionhandling/begin%28__%29.md) delegate method when a web browser receives a request from an app. This implementation iterates over the additional header fields from the app’s request and adds them to its own request.

```swift
func begin(_ request: ASWebAuthenticationSessionRequest!) {
    self.request = request

    let urlRequest = URLRequest(url: request.url)
    // Use the new fields on the URL request.
    for (header, value) in request.additionalHeaderFields {
        urlRequest.addValue(value, forHTTPHeaderField: header)
    }

    // Load the URL request.
}
```

> **Important**

> Your browser app needs to add `AdditionalHeaderFieldsAreSupported` with the value `YES` to the `ASWebAuthenticationSessionWebBrowserSupportCapabilities` dictionary in your app’s information property list to use this API. If the system doesn’t find this key in the default browser app, it sends the request to Safari instead.

## See Also

### Interpreting a request

- [url](url.md): The web address the browser should use to perform the authentication request.
- [shouldUseEphemeralSession](shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [uuid](uuid.md): A unique identifier for the request.

# additionalHeaderFields (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.4+ · macOS 14.4+

Additional headers to send when loading the initial URL.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSString *> * additionalHeaderFields;
```

<a id="discussion"></a>

## Discussion

Apply these headers only to the initial page, and don’t overwrite any headers that the browser usually sends.

This example shows the call to the [beginHandlingWebAuthenticationSessionRequest:](../aswebauthenticationsessionwebbrowsersessionhandling/begin%28__%29.md) delegate method when a web browser receives a request from an app. This implementation iterates over the additional header fields from the app’s request and adds them to its own request.

```swift
func begin(_ request: ASWebAuthenticationSessionRequest!) {
    self.request = request

    let urlRequest = URLRequest(url: request.url)
    // Use the new fields on the URL request.
    for (header, value) in request.additionalHeaderFields {
        urlRequest.addValue(value, forHTTPHeaderField: header)
    }

    // Load the URL request.
}
```

> **Important**

> Your browser app needs to add `AdditionalHeaderFieldsAreSupported` with the value `YES` to the `ASWebAuthenticationSessionWebBrowserSupportCapabilities` dictionary in your app’s information property list to use this API. If the system doesn’t find this key in the default browser app, it sends the request to Safari instead.

## See Also

### Interpreting a request

- [URL](url.md): The web address the browser should use to perform the authentication request.
- [shouldUseEphemeralSession](shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [UUID](uuid.md): A unique identifier for the request.
