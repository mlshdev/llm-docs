> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhttpmessageappendbytes(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhttpmessageappendbytes(_:_:_:))

# CFHTTPMessageAppendBytes(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Appends data to a `CFHTTPMessage` object.

## Declaration

```swift
func CFHTTPMessageAppendBytes(_ message: CFHTTPMessage, _ newBytes: UnsafePointer<UInt8>, _ numBytes: CFIndex) -> Bool
```

## Parameters

- `message`: The message to modify.
- `newBytes`: A reference to the data to append.
- `numBytes`: The length of the data pointed to by `newBytes`.

<a id="return-value"></a>

## Return Value

`TRUE` if the data was successfully appended, otherwise `FALSE`.

<a id="Discussion"></a>

## Discussion

This function appends the data specified by `newBytes` to the specified message object which was created by calling [CFHTTPMessageCreateEmpty(\_:\_:)](cfhttpmessagecreateempty%28____%29.md). The data is an incoming serialized HTTP request or response received from a client or a server. While appending the data, this function deserializes it, removes any HTTP-based formatting that the message may contain, and stores the message in the message object. You can then call [CFHTTPMessageCopyVersion(\_:)](cfhttpmessagecopyversion%28__%29.md), [CFHTTPMessageCopyBody(\_:)](cfhttpmessagecopybody%28__%29.md), [CFHTTPMessageCopyHeaderFieldValue(\_:\_:)](cfhttpmessagecopyheaderfieldvalue%28____%29.md), and [CFHTTPMessageCopyAllHeaderFields(\_:)](cfhttpmessagecopyallheaderfields%28__%29.md) to get the message’s HTTP version, the message’s body, a specific header field, and all of the message’s headers, respectively.

If the message is a request, you can also call [CFHTTPMessageCopyRequestURL(\_:)](cfhttpmessagecopyrequesturl%28__%29.md) and [CFHTTPMessageCopyRequestMethod(\_:)](cfhttpmessagecopyrequestmethod%28__%29.md) to get the message’s request URL and request method, respectively.

If the message is a response, you can also call [CFHTTPMessageGetResponseStatusCode(\_:)](cfhttpmessagegetresponsestatuscode%28__%29.md) and [CFHTTPMessageCopyResponseStatusLine(\_:)](cfhttpmessagecopyresponsestatusline%28__%29.md) to get the message’s status code and status line, respectively.

## See Also

### HTTP Messages

- [CFHTTPMessage](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication(\_:\_:\_:\_:\_:\_:)](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
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
- [CFHTTPMessageCreateRequest(\_:\_:\_:\_:)](cfhttpmessagecreaterequest%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP request.

# CFHTTPMessageAppendBytes (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Appends data to a `CFHTTPMessage` object.

## Declaration

```objectivec
extern Boolean CFHTTPMessageAppendBytes(CFHTTPMessageRef message, const UInt8 *newBytes, CFIndex numBytes);
```

## Parameters

- `message`: The message to modify.
- `newBytes`: A reference to the data to append.
- `numBytes`: The length of the data pointed to by `newBytes`.

<a id="return-value"></a>

## Return Value

`TRUE` if the data was successfully appended, otherwise `FALSE`.

<a id="Discussion"></a>

## Discussion

This function appends the data specified by `newBytes` to the specified message object which was created by calling [CFHTTPMessageCreateEmpty](cfhttpmessagecreateempty%28____%29.md). The data is an incoming serialized HTTP request or response received from a client or a server. While appending the data, this function deserializes it, removes any HTTP-based formatting that the message may contain, and stores the message in the message object. You can then call [CFHTTPMessageCopyVersion](cfhttpmessagecopyversion%28__%29.md), [CFHTTPMessageCopyBody](cfhttpmessagecopybody%28__%29.md), [CFHTTPMessageCopyHeaderFieldValue](cfhttpmessagecopyheaderfieldvalue%28____%29.md), and [CFHTTPMessageCopyAllHeaderFields](cfhttpmessagecopyallheaderfields%28__%29.md) to get the message’s HTTP version, the message’s body, a specific header field, and all of the message’s headers, respectively.

If the message is a request, you can also call [CFHTTPMessageCopyRequestURL](cfhttpmessagecopyrequesturl%28__%29.md) and [CFHTTPMessageCopyRequestMethod](cfhttpmessagecopyrequestmethod%28__%29.md) to get the message’s request URL and request method, respectively.

If the message is a response, you can also call [CFHTTPMessageGetResponseStatusCode](cfhttpmessagegetresponsestatuscode%28__%29.md) and [CFHTTPMessageCopyResponseStatusLine](cfhttpmessagecopyresponsestatusline%28__%29.md) to get the message’s status code and status line, respectively.

## See Also

### HTTP Messages

- [CFHTTPMessageRef](cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication](cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
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
- [CFHTTPMessageCreateRequest](cfhttpmessagecreaterequest%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP request.
