> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfreadstreamcreateforhttprequest(_:_:)](https://developer.apple.com/documentation/cfnetwork/cfreadstreamcreateforhttprequest(_:_:))

# CFReadStreamCreateForHTTPRequest(\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a read stream for a CFHTTP request message.

> Use NSURLSession API for http requests

## Declaration

```swift
func CFReadStreamCreateForHTTPRequest(_ alloc: CFAllocator?, _ request: CFHTTPMessage) -> Unmanaged<CFReadStream>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `request`: A CFHTTP request message whose body and headers have been set.

<a id="return-value"></a>

## Return Value

A new read stream, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates a read stream and associates it with the specified request. Automatic redirection is disabled by default. After creating the read stream, you can call [CFReadStreamGetError(\_:)](../corefoundation/cfreadstreamgeterror%28__%29.md) at any time to check the status of the stream. You may want to call `CFHTTPReadStreamSetRedirectsAutomatically` to enable automatic redirection, or `CFHTTPReadStreamSetProxy` to set the name and port number for a proxy. To serialize the request and send it, call [CFReadStreamOpen(\_:)](../corefoundation/cfreadstreamopen%28__%29.md).

If the body of the request is too long to keep in memory, call [CFReadStreamCreateForStreamedHTTPRequest(\_:\_:\_:)](cfreadstreamcreateforstreamedhttprequest%28______%29.md) instead of this function.

## See Also

### Streams

- [CFReadStreamCreateForStreamedHTTPRequest(\_:\_:\_:)](cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
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

# CFReadStreamCreateForHTTPRequest (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a read stream for a CFHTTP request message.

> Use NSURLSession API for http requests

## Declaration

```objectivec
extern CFReadStreamRefCFReadStreamCreateForHTTPRequest(CFAllocatorRef alloc, CFHTTPMessageRef request);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `request`: A CFHTTP request message whose body and headers have been set.

<a id="return-value"></a>

## Return Value

A new read stream, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates a read stream and associates it with the specified request. Automatic redirection is disabled by default. After creating the read stream, you can call [CFReadStreamGetError](../corefoundation/cfreadstreamgeterror%28__%29.md) at any time to check the status of the stream. You may want to call `CFHTTPReadStreamSetRedirectsAutomatically` to enable automatic redirection, or `CFHTTPReadStreamSetProxy` to set the name and port number for a proxy. To serialize the request and send it, call [CFReadStreamOpen](../corefoundation/cfreadstreamopen%28__%29.md).

If the body of the request is too long to keep in memory, call [CFReadStreamCreateForStreamedHTTPRequest](cfreadstreamcreateforstreamedhttprequest%28______%29.md) instead of this function.

## See Also

### Streams

- [CFReadStreamCreateForStreamedHTTPRequest](cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
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
