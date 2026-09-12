> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlevelcontrol/writeattributeontransitiontime(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlevelcontrol/writeattributeontransitiontime(withvalue:completion:))

# writeAttributeOnTransitionTime(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeOnTransitionTime(withValue value: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOnTransitionTime(withValue value: NSNumber?) async throws
```

# writeAttributeOnTransitionTimeWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeOnTransitionTimeWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
