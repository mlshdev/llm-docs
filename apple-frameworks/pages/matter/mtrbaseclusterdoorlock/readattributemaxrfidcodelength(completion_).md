> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/readattributemaxrfidcodelength(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/readattributemaxrfidcodelength(completion:))

# readAttributeMaxRFIDCodeLength(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeMaxRFIDCodeLength(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMaxRFIDCodeLength() async throws -> NSNumber
```

# readAttributeMaxRFIDCodeLengthWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeMaxRFIDCodeLengthWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
