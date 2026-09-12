> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroccupancysensing/writeattributeultrasonicunoccupiedtooccupieddelay(withvalue:params:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroccupancysensing/writeattributeultrasonicunoccupiedtooccupieddelay(withvalue:params:completion:))

# writeAttributeUltrasonicUnoccupiedToOccupiedDelay(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeUltrasonicUnoccupiedToOccupiedDelay(withValue value: NSNumber, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeUltrasonicUnoccupiedToOccupiedDelay(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeUltrasonicUnoccupiedToOccupiedDelayWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeUltrasonicUnoccupiedToOccupiedDelayWithValue:(NSNumber *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
