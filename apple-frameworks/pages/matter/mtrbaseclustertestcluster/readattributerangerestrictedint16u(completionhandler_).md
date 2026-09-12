> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/readattributerangerestrictedint16u(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/readattributerangerestrictedint16u(completionhandler:))

# readAttributeRangeRestrictedInt16u(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeRangeRestrictedInt16uWithCompletion:

## Declaration

```swift
func readAttributeRangeRestrictedInt16u(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeRangeRestrictedInt16u() async throws -> NSNumber
```

# readAttributeRangeRestrictedInt16uWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeRangeRestrictedInt16uWithCompletion:

## Declaration

```objectivec
- (void) readAttributeRangeRestrictedInt16uWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
