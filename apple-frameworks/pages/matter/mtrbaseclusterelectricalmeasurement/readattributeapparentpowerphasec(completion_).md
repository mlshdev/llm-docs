> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalmeasurement/readattributeapparentpowerphasec(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/readattributeapparentpowerphasec(completion:))

# readAttributeApparentPowerPhaseC(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This attribute is deprecated

## Declaration

```swift
func readAttributeApparentPowerPhaseC(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeApparentPowerPhaseC() async throws -> NSNumber
```

# readAttributeApparentPowerPhaseCWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This attribute is deprecated

## Declaration

```objectivec
- (void) readAttributeApparentPowerPhaseCWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
