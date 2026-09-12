> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustericdmanagement/readattributemaximumcheckinbackoff(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustericdmanagement/readattributemaximumcheckinbackoff(completion:))

# readAttributeMaximumCheckInBackOff(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeMaximumCheckInBackOff(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMaximumCheckInBackOff() async throws -> NSNumber
```

# readAttributeMaximumCheckInBackOffWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeMaximumCheckInBackOffWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
