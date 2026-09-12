> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder/discard()](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder/discard())

# discard() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Discards all previously collected data and invalidates the builder.

## Declaration

```swift
func discard()
```

## See Also

### Ending the Collection

- [finishSeries(metadata:completion:)](finishseries%28metadata_completion_%29.md): Finalizes the series and returns the resulting quantity samples.
- [finishSeries(metadata:endDate:completion:)](finishseries%28metadata_enddate_completion_%29.md): Finalizes the series with the provided end date, and returns the resulting quantity samples.

# discard (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Discards all previously collected data and invalidates the builder.

## Declaration

```objectivec
- (void) discard;
```

## See Also

### Ending the Collection

- [finishSeriesWithMetadata:completion:](finishseries%28metadata_completion_%29.md): Finalizes the series and returns the resulting quantity samples.
- [finishSeriesWithMetadata:endDate:completion:](finishseries%28metadata_enddate_completion_%29.md): Finalizes the series with the provided end date, and returns the resulting quantity samples.
