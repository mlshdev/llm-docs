> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpm1concentrationmeasurement/readattributeuncertainty(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpm1concentrationmeasurement/readattributeuncertainty(completion:))

# readAttributeUncertainty(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeUncertainty(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeUncertainty() async throws -> NSNumber
```

# readAttributeUncertaintyWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeUncertaintyWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
