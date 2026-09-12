> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/inputsource](https://developer.apple.com/documentation/avfoundation/avcapturedevice/inputsource)

# AVCaptureDevice.InputSource (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A distinct input source on a capture device.

## Declaration

```swift
class InputSource
```

<a id="overview"></a>

## Overview

A capture device may optionally present an array of input sources that represent distinct mutually exclusive inputs to the device. For example, an audio capture device might have ADAT optical and analog input sources; a video capture device might have an HDMI or component input source.

## Topics

### Accessing properties

- [inputSourceID](inputsource/inputsourceid.md): An identifier for an input source.
- [localizedName](inputsource/localizedname.md): A localized, human-readable name for the input source.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Configuring input sources

- [inputSources](inputsources.md): An array of input sources that the device supports.
- [activeInputSource](activeinputsource.md): The currently active input source of the device.

# AVCaptureDeviceInputSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A distinct input source on a capture device.

## Declaration

```objectivec
@interface AVCaptureDeviceInputSource : NSObject
```

<a id="overview"></a>

## Overview

A capture device may optionally present an array of input sources that represent distinct mutually exclusive inputs to the device. For example, an audio capture device might have ADAT optical and analog input sources; a video capture device might have an HDMI or component input source.

## Topics

### Accessing properties

- [inputSourceID](inputsource/inputsourceid.md): An identifier for an input source.
- [localizedName](inputsource/localizedname.md): A localized, human-readable name for the input source.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Configuring input sources

- [inputSources](inputsources.md): An array of input sources that the device supports.
- [activeInputSource](activeinputsource.md): The currently active input source of the device.
