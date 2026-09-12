> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedgetmultipleblocksecuritystatuswithrequestflag:blockrange:completionhandler:](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedgetmultipleblocksecuritystatuswithrequestflag:blockrange:completionhandler:)

# extendedGetMultipleBlockSecurityStatusWithRequestFlag:blockRange:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) extendedGetMultipleBlockSecurityStatusWithRequestFlag:(NFCISO15693RequestFlag) flags blockRange:(NSRange) blockRange completionHandler:(void (^)(NSArray<NSNumber *> *securityStatus, NSError *error)) completionHandler;
```
