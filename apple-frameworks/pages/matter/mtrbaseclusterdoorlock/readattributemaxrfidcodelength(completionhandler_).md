> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/readattributemaxrfidcodelength(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/readattributemaxrfidcodelength(completionhandler:))

# readAttributeMaxRFIDCodeLength(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMaxRFIDCodeLengthWithCompletion:

## Declaration

```swift
func readAttributeMaxRFIDCodeLength(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMaxRFIDCodeLength() async throws -> NSNumber
```

# readAttributeMaxRFIDCodeLengthWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMaxRFIDCodeLengthWithCompletion:

## Declaration

```objectivec
- (void) readAttributeMaxRFIDCodeLengthWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
