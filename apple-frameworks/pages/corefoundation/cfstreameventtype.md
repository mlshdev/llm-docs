> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreameventtype](https://developer.apple.com/documentation/corefoundation/cfstreameventtype)

# CFStreamEventType (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines constants for stream-related events.

## Declaration

```swift
struct CFStreamEventType
```

<a id="overview"></a>

## Overview

This enumeration defines constants for stream-related events.

## Topics

### Constants

- [openCompleted](cfstreameventtype/opencompleted.md): The open has completed successfully.
- [hasBytesAvailable](cfstreameventtype/hasbytesavailable.md): The stream has bytes to be read.
- [canAcceptBytes](cfstreameventtype/canacceptbytes.md): The stream can accept bytes for writing.
- [errorOccurred](cfstreameventtype/erroroccurred.md): An error has occurred on the stream.
- [endEncountered](cfstreameventtype/endencountered.md): The end of the stream has been reached.

### Initializers

- [init(rawValue:)](cfstreameventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [CFStream Error Domain Constants (CFHost)](cfstream-error-domain-constants-cfhost.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [Secure Sockets (SOCKS) Errors](../cfnetwork/1518266-secure-sockets-socks-errors.md): Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.
- [Stream Properties](stream-properties.md): Stream property names that can be set or copied.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.

# CFStreamEventType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines constants for stream-related events.

## Declaration

```objectivec
enum CFStreamEventType : CFOptionFlags;
```

<a id="overview"></a>

## Overview

This enumeration defines constants for stream-related events.

## Topics

### Constants

- [kCFStreamEventNone](cfstreameventtype/kcfstreameventnone.md): No event has occurred.
- [kCFStreamEventOpenCompleted](cfstreameventtype/opencompleted.md): The open has completed successfully.
- [kCFStreamEventHasBytesAvailable](cfstreameventtype/hasbytesavailable.md): The stream has bytes to be read.
- [kCFStreamEventCanAcceptBytes](cfstreameventtype/canacceptbytes.md): The stream can accept bytes for writing.
- [kCFStreamEventErrorOccurred](cfstreameventtype/erroroccurred.md): An error has occurred on the stream.
- [kCFStreamEventEndEncountered](cfstreameventtype/endencountered.md): The end of the stream has been reached.

## See Also

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [CFStream Error Domain Constants (CFHost)](cfstream-error-domain-constants-cfhost.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [Stream Properties](stream-properties.md): Stream property names that can be set or copied.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.
