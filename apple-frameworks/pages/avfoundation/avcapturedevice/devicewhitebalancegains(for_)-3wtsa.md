> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicewhitebalancegains(for:)-3wtsa](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains(for:)-3wtsa)

# deviceWhiteBalanceGains(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-independent temperature and tint values to device-specific white balance RGB gain values.

## Declaration

```swift
func deviceWhiteBalanceGains(for tempAndTintValues: AVCaptureDevice.WhiteBalanceTemperatureAndTintValues) -> AVCaptureDevice.WhiteBalanceGains
```

## Parameters

- `tempAndTintValues`: An [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md) structure containing the temperature and tint values.

<a id="return-value"></a>

## Return Value

A fully populated [AVCaptureDevice.WhiteBalanceGains](whitebalancegains.md) structure containing device-specific RGB gain values.

<a id="Discussion"></a>

## Discussion

Call this method to convert device-independent temperature and tint values to device-specific RGB white balance gain values.

You may pass any temperature and tint values and corresponding white balance gains will be produced. Note, though, that some temperature and tint combinations yield out-of-range device RGB values that will cause an exception to be thrown if passed directly to [setWhiteBalanceModeLocked(with:completionHandler:)](setwhitebalancemodelocked%28with_completionhandler_%29.md).  Be sure to verify that the red, green, and blue gain values are within the range of \[`1.0` \- [maxWhiteBalanceGain](maxwhitebalancegain.md)\].

## See Also

### Performing conversions

- [chromaticityValues(for:)](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValues(for:)](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [AVCaptureDevice.WhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureDevice.WhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

# deviceWhiteBalanceGainsForTemperatureAndTintValues: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-independent temperature and tint values to device-specific white balance RGB gain values.

## Declaration

```objectivec
- (AVCaptureWhiteBalanceGains) deviceWhiteBalanceGainsForTemperatureAndTintValues:(AVCaptureWhiteBalanceTemperatureAndTintValues) tempAndTintValues;
```

## Parameters

- `tempAndTintValues`: An [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md) structure containing the temperature and tint values.

<a id="return-value"></a>

## Return Value

A fully populated [AVCaptureWhiteBalanceGains](whitebalancegains.md) structure containing device-specific RGB gain values.

<a id="Discussion"></a>

## Discussion

Call this method to convert device-independent temperature and tint values to device-specific RGB white balance gain values.

You may pass any temperature and tint values and corresponding white balance gains will be produced. Note, though, that some temperature and tint combinations yield out-of-range device RGB values that will cause an exception to be thrown if passed directly to [setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:](setwhitebalancemodelocked%28with_completionhandler_%29.md).  Be sure to verify that the red, green, and blue gain values are within the range of \[`1.0` \- [maxWhiteBalanceGain](maxwhitebalancegain.md)\].

## See Also

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForChromaticityValues:](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.
