> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestresponse(completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestresponse(completionhandler:))

# requestResponse(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Response command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func requestResponse(completionHandler: @escaping @Sendable (Int, (any Error)?) -> Void)
```

```swift
func requestResponse() async throws -> Int
```

# requestResponseWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Response command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) requestResponseWithCompletionHandler:(void (^)(NSInteger mode, NSError *error)) completionHandler;
```
