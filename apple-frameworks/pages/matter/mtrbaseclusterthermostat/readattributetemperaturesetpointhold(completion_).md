> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributetemperaturesetpointhold(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributetemperaturesetpointhold(completion:))

# readAttributeTemperatureSetpointHold(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeTemperatureSetpointHold(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeTemperatureSetpointHold() async throws -> NSNumber
```

# readAttributeTemperatureSetpointHoldWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeTemperatureSetpointHoldWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
