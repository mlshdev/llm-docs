> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbasicinformation/readattributecapabilityminima(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbasicinformation/readattributecapabilityminima(completion:))

# readAttributeCapabilityMinima(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeCapabilityMinima(completion: @escaping @Sendable (MTRBasicInformationClusterCapabilityMinimaStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeCapabilityMinima() async throws -> MTRBasicInformationClusterCapabilityMinimaStruct
```

# readAttributeCapabilityMinimaWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeCapabilityMinimaWithCompletion:(void (^)(MTRBasicInformationClusterCapabilityMinimaStruct *value, NSError *error)) completion;
```
