> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfwritestreamcreatewithftpurl(_:_:)](https://developer.apple.com/documentation/cfnetwork/cfwritestreamcreatewithftpurl(_:_:))

# CFWriteStreamCreateWithFTPURL(\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an FTP write stream.

> Use NSURLSessionAPI for ftp requests

## Declaration

```swift
func CFWriteStreamCreateWithFTPURL(_ alloc: CFAllocator?, _ ftpURL: CFURL) -> Unmanaged<CFWriteStream>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `ftpURL`: A pointer to a CFURL structure for the URL to be uploaded created by calling any of the `CFURLCreate` functions, such as `CFURLCreateWithString`.

<a id="return-value"></a>

## Return Value

A new write stream, or `NULL` if the call failed. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates an FTP write stream for uploading data to an FTP URL. If the `ftpURL` parameter is created with the user name and password as part of the URL (such as `ftp://username:password@ftp.example.com`) then the user name and password will automatically be set in the `CFWriteStream`. Call [CFWriteStreamSetProperty(\_:\_:\_:)](../corefoundation/cfwritestreamsetproperty%28______%29.md) to set the steam’s properties, such as `kCFStreamPropertyFTPUserName` and `kCFStreamPropertyFTPPassword` to associate a user name and password with the stream that are used to log in when the stream is opened. See `Constants` for a description of all FTP stream properties.

After creating the write stream, you can call [CFWriteStreamGetStatus(\_:)](../corefoundation/cfwritestreamgetstatus%28__%29.md) at any time to check the status of the stream.

To initiate a connection with the FTP server, call [CFWriteStreamOpen(\_:)](../corefoundation/cfwritestreamopen%28__%29.md). If the URL specifies a directory, the open is immediately followed by the event `kCFStreamEventEndEncountered` (and the stream passes to the state `kCFStreamStatusAtEnd`). Once the stream reaches this state, the directory has been created. Intermediary directories are not created.

To write to the FTP stream, call [CFWriteStreamWrite(\_:\_:\_:)](../corefoundation/cfwritestreamwrite%28______%29.md).

To close a connection with the FTP server, call [CFWriteStreamClose(\_:)](../corefoundation/cfwritestreamclose%28__%29.md).

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
- [CFReadStreamCreateWithFTPURL(\_:\_:)](cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
- [kCFStreamPropertyFTPAttemptPersistentConnection](kcfstreampropertyftpattemptpersistentconnection.md): Deprecated.

# CFWriteStreamCreateWithFTPURL (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an FTP write stream.

> Use NSURLSessionAPI for ftp requests

## Declaration

```objectivec
extern CFWriteStreamRefCFWriteStreamCreateWithFTPURL(CFAllocatorRef alloc, CFURLRef ftpURL);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `ftpURL`: A pointer to a CFURL structure for the URL to be uploaded created by calling any of the `CFURLCreate` functions, such as `CFURLCreateWithString`.

<a id="return-value"></a>

## Return Value

A new write stream, or `NULL` if the call failed. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates an FTP write stream for uploading data to an FTP URL. If the `ftpURL` parameter is created with the user name and password as part of the URL (such as `ftp://username:password@ftp.example.com`) then the user name and password will automatically be set in the `CFWriteStream`. Call [CFWriteStreamSetProperty](../corefoundation/cfwritestreamsetproperty%28______%29.md) to set the steam’s properties, such as `kCFStreamPropertyFTPUserName` and `kCFStreamPropertyFTPPassword` to associate a user name and password with the stream that are used to log in when the stream is opened. See `Constants` for a description of all FTP stream properties.

After creating the write stream, you can call [CFWriteStreamGetStatus](../corefoundation/cfwritestreamgetstatus%28__%29.md) at any time to check the status of the stream.

To initiate a connection with the FTP server, call [CFWriteStreamOpen](../corefoundation/cfwritestreamopen%28__%29.md). If the URL specifies a directory, the open is immediately followed by the event `kCFStreamEventEndEncountered` (and the stream passes to the state `kCFStreamStatusAtEnd`). Once the stream reaches this state, the directory has been created. Intermediary directories are not created.

To write to the FTP stream, call [CFWriteStreamWrite](../corefoundation/cfwritestreamwrite%28______%29.md).

To close a connection with the FTP server, call [CFWriteStreamClose](../corefoundation/cfwritestreamclose%28__%29.md).

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
- [CFReadStreamCreateWithFTPURL](cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
- [kCFStreamPropertyFTPAttemptPersistentConnection](kcfstreampropertyftpattemptpersistentconnection.md): Deprecated.
