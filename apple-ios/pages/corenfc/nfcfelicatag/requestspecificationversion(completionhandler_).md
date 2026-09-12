> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestspecificationversion(completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestspecificationversion(completionhandler:))

# requestSpecificationVersion(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Specification Version command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func requestSpecificationVersion(completionHandler: @escaping @Sendable (Int, Int, Data, Data, (any Error)?) -> Void)
```

```swift
func requestSpecificationVersion() async throws -> (Int, Int, Data, Data)
```

# requestSpecificationVersionWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Specification Version command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) requestSpecificationVersionWithCompletionHandler:(void (^)(NSInteger statusFlag1, NSInteger statusFlag2, NSData *basicVersion, NSData *optionVersion, NSError *error)) completionHandler;
```
