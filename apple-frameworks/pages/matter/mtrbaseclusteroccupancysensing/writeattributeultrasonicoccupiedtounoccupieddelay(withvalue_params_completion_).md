> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroccupancysensing/writeattributeultrasonicoccupiedtounoccupieddelay(withvalue:params:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroccupancysensing/writeattributeultrasonicoccupiedtounoccupieddelay(withvalue:params:completion:))

# writeAttributeUltrasonicOccupiedToUnoccupiedDelay(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeUltrasonicOccupiedToUnoccupiedDelay(withValue value: NSNumber, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeUltrasonicOccupiedToUnoccupiedDelay(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeUltrasonicOccupiedToUnoccupiedDelayWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeUltrasonicOccupiedToUnoccupiedDelayWithValue:(NSNumber *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
