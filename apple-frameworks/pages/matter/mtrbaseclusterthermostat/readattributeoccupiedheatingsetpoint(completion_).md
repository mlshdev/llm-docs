> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributeoccupiedheatingsetpoint(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributeoccupiedheatingsetpoint(completion:))

# readAttributeOccupiedHeatingSetpoint(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeOccupiedHeatingSetpoint(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeOccupiedHeatingSetpoint() async throws -> NSNumber
```

# readAttributeOccupiedHeatingSetpointWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeOccupiedHeatingSetpointWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
