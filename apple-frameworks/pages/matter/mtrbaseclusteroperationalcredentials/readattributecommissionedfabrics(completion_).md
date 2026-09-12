> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalcredentials/readattributecommissionedfabrics(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/readattributecommissionedfabrics(completion:))

# readAttributeCommissionedFabrics(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeCommissionedFabrics(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeCommissionedFabrics() async throws -> NSNumber
```

# readAttributeCommissionedFabricsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeCommissionedFabricsWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
