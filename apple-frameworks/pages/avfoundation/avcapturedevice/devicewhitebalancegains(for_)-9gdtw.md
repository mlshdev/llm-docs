> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicewhitebalancegains(for:)-9gdtw](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains(for:)-9gdtw)

# deviceWhiteBalanceGains(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-independent chromaticity values to device-specific white balance RGB gain values.

## Declaration

```swift
func deviceWhiteBalanceGains(for chromaticityValues: AVCaptureDevice.WhiteBalanceChromaticityValues) -> AVCaptureDevice.WhiteBalanceGains
```

## Parameters

- `chromaticityValues`: The chromaticity values for which to get white balance RGB gain values.

<a id="return-value"></a>

## Return Value

A structure that contains device-specific RGB gain values.

<a id="Discussion"></a>

## Discussion

This property specifies the current red, green, and blue gain values used for white balance. You can use the values to adjust color casts for a given scene.

Each channel supports values between `1.0` and -[maxWhiteBalanceGain](maxwhitebalancegain.md).

This property is key-value observable.

## See Also

### Performing conversions

- [chromaticityValues(for:)](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValues(for:)](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureDevice.WhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureDevice.WhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

# deviceWhiteBalanceGainsForChromaticityValues: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-independent chromaticity values to device-specific white balance RGB gain values.

## Declaration

```objectivec
- (AVCaptureWhiteBalanceGains) deviceWhiteBalanceGainsForChromaticityValues:(AVCaptureWhiteBalanceChromaticityValues) chromaticityValues;
```

## Parameters

- `chromaticityValues`: The chromaticity values for which to get white balance RGB gain values.

<a id="return-value"></a>

## Return Value

A structure that contains device-specific RGB gain values.

<a id="Discussion"></a>

## Discussion

This property specifies the current red, green, and blue gain values used for white balance. You can use the values to adjust color casts for a given scene.

Each channel supports values between `1.0` and -[maxWhiteBalanceGain](maxwhitebalancegain.md).

This property is key-value observable.

## See Also

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.
