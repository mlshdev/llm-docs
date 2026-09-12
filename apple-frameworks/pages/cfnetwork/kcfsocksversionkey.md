> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfsocksversionkey](https://developer.apple.com/documentation/cfnetwork/kcfsocksversionkey)

# kCFSOCKSVersionKey (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCFSOCKSVersionKey: CFString
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFSOCKSErrorUnsupportedServerVersion` is returned, querying this key returns the SOCKS version in use by the current connection.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)

# kCFSOCKSVersionKey (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kCFSOCKSVersionKey;
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFSOCKSErrorUnsupportedServerVersion` is returned, querying this key returns the SOCKS version in use by the current connection.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
- [kCFFTPStatusCodeKey](kcfftpstatuscodekey.md)
