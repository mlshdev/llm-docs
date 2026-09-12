> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributeoccupiedsetbackmin(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributeoccupiedsetbackmin(completion:))

# readAttributeOccupiedSetbackMin(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeOccupiedSetbackMin(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeOccupiedSetbackMin() async throws -> NSNumber
```

# readAttributeOccupiedSetbackMinWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeOccupiedSetbackMinWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
