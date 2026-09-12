> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfgetaddrinfofailurekey](https://developer.apple.com/documentation/cfnetwork/kcfgetaddrinfofailurekey)

# kCFGetAddrInfoFailureKey (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCFGetAddrInfoFailureKey: CFString
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFHostErrorUnknown` is returned, this key returns the last error code returned by getaddrinfo in response to a DNS lookup. To interpret the results, look up the error code in `/usr/include/netdb.h`.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)

# kCFGetAddrInfoFailureKey (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kCFGetAddrInfoFailureKey;
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFHostErrorUnknown` is returned, this key returns the last error code returned by getaddrinfo in response to a DNS lookup. To interpret the results, look up the error code in `/usr/include/netdb.h`.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)
