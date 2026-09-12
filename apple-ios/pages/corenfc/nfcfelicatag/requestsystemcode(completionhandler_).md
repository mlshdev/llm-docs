> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestsystemcode(completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestsystemcode(completionhandler:))

# requestSystemCode(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request System Code command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func requestSystemCode(completionHandler: @escaping @Sendable ([Data], (any Error)?) -> Void)
```

```swift
func requestSystemCode() async throws -> [Data]
```

# requestSystemCodeWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request System Code command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) requestSystemCodeWithCompletionHandler:(void (^)(NSArray<NSData *> *systemCodeList, NSError *error)) completionHandler;
```
