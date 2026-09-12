> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/keyupdatewithrequestflags:keyidentifier:message:completionhandler:](https://developer.apple.com/documentation/corenfc/nfciso15693tag/keyupdatewithrequestflags:keyidentifier:message:completionhandler:)

# keyUpdateWithRequestFlags:keyIdentifier:message:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) keyUpdateWithRequestFlags:(NFCISO15693RequestFlag) flags keyIdentifier:(NSInteger) keyIdentifier message:(NSData *) message completionHandler:(void (^)(NFCISO15693ResponseFlag responseFlag, NSData *response, NSError *error)) completionHandler;
```
