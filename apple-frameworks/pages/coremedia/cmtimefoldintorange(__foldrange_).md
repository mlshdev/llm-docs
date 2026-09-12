> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimefoldintorange(_:foldrange:)](https://developer.apple.com/documentation/coremedia/cmtimefoldintorange(_:foldrange:))

# CMTimeFoldIntoRange(\_:foldRange:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Folds a time into a time range.

## Declaration

```swift
func CMTimeFoldIntoRange(_ time: CMTime, foldRange: CMTimeRange) -> CMTime
```

## Parameters

- `time`: The time to fold.
- `foldRange`: The time range into which to fold the time.

<a id="return-value"></a>

## Return Value

A time that represents the translated duration.

## See Also

### Functions

- [CMVideoFormatDescriptionGetHEVCParameterSetAtIndex(\_:parameterSetIndex:parameterSetPointerOut:parameterSetSizeOut:parameterSetCountOut:nalUnitHeaderLengthOut:)](cmvideoformatdescriptiongethevcparametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set contained in an HEVC (H.265) format description.

# CMTimeFoldIntoRange (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Folds a time into a time range.

## Declaration

```objectivec
extern CMTime CMTimeFoldIntoRange(CMTime time, CMTimeRange foldRange);
```

## Parameters

- `time`: The time to fold.
- `foldRange`: The time range into which to fold the time.

<a id="return-value"></a>

## Return Value

A time that represents the translated duration.

## See Also

### Functions

- [CMVideoFormatDescriptionGetHEVCParameterSetAtIndex](cmvideoformatdescriptiongethevcparametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set contained in an HEVC (H.265) format description.
