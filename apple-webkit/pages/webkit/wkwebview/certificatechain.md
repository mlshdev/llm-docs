> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/certificatechain](https://developer.apple.com/documentation/webkit/wkwebview/certificatechain)

# certificateChain (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

An array of objects forming the certificate chain for the currently committed navigation.

> Use [serverTrust](servertrust.md) instead.

## Declaration

```swift
var certificateChain: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

Each item in the array is a [SecCertificate](https://developer.apple.com/documentation/security/seccertificate) object.

## See Also

### Deprecated

- [closeAllMediaPresentations()](closeallmediapresentations%28%29.md): Deprecated.
- [loadSimulatedRequest(\_:with:responseData:)](loadsimulatedrequest%28__with_responsedata_%29.md): Deprecated.
- [loadSimulatedRequest(\_:withResponseHTML:)](loadsimulatedrequest%28__withresponsehtml_%29.md): Deprecated.

# certificateChain (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

An array of objects forming the certificate chain for the currently committed navigation.

> Use [serverTrust](servertrust.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * certificateChain;
```

<a id="Discussion"></a>

## Discussion

Each item in the array is a [SecCertificateRef](https://developer.apple.com/documentation/security/seccertificate) object.

## See Also

### Deprecated

- [closeAllMediaPresentations](closeallmediapresentations%28%29.md): Deprecated.
- [loadSimulatedRequest:withResponse:responseData:](loadsimulatedrequest%28__with_responsedata_%29.md): Deprecated.
- [loadSimulatedRequest:withResponseHTMLString:](loadsimulatedrequest%28__withresponsehtml_%29.md): Deprecated.
