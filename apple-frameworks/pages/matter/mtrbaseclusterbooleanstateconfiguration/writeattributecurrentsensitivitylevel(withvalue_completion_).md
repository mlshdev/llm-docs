> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbooleanstateconfiguration/writeattributecurrentsensitivitylevel(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbooleanstateconfiguration/writeattributecurrentsensitivitylevel(withvalue:completion:))

# writeAttributeCurrentSensitivityLevel(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func writeAttributeCurrentSensitivityLevel(withValue value: NSNumber, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeCurrentSensitivityLevel(withValue value: NSNumber) async throws
```

# writeAttributeCurrentSensitivityLevelWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) writeAttributeCurrentSensitivityLevelWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
