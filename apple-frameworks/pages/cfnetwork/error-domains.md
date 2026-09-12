> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/error-domains](https://developer.apple.com/documentation/cfnetwork/error-domains)

# Error Domains (Swift)

**Framework:** CFNetwork  
**Kind:** API Collection

High-level error domains.

<a id="overview"></a>

## Overview

To determine the source of an error, examine the `userInfo` dictionary included in the `CFError` object returned by a function call or call [CFErrorGetDomain(\_:)](../corefoundation/cferrorgetdomain%28__%29.md) and pass in the `CFError` object and the domain whose value you want to read.

## Topics

### Constants

- [kCFErrorDomainCFNetwork](kcferrordomaincfnetwork.md)
- [kCFErrorDomainWinSock](kcferrordomainwinsock.md)

## See Also

### Errors

- [CFNetworkErrors](cfnetworkerrors.md): This enumeration contains error codes returned under the error domain [kCFErrorDomainCFNetwork](kcferrordomaincfnetwork.md).
- [Error Dictionary Keys](error-dictionary-keys.md): Networking-related keys that may be available in a `CFErrorRef` object’s `userInfo` dictionary.

# Error Domains (Objective-C)

**Framework:** CFNetwork  
**Kind:** API Collection

High-level error domains.

<a id="overview"></a>

## Overview

To determine the source of an error, examine the `userInfo` dictionary included in the `CFError` object returned by a function call or call [CFErrorGetDomain](../corefoundation/cferrorgetdomain%28__%29.md) and pass in the `CFError` object and the domain whose value you want to read.

## Topics

### Constants

- [kCFErrorDomainCFNetwork](kcferrordomaincfnetwork.md)
- [kCFErrorDomainWinSock](kcferrordomainwinsock.md)

## See Also

### Errors

- [CFNetworkErrors](cfnetworkerrors.md): This enumeration contains error codes returned under the error domain [kCFErrorDomainCFNetwork](kcferrordomaincfnetwork.md).
- [Error Dictionary Keys](error-dictionary-keys.md): Networking-related keys that may be available in a `CFErrorRef` object’s `userInfo` dictionary.
