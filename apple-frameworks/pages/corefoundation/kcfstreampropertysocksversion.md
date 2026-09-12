> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfstreampropertysocksversion](https://developer.apple.com/documentation/corefoundation/kcfstreampropertysocksversion)

# kCFStreamPropertySOCKSVersion (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constant for the SOCKS version key.

## Declaration

```swift
let kCFStreamPropertySOCKSVersion: CFString
```

<a id="Discussion"></a>

## Discussion

Its value must be `kCFStreamSocketSOCKSVersion4` or `kCFStreamSocketSOCKSVersion5` to set SOCKS4 or SOCKS5, respectively. If this key is not present, SOCKS5 is used by default.

## See Also

### Constants

- [kCFStreamPropertySOCKSProxyHost](kcfstreampropertysocksproxyhost.md): Constant for the SOCKS proxy host key.
- [kCFStreamPropertySOCKSProxyPort](kcfstreampropertysocksproxyport.md): Constant for the SOCKS proxy host port key.
- [kCFStreamSocketSOCKSVersion4](kcfstreamsocketsocksversion4.md): Constant used in the `kCFStreamSockerSOCKSVersion` key to specify SOCKS4 as the SOCKS version for the stream.
- [kCFStreamSocketSOCKSVersion5](kcfstreamsocketsocksversion5.md): Constant used in the `kCFStreamSOCKSVersion` key to specify SOCKS5 as the SOCKS version for the stream.
- [kCFStreamPropertySOCKSUser](kcfstreampropertysocksuser.md): Constant for the key required to set a user name.
- [kCFStreamPropertySOCKSPassword](kcfstreampropertysockspassword.md): Constant for the key required to set a user’s password.

# kCFStreamPropertySOCKSVersion (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constant for the SOCKS version key.

## Declaration

```objectivec
extern CFStringRef const kCFStreamPropertySOCKSVersion;
```

<a id="Discussion"></a>

## Discussion

Its value must be `kCFStreamSocketSOCKSVersion4` or `kCFStreamSocketSOCKSVersion5` to set SOCKS4 or SOCKS5, respectively. If this key is not present, SOCKS5 is used by default.

## See Also

### Constants

- [kCFStreamPropertySOCKSProxyHost](kcfstreampropertysocksproxyhost.md): Constant for the SOCKS proxy host key.
- [kCFStreamPropertySOCKSProxyPort](kcfstreampropertysocksproxyport.md): Constant for the SOCKS proxy host port key.
- [kCFStreamSocketSOCKSVersion4](kcfstreamsocketsocksversion4.md): Constant used in the `kCFStreamSockerSOCKSVersion` key to specify SOCKS4 as the SOCKS version for the stream.
- [kCFStreamSocketSOCKSVersion5](kcfstreamsocketsocksversion5.md): Constant used in the `kCFStreamSOCKSVersion` key to specify SOCKS5 as the SOCKS version for the stream.
- [kCFStreamPropertySOCKSUser](kcfstreampropertysocksuser.md): Constant for the key required to set a user name.
- [kCFStreamPropertySOCKSPassword](kcfstreampropertysockspassword.md): Constant for the key required to set a user’s password.
