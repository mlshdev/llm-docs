> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwindowcovering/readattributetargetpositiontiltpercent100ths(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwindowcovering/readattributetargetpositiontiltpercent100ths(completion:))

# readAttributeTargetPositionTiltPercent100ths(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeTargetPositionTiltPercent100ths(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeTargetPositionTiltPercent100ths() async throws -> NSNumber
```

# readAttributeTargetPositionTiltPercent100thsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeTargetPositionTiltPercent100thsWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
