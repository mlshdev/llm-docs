> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroupkeymanagement/readattributemaxgroupkeysperfabric(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroupkeymanagement/readattributemaxgroupkeysperfabric(completion:))

# readAttributeMaxGroupKeysPerFabric(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeMaxGroupKeysPerFabric(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMaxGroupKeysPerFabric() async throws -> NSNumber
```

# readAttributeMaxGroupKeysPerFabricWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeMaxGroupKeysPerFabricWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
