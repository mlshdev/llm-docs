> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/readattributesessionenergycharged(completion:)

# readAttributeSessionEnergyCharged(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeSessionEnergyCharged(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeSessionEnergyCharged() async throws -> NSNumber
```

# readAttributeSessionEnergyChargedWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeSessionEnergyChargedWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
