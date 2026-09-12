> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/chromaticityvalues(for:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/chromaticityvalues(for:))

# chromaticityValues(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-specific white balance RGB gain values to device-independent chromaticity values.

## Declaration

```swift
func chromaticityValues(for whiteBalanceGains: AVCaptureDevice.WhiteBalanceGains) -> AVCaptureDevice.WhiteBalanceChromaticityValues
```

## Parameters

- `whiteBalanceGains`: The white balance gain values. You can’t specify a value of [currentWhiteBalanceGains](currentwhitebalancegains.md).

<a id="return-value"></a>

## Return Value

A structure that contains device-independent values.

<a id="Discussion"></a>

## Discussion

Call this method to convert device-specific white balance RGB gain values to device-independent chromaticity (little x, little y) values.

Each change in the structure supports values between `1.0` and [maxWhiteBalanceGain](maxwhitebalancegain.md). This method throws an exception if you specify an unsupported value.

## See Also

### Performing conversions

- [temperatureAndTintValues(for:)](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureDevice.WhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureDevice.WhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

# chromaticityValuesForDeviceWhiteBalanceGains: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-specific white balance RGB gain values to device-independent chromaticity values.

## Declaration

```objectivec
- (AVCaptureWhiteBalanceChromaticityValues) chromaticityValuesForDeviceWhiteBalanceGains:(AVCaptureWhiteBalanceGains) whiteBalanceGains;
```

## Parameters

- `whiteBalanceGains`: The white balance gain values. You can’t specify a value of [AVCaptureWhiteBalanceGainsCurrent](currentwhitebalancegains.md).

<a id="return-value"></a>

## Return Value

A structure that contains device-independent values.

<a id="Discussion"></a>

## Discussion

Call this method to convert device-specific white balance RGB gain values to device-independent chromaticity (little x, little y) values.

Each change in the structure supports values between `1.0` and [maxWhiteBalanceGain](maxwhitebalancegain.md). This method throws an exception if you specify an unsupported value.

## See Also

### Performing conversions

- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForChromaticityValues:](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.
