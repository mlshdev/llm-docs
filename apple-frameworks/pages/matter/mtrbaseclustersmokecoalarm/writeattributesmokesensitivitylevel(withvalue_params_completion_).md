> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustersmokecoalarm/writeattributesmokesensitivitylevel(withvalue:params:completion:)

# writeAttributeSmokeSensitivityLevel(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func writeAttributeSmokeSensitivityLevel(withValue value: NSNumber, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeSmokeSensitivityLevel(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeSmokeSensitivityLevelWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) writeAttributeSmokeSensitivityLevelWithValue:(NSNumber *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
