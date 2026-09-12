> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioformatproperty_hardwarecodeccapabilities](https://developer.apple.com/documentation/audiotoolbox/kaudioformatproperty_hardwarecodeccapabilities)

# kAudioFormatProperty_HardwareCodecCapabilities (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A `UInt32` value indicating the number of codecs from the specified list that can be used, if the application were to begin using them in the specified order. Set the `inSpecifier` parameter to an array of `AudioClassDescription` structures that describes a set of one or more audio codecs. If the property value is the same as the size of the array in the `inSpecifier` parameter, all of the specified codecs can be used.

## Declaration

```swift
var kAudioFormatProperty_HardwareCodecCapabilities: AudioFormatPropertyID { get }
```

# kAudioFormatProperty_HardwareCodecCapabilities (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A `UInt32` value indicating the number of codecs from the specified list that can be used, if the application were to begin using them in the specified order. Set the `inSpecifier` parameter to an array of `AudioClassDescription` structures that describes a set of one or more audio codecs. If the property value is the same as the size of the array in the `inSpecifier` parameter, all of the specified codecs can be used.

## Declaration

```objectivec
kAudioFormatProperty_HardwareCodecCapabilities
```
