> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributeabsminheatsetpointlimit(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributeabsminheatsetpointlimit(completion:))

# readAttributeAbsMinHeatSetpointLimit(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeAbsMinHeatSetpointLimit(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeAbsMinHeatSetpointLimit() async throws -> NSNumber
```

# readAttributeAbsMinHeatSetpointLimitWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeAbsMinHeatSetpointLimitWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
