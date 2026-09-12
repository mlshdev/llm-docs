> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfftpstatuscodekey](https://developer.apple.com/documentation/cfnetwork/kcfftpstatuscodekey)

# kCFFTPStatusCodeKey (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCFFTPStatusCodeKey: CFString
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFFTPErrorUnexpectedStatusCode` is returned, querying this key returns the last status code sent by the FTP server in response to the previous operation.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)

# kCFFTPStatusCodeKey (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern CFStringRef const kCFFTPStatusCodeKey;
```

<a id="Discussion"></a>

## Discussion

If an error of type `kCFFTPErrorUnexpectedStatusCode` is returned, querying this key returns the last status code sent by the FTP server in response to the previous operation.

## See Also

### Constants

- [kCFURLErrorFailingURLErrorKey](kcfurlerrorfailingurlerrorkey.md): The URL that caused the load to fail as a `CFURLRef` object.
- [kCFURLErrorFailingURLStringErrorKey](kcfurlerrorfailingurlstringerrorkey.md): The URL that caused the load to fail as a `CFStringRef` object.
- [kCFGetAddrInfoFailureKey](kcfgetaddrinfofailurekey.md)
- [kCFSOCKSStatusCodeKey](kcfsocksstatuscodekey.md)
- [kCFSOCKSVersionKey](kcfsocksversionkey.md)
- [kCFSOCKSNegotiationMethodKey](kcfsocksnegotiationmethodkey.md)
- [kCFDNSServiceFailureKey](kcfdnsservicefailurekey.md)
