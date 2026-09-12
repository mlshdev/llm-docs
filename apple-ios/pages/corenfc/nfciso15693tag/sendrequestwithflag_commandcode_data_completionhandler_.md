> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/sendrequestwithflag:commandcode:data:completionhandler:](https://developer.apple.com/documentation/corenfc/nfciso15693tag/sendrequestwithflag:commandcode:data:completionhandler:)

# sendRequestWithFlag:commandCode:data:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) sendRequestWithFlag:(NSInteger) flags commandCode:(NSInteger) commandCode data:(NSData *) data completionHandler:(void (^)(NFCISO15693ResponseFlag responseFlag, NSData *data, NSError *error)) completionHandler;
```
