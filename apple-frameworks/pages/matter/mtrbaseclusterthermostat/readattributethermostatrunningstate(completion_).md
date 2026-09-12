> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributethermostatrunningstate(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributethermostatrunningstate(completion:))

# readAttributeThermostatRunningState(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeThermostatRunningState(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeThermostatRunningState() async throws -> NSNumber
```

# readAttributeThermostatRunningStateWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeThermostatRunningStateWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
