> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechvolumeproperty](https://developer.apple.com/documentation/applicationservices/kspeechvolumeproperty)

# kSpeechVolumeProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech volume for a speech channel.

## Declaration

```swift
let kSpeechVolumeProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the speech channel’s speech volume.

Volumes are expressed in floating-point values ranging from 0.0 through 1.0. A value of 0.0 corresponds to silence, and a value of 1.0 corresponds to the maximum possible volume. Volume units lie on a scale that is linear with amplitude or voltage. A doubling of perceived loudness corresponds to a doubling of the volume.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) and [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) functions.

# kSpeechVolumeProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech volume for a speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechVolumeProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the speech channel’s speech volume.

Volumes are expressed in floating-point values ranging from 0.0 through 1.0. A value of 0.0 corresponds to silence, and a value of 1.0 corresponds to the maximum possible volume. Volume units lie on a scale that is linear with amplitude or voltage. A doubling of perceived loudness corresponds to a doubling of the volume.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) and [SetSpeechProperty](1459256-setspeechproperty.md) functions.
