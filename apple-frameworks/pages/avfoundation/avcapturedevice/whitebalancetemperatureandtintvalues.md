> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/whitebalancetemperatureandtintvalues](https://developer.apple.com/documentation/avfoundation/avcapturedevice/whitebalancetemperatureandtintvalues)

# AVCaptureDevice.WhiteBalanceTemperatureAndTintValues (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A structure that defines temperature and tint values correlated to a white-balance color.

## Declaration

```swift
struct WhiteBalanceTemperatureAndTintValues
```

## Topics

### Accessing standard values

- [cloudy](whitebalancetemperatureandtintvalues/cloudy.md): Temperature and tint values ideal for scenes illuminated with natural cloudy daylight.
- [daylight](whitebalancetemperatureandtintvalues/daylight.md): Temperature and tint values ideal for scenes illuminated with natural daylight.
- [fluorescent](whitebalancetemperatureandtintvalues/fluorescent.md): Temperature and tint values ideal for scenes illuminated with a fluorescent light source.
- [shadow](whitebalancetemperatureandtintvalues/shadow.md): Temperature and tint values ideal for scenes illuminated with daylight but in heavy shade.
- [tungsten](whitebalancetemperatureandtintvalues/tungsten.md): Temperature and tint values ideal for scenes illuminated with a tungsten light source.

### Creating temperature and tint values

- [init()](whitebalancetemperatureandtintvalues/init%28%29.md): Creates a default value.
- [init(temperature:tint:)](whitebalancetemperatureandtintvalues/init%28temperature_tint_%29.md): Creates a structure with a white balance temperature and tint.

### Inspecting the values

- [temperature](whitebalancetemperatureandtintvalues/temperature.md): The white balance color correlated temperature in kelvin.
- [tint](whitebalancetemperatureandtintvalues/tint.md): The white balance tint value in the range of `-150.0` through `+150.0`.

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
- [AVCaptureDevice.WhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.

# AVCaptureWhiteBalanceTemperatureAndTintValues (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines temperature and tint values correlated to a white-balance color.

## Declaration

```objectivec
typedef struct { ... } AVCaptureWhiteBalanceTemperatureAndTintValues;
```

## Topics

### Accessing standard values

- [AVCaptureWhiteBalanceTemperatureAndTintValuesCloudy](whitebalancetemperatureandtintvalues/cloudy.md): Temperature and tint values ideal for scenes illuminated with natural cloudy daylight.
- [AVCaptureWhiteBalanceTemperatureAndTintValuesDaylight](whitebalancetemperatureandtintvalues/daylight.md): Temperature and tint values ideal for scenes illuminated with natural daylight.
- [AVCaptureWhiteBalanceTemperatureAndTintValuesFluorescent](whitebalancetemperatureandtintvalues/fluorescent.md): Temperature and tint values ideal for scenes illuminated with a fluorescent light source.
- [AVCaptureWhiteBalanceTemperatureAndTintValuesShadow](whitebalancetemperatureandtintvalues/shadow.md): Temperature and tint values ideal for scenes illuminated with daylight but in heavy shade.
- [AVCaptureWhiteBalanceTemperatureAndTintValuesTungsten](whitebalancetemperatureandtintvalues/tungsten.md): Temperature and tint values ideal for scenes illuminated with a tungsten light source.

### Inspecting the values

- [temperature](whitebalancetemperatureandtintvalues/temperature.md): The white balance color correlated temperature in kelvin.
- [tint](whitebalancetemperatureandtintvalues/tint.md): The white balance tint value in the range of `-150.0` through `+150.0`.

## See Also

### Performing conversions

- [chromaticityValuesForDeviceWhiteBalanceGains:](chromaticityvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent chromaticity values.
- [temperatureAndTintValuesForDeviceWhiteBalanceGains:](temperatureandtintvalues%28for_%29.md): Converts device-specific white balance RGB gain values to device-independent temperature and tint values.
- [deviceWhiteBalanceGainsForChromaticityValues:](devicewhitebalancegains%28for_%29-9gdtw.md): Converts device-independent chromaticity values to device-specific white balance RGB gain values.
- [deviceWhiteBalanceGainsForTemperatureAndTintValues:](devicewhitebalancegains%28for_%29-3wtsa.md): Converts device-independent temperature and tint values to device-specific white balance RGB gain values.
- [AVCaptureWhiteBalanceGains](whitebalancegains.md): A structure that defines RGB white balance gain values.
- [AVCaptureWhiteBalanceChromaticityValues](whitebalancechromaticityvalues.md): A structure that defines CIE 1931 xy chromaticity values.
