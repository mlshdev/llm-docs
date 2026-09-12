> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterhepafiltermonitoring/writeattributelastchangedtime(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterhepafiltermonitoring/writeattributelastchangedtime(withvalue:completion:))

# writeAttributeLastChangedTime(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func writeAttributeLastChangedTime(withValue value: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeLastChangedTime(withValue value: NSNumber?) async throws
```

# writeAttributeLastChangedTimeWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) writeAttributeLastChangedTimeWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
