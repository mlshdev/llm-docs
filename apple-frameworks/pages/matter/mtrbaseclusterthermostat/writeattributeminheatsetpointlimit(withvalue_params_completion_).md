> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/writeattributeminheatsetpointlimit(withvalue:params:completion:)

# writeAttributeMinHeatSetpointLimit(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeMinHeatSetpointLimit(withValue value: NSNumber, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeMinHeatSetpointLimit(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeMinHeatSetpointLimitWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeMinHeatSetpointLimitWithValue:(NSNumber *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
