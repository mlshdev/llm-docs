> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconvertersetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconvertersetproperty(_:_:_:_:))

# AudioConverterSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio converter object property.

## Declaration

```swift
func AudioConverterSetProperty(_ inAudioConverter: AudioConverterRef, _ inPropertyID: AudioConverterPropertyID, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter to set a property value on.
- `inPropertyID`: The property whose value you want to set.
- `inPropertyDataSize`: The size, in bytes, of the property value.
- `inPropertyData`: The value you want to apply to the specified property.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

You can employ the property mechanism, for example, to split a monaural input to both channels of a stereo output. You would do this as follows:

```objc
 SInt32 channelMap[2] = {0, 0}; // array size should match the number of output channels
 AudioConverterSetProperty (
    theConverter,
    kAudioConverterChannelMap,
    sizeof(channelMap),
    channelMap
);
```

## See Also

### Configuring Audio Converter Properties

- [AudioConverterGetProperty(\_:\_:\_:\_:)](audioconvertergetproperty%28________%29.md): Gets an audio converter property value.
- [AudioConverterGetPropertyInfo(\_:\_:\_:\_:)](audioconvertergetpropertyinfo%28________%29.md): Gets information about an audio converter property.

# AudioConverterSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio converter object property.

## Declaration

```objectivec
extern OSStatus AudioConverterSetProperty(AudioConverterRef inAudioConverter, AudioConverterPropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## Parameters

- `inAudioConverter`: The audio converter to set a property value on.
- `inPropertyID`: The property whose value you want to set.
- `inPropertyDataSize`: The size, in bytes, of the property value.
- `inPropertyData`: The value you want to apply to the specified property.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

You can employ the property mechanism, for example, to split a monaural input to both channels of a stereo output. You would do this as follows:

```objc
 SInt32 channelMap[2] = {0, 0}; // array size should match the number of output channels
 AudioConverterSetProperty (
    theConverter,
    kAudioConverterChannelMap,
    sizeof(channelMap),
    channelMap
);
```

## See Also

### Configuring Audio Converter Properties

- [AudioConverterGetProperty](audioconvertergetproperty%28________%29.md): Gets an audio converter property value.
- [AudioConverterGetPropertyInfo](audioconvertergetpropertyinfo%28________%29.md): Gets information about an audio converter property.
