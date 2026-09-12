> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfreadstreamcreateforstreamedhttprequest(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfreadstreamcreateforstreamedhttprequest(_:_:_:))

# CFReadStreamCreateForStreamedHTTPRequest(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.

> Use NSURLSession API for http requests

## Declaration

```swift
func CFReadStreamCreateForStreamedHTTPRequest(_ alloc: CFAllocator?, _ requestHeaders: CFHTTPMessage, _ requestBody: CFReadStream) -> Unmanaged<CFReadStream>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `requestHeaders`: A CFHTTP request header.
- `requestBody`: Read stream reference for the request body.

<a id="return-value"></a>

## Return Value

A new read stream, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates a read stream for the response to the `requestHeaders` plus `requestBody`. Call this function instead of [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfreadstreamcreateforhttprequest%28____%29.md) when the body of the request is so long that you do not want it to be resident in memory.

Because streams cannot be reset, read streams created this way cannot be enabled for autoredirection.

If the Content-Length header is set in `requestHeaders`, it is assumed that the length is correct and that `requestBody` will report end-of-stream after precisely Content-Length bytes have been read from it. If the Content-Length header is not set, the chunked transfer-encoding will be added to `requestHeaders`, and bytes read from `requestBody` will be transmitted chunked. The body of `requestHeaders` is ignored.

After creating the read stream, you can call [CFReadStreamGetError(\_:)](../corefoundation/cfreadstreamgeterror%28__%29.md) at any time to check the status of the stream. You may want to call `CFHTTPReadStreamSetProxy` to set the name and port number for a proxy. To serialize the request and send it, call [CFReadStreamOpen(\_:)](../corefoundation/cfreadstreamopen%28__%29.md).

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [kCFStreamPropertyHTTPAttemptPersistentConnection](kcfstreampropertyhttpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyHTTPFinalRequest](kcfstreampropertyhttpfinalrequest.md): Deprecated. HTTP Final Request property. A value of type CFHTTPMessage containing the final message transmitted by the stream after all modifications (including authentication, connection policy, redirects, and so on) have been made. This property cannot be set.
- [kCFStreamPropertyHTTPFinalURL](kcfstreampropertyhttpfinalurl.md): Deprecated. HTTP Final URL property. A value of type CFURL containing the final HTTP URL. This value differs from the URL in the original HTTP request if an autoredirection occurred. This property cannot be set.
- [kCFStreamPropertyHTTPProxy](kcfstreampropertyhttpproxy.md): Deprecated.
- [kCFStreamPropertyHTTPProxyHost](kcfstreampropertyhttpproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPProxyPort](kcfstreampropertyhttpproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPRequestBytesWrittenCount](kcfstreampropertyhttprequestbyteswrittencount.md): Deprecated.
- [kCFStreamPropertyHTTPResponseHeader](kcfstreampropertyhttpresponseheader.md): Deprecated. HTTP Response Header property. When copied by [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md), the header of an HTTP response message is returned.
- [kCFStreamPropertyHTTPSProxyHost](kcfstreampropertyhttpsproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPSProxyPort](kcfstreampropertyhttpsproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPShouldAutoredirect](kcfstreampropertyhttpshouldautoredirect.md): Deprecated. HTTP Should Auto Redirect property. Set this property to `kCFBooleanTrue` to enable autoredirection; set this property to `kCFBooleanFalse` to disable autoredirection.
- [CFWriteStreamCreateWithFTPURL(\_:\_:)](cfwritestreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP write stream.
- [CFReadStreamCreateWithFTPURL(\_:\_:)](cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
- [kCFStreamPropertyFTPAttemptPersistentConnection](kcfstreampropertyftpattemptpersistentconnection.md): Deprecated.

# CFReadStreamCreateForStreamedHTTPRequest (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.

> Use NSURLSession API for http requests

## Declaration

```objectivec
extern CFReadStreamRefCFReadStreamCreateForStreamedHTTPRequest(CFAllocatorRef alloc, CFHTTPMessageRef requestHeaders, CFReadStreamRef requestBody);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `requestHeaders`: A CFHTTP request header.
- `requestBody`: Read stream reference for the request body.

<a id="return-value"></a>

## Return Value

A new read stream, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates a read stream for the response to the `requestHeaders` plus `requestBody`. Call this function instead of [CFReadStreamCreateForHTTPRequest](cfreadstreamcreateforhttprequest%28____%29.md) when the body of the request is so long that you do not want it to be resident in memory.

Because streams cannot be reset, read streams created this way cannot be enabled for autoredirection.

If the Content-Length header is set in `requestHeaders`, it is assumed that the length is correct and that `requestBody` will report end-of-stream after precisely Content-Length bytes have been read from it. If the Content-Length header is not set, the chunked transfer-encoding will be added to `requestHeaders`, and bytes read from `requestBody` will be transmitted chunked. The body of `requestHeaders` is ignored.

After creating the read stream, you can call [CFReadStreamGetError](../corefoundation/cfreadstreamgeterror%28__%29.md) at any time to check the status of the stream. You may want to call `CFHTTPReadStreamSetProxy` to set the name and port number for a proxy. To serialize the request and send it, call [CFReadStreamOpen](../corefoundation/cfreadstreamopen%28__%29.md).

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [kCFStreamPropertyHTTPAttemptPersistentConnection](kcfstreampropertyhttpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyHTTPFinalRequest](kcfstreampropertyhttpfinalrequest.md): Deprecated. HTTP Final Request property. A value of type CFHTTPMessage containing the final message transmitted by the stream after all modifications (including authentication, connection policy, redirects, and so on) have been made. This property cannot be set.
- [kCFStreamPropertyHTTPFinalURL](kcfstreampropertyhttpfinalurl.md): Deprecated. HTTP Final URL property. A value of type CFURL containing the final HTTP URL. This value differs from the URL in the original HTTP request if an autoredirection occurred. This property cannot be set.
- [kCFStreamPropertyHTTPProxy](kcfstreampropertyhttpproxy.md): Deprecated.
- [kCFStreamPropertyHTTPProxyHost](kcfstreampropertyhttpproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPProxyPort](kcfstreampropertyhttpproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPRequestBytesWrittenCount](kcfstreampropertyhttprequestbyteswrittencount.md): Deprecated.
- [kCFStreamPropertyHTTPResponseHeader](kcfstreampropertyhttpresponseheader.md): Deprecated. HTTP Response Header property. When copied by [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md), the header of an HTTP response message is returned.
- [kCFStreamPropertyHTTPSProxyHost](kcfstreampropertyhttpsproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPSProxyPort](kcfstreampropertyhttpsproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPShouldAutoredirect](kcfstreampropertyhttpshouldautoredirect.md): Deprecated. HTTP Should Auto Redirect property. Set this property to `kCFBooleanTrue` to enable autoredirection; set this property to `kCFBooleanFalse` to disable autoredirection.
- [CFWriteStreamCreateWithFTPURL](cfwritestreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP write stream.
- [CFReadStreamCreateWithFTPURL](cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
- [kCFStreamPropertyFTPAttemptPersistentConnection](kcfstreampropertyftpattemptpersistentconnection.md): Deprecated.
