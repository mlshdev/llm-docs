> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterballastconfiguration/readattributeintrinsicballastfactor(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterballastconfiguration/readattributeintrinsicballastfactor(completion:))

# readAttributeIntrinsicBallastFactor(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeIntrinsicBallastFactor(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeIntrinsicBallastFactor() async throws -> NSNumber
```

# readAttributeIntrinsicBallastFactorWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeIntrinsicBallastFactorWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
