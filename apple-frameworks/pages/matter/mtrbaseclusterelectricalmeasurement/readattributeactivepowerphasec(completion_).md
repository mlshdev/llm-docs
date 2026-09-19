> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/readattributeactivepowerphasec(completion:)

# readAttributeActivePowerPhaseC(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This attribute is deprecated

## Declaration

```swift
func readAttributeActivePowerPhaseC(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeActivePowerPhaseC() async throws -> NSNumber
```

# readAttributeActivePowerPhaseCWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This attribute is deprecated

## Declaration

```objectivec
- (void) readAttributeActivePowerPhaseCWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
