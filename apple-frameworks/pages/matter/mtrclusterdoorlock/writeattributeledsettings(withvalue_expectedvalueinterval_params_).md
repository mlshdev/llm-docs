> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterdoorlock/writeattributeledsettings(withvalue:expectedvalueinterval:params:)

# writeAttributeLEDSettings(withValue:expectedValueInterval:params:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
func writeAttributeLEDSettings(withValue dataValueDictionary: [String : Any], expectedValueInterval expectedValueIntervalMs: NSNumber, params: MTRWriteParams?)
```

# writeAttributeLEDSettingsWithValue:expectedValueInterval:params: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
- (void) writeAttributeLEDSettingsWithValue:(NSDictionary<NSString *,id> *) dataValueDictionary expectedValueInterval:(NSNumber *) expectedValueIntervalMs params:(MTRWriteParams *) params;
```
