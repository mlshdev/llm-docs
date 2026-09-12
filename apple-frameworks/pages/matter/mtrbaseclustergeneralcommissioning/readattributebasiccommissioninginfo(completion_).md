> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergeneralcommissioning/readattributebasiccommissioninginfo(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergeneralcommissioning/readattributebasiccommissioninginfo(completion:))

# readAttributeBasicCommissioningInfo(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeBasicCommissioningInfo(completion: @escaping @Sendable (MTRGeneralCommissioningClusterBasicCommissioningInfo?, (any Error)?) -> Void)
```

```swift
func readAttributeBasicCommissioningInfo() async throws -> MTRGeneralCommissioningClusterBasicCommissioningInfo
```

# readAttributeBasicCommissioningInfoWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeBasicCommissioningInfoWithCompletion:(void (^)(MTRGeneralCommissioningClusterBasicCommissioningInfo *value, NSError *error)) completion;
```
