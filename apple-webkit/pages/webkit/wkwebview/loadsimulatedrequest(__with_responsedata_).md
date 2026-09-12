> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/loadsimulatedrequest(_:with:responsedata:)](https://developer.apple.com/documentation/webkit/wkwebview/loadsimulatedrequest(_:with:responsedata:))

# loadSimulatedRequest(\_:with:responseData:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

> Use [loadSimulatedRequest(\_:response:responseData:)](loadsimulatedrequest%28__response_responsedata_%29.md) instead.

## Declaration

```swift
func loadSimulatedRequest(_ request: URLRequest, with response: URLResponse, responseData data: Data) -> WKNavigation
```

## See Also

### Deprecated

- [certificateChain](certificatechain.md): Deprecated. An array of objects forming the certificate chain for the currently committed navigation.
- [closeAllMediaPresentations()](closeallmediapresentations%28%29.md): Deprecated.
- [loadSimulatedRequest(\_:withResponseHTML:)](loadsimulatedrequest%28__withresponsehtml_%29.md): Deprecated.

# loadSimulatedRequest:withResponse:responseData: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

> Use [loadSimulatedRequest:response:responseData:](loadsimulatedrequest%28__response_responsedata_%29.md) instead.

## Declaration

```objectivec
- (WKNavigation *) loadSimulatedRequest:(NSURLRequest *) request withResponse:(NSURLResponse *) response responseData:(NSData *) data;
```

## See Also

### Deprecated

- [certificateChain](certificatechain.md): Deprecated. An array of objects forming the certificate chain for the currently committed navigation.
- [closeAllMediaPresentations](closeallmediapresentations%28%29.md): Deprecated.
- [loadSimulatedRequest:withResponseHTMLString:](loadsimulatedrequest%28__withresponsehtml_%29.md): Deprecated.
