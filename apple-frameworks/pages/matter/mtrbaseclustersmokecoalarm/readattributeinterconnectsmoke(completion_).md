> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustersmokecoalarm/readattributeinterconnectsmoke(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustersmokecoalarm/readattributeinterconnectsmoke(completion:))

# readAttributeInterconnectSmoke(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeInterconnectSmoke(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeInterconnectSmoke() async throws -> NSNumber
```

# readAttributeInterconnectSmokeAlarmWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeInterconnectSmokeAlarmWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
