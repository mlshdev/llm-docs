> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkobjecttype/audiogramsampletype()

# audiogramSampleType() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an audiogram sample type.

## Declaration

```swift
class func audiogramSampleType() -> HKAudiogramSampleType
```

<a id="return-value"></a>

## Return Value

The shared [HKAudiogramSampleType](../hkaudiogramsampletype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKAudiogramSampleType](../hkaudiogramsampletype.md) concrete subclass. HealthKit uses this type to store and read audiogram data from the HealthKit store.

# audiogramSampleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an audiogram sample type.

## Declaration

```objectivec
+ (HKAudiogramSampleType *) audiogramSampleType;
```

<a id="return-value"></a>

## Return Value

The shared [HKAudiogramSampleType](../hkaudiogramsampletype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKAudiogramSampleType](../hkaudiogramsampletype.md) concrete subclass. HealthKit uses this type to store and read audiogram data from the HealthKit store.
