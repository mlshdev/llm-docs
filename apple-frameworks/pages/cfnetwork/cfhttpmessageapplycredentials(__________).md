> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpmessageapplycredentials(_:_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpmessageapplycredentials(_:_:_:_:_:))

# CFHTTPMessageApplyCredentials(\_:\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Performs the authentication method specified by a `CFHTTPAuthentication` object.

## Declaration

```swift
func CFHTTPMessageApplyCredentials(_ request: CFHTTPMessage, _ auth: CFHTTPAuthentication, _ username: CFString?, _ password: CFString?, _ error: UnsafeMutablePointer<CFStreamError>?) -> Bool
```

## Parameters

- `request`: Request for which the authentication method is to be performed.
- `auth`: A `CFHTTPAuthentication` object specifying the authentication method to perform.
- `username`: Username for performing the authentication.
- `password`: Password for performing the authentication.
- `error`: If an error occurs, upon return contains a [CFStreamError](../corefoundation/cfstreamerror.md) object that describes the error and the error’s domain. Pass `NULL` if you don’t want to receive error information.

<a id="return-value"></a>

## Return Value

`TRUE` if the authentication was successful, otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

This function performs the authentication method specified by `auth` on behalf of the request specified by `request` using the credentials specified by `username` and `password`. If, in addition to a username and password, you also need to specify an account domain, call [CFHTTPMessageApplyCredentialDictionary(\_:\_:\_:\_:)](cfhttpmessageapplycredentialdictionary%28________%29.md) instead of this function.

This function is appropriate for performing several authentication requests. If you only need to make a single authentication request, consider using [CFHTTPMessageAddAuthentication(\_:\_:\_:\_:\_:\_:)](cfhttpmessageaddauthentication%28____________%29.md) instead.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same `CFHTTPMessage` object at the same time.

## See Also

### HTTP Messages

- [CFHTTPMessage](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication(\_:\_:\_:\_:\_:\_:)](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes(\_:\_:\_:)](cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary(\_:\_:\_:\_:)](cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageCopyAllHeaderFields(\_:)](cfhttpmessagecopyallheaderfields%28__%29.md): Gets all header fields from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyBody(\_:)](cfhttpmessagecopybody%28__%29.md): Gets the body from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyHeaderFieldValue(\_:\_:)](cfhttpmessagecopyheaderfieldvalue%28____%29.md): Gets the value of a header field from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestMethod(\_:)](cfhttpmessagecopyrequestmethod%28__%29.md): Gets the request method from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestURL(\_:)](cfhttpmessagecopyrequesturl%28__%29.md): Gets the URL from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyResponseStatusLine(\_:)](cfhttpmessagecopyresponsestatusline%28__%29.md): Gets the status line from a `CFHTTPMessage` object.
- [CFHTTPMessageCopySerializedMessage(\_:)](cfhttpmessagecopyserializedmessage%28__%29.md): Serializes a CFHTTPMessage object.
- [CFHTTPMessageCopyVersion(\_:)](cfhttpmessagecopyversion%28__%29.md): Gets the HTTP version from a `CFHTTPMessage` object.
- [CFHTTPMessageCreateCopy(\_:\_:)](cfhttpmessagecreatecopy%28____%29.md): Gets a copy of a CFHTTPMessage object.
- [CFHTTPMessageCreateEmpty(\_:\_:)](cfhttpmessagecreateempty%28____%29.md): Creates and returns a new, empty `CFHTTPMessage` object.
- [CFHTTPMessageCreateRequest(\_:\_:\_:\_:)](cfhttpmessagecreaterequest%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP request.

# CFHTTPMessageApplyCredentials (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Performs the authentication method specified by a `CFHTTPAuthentication` object.

## Declaration

```objectivec
extern Boolean CFHTTPMessageApplyCredentials(CFHTTPMessageRef request, CFHTTPAuthenticationRef auth, CFStringRef username, CFStringRef password, CFStreamError *error);
```

## Parameters

- `request`: Request for which the authentication method is to be performed.
- `auth`: A `CFHTTPAuthentication` object specifying the authentication method to perform.
- `username`: Username for performing the authentication.
- `password`: Password for performing the authentication.
- `error`: If an error occurs, upon return contains a [CFStreamError](../corefoundation/cfstreamerror.md) object that describes the error and the error’s domain. Pass `NULL` if you don’t want to receive error information.

<a id="return-value"></a>

## Return Value

`TRUE` if the authentication was successful, otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

This function performs the authentication method specified by `auth` on behalf of the request specified by `request` using the credentials specified by `username` and `password`. If, in addition to a username and password, you also need to specify an account domain, call [CFHTTPMessageApplyCredentialDictionary](cfhttpmessageapplycredentialdictionary%28________%29.md) instead of this function.

This function is appropriate for performing several authentication requests. If you only need to make a single authentication request, consider using [CFHTTPMessageAddAuthentication](cfhttpmessageaddauthentication%28____________%29.md) instead.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe as long as another thread does not alter the same `CFHTTPMessage` object at the same time.

## See Also

### HTTP Messages

- [CFHTTPMessageRef](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes](cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary](cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageCopyAllHeaderFields](cfhttpmessagecopyallheaderfields%28__%29.md): Gets all header fields from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyBody](cfhttpmessagecopybody%28__%29.md): Gets the body from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyHeaderFieldValue](cfhttpmessagecopyheaderfieldvalue%28____%29.md): Gets the value of a header field from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestMethod](cfhttpmessagecopyrequestmethod%28__%29.md): Gets the request method from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestURL](cfhttpmessagecopyrequesturl%28__%29.md): Gets the URL from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyResponseStatusLine](cfhttpmessagecopyresponsestatusline%28__%29.md): Gets the status line from a `CFHTTPMessage` object.
- [CFHTTPMessageCopySerializedMessage](cfhttpmessagecopyserializedmessage%28__%29.md): Serializes a CFHTTPMessage object.
- [CFHTTPMessageCopyVersion](cfhttpmessagecopyversion%28__%29.md): Gets the HTTP version from a `CFHTTPMessage` object.
- [CFHTTPMessageCreateCopy](cfhttpmessagecreatecopy%28____%29.md): Gets a copy of a CFHTTPMessage object.
- [CFHTTPMessageCreateEmpty](cfhttpmessagecreateempty%28____%29.md): Creates and returns a new, empty `CFHTTPMessage` object.
- [CFHTTPMessageCreateRequest](cfhttpmessagecreaterequest%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP request.
