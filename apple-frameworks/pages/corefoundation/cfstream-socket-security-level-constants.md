> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstream-socket-security-level-constants](https://developer.apple.com/documentation/corefoundation/cfstream-socket-security-level-constants)

# CFStream Socket Security Level Constants (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Constants for setting the security level of a socket stream.

<a id="overview"></a>

## Overview

This enumeration defines the preferred constants for setting the security protocol for a socket stream pair when calling [CFReadStreamSetProperty(\_:\_:\_:)](cfreadstreamsetproperty%28______%29.md) or [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md).

## Topics

### Constants

- [kCFStreamSocketSecurityLevelNone](kcfstreamsocketsecuritylevelnone.md): Specifies that no security level be set.
- [kCFStreamSocketSecurityLevelSSLv2](kcfstreamsocketsecuritylevelsslv2.md): Deprecated. Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelSSLv3](kcfstreamsocketsecuritylevelsslv3.md): Deprecated. Specifies that SSL version 3 be set as the security protocol for a socket stream pair.
- [kCFStreamSocketSecurityLevelTLSv1](kcfstreamsocketsecurityleveltlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelNegotiatedSSL](kcfstreamsocketsecuritylevelnegotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.

## See Also

### Setting the Security Protocol

- [CFReadStreamSetProperty(\_:\_:\_:)](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.
- [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md): Sets the value of a property for a stream.

# CFStream Socket Security Level Constants (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Constants for setting the security level of a socket stream.

<a id="overview"></a>

## Overview

This enumeration defines the preferred constants for setting the security protocol for a socket stream pair when calling [CFReadStreamSetProperty](cfreadstreamsetproperty%28______%29.md) or [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md).

## Topics

### Constants

- [kCFStreamSocketSecurityLevelNone](kcfstreamsocketsecuritylevelnone.md): Specifies that no security level be set.
- [kCFStreamSocketSecurityLevelSSLv2](kcfstreamsocketsecuritylevelsslv2.md): Deprecated. Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelSSLv3](kcfstreamsocketsecuritylevelsslv3.md): Deprecated. Specifies that SSL version 3 be set as the security protocol for a socket stream pair.
- [kCFStreamSocketSecurityLevelTLSv1](kcfstreamsocketsecurityleveltlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelNegotiatedSSL](kcfstreamsocketsecuritylevelnegotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.

## See Also

### Setting the Security Protocol

- [CFReadStreamSetProperty](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.
- [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md): Sets the value of a property for a stream.
