> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteridentify/readattributeidentifytype(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteridentify/readattributeidentifytype(completionhandler:))

# readAttributeIdentifyType(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeIdentifyTypeWithCompletion:

## Declaration

```swift
func readAttributeIdentifyType(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeIdentifyType() async throws -> NSNumber
```

# readAttributeIdentifyTypeWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeIdentifyTypeWithCompletion:

## Declaration

```objectivec
- (void) readAttributeIdentifyTypeWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
