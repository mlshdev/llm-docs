> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/temperatureandtintvalues(for:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/temperatureandtintvalues(for:))

# temperatureAndTintValues(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-specific white balance RGB gain values to device-independent temperature and tint values.

## Declaration

```swift
func temperatureAndTintValues(for whiteBalanceGains: AVCaptureDevice.WhiteBalanceGains) -> AVCaptureDevice.WhiteBalanceTemperatureAndTintValues
```

## Parameters

- `whiteBalanceGains`: The white balance gain values. You can’t specify a value of [currentWhiteBalanceGains](currentwhitebalancegains.md).

<a id="return-value"></a>

## Return Value

A structure that contains device-independent values.

<a id="Discussion"></a>

## Discussion

Each change in the structure supports values between `1.0` and [maxWhiteBalanceGain](maxwhitebalancegain.md). This method throws an exception if you specify an unsupported value.

## See Also

### Performing conversions

- [chromaticityValues(for:)](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureDevice.WhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureDevice.WhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

# temperatureAndTintValuesForDeviceWhiteBalanceGains: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Converts device-specific white balance RGB gain values to device-independent temperature and tint values.

## Declaration

```objectivec
- (AVCaptureWhiteBalanceTemperatureAndTintValues) temperatureAndTintValuesForDeviceWhiteBalanceGains:(AVCaptureWhiteBalanceGains) whiteBalanceGains;
```

## Parameters

- `whiteBalanceGains`: The white balance gain values. You can’t specify a value of [AVCaptureWhiteBalanceGainsCurrent](currentwhitebalancegains.md).

<a id="return-value"></a>

## Return Value

A structure that contains device-independent values.

<a id="Discussion"></a>

## Discussion

Each change in the structure supports values between `1.0` and [maxWhiteBalanceGain](maxwhitebalancegain.md). This method throws an exception if you specify an unsupported value.

## See Also

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [deviceWhiteBalanceGainsForChromaticityValues:](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.
