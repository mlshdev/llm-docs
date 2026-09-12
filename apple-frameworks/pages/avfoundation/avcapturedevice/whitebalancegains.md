> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/whitebalancegains](https://developer.apple.com/documentation/avfoundation/avcapturedevice/whitebalancegains)

# AVCaptureDevice.WhiteBalanceGains (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A structure that defines RGB white balance gain values.

## Declaration

```swift
struct WhiteBalanceGains
```

## Topics

### Creating white balance gains

- [init()](whitebalancegains/init%28%29.md): The default initializer for white balance gains.
- [init(redGain:greenGain:blueGain:)](whitebalancegains/init%28redgain_greengain_bluegain_%29.md): Initializes a white balance gain from its red, green, and blue gain components.

### Isolating gain by color channel

- [blueGain](whitebalancegains/bluegain.md): The blue gain component of the white balance value.
- [greenGain](whitebalancegains/greengain.md): The green gain component of the white balance value.
- [redGain](whitebalancegains/redgain.md): The red gain component of the white balance value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Performing conversions

- [chromaticityValues(for:)](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValues(for:)](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGains(for:)](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureDevice.WhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

# AVCaptureWhiteBalanceGains (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines RGB white balance gain values.

## Declaration

```objectivec
typedef struct { ... } AVCaptureWhiteBalanceGains;
```

## Topics

### Isolating gain by color channel

- [blueGain](whitebalancegains/bluegain.md): The blue gain component of the white balance value.
- [greenGain](whitebalancegains/greengain.md): The green gain component of the white balance value.
- [redGain](whitebalancegains/redgain.md): The red gain component of the white balance value.

## See Also

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForChromaticityValues:](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.
