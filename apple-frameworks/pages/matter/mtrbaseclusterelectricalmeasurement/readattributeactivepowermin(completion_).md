> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalmeasurement/readattributeactivepowermin(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/readattributeactivepowermin(completion:))

# readAttributeActivePowerMin(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This attribute is deprecated

## Declaration

```swift
func readAttributeActivePowerMin(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeActivePowerMin() async throws -> NSNumber
```

# readAttributeActivePowerMinWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This attribute is deprecated

## Declaration

```objectivec
- (void) readAttributeActivePowerMinWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
