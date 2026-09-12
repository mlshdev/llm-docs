> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterballastconfiguration/writeattributelampalarmmode(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterballastconfiguration/writeattributelampalarmmode(withvalue:completion:))

# writeAttributeLampAlarmMode(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeLampAlarmMode(withValue value: NSNumber, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeLampAlarmMode(withValue value: NSNumber) async throws
```

# writeAttributeLampAlarmModeWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeLampAlarmModeWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
