> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpowersource/readattributeactivebatchargefaults(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpowersource/readattributeactivebatchargefaults(completion:))

# readAttributeActiveBatChargeFaults(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeActiveBatChargeFaults(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeActiveBatChargeFaults() async throws -> [Any]
```

# readAttributeActiveBatChargeFaultsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeActiveBatChargeFaultsWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
