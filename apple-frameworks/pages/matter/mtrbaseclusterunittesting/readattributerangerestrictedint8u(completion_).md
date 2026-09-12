> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/readattributerangerestrictedint8u(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/readattributerangerestrictedint8u(completion:))

# readAttributeRangeRestrictedInt8u(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeRangeRestrictedInt8u(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeRangeRestrictedInt8u() async throws -> NSNumber
```

# readAttributeRangeRestrictedInt8uWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeRangeRestrictedInt8uWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
