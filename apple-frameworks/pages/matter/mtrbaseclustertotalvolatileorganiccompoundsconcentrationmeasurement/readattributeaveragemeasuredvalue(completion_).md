> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertotalvolatileorganiccompoundsconcentrationmeasurement/readattributeaveragemeasuredvalue(completion:)

# readAttributeAverageMeasuredValue(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeAverageMeasuredValue(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeAverageMeasuredValue() async throws -> NSNumber
```

# readAttributeAverageMeasuredValueWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeAverageMeasuredValueWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
