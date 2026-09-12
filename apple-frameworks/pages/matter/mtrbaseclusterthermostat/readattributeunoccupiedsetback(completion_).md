> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributeunoccupiedsetback(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributeunoccupiedsetback(completion:))

# readAttributeUnoccupiedSetback(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeUnoccupiedSetback(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeUnoccupiedSetback() async throws -> NSNumber
```

# readAttributeUnoccupiedSetbackWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeUnoccupiedSetbackWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
