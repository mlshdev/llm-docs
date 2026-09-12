> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/readbufferwithrequestflags:completionhandler:](https://developer.apple.com/documentation/corenfc/nfciso15693tag/readbufferwithrequestflags:completionhandler:)

# readBufferWithRequestFlags:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) readBufferWithRequestFlags:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NFCISO15693ResponseFlag responseFlag, NSData *data, NSError *error)) completionHandler;
```
