> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributeoccupiedsetbackmax(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributeoccupiedsetbackmax(completion:))

# readAttributeOccupiedSetbackMax(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeOccupiedSetbackMax(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeOccupiedSetbackMax() async throws -> NSNumber
```

# readAttributeOccupiedSetbackMaxWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeOccupiedSetbackMaxWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
