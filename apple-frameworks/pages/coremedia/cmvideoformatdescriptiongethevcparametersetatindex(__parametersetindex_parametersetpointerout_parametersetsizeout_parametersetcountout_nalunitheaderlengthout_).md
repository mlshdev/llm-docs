> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmvideoformatdescriptiongethevcparametersetatindex(_:parametersetindex:parametersetpointerout:parametersetsizeout:parametersetcountout:nalunitheaderlengthout:)](https://developer.apple.com/documentation/coremedia/cmvideoformatdescriptiongethevcparametersetatindex(_:parametersetindex:parametersetpointerout:parametersetsizeout:parametersetcountout:nalunitheaderlengthout:))

# CMVideoFormatDescriptionGetHEVCParameterSetAtIndex(\_:parameterSetIndex:parameterSetPointerOut:parameterSetSizeOut:parameterSetCountOut:nalUnitHeaderLengthOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a parameter set contained in an HEVC (H.265) format description.

## Declaration

```swift
func CMVideoFormatDescriptionGetHEVCParameterSetAtIndex(_ videoDesc: CMFormatDescription, parameterSetIndex: Int, parameterSetPointerOut: UnsafeMutablePointer<UnsafePointer<UInt8>?>?, parameterSetSizeOut: UnsafeMutablePointer<Int>?, parameterSetCountOut: UnsafeMutablePointer<Int>?, nalUnitHeaderLengthOut NALUnitHeaderLengthOut: UnsafeMutablePointer<Int32>?) -> OSStatus
```

## See Also

### Functions

- [CMTimeFoldIntoRange(\_:foldRange:)](cmtimefoldintorange%28__foldrange_%29.md): Folds a time into a time range.

# CMVideoFormatDescriptionGetHEVCParameterSetAtIndex (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a parameter set contained in an HEVC (H.265) format description.

## Declaration

```objectivec
extern OSStatus CMVideoFormatDescriptionGetHEVCParameterSetAtIndex(CMFormatDescriptionRef videoDesc, size_t parameterSetIndex, const uint8_t **parameterSetPointerOut, size_t *parameterSetSizeOut, size_t *parameterSetCountOut, int *NALUnitHeaderLengthOut);
```

## See Also

### Functions

- [CMTimeFoldIntoRange](cmtimefoldintorange%28__foldrange_%29.md): Folds a time into a time range.
