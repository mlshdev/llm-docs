> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/readattributelocalprogrammingfeatures(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/readattributelocalprogrammingfeatures(completion:))

# readAttributeLocalProgrammingFeatures(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeLocalProgrammingFeatures(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeLocalProgrammingFeatures() async throws -> NSNumber
```

# readAttributeLocalProgrammingFeaturesWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeLocalProgrammingFeaturesWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
