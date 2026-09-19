> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/keyupdatewithrequestflags:keyidentifier:message:completionhandler:

# keyUpdateWithRequestFlags:keyIdentifier:message:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) keyUpdateWithRequestFlags:(NFCISO15693RequestFlag) flags keyIdentifier:(NSInteger) keyIdentifier message:(NSData *) message completionHandler:(void (^)(NFCISO15693ResponseFlag responseFlag, NSData *response, NSError *error)) completionHandler;
```
