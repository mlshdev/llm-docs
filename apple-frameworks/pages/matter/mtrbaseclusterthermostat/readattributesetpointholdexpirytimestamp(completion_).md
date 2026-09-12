> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributesetpointholdexpirytimestamp(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributesetpointholdexpirytimestamp(completion:))

# readAttributeSetpointHoldExpiryTimestamp(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeSetpointHoldExpiryTimestamp(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeSetpointHoldExpiryTimestamp() async throws -> NSNumber
```

# readAttributeSetpointHoldExpiryTimestampWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeSetpointHoldExpiryTimestampWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
