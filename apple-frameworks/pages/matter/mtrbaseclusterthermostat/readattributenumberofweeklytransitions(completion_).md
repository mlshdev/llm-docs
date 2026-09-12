> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributenumberofweeklytransitions(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributenumberofweeklytransitions(completion:))

# readAttributeNumberOfWeeklyTransitions(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeNumberOfWeeklyTransitions(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeNumberOfWeeklyTransitions() async throws -> NSNumber
```

# readAttributeNumberOfWeeklyTransitionsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeNumberOfWeeklyTransitionsWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
