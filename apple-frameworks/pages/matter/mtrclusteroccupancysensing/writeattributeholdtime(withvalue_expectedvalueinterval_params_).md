> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusteroccupancysensing/writeattributeholdtime(withvalue:expectedvalueinterval:params:)

# writeAttributeHoldTime(withValue:expectedValueInterval:params:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func writeAttributeHoldTime(withValue dataValueDictionary: [String : Any], expectedValueInterval expectedValueIntervalMs: NSNumber, params: MTRWriteParams?)
```

# writeAttributeHoldTimeWithValue:expectedValueInterval:params: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) writeAttributeHoldTimeWithValue:(NSDictionary<NSString *,id> *) dataValueDictionary expectedValueInterval:(NSNumber *) expectedValueIntervalMs params:(MTRWriteParams *) params;
```
