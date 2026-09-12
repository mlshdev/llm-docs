> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/loadsimulatedrequest(_:withresponsehtml:)](https://developer.apple.com/documentation/webkit/wkwebview/loadsimulatedrequest(_:withresponsehtml:))

# loadSimulatedRequest(\_:withResponseHTML:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

> Use [loadSimulatedRequest(\_:responseHTML:)](loadsimulatedrequest%28__responsehtml_%29.md) instead.

## Declaration

```swift
func loadSimulatedRequest(_ request: URLRequest, withResponseHTML string: String) -> WKNavigation
```

## See Also

### Deprecated

- [certificateChain](certificatechain.md): Deprecated. An array of objects forming the certificate chain for the currently committed navigation.
- [closeAllMediaPresentations()](closeallmediapresentations%28%29.md): Deprecated.
- [loadSimulatedRequest(\_:with:responseData:)](loadsimulatedrequest%28__with_responsedata_%29.md): Deprecated.

# loadSimulatedRequest:withResponseHTMLString: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

> Use [loadSimulatedRequest:responseHTMLString:](loadsimulatedrequest%28__responsehtml_%29.md) instead.

## Declaration

```objectivec
- (WKNavigation *) loadSimulatedRequest:(NSURLRequest *) request withResponseHTMLString:(NSString *) string;
```

## See Also

### Deprecated

- [certificateChain](certificatechain.md): Deprecated. An array of objects forming the certificate chain for the currently committed navigation.
- [closeAllMediaPresentations](closeallmediapresentations%28%29.md): Deprecated.
- [loadSimulatedRequest:withResponse:responseData:](loadsimulatedrequest%28__with_responsedata_%29.md): Deprecated.
