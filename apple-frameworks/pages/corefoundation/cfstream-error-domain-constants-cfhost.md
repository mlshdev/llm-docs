> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstream-error-domain-constants-cfhost](https://developer.apple.com/documentation/corefoundation/cfstream-error-domain-constants-cfhost)

# CFStream Error Domain Constants (CFHost) (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Defines constants for values returned in the domain field of the `CFStreamError` structure.

<a id="overview"></a>

## Overview

These constants indicate how the error code in the `error` field in the [CFStreamError](cfstreamerror.md) structure should be interpreted.

## Topics

### Constants

- [kCFStreamErrorDomainNetDB](../cfnetwork/kcfstreamerrordomainnetdb.md): The error code is an error code defined in `netdb.h`.
- [kCFStreamErrorDomainNetServices](../cfnetwork/kcfstreamerrordomainnetservices.md): The error code is a `CFNetService` error code. For details, see the [CFNetServicesError](../cfnetwork/cfnetserviceserror.md) enumeration.
- [kCFStreamErrorDomainMach](../cfnetwork/kcfstreamerrordomainmach.md): The error code is a Mach error code defined in `mach/error.h`.
- [kCFStreamErrorDomainFTP](../cfnetwork/kcfstreamerrordomainftp.md): The error code is an FTP error code.
- [kCFStreamErrorDomainHTTP](../cfnetwork/kcfstreamerrordomainhttp.md): The error code is an HTTP error code.
- [kCFStreamErrorDomainSystemConfiguration](../cfnetwork/kcfstreamerrordomainsystemconfiguration.md): The error code is a system configuration error code as defined in `System/ConfigurationSystemConfiguration.h`.
- [kCFStreamErrorDomainWinSock](../cfnetwork/kcfstreamerrordomainwinsock.md): When running CFNetwork code on Windows, this domain returns error codes associated with the underlying TCP/IP stack. You should also note that non-networking errors such as `ENOMEM` are delivered through the POSIX domain. See the header `winsock2.h` for relevant error codes.
- [kCFStreamErrorDomainSOCKS](kcfstreamerrordomainsocks.md): The error code is a SOCKS proxy error.
- [kCFStreamErrorDomainSSL](kcfstreamerrordomainssl.md): The error code is an SSL error code as defined in `Security/SecureTransport.h`.

## See Also

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [Secure Sockets (SOCKS) Errors](../cfnetwork/1518266-secure-sockets-socks-errors.md): Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.
- [CFStreamEventType](cfstreameventtype.md): Defines constants for stream-related events.
- [Stream Properties](stream-properties.md): Stream property names that can be set or copied.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.

# CFStream Error Domain Constants (CFHost) (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Defines constants for values returned in the domain field of the `CFStreamError` structure.

<a id="overview"></a>

## Overview

These constants indicate how the error code in the `error` field in the [CFStreamError](cfstreamerror.md) structure should be interpreted.

## Topics

### Constants

- [kCFStreamErrorDomainNetDB](../cfnetwork/kcfstreamerrordomainnetdb.md): The error code is an error code defined in `netdb.h`.
- [kCFStreamErrorDomainNetServices](../cfnetwork/kcfstreamerrordomainnetservices.md): The error code is a `CFNetService` error code. For details, see the [CFNetServicesError](../cfnetwork/cfnetserviceserror.md) enumeration.
- [kCFStreamErrorDomainMach](../cfnetwork/kcfstreamerrordomainmach.md): The error code is a Mach error code defined in `mach/error.h`.
- [kCFStreamErrorDomainFTP](../cfnetwork/kcfstreamerrordomainftp.md): The error code is an FTP error code.
- [kCFStreamErrorDomainHTTP](../cfnetwork/kcfstreamerrordomainhttp.md): The error code is an HTTP error code.
- [kCFStreamErrorDomainSystemConfiguration](../cfnetwork/kcfstreamerrordomainsystemconfiguration.md): The error code is a system configuration error code as defined in `System/ConfigurationSystemConfiguration.h`.
- [kCFStreamErrorDomainWinSock](../cfnetwork/kcfstreamerrordomainwinsock.md): When running CFNetwork code on Windows, this domain returns error codes associated with the underlying TCP/IP stack. You should also note that non-networking errors such as `ENOMEM` are delivered through the POSIX domain. See the header `winsock2.h` for relevant error codes.
- [kCFStreamErrorDomainSOCKS](kcfstreamerrordomainsocks.md): The error code is a SOCKS proxy error.
- [kCFStreamErrorDomainSSL](kcfstreamerrordomainssl.md): The error code is an SSL error code as defined in `Security/SecureTransport.h`.

## See Also

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [CFStreamEventType](cfstreameventtype.md): Defines constants for stream-related events.
- [Stream Properties](stream-properties.md): Stream property names that can be set or copied.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.
