> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/readattributerangerestrictedint16u(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/readattributerangerestrictedint16u(completion:))

# readAttributeRangeRestrictedInt16u(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeRangeRestrictedInt16u(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeRangeRestrictedInt16u() async throws -> NSNumber
```

# readAttributeRangeRestrictedInt16uWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeRangeRestrictedInt16uWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
