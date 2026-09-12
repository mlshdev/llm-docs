> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpmessagecopyallheaderfields(_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpmessagecopyallheaderfields(_:))

# CFHTTPMessageCopyAllHeaderFields(\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Gets all header fields from a `CFHTTPMessage` object.

## Declaration

```swift
func CFHTTPMessageCopyAllHeaderFields(_ message: CFHTTPMessage) -> Unmanaged<CFDictionary>?
```

## Parameters

- `message`: The message to examine.

<a id="return-value"></a>

## Return Value

A `CFDictionaryRef` object containing keys and values that are `CFStringRef` objects, where the key is the header fieldname and the dictionary value is the header field’s value. Returns `NULL` if the header fields could not be copied. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

HTTP headers are case insensitive. To simplify your code, certain header field names are canonicalized into their standard form. For example, if the server sends a `content-length` header, it is automatically adjusted to be `Content-Length`.

The returned dictionary of headers is configured to be case-preserving during the set operation (unless the key already exists with a different case), and case-insensitive when looking up keys.

For example, if you set the header `X-foo`, and then later set the header `X-Foo`, the dictionary’s key will be `X-foo`, but the value will taken from the `X-Foo` header.

## See Also

### HTTP Messages

- [CFHTTPMessage](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication(\_:\_:\_:\_:\_:\_:)](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes(\_:\_:\_:)](cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary(\_:\_:\_:\_:)](cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageApplyCredentials(\_:\_:\_:\_:\_:)](cfhttpmessageapplycredentials%28__________%29.md): Performs the authentication method specified by a `CFHTTPAuthentication` object.
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

# CFHTTPMessageCopyAllHeaderFields (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Gets all header fields from a `CFHTTPMessage` object.

## Declaration

```objectivec
extern CFDictionaryRefCFHTTPMessageCopyAllHeaderFields(CFHTTPMessageRef message);
```

## Parameters

- `message`: The message to examine.

<a id="return-value"></a>

## Return Value

A `CFDictionaryRef` object containing keys and values that are `CFStringRef` objects, where the key is the header fieldname and the dictionary value is the header field’s value. Returns `NULL` if the header fields could not be copied. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

HTTP headers are case insensitive. To simplify your code, certain header field names are canonicalized into their standard form. For example, if the server sends a `content-length` header, it is automatically adjusted to be `Content-Length`.

The returned dictionary of headers is configured to be case-preserving during the set operation (unless the key already exists with a different case), and case-insensitive when looking up keys.

For example, if you set the header `X-foo`, and then later set the header `X-Foo`, the dictionary’s key will be `X-foo`, but the value will taken from the `X-Foo` header.

## See Also

### HTTP Messages

- [CFHTTPMessageRef](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes](cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary](cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageApplyCredentials](cfhttpmessageapplycredentials%28__________%29.md): Performs the authentication method specified by a `CFHTTPAuthentication` object.
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
