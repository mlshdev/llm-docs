> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondatasourcedescription](https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription)

# AVAudioSessionDataSourceDescription (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.

## Declaration

```swift
class AVAudioSessionDataSourceDescription
```

<a id="overview"></a>

## Overview

You obtain data source descriptions from the shared [AVAudioSession](avaudiosession.md) object or the [AVAudioSessionPortDescription](avaudiosessionportdescription.md) objects corresponding to its input and output ports. Only built-in microphone ports on certain devices support the location, orientation, and polar pattern properties. If a port doesn’t support these features, the value of its [dataSources](avaudiosessionportdescription/datasources.md) property is `nil`.

This class is especially useful for differentiating between microphone configurations on devices having more than one built-in microphone. Such devices may also support signal processing features for spatial filtering, or *beamforming*, in which the system makes the device more sensitive to audio signals from a particular direction. See `Data Source Polar Patterns` for more information.

## Topics

### Identifying a Data Source

- [dataSourceID](avaudiosessiondatasourcedescription/datasourceid.md): The system-assigned identifier for the data source.
- [dataSourceName](avaudiosessiondatasourcedescription/datasourcename.md): A human-readable name for the data source.

### Retrieving the Data Source Location

- [location](avaudiosessiondatasourcedescription/location.md): The location of the data source on the device.
- [AVAudioSession.Location](avaudiosession/location.md): Constants that describe the location of the data source on device.

### Retrieving the Data Source Orientation

- [orientation](avaudiosessiondatasourcedescription/orientation.md): The orientation of the data source relative to the device’s natural orientation.
- [AVAudioSession.Orientation](avaudiosession/orientation.md): Constants that indicate the directions in which a data source can point, relative to the device’s natural orientation.

### Configuring Microphone Directivity

- [selectedPolarPattern](avaudiosessiondatasourcedescription/selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](avaudiosessiondatasourcedescription/supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](avaudiosessiondatasourcedescription/preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern(\_:)](avaudiosessiondatasourcedescription/setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSession.PolarPattern](avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring outputs

- [outputDataSources](avaudiosession/outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](avaudiosession/outputdatasource.md): The currently selected output data source.
- [setOutputDataSource(\_:)](avaudiosession/setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [overrideOutputAudioPort(\_:)](avaudiosession/overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.

# AVAudioSessionDataSourceDescription (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.

## Declaration

```objectivec
@interface AVAudioSessionDataSourceDescription : NSObject
```

<a id="overview"></a>

## Overview

You obtain data source descriptions from the shared [AVAudioSession](avaudiosession.md) object or the [AVAudioSessionPortDescription](avaudiosessionportdescription.md) objects corresponding to its input and output ports. Only built-in microphone ports on certain devices support the location, orientation, and polar pattern properties. If a port doesn’t support these features, the value of its [dataSources](avaudiosessionportdescription/datasources.md) property is `nil`.

This class is especially useful for differentiating between microphone configurations on devices having more than one built-in microphone. Such devices may also support signal processing features for spatial filtering, or *beamforming*, in which the system makes the device more sensitive to audio signals from a particular direction. See `Data Source Polar Patterns` for more information.

## Topics

### Identifying a Data Source

- [dataSourceID](avaudiosessiondatasourcedescription/datasourceid.md): The system-assigned identifier for the data source.
- [dataSourceName](avaudiosessiondatasourcedescription/datasourcename.md): A human-readable name for the data source.

### Retrieving the Data Source Location

- [location](avaudiosessiondatasourcedescription/location.md): The location of the data source on the device.
- [AVAudioSessionLocation](avaudiosession/location.md): Constants that describe the location of the data source on device.

### Retrieving the Data Source Orientation

- [orientation](avaudiosessiondatasourcedescription/orientation.md): The orientation of the data source relative to the device’s natural orientation.
- [AVAudioSessionOrientation](avaudiosession/orientation.md): Constants that indicate the directions in which a data source can point, relative to the device’s natural orientation.

### Configuring Microphone Directivity

- [selectedPolarPattern](avaudiosessiondatasourcedescription/selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](avaudiosessiondatasourcedescription/supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](avaudiosessiondatasourcedescription/preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern:error:](avaudiosessiondatasourcedescription/setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSessionPolarPattern](avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring outputs

- [outputDataSources](avaudiosession/outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](avaudiosession/outputdatasource.md): The currently selected output data source.
- [setOutputDataSource:error:](avaudiosession/setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [overrideOutputAudioPort:error:](avaudiosession/overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.
