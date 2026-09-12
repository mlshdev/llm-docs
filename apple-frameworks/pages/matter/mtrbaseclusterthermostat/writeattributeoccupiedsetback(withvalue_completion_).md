> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/writeattributeoccupiedsetback(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/writeattributeoccupiedsetback(withvalue:completion:))

# writeAttributeOccupiedSetback(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeOccupiedSetback(withValue value: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOccupiedSetback(withValue value: NSNumber?) async throws
```

# writeAttributeOccupiedSetbackWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeOccupiedSetbackWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
