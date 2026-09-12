> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsftppropertyuserloginkey](https://developer.apple.com/documentation/foundation/nsftppropertyuserloginkey)

# NSFTPPropertyUserLoginKey

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.2+ (deprecated in 10.4)

Key for the user login, returned as an `NSString` object.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
extern NSString * const NSFTPPropertyUserLoginKey;
```

<a id="Discussion"></a>

## Discussion

The default value for this key is “anonymous”.

## See Also

### Resource Property Keys

- [NSFTPPropertyActiveTransferModeKey](nsftppropertyactivetransfermodekey.md): Deprecated. Key for retrieving whether in active transfer mode, returned as a boolean wrapped in an `NSNumber` object.
- [NSFTPPropertyFTPProxy](nsftppropertyftpproxy.md): Deprecated. `NSDictionary` containing proxy information to use in place of proxy identified in `SystemConfiguration.framework`.
- [NSFTPPropertyFileOffsetKey](nsftppropertyfileoffsetkey.md): Deprecated. Key for retrieving the file offset, returned as an `NSNumber` object. The default value for this key is zero.
- [NSFTPPropertyUserPasswordKey](nsftppropertyuserpasswordkey.md): Deprecated. Key for the user password, returned as an `NSString` object.
- [NSHTTPPropertyErrorPageDataKey](nshttppropertyerrorpagedatakey.md): Deprecated. Key for retrieving an error page as an `NSData` object.
- [NSHTTPPropertyHTTPProxy](nshttppropertyhttpproxy.md): Deprecated. Key for retrieving the `NSDictionary` object containing proxy information to use in place of proxy identified in `SystemConfiguration.framework`.
- [NSHTTPPropertyRedirectionHeadersKey](nshttppropertyredirectionheaderskey.md): Deprecated. Key for retrieving the redirection headers as an `NSDictionary` object with each header value keyed to the header name.
- [NSHTTPPropertyServerHTTPVersionKey](nshttppropertyserverhttpversionkey.md): Deprecated. Key for retrieving the HTTP version as an `NSString` object containing the initial server status line up to the first space.
- [NSHTTPPropertyStatusCodeKey](nshttppropertystatuscodekey.md): Deprecated. Key for the status code, returned as an integer wrapped in an `NSNumber` object.
- [NSHTTPPropertyStatusReasonKey](nshttppropertystatusreasonkey.md): Deprecated. Key for the remainder of the HTTP status line following the status code, returned as an `NSString` object.
