> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfstreampropertyhttpattemptpersistentconnection](https://developer.apple.com/documentation/cfnetwork/kcfstreampropertyhttpattemptpersistentconnection)

# kCFStreamPropertyHTTPAttemptPersistentConnection (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

> Use NSURLSession API for http requests

## Declaration

```swift
let kCFStreamPropertyHTTPAttemptPersistentConnection: CFString
```

<a id="Discussion"></a>

## Discussion

HTTP Attempt Persistent Connection property. The value of this property is a CFBoolean. If this property is set to `kCFBooleanTrue`, the HTTP stream looks for an appropriate existing persistent connection to use. If it cannot find one, the HTTP stream will try to create one.

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [CFReadStreamCreateForStreamedHTTPRequest(\_:\_:\_:)](cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
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

# kCFStreamPropertyHTTPAttemptPersistentConnection (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

> Use NSURLSession API for http requests

## Declaration

```objectivec
extern CFStringRef const kCFStreamPropertyHTTPAttemptPersistentConnection;
```

<a id="Discussion"></a>

## Discussion

HTTP Attempt Persistent Connection property. The value of this property is a CFBoolean. If this property is set to `kCFBooleanTrue`, the HTTP stream looks for an appropriate existing persistent connection to use. If it cannot find one, the HTTP stream will try to create one.

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [CFReadStreamCreateForStreamedHTTPRequest](cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
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
