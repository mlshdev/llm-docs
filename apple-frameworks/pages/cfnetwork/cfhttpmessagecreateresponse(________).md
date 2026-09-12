> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpmessagecreateresponse(_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpmessagecreateresponse(_:_:_:_:))

# CFHTTPMessageCreateResponse(\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a `CFHTTPMessage` object for an HTTP response.

## Declaration

```swift
func CFHTTPMessageCreateResponse(_ alloc: CFAllocator?, _ statusCode: CFIndex, _ statusDescription: CFString?, _ httpVersion: CFString) -> Unmanaged<CFHTTPMessage>
```

## Parameters

- `statusCode`: The status code for this message response. The status code can be any of the status codes defined in section 6.1.1 of RFC 2616.
- `statusDescription`: The description that corresponds to the status code. Pass NULL to use the standard description for the given status code, as found in RFC 2616.
- `httpVersion`: The HTTP version for this message response. Pass `kCFHTTPVersion1_0` or `kCFHTTPVersion1_1`.

<a id="return-value"></a>

## Return Value

A new `CFHTTPMessage` object, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function returns a `CFHTTPMessage` object that you can use to build an HTTP response. Continue building the response by calling[CFHTTPMessageSetBody(\_:\_:)](cfhttpmessagesetbody%28____%29.md) to set the message’s body. Call [CFHTTPMessageSetHeaderFieldValue(\_:\_:\_:)](cfhttpmessagesetheaderfieldvalue%28______%29.md) to set the message’s headers. Then call [CFHTTPMessageCopySerializedMessage(\_:)](cfhttpmessagecopyserializedmessage%28__%29.md) to make the message ready for transmission by serializing it.

## See Also

### HTTP Messages

- [CFHTTPMessage](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication(\_:\_:\_:\_:\_:\_:)](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes(\_:\_:\_:)](cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary(\_:\_:\_:\_:)](cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageApplyCredentials(\_:\_:\_:\_:\_:)](cfhttpmessageapplycredentials%28__________%29.md): Performs the authentication method specified by a `CFHTTPAuthentication` object.
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

# CFHTTPMessageCreateResponse (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a `CFHTTPMessage` object for an HTTP response.

## Declaration

```objectivec
extern CFHTTPMessageRefCFHTTPMessageCreateResponse(CFAllocatorRef alloc, CFIndex statusCode, CFStringRef statusDescription, CFStringRef httpVersion);
```

## Parameters

- `statusCode`: The status code for this message response. The status code can be any of the status codes defined in section 6.1.1 of RFC 2616.
- `statusDescription`: The description that corresponds to the status code. Pass NULL to use the standard description for the given status code, as found in RFC 2616.
- `httpVersion`: The HTTP version for this message response. Pass `kCFHTTPVersion1_0` or `kCFHTTPVersion1_1`.

<a id="return-value"></a>

## Return Value

A new `CFHTTPMessage` object, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function returns a `CFHTTPMessage` object that you can use to build an HTTP response. Continue building the response by calling[CFHTTPMessageSetBody](cfhttpmessagesetbody%28____%29.md) to set the message’s body. Call [CFHTTPMessageSetHeaderFieldValue](cfhttpmessagesetheaderfieldvalue%28______%29.md) to set the message’s headers. Then call [CFHTTPMessageCopySerializedMessage](cfhttpmessagecopyserializedmessage%28__%29.md) to make the message ready for transmission by serializing it.

## See Also

### HTTP Messages

- [CFHTTPMessageRef](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes](cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary](cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageApplyCredentials](cfhttpmessageapplycredentials%28__________%29.md): Performs the authentication method specified by a `CFHTTPAuthentication` object.
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
