> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfstreampropertysslcontext](https://developer.apple.com/documentation/cfnetwork/kcfstreampropertysslcontext)

# kCFStreamPropertySSLContext (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCFStreamPropertySSLContext: CFString
```

<a id="Discussion"></a>

## Discussion

The `SSLContextRef` object used for read and write operations on a stream.

Before opening a stream, you can copy the object from this property and configure it using the Secure Transport API. You can also set this property to specify a new `SSLContextRef` for a stream. The behavior depends on whether the stream has been opened and on whether an SSL context is associated with the stream, as follows:

- If the stream has not been opened, the specified object replaces any existing context, and is used in the initial stream handshake when the connection is opened.
- If the stream has been opened without SSL enabled, setting this property initiates an SSL handshake over the existing socket.
- After the initial SSL handshake occurs, changing the context object is unsupported.

If an SSL settings dictionary is set for the  `kCFStreamPropertySSLSettings` key, an `SSLContextRef` object is created internally and configured based on that dictionary.  However, if an `SSLContextRef` object is set afterwards, its configuration takes precedence over the previously configured context.

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
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

# kCFStreamPropertySSLContext (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kCFStreamPropertySSLContext;
```

<a id="Discussion"></a>

## Discussion

The `SSLContextRef` object used for read and write operations on a stream.

Before opening a stream, you can copy the object from this property and configure it using the Secure Transport API. You can also set this property to specify a new `SSLContextRef` for a stream. The behavior depends on whether the stream has been opened and on whether an SSL context is associated with the stream, as follows:

- If the stream has not been opened, the specified object replaces any existing context, and is used in the initial stream handshake when the connection is opened.
- If the stream has been opened without SSL enabled, setting this property initiates an SSL handshake over the existing socket.
- After the initial SSL handshake occurs, changing the context object is unsupported.

If an SSL settings dictionary is set for the  `kCFStreamPropertySSLSettings` key, an `SSLContextRef` object is created internally and configured based on that dictionary.  However, if an `SSLContextRef` object is set afterwards, its configuration takes precedence over the previously configured context.

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
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
