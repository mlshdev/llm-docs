> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/whitebalancechromaticityvalues](https://developer.apple.com/documentation/avfoundation/avcapturedevice/whitebalancechromaticityvalues)

# AVCaptureDevice.WhiteBalanceChromaticityValues (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A structure that defines CIE 1931 xy chromaticity values.

## Declaration

```swift
struct WhiteBalanceChromaticityValues
```

## Topics

### Creating chromaticity values

- [init()](whitebalancechromaticityvalues/init%28%29.md): Creates a structure for white balance chromaticity values.
- [init(x:y:)](whitebalancechromaticityvalues/init%28x_y_%29.md): Creates a structure for white balance chromaticity values from its x and y coordinates.

### Inspecting the values

- [x](whitebalancechromaticityvalues/x.md): The x component of the CIE 1931 chromaticity value.
- [y](whitebalancechromaticityvalues/y.md): The y component of the CIE 1931 chromaticity value.

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
- [AVCaptureDevice.WhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureDevice.WhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.

# AVCaptureWhiteBalanceChromaticityValues (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines CIE 1931 xy chromaticity values.

## Declaration

```objectivec
typedef struct { ... } AVCaptureWhiteBalanceChromaticityValues;
```

## Topics

### Inspecting the values

- [x](whitebalancechromaticityvalues/x.md): The x component of the CIE 1931 chromaticity value.
- [y](whitebalancechromaticityvalues/y.md): The y component of the CIE 1931 chromaticity value.

## See Also

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForChromaticityValues:](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceTemperatureAndTintValues](whitebalancetemperatureandtintvalues.md): A structure that defines temperature and tint values correlated to a white-balance color.
