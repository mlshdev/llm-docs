> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent(withvalue:completion:)

# writeAttributeUserMaximumChargeCurrent(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func writeAttributeUserMaximumChargeCurrent(withValue value: NSNumber, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeUserMaximumChargeCurrent(withValue value: NSNumber) async throws
```

# writeAttributeUserMaximumChargeCurrentWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) writeAttributeUserMaximumChargeCurrentWithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
