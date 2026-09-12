> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfdnsservicefailurekey](https://developer.apple.com/documentation/cfnetwork/kcfdnsservicefailurekey)

# kCFDNSServiceFailureKey (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCFDNSServiceFailureKey: CFString
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFNetServicesErrorDNSServiceFailure` is returned, querying this key returns the last error returned by the DNS resolver libraries in response to the previous operation. To interpret the results, look up the error codes in `/usr/include/dns_sd.h` or [DNS Service Discovery C](../dnssd/dns-service-discovery-c.md).

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)

# kCFDNSServiceFailureKey (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kCFDNSServiceFailureKey;
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFNetServicesErrorDNSServiceFailure` is returned, querying this key returns the last error returned by the DNS resolver libraries in response to the previous operation. To interpret the results, look up the error codes in `/usr/include/dns_sd.h` or [DNS Service Discovery C](../dnssd/dns-service-discovery-c.md).

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)
