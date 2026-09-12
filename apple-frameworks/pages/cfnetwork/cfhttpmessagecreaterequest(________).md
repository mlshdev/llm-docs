> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpmessagecreaterequest(_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpmessagecreaterequest(_:_:_:_:))

# CFHTTPMessageCreateRequest(\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a `CFHTTPMessage` object for an HTTP request.

## Declaration

```swift
func CFHTTPMessageCreateRequest(_ alloc: CFAllocator?, _ requestMethod: CFString, _ url: CFURL, _ httpVersion: CFString) -> Unmanaged<CFHTTPMessage>
```

## Parameters

- `requestMethod`: The request method for the request. Use any of the request methods allowed by the HTTP version specified by `httpVersion`.
- `url`: The URL to which the request will be sent.
- `httpVersion`: The HTTP version for this message. Pass `kCFHTTPVersion1_0` or `kCFHTTPVersion1_1`.

<a id="return-value"></a>

## Return Value

A new `CFHTTPMessage` object, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function returns a `CFHTTPMessage` object that you can use to build an HTTP request. Continue building the request by calling[CFHTTPMessageSetBody(\_:\_:)](cfhttpmessagesetbody%28____%29.md) to set the message’s body. Call [CFHTTPMessageCopyHeaderFieldValue(\_:\_:)](cfhttpmessagecopyheaderfieldvalue%28____%29.md) to set the message’s headers.

If you are using a `CFReadStream` object to send the message, call [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfreadstreamcreateforhttprequest%28____%29.md) to create a read stream for the request. If you are not using `CFReadStream`, call [CFHTTPMessageCopySerializedMessage(\_:)](cfhttpmessagecopyserializedmessage%28__%29.md) to make the message ready for transmission by serializing it.

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

# CFHTTPMessageCreateRequest (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a `CFHTTPMessage` object for an HTTP request.

## Declaration

```objectivec
extern CFHTTPMessageRefCFHTTPMessageCreateRequest(CFAllocatorRef alloc, CFStringRef requestMethod, CFURLRef url, CFStringRef httpVersion);
```

## Parameters

- `requestMethod`: The request method for the request. Use any of the request methods allowed by the HTTP version specified by `httpVersion`.
- `url`: The URL to which the request will be sent.
- `httpVersion`: The HTTP version for this message. Pass `kCFHTTPVersion1_0` or `kCFHTTPVersion1_1`.

<a id="return-value"></a>

## Return Value

A new `CFHTTPMessage` object, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function returns a `CFHTTPMessage` object that you can use to build an HTTP request. Continue building the request by calling[CFHTTPMessageSetBody](cfhttpmessagesetbody%28____%29.md) to set the message’s body. Call [CFHTTPMessageCopyHeaderFieldValue](cfhttpmessagecopyheaderfieldvalue%28____%29.md) to set the message’s headers.

If you are using a `CFReadStream` object to send the message, call [CFReadStreamCreateForHTTPRequest](cfreadstreamcreateforhttprequest%28____%29.md) to create a read stream for the request. If you are not using `CFReadStream`, call [CFHTTPMessageCopySerializedMessage](cfhttpmessagecopyserializedmessage%28__%29.md) to make the message ready for transmission by serializing it.

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
