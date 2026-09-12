> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/error-dictionary-keys](https://developer.apple.com/documentation/cfnetwork/error-dictionary-keys)

# Error Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** CFNetwork  
**Kind:** API Collection

Networking-related keys that may be available in a `CFErrorRef` object’s `userInfo` dictionary.

<a id="overview"></a>

## Overview

Many network functions return `CFErrorRef` objects. When the error object’s domain is `kCFErrorDomainCFNetwork`, you can query the object for additional information.

For example:

```objc
if (CFEqual(CFErrorGetDomain(err), kCFErrorDomainCFNetwork) && CFErrorGetCode(err) == kCFHostErrorUnknown) {
 
    CFDictionaryRef userInfo = CFErrorCopyUserInfo(err);
 
    CFNumberRef number = (CFNumberRef) CFDictionaryGetValue(userInfo, kCFGetAddrInfoFailureKey);
 
    ...
 
    CFRelease(userInfo);
}
```

## Topics

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)

## See Also

### Errors

- [CFNetworkErrors](cfnetworkerrors.md): This enumeration contains error codes returned under the error domain [kCFErrorDomainCFNetwork](kcferrordomaincfnetwork.md).
- [Error Domains](error-domains.md): High-level error domains.
