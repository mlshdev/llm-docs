> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfsocksstatuscodekey](https://developer.apple.com/documentation/cfnetwork/kcfsocksstatuscodekey)

# kCFSOCKSStatusCodeKey (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCFSOCKSStatusCodeKey: CFString
```

<a id="Discussion"></a>

## Discussion

When a SOCKS error occurs, querying this key returns the last status code sent by the SOCKS server in response to the previous operation.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)

# kCFSOCKSStatusCodeKey (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kCFSOCKSStatusCodeKey;
```

<a id="Discussion"></a>

## Discussion

When a SOCKS error occurs, querying this key returns the last status code sent by the SOCKS server in response to the previous operation.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)
